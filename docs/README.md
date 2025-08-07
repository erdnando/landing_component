# Landing Component v1.0.0

Componente React externo para Flow Designer que implementa una página de aterrizaje para la captura de datos básicos.

## 🎯 Descripción

Este componente permite capturar información básica del usuario (email, teléfono) y su aceptación de términos y condiciones, actuando como punto de entrada en el flujo del Flow Designer.

## 🚀 Características

- ✅ Formulario de captura de datos con validación
- ✅ Integración completa con Flow Designer
- ✅ Web Component estándar
- ✅ Responsive design
- ✅ Configuración dinámica
- ✅ Eventos de comunicación estándar
- ✅ Debug mode para desarrollo

## 📦 Instalación y Desarrollo

### Prerequisitos
- Node.js 16+
- npm o yarn

### Setup del proyecto
```bash
# Instalar dependencias
npm install

# Desarrollo con hot reload
npm run dev

# Abrir demo en navegador
# http://localhost:3001/demo.html

# Build para producción
npm run build

# Testing
npm test

# Linting
npm run lint
```

## 🔧 Configuración

### Props del Componente

| Prop | Tipo | Descripción |
|------|------|-------------|
| `sessionId` | string | ID de sesión del flujo |
| `userId` | string | ID del usuario |
| `flowContext` | object | Contexto del flujo |
| `config` | object | Configuración del componente |
| `inputData` | any | Datos de entrada del paso anterior |

### Configuración disponible

```typescript
interface Config {
  title?: string;          // Título principal
  subtitle?: string;       // Subtítulo
  logo?: string;          // URL del logo
  primaryColor?: string;  // Color primario (#hex)
}
```

### Ejemplo de configuración

```json
{
  "title": "Bienvenido a Nuestro Servicio",
  "subtitle": "Complete sus datos para comenzar",
  "logo": "https://ejemplo.com/logo.png",
  "primaryColor": "#1890ff"
}
```

## 📡 Eventos

### Eventos emitidos

| Evento | Descripción | Payload |
|--------|-------------|---------|
| `component-ready` | Componente listo | `{ componentId, version }` |
| `output-data` | Datos para siguiente paso | `{ landing_data, completed_at, ... }` |
| `request-navigation` | Solicitar navegación | `{ direction, data }` |
| `data-changed` | Datos del formulario cambiaron | `{ email, telefono, acepta_terminos }` |
| `node-error` | Error en el componente | `{ error }` |

### Datos de salida

```typescript
interface OutputData {
  landing_data: {
    email: string;
    telefono: string;
    acepta_terminos: boolean;
  };
  completed_at: string;
  session_id: string;
  user_id: string;
  component: 'landing';
  version: '1.0.0';
}
```

## 🌐 Uso como Web Component

```html
<!-- Cargar React -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Cargar componente -->
<script src="./dist/landing-v1.0.0.js"></script>

<!-- Usar componente -->
<landing-web-component 
  session-id="abc123"
  user-id="user456"
  config='{"title": "Mi Título"}'>
</landing-web-component>

<script>
// Escuchar eventos
document.querySelector('landing-web-component')
  .addEventListener('output-data', (event) => {
    console.log('Datos del usuario:', event.detail);
  });
</script>
```

## 🔗 Integración con Flow Designer

```typescript
// Configuración para Flow Designer
const landingConfig: ComponentConfig = {
  id: 'landing',
  name: 'Landing Page',
  version: '1.0.0',
  cdnUrl: 'http://localhost:3001/dist/landing-v1.0.0.js',
  type: 'web-component',
  contract: {
    inputs: ['sessionId', 'userId', 'flowContext', 'config'],
    outputs: ['landing_data', 'completed_at'],
    events: ['component-ready', 'output-data', 'node-error']
  },
  metadata: {
    description: 'Componente de landing page',
    category: 'Proceso',
    tagName: 'landing-web-component'
  }
};
```

## 🎨 Personalización

### CSS Variables disponibles

```css
.landing-component {
  --primary-color: #1890ff;
  --success-color: #52c41a;
  --error-color: #ff4d4f;
  --text-color: #333;
  --border-color: #d9d9d9;
  --background-color: #fff;
  --border-radius: 6px;
}
```

### Responsive

El componente es completamente responsive y se adapta a diferentes tamaños de pantalla:

- **Desktop**: Layout de dos columnas para botones
- **Mobile**: Layout vertical, botones apilados
- **Tablet**: Adaptación intermedia

## 🧪 Testing

### Demo incluido

El proyecto incluye una página de demo completa:

```bash
npm run dev
# Abrir http://localhost:3001/demo.html
```

### Features del demo:
- Configuración dinámica en tiempo real
- Log de eventos en tiempo real
- Simulación de diferentes escenarios
- Testing de validaciones

## 📋 Validaciones

### Email
- ✅ Campo requerido
- ✅ Formato de email válido

### Teléfono
- ✅ Campo requerido  
- ✅ 10 dígitos numéricos

### Términos y condiciones
- ✅ Aceptación requerida

## 🔍 Debug Mode

En modo desarrollo, el componente muestra información de debug:

```json
{
  "sessionId": "abc123",
  "userId": "user456", 
  "flowContext": {...},
  "formData": {
    "email": "user@example.com",
    "telefono": "5512345678",
    "acepta_terminos": true
  }
}
```

## 📄 Licencia

Desarrollado para Flow Designer - Fábrica de Componentes Demo v1.0.0

## 📞 Soporte

Para soporte técnico o preguntas sobre integración:
- Email: dev@fabrica-demo.com
- Documentación: Ver especificación técnica completa
