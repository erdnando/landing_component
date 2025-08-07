# 🚀 Landing Component Microfrontend
## React + TypeScript Web Component for Flow Designer

---

**📋 Información del Proyecto**
- **Versión**: 1.0.0 
- **Tecnologías**: React 18, TypeScript, Webpack 5, Shadow DOM
- **Arquitectura**: Microfrontend Web Component
- **Integración**: Vue.js, Angular, vanilla HTML

---

## 🎯 Descripción

Componente microfrontend construido como **Web Component** que implementa una página de aterrizaje para captura de datos básicos. Diseñado específicamente para **Flow Designer** con integración completa en aplicaciones Vue.js y otros frameworks.

### 🏆 Características Principales

- ✅ **Microfrontend Web Component** con Shadow DOM encapsulado
- ✅ **Arquitectura consolidada** con punto único de verdad para estilos
- ✅ **React 18** + **TypeScript** + **Webpack 5**
- ✅ **Time tracking** y métricas de usuario integradas
- ✅ **Vue.js integration** con wrapper completo
- ✅ **Hot reload** para desarrollo
- ✅ **Bundle optimizado** (147 KB) para producción

---

## 🚀 Inicio Rápido

### 📦 Instalación

```bash
# Clonar repositorio
git clone <repository-url>
cd landing1.0.0

# Instalar dependencias
npm install
```

### 🛠️ Desarrollo

```bash
# Servidor de desarrollo (Puerto 3001)
npm run dev
```

**URL de desarrollo:** http://localhost:3001

### 🏭 Producción

```bash
# Build optimizado
npm run build

# Output: dist/landing-v1.0.0.js
```

---

## 🔧 Integración

### 🌐 Como Web Component (Universal)

```html
<!-- Cargar el bundle -->
<script src="./dist/landing-v1.0.0.js"></script>

<!-- Usar el componente -->
<landing-web-component 
  session-id="abc123"
  user-id="user456"
  config='{"title": "Mi Landing", "primaryColor": "#e91e63"}'>
</landing-web-component>

<!-- Escuchar eventos -->
<script>
document.querySelector('landing-web-component')
  .addEventListener('output-data', (event) => {
    console.log('Datos capturados:', event.detail);
  });
</script>
```

### 🎨 Integración Vue.js

```vue
<template>
  <LandingWrapper
    :session-id="sessionId"
    :user-id="userId"
    @form-completed="handleCompleted"
  />
</template>

<script>
import LandingWrapper from '@/components/LandingWrapper.vue';

export default {
  components: { LandingWrapper },
  methods: {
    handleCompleted(data) {
      console.log('Landing completado:', data);
      // Navegar al siguiente paso
    }
  }
};
</script>
```

---

## 📋 API del Componente

### 🔌 Props/Atributos

| Prop | Tipo | Descripción |
|------|------|-------------|
| `session-id` | string | ID único de sesión |
| `user-id` | string | ID del usuario |
| `config` | JSON | Configuración del componente |
| `flow-context` | JSON | Contexto del flujo |

### 📤 Eventos

| Evento | Descripción | Payload |
|--------|-------------|---------|
| `component-ready` | Componente inicializado | `{componentId, version, ready}` |
| `output-data` | Datos del formulario | `{data, horaInicio, horaFin, tiempoTotal}` |
| `request-navigation` | Navegación solicitada | `{direction}` |
| `data-changed` | Cambio en datos | `{...formData}` |
| `node-error` | Error en componente | `{error, code, recoverable}` |

### ⚙️ Configuración

```typescript
interface Config {
  title?: string;          // Título principal
  subtitle?: string;       // Subtítulo  
  logo?: string;          // URL del logo
  primaryColor?: string;  // Color primario (#hex)
}
```

---

## 🏗️ Arquitectura

### 📁 Estructura del Proyecto

```
src/
├── styles/
│   └── microfrontend-styles.ts     ⭐ PUNTO ÚNICO DE VERDAD
├── components/
│   ├── presentation/               # Vista principal
│   └── requirements/               # Vista de requisitos  
├── core/
│   ├── context/                    # React Context
│   └── types/                      # TypeScript types
├── LandingWebComponent.ts          ⭐ WEB COMPONENT
├── App.tsx                         # React App principal
└── index.ts                        # Entry point
```

