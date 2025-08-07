# Correcciones para la Integración del Componente Web

Este documento contiene los cambios específicos que se han aplicado al código del componente web para resolver los problemas de integración identificados, especialmente aquellos relacionados con la pérdida de estilos y el registro del componente. Estas modificaciones están basadas en la revisión del código y la Guía de Integración de Componentes Web Externos.

> ✅ **ACTUALIZACIÓN**: Los cambios descritos en este documento ya han sido aplicados en la versión actual (v1.0.0).

## Cambios en `src/LandingWebComponent.ts`

### 1. Actualizar `observedAttributes`

```typescript
// ANTES
static get observedAttributes() {
  return ['session-id', 'user-id', 'config'];
}

// DESPUÉS
static get observedAttributes() {
  return ['session-id', 'user-id', 'config', 'flow-context'];
}
```

### 2. Actualizar propiedades de clase

```typescript
// ANTES
private sessionId: string | null = null;
private userId: string | null = null;
private flowContext: any = null;
private config: any = {};
private inputData: any = null;

// DESPUÉS
private sessionId: string | null = null;
private userId: string | null = null;
private flowContext: any = null;
private config: any = {};
private inputData: any = null;

// Agregar versión para incluir en el evento component-ready
private readonly version: string = '1.0.0';
private readonly componentId: string = 'landing';
```

### 3. Actualizar `attributeChangedCallback`

```typescript
// ANTES
attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  if (oldValue === newValue) return;
  
  switch (name) {
    case 'session-id':
      this.sessionId = newValue;
      break;
    case 'user-id':
      this.userId = newValue;
      break;
    case 'config':
      try {
        this.config = JSON.parse(newValue);
      } catch (e) {
        console.error('Error parsing config:', e);
      }
      break;
  }
  
  this.render();
}

// DESPUÉS
attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  if (oldValue === newValue) return;
  
  switch (name) {
    case 'session-id':
      this.sessionId = newValue;
      break;
    case 'user-id':
      this.userId = newValue;
      break;
    case 'config':
      try {
        this.config = JSON.parse(newValue);
      } catch (e) {
        console.error('Error parsing config:', e);
      }
      break;
    case 'flow-context':
      try {
        this.flowContext = JSON.parse(newValue);
      } catch (e) {
        console.warn('Invalid flow-context JSON:', newValue);
      }
      break;
  }
  
  this.render();
}
```

### 4. Actualizar `connectedCallback`

```typescript
// ANTES
connectedCallback() {
  this.render();
  // Notificar que el componente está listo
  this.dispatchEvent(new CustomEvent('component-ready', {
    bubbles: true,
    composed: true
  }));
}

// DESPUÉS
connectedCallback() {
  this.render();
  
  // Notificar que el componente está listo después de asegurar que el DOM está renderizado
  setTimeout(() => {
    this.dispatchEvent(new CustomEvent('component-ready', {
      detail: {
        componentId: this.componentId,
        version: this.version,
        ready: true
      },
      bubbles: true,
      composed: true
    }));
  }, 100);
}
```

### 5. Actualizar las callbacks para los eventos

```typescript
// ANTES
// Callbacks para eventos
onNext: (data: any) => {
  this.dispatchEvent(new CustomEvent('output-data', {
    detail: data,
    bubbles: true,
    composed: true
  }));
},
onPrevious: (data: any) => {
  this.dispatchEvent(new CustomEvent('request-navigation', {
    detail: { direction: 'previous', data },
    bubbles: true,
    composed: true
  }));
},
onDataChange: (data: any) => {
  this.dispatchEvent(new CustomEvent('data-changed', {
    detail: data,
    bubbles: true,
    composed: true
  }));
},
onError: (error: string) => {
  this.dispatchEvent(new CustomEvent('node-error', {
    detail: { message: error },
    bubbles: true,
    composed: true
  }));
},
onReady: () => {
  this.dispatchEvent(new CustomEvent('component-ready', {
    bubbles: true,
    composed: true
  }));
}

// DESPUÉS
// Callbacks para eventos
onNext: (data: any) => {
  this.dispatchEvent(new CustomEvent('output-data', {
    detail: {
      stepCompleted: true,
      data: data,
      nextAction: 'continue'
    },
    bubbles: true,
    composed: true
  }));
},
onPrevious: (data: any) => {
  this.dispatchEvent(new CustomEvent('request-navigation', {
    detail: { 
      direction: 'previous'
    },
    bubbles: true,
    composed: true
  }));
},
onDataChange: (data: any) => {
  this.dispatchEvent(new CustomEvent('data-changed', {
    detail: data,
    bubbles: true,
    composed: true
  }));
},
onError: (error: string, code: string = 'ERROR', recoverable: boolean = true) => {
  this.dispatchEvent(new CustomEvent('node-error', {
    detail: { 
      error: error,
      code: code,
      recoverable: recoverable
    },
    bubbles: true,
    composed: true
  }));
},
// Eliminar onReady ya que ahora manejamos component-ready en connectedCallback
```

## Cambios en `webpack.config.js`

Si estás teniendo problemas con las dependencias externas, considera una de estas opciones:

### Opción 1: Incluir React en el bundle (si el entorno no tiene React)

```javascript
// ANTES
externals: isDevelopment ? {} : {
  react: 'React',
  'react-dom': 'ReactDOM'
},

// DESPUÉS - Incluir React en el bundle
externals: {},
```

### Opción 2: Verificación de dependencias

Añadir este código en `src/index.ts`:

```typescript
// Verificar dependencias
const verifyDependencies = () => {
  if (typeof window !== 'undefined') {
    if (!window.React) {
      console.warn('React no está disponible en el entorno global. El componente puede fallar.');
    }
    if (!window.ReactDOM) {
      console.warn('ReactDOM no está disponible en el entorno global. El componente puede fallar.');
    }
  }
};

// Ejecutar verificación
verifyDependencies();
```

## Cambios en `src/App.tsx`

Modificar los handlers para que emitan los eventos con el formato correcto:

```typescript
// ANTES
const handleContinue = () => {
  alert('¡Proceso completado! Aquí continuaría el flujo...');
};

// DESPUÉS - Asumiendo que App recibe props con callbacks
const handleContinue = () => {
  if (props.onNext) {
    props.onNext({
      landing_data: {
        accepted: true,
        timestamp: new Date().toISOString()
      }
    });
  }
};
```

## Prueba de Integración

Después de aplicar estos cambios, realiza las siguientes pruebas:

1. Compilar el componente:
```bash
npm run build
```

2. Verificar que el archivo `landing-v1.0.0.js` se genera correctamente.

3. Probar el componente de forma aislada:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Test Component</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="./dist/landing-v1.0.0.js"></script>
</head>
<body>
  <landing-web-component id="myComponent"></landing-web-component>
  <script>
    const component = document.getElementById('myComponent');
    component.setAttribute('session-id', 'test-123');
    component.setAttribute('flow-context', JSON.stringify({
      test: true,
      currentStep: 'landing'
    }));
    
    component.addEventListener('component-ready', (event) => {
      console.log('Componente listo:', event.detail);
    });
    
    component.addEventListener('output-data', (event) => {
      console.log('Datos de salida:', event.detail);
    });
  </script>
</body>
</html>
```

4. Si es posible, realizar pruebas de integración con el Flow Designer.

---

Recuerda validar cada cambio y asegurarte de que cumple con los requisitos especificados en la Guía de Integración de Componentes Web Externos.
