# Landing Component v1.0.0

🚀 **React + TypeScript Landing Page Component**

Componente React reutilizable para landing pages de productos Bradescard/Promoda, construido con TypeScript y webpack.

## 🚀 Inicio rápido

### Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en: http://localhost:3001

### Construcción para producción

```bash
# Construir componente web
npm run build

# Construir y limpiar
npm run build:clean
```

## �️ Tecnologías

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Webpack 5** - Bundling y dev server
- **CSS Modules** - Estilos con scope

## � Estructura del proyecto

```
src/
├── components/          # Componentes React
│   ├── presentation/    # Vista de presentación
│   └── requirements/    # Vista de requerimientos
├── core/               # Lógica central
│   ├── context/        # Context de React
│   └── types/          # Definiciones TypeScript
├── styles/             # Archivos CSS
└── utils/              # Utilidades

public/
└── index.html          # Template HTML

docs/                   # Documentación de desarrollo
```

## 📝 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run lint` - Linter ESLint
- `npm run clean` - Limpiar directorio dist

## � Componentes

### PresentationView
Vista inicial que muestra los beneficios del producto con diseño responsivo.

### RequirementsView  
Formulario para captura de datos del usuario.

## 🔧 Configuración

El proyecto está configurado para funcionar en dos modos:

- **Desarrollo**: React app estándar
- **Producción**: Web component exportable

## 📄 Licencia

ISC
- ✅ **Herramientas de diagnóstico**: Se incluyen utilidades para validar la integración
- ✅ **Documentación ampliada**: Guía completa para resolver problemas de integración

### 📑 Documentos importantes
- [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md) - Guía detallada de integración con soluciones a problemas
- [CHANGELOG.md](./CHANGELOG.md) - Historial de cambios y mejoras
- [INTEGRATION_FIXES.md](./INTEGRATION_FIXES.md) - Soluciones específicas para errores comunes

## 🎯 Funcionalidad

El componente proporciona **dos vistas principales**:

### 📱 **Vista 1: Presentación de Tarjeta** 
✅ **Presentación atractiva** de la tarjeta Bradescard/Promoda:
- Header con logos de las marcas
- Título y descripción de la tarjeta
- Beneficios destacados (5% descuento, 4 meses sin intereses, 20% Starbucks)
- Información de mensualidad ($61 + IVA)
- Visualización de tarjeta 3D
- Botón "Iniciar" para continuar

### 📋 **Vista 2: Verificación de Requisitos**
✅ **Checklist de requisitos** antes de comenzar:
- Header con logos y mini tarjeta
- Lista visual de requisitos:
  - INE vigente (con icono)
  - Teléfono celular (con icono)  
  - Buena conexión a internet (con icono)
- Botón "¡Todo Listo!" para proceder
- Botón "Volver" para regresar a la primera vista

### 🔄 **Navegación**
✅ **Flujo de navegación intuitivo**:
- Click en "Iniciar" → Lleva a vista de requisitos
- Click en "Volver" → Regresa a vista de presentación
- Click en "¡Todo Listo!" → Completa el proceso y envía datos al Flow Designer

## 🏗️ Estructura del Proyecto

```
landing1.0.0/
├── src/
│   ├── LandingComponent.tsx     # Componente React principal
│   ├── LandingComponent.css     # Estilos del componente
│   ├── LandingWebComponent.ts   # Web Component wrapper
│   ├── index.ts                 # Entry point
│   ├── setupTests.ts           # Configuración de testing
│   └── __tests__/
│       └── index.test.ts       # Tests básicos
├── public/
│   └── demo.html               # Demo interactivo
├── docs/
│   └── README.md               # Documentación detallada
├── dist/
│   └── landing-v1.0.0.js       # Bundle compilado
├── package.json
├── webpack.config.js
├── tsconfig.json
├── jest.config.js
├── .eslintrc.js
└── .gitignore
```

## ⚡ Inicio Rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 3. Abrir demo en navegador
```
http://localhost:3001/demo.html
```

### 4. Compilar para producción
```bash
npm run build
```

## 🧪 Testing y Calidad

### Ejecutar tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Cobertura de tests
- ✅ Información del componente
- ✅ Contrato de inputs/outputs
- ✅ Eventos estándar

## 🌐 Demo Incluido

El proyecto incluye una página de demo completa que permite:

- **Configuración en tiempo real** del componente
- **Testing de todos los eventos** emitidos
- **Simulación de diferentes escenarios** de uso
- **Log de eventos** para debugging
- **Prueba de validaciones** del formulario

## 📡 Eventos del Componente

| Evento | Descripción | Cuándo se dispara |
|--------|-------------|------------------|
| `component-ready` | Componente listo para uso | Al inicializar |
| `data-changed` | Cambios en la navegación | Al cambiar de vista |
| `output-data` | Datos finales del proceso | Al completar requisitos |
| `request-navigation` | Solicitud de navegación | Al usar botón "Volver" |
| `node-error` | Errores del componente | En caso de errores |

## 🔧 Configuración Disponible

```json
{
  "title": "Tarjeta de crédito Promoda bradescard",
  "subtitle": "¡Solicítala hoy y te llega sin costo hasta donde estés!",
  "primaryColor": "#E91E63"
}
```

**Colores por defecto**:
- Primario: Rosa Bradescard (`#E91E63`)
- Texto claro: Blanco para contraste
- Texto oscuro: Gris para segunda vista

## 📦 Datos de Salida

```json
{
  "landing_data": {
    "completed_views": ["presentation", "requirements"],
    "user_confirmed_requirements": true,
    "process_started_at": "2025-08-05T10:00:00.000Z"
  },
  "completed_at": "2025-08-05T10:01:30.000Z",
  "session_id": "session-id",
  "user_id": "user-id",
  "component": "landing",
  "version": "1.0.0"
}
```

## 🎨 Personalización

- **CSS Variables** para personalización de colores
- **Responsive design** automático
- **Dark/Light mode** compatible
- **Temas personalizables** mediante configuración

## 🔗 Integración con Flow Designer

```typescript
const componentConfig = {
  id: 'landing',
  version: '1.0.0',
  cdnUrl: 'http://localhost:3001/dist/landing-v1.0.0.js',
  tagName: 'landing-web-component'
};
```

## 📋 Checklist de Desarrollo Completado

- [x] ✅ Configuración del proyecto con TypeScript + React
- [x] ✅ Webpack configurado con externals para React
- [x] ✅ Componente React con props estándar implementado
- [x] ✅ Web Component wrapper funcional
- [x] ✅ Eventos estándar de comunicación implementados
- [x] ✅ Estilos encapsulados y responsive
- [x] ✅ Validación completa de formularios
- [x] ✅ Demo HTML completamente funcional
- [x] ✅ Event logging implementado
- [x] ✅ Testing básico configurado
- [x] ✅ Linting configurado
- [x] ✅ Build optimizado para producción
- [x] ✅ Servidor de desarrollo con CORS configurado
- [x] ✅ Documentación completa

## 🚀 Próximos Pasos

1. **Deploy del CDN**: Subir el bundle a un CDN para producción
2. **Integración**: Conectar con Flow Designer en entorno real
3. **Testing E2E**: Pruebas completas de integración
4. **Optimización**: Mejoras de performance si es necesario

## 📞 Soporte

- **Especificación técnica**: Ver `EXTERNAL-REACT-COMPONENT-SPEC.md`
- **Documentación detallada**: Ver `docs/README.md`
- **Demo en vivo**: http://localhost:3001/demo.html

---

**Desarrollado siguiendo la especificación técnica para componentes externos del Flow Designer.**

*Versión 1.0.0 - Agosto 2025*