### 🎨 Estilos Consolidados

El proyecto utiliza un **patrón de arquitectura consolidada** con:

- **Punto único de verdad**: `microfrontend-styles.ts`
- **Shadow DOM**: Encapsulación completa de estilos
- **CSS Variables**: Personalización externa
- **Webpack integration**: Estilos embebidos automáticamente

### 📊 Métricas y Analytics

El componente incluye **time tracking automático**:

```typescript
// Métricas incluidas en eventos
{
  horaInicio: "07/08/2025 14:30:15.123",
  horaFin: "07/08/2025 14:32:45.789", 
  ultimaInteraccion: "07/08/2025 14:32:40.567",
  tiempoTotal: 150666, // milisegundos
  tiempoTotalFormateado: "00:02:30.666"
}
```

---

## 📚 Documentación Completa

El proyecto incluye **documentación exhaustiva** para desarrollo de múltiples microfrontends:

### 📖 Guías Principales

- **`docs/00_INDEX.md`** - Índice con rutas de aprendizaje
- **`docs/02_MICROFRONTEND_ARCHITECTURE_REFERENCE.md`** - Arquitectura técnica (772 líneas)
- **`docs/03_MICROFRONTEND_TEMPLATES_GUIDE.md`** - Plantillas prácticas (1000+ líneas)
- **`docs/04_MICROFRONTEND_QUICK_REFERENCE.md`** - Referencia rápida
- **`docs/08_VUE_INTEGRATION_EXAMPLE.md`** - Integración Vue.js completa

### 🎯 Rutas de Aprendizaje

```bash
# Para desarrolladores nuevos
docs/01_README.md → docs/02_ARCHITECTURE.md → docs/04_QUICK_REF.md

# Para implementar nuevos componentes  
docs/02_ARCHITECTURE.md → docs/03_TEMPLATES.md → docs/04_QUICK_REF.md

# Para integración en aplicaciones
docs/01_README.md → docs/07_INPUT_OUTPUT.md → docs/08_VUE_EXAMPLE.md
```

---

## 🚀 Scripts NPM

```bash
npm run dev           # Servidor desarrollo (puerto 3001)
npm run build         # Build producción  
npm run build:clean   # Limpiar + build
npm run lint          # Linting TypeScript
npm run type-check    # Verificación de tipos
```

---

## 🔧 Configuración Técnica

### 🌐 Servidor de Desarrollo

- **Puerto**: 3001
- **CORS**: Habilitado para integración cross-origin
- **Hot Reload**: Automático
- **Source Maps**: Habilitados en desarrollo

### 📦 Build de Producción

- **Output**: `dist/landing-v1.0.0.js` (147 KB)
- **Formato**: UMD (Universal Module Definition)
- **React**: Incluido en el bundle
- **TypeScript**: Compilado con definiciones de tipos

### 🎯 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Frameworks**: Vue.js, Angular, React, vanilla JS
- **Shadow DOM**: Soporte completo
- **ES Modules**: Compatible

---

## 🤝 Contribución

Este proyecto sirve como **acervo informático** y base técnica para el desarrollo de **10+ componentes microfrontend** futuros. 

### 📋 Desarrollo de Nuevos Componentes

1. Consultar `docs/03_MICROFRONTEND_TEMPLATES_GUIDE.md`
2. Usar plantillas pre-configuradas
3. Seguir arquitectura consolidada establecida
4. Implementar time tracking y métricas
5. Crear wrapper Vue.js según ejemplos

---

## 📄 Licencia

Desarrollado para Flow Designer - Componentes Microfrontend

**Objetivo**: Base técnica escalable para múltiples componentes con arquitectura consolidada, integración Vue.js y documentación exhaustiva.

---

**🎯 Total Documentación**: 4,700+ líneas | **📦 Bundle Size**: 147 KB | **🚀 Arquitectura**: Microfrontend consolidada