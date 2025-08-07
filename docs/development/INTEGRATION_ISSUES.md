# Problemas de Integración del Componente Web

Este documento identifica los problemas encontrados al intentar integrar el componente web a través del archivo `landing-v1.0.0.js` y propone soluciones.

## Problemas Identificados

### 1. Inconsistencias con la Guía de Integración

| Problema | Descripción | Archivo | Solución |
|----------|-------------|---------|----------|
| **Atributos observados** | La guía especifica `session-id` y `flow-context`, pero el componente implementa `session-id`, `user-id` y `config` | `LandingWebComponent.ts` | Actualizar `observedAttributes` para incluir `flow-context` |
| **Manejo de atributos** | No existe manejo para el atributo `flow-context` en `attributeChangedCallback` | `LandingWebComponent.ts` | Agregar manejo de `flow-context` en el switch case |
| **Estructura de eventos** | El formato de los eventos emitidos no coincide con lo especificado en la guía | `LandingWebComponent.ts` | Actualizar el formato de eventos para seguir el estándar |

### 2. Problemas de Encapsulación y Shadow DOM

| Problema | Descripción | Archivo | Solución |
|----------|-------------|---------|----------|
| **Eventos en Shadow DOM** | Los eventos necesitan `composed: true` para atravesar el Shadow DOM | `LandingWebComponent.ts` | Todos los eventos incluyen `composed: true`, esto es correcto |
| **Estilos en Shadow DOM** | Estilos limitados en el componente | `LandingWebComponent.ts` | Considerar ampliar los estilos base del Shadow DOM |

### 3. Problemas con Externals y Dependencias

| Problema | Descripción | Archivo | Solución |
|----------|-------------|---------|----------|
| **React como external** | En producción, React y ReactDOM se tratan como externos | `webpack.config.js` | Asegurarse de que React y ReactDOM estén disponibles en el entorno host |
| **Posibles conflictos de versiones** | Si el host tiene diferentes versiones de React | N/A | Considerar usar un enfoque de federación de módulos para compartir dependencias |

### 4. Problemas en el Ciclo de Vida

| Problema | Descripción | Archivo | Solución |
|----------|-------------|---------|----------|
| **Evento component-ready** | Se emite inmediatamente en `connectedCallback` | `LandingWebComponent.ts` | Considerar usar un timeout para asegurar que el componente esté realmente renderizado |
| **Duplicación de eventos** | El evento `component-ready` se emite tanto en `connectedCallback` como a través del callback `onReady` | `LandingWebComponent.ts` | Eliminar la duplicación para evitar confusiones |

### 5. Problemas de Comunicación de Datos

| Problema | Descripción | Archivo | Solución |
|----------|-------------|---------|----------|
| **Estructura del evento output-data** | No coincide exactamente con lo especificado en la guía | `LandingWebComponent.ts` | Ajustar la estructura para incluir `stepCompleted`, `data` y `nextAction` |
| **Manejo de errores** | El evento `node-error` usa `message` en lugar de `error`, `code` y `recoverable` | `LandingWebComponent.ts` | Actualizar la estructura del evento de error |

## Soluciones Propuestas

### 1. Actualizar el método `static get observedAttributes()`

```typescript
static get observedAttributes() {
  return ['session-id', 'user-id', 'config', 'flow-context'];
}
```

### 2. Actualizar `attributeChangedCallback` para manejar `flow-context`

```typescript
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
        console.error('Error parsing flow-context:', e);
      }
      break;
  }
  
  this.render();
}
```

### 3. Actualizar la estructura de eventos para cumplir con la guía

```typescript
// Para el evento output-data
this.dispatchEvent(new CustomEvent('output-data', {
  detail: {
    stepCompleted: true,
    data: data,
    nextAction: 'continue' // o 'back' o 'finish'
  },
  bubbles: true,
  composed: true
}));

// Para el evento node-error
this.dispatchEvent(new CustomEvent('node-error', {
  detail: {
    error: error,
    code: 'ERROR_CODE',
    recoverable: true
  },
  bubbles: true,
  composed: true
}));
```

### 4. Asegurar la carga de React en entornos externos

Considerar una de estas opciones:

1. **Incluir React en el bundle** (solución más simple pero aumenta el tamaño):
```javascript
// webpack.config.js
externals: {} // No tratar React como external
```

2. **Verificar la existencia de React** (para entornos mixtos):
```typescript
// index.ts
if (!window.React || !window.ReactDOM) {
  console.error('Este componente requiere React y ReactDOM en el entorno global');
}
```

3. **Proporcionar un script loader** para cargar React si es necesario:
```typescript
// utils/scriptLoader.ts
export function loadScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    document.head.appendChild(script);
  });
}

// Uso:
if (!window.React) {
  await loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
}
```

## Plan de Acción

1. Implementar las soluciones propuestas en los archivos correspondientes
2. Revisar la lista de verificación de la guía de integración para asegurar el cumplimiento
3. Probar el componente tanto de forma aislada como integrado en el Flow Designer
4. Actualizar la documentación para reflejar los cambios realizados

---

Esta revisión fue generada el 6 de agosto de 2025 basada en el análisis del código actual y la Guía de Integración de Componentes Web Externos.
