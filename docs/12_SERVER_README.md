# 🖥️ Servidor de Desarrollo - Landing Component
## Configuración y Despliegue del Microfrontend

---

**📋 Información del Documento**
- **Versión**: 1.0.0
- **Fecha**: 7 de Agosto, 2025
- **Componente**: Landing Component Microfrontend
- **Puerto**: 3001
- **Tecnología**: Webpack Dev Server

---

## 🎯 Resumen del Servidor

El servidor de desarrollo está configurado con **Webpack Dev Server** en el puerto **3001**, diseñado específicamente para servir componentes microfrontend con soporte completo para hot reload, CORS y desarrollo en tiempo real.

### 🏆 Características Principales
- ✅ **Hot Reload** automático para desarrollo
- ✅ **CORS habilitado** para integración cross-origin
- ✅ **Dual Mode**: Desarrollo React + Producción Web Component
- ✅ **Puerto fijo 3001** para consistencia
- ✅ **Estilos preservados** en Shadow DOM

---

## 🚀 Comandos del Servidor

### 📦 Comandos NPM Disponibles

```bash
# Servidor de desarrollo (Puerto 3001)
npm run dev                    # Inicia servidor + abre navegador
                              # URL: http://localhost:3001

# Build para producción
npm run build                 # Genera bundle optimizado
npm run build:clean          # Limpia + build

# Utilidades
npm run clean                # Limpia directorio dist/
npm run lint                 # Validación ESLint
```

### 🔧 Comando Directo Webpack

```bash
# Servidor directo (sin abrir navegador)
npx webpack serve --mode development

# Con configuración personalizada
npx webpack serve --mode development --port 3001 --open
```

---

## ⚙️ Configuración del Servidor

### 🌐 Webpack Dev Server Settings

```javascript
devServer: {
  static: {
    directory: path.join(__dirname, 'public'),    // Sirve archivos estáticos
  },
  port: 3001,                                    // Puerto fijo
  hot: true,                                     // Hot reload
  headers: {                                     // CORS habilitado
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
}
```

### 🎨 Configuración de Estilos

#### Modo Desarrollo
```javascript
// style-loader config para desarrollo React
injectType: 'styleTag',
attributes: { id: 'dev-landing-styles' }
```

#### Modo Producción
```javascript
// style-loader config para producción Web Component
injectType: 'singletonStyleTag',
attributes: { 
  id: 'landing-component-styles',
  'data-webpack': 'true',
  'data-component': 'landing'
}
```

---

## 🔄 Modos de Operación

### 🧪 **Modo Desarrollo** (`npm run dev`)

**Características:**
- ✅ React development mode
- ✅ Source maps habilitados
- ✅ Hot reload automático
- ✅ HTML template inyectado automáticamente
- ✅ Estilos en modo styleTag simple

**Bundle generado:**
- `bundle.js` - Bundle de desarrollo
- Contenido completo con React incluido

**URL de acceso:**
```
http://localhost:3001/
```

### 🏭 **Modo Producción** (`npm run build`)

**Características:**
- ✅ UMD library format
- ✅ Bundle optimizado y minificado
- ✅ Estilos preservados para Shadow DOM
- ✅ Variables globales para acceso a estilos
- ✅ Banner con información de versión

**Bundle generado:**
- `landing-v1.0.0.js` - Componente web listo para producción

---

## 🌍 CORS y Integración Cross-Origin

### 📡 Headers CORS Configurados

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
Access-Control-Allow-Headers: X-Requested-With, content-type, Authorization
```

### 🔗 URLs de Integración

**Desarrollo local:**
```html
<script src="http://localhost:3001/bundle.js"></script>
```

**Producción:**
```html
<script src="http://localhost:3001/landing-v1.0.0.js"></script>
```

---

## 📁 Estructura de Archivos Servidos

```
http://localhost:3001/
├── /                          # Página principal (desarrollo)
├── /bundle.js                 # Bundle de desarrollo
├── /landing-v1.0.0.js         # Bundle de producción
└── /[chunk].[hash].js         # Chunks adicionales
```

---

## 🔧 Resolución de Problemas

### 🚫 **Puerto 3001 ocupado**

```bash
# Verificar procesos en puerto 3001
lsof -ti:3001

# Terminar proceso
kill -9 $(lsof -ti:3001)

# O usar puerto alternativo
npx webpack serve --mode development --port 3002
```

### 🎨 **Problemas con Estilos**

**Síntoma:** Los estilos no se cargan en el web component
**Solución:** Verificar variables globales:

```javascript
// En consola del navegador
console.log(window.__LANDING_STYLES__);
console.log(window._landingCriticalStyles);
```

### 🔄 **Hot Reload no funciona**

```bash
# Limpiar cache y reiniciar
rm -rf node_modules/.cache
npm run clean
npm run dev
```

### 🌐 **Problemas CORS**

**Síntoma:** Error de CORS al cargar desde otra aplicación
**Verificación:**
- Confirmar headers CORS en Network tab
- Verificar URL exacta (http://localhost:3001)
- Probar con curl:

```bash
curl -I http://localhost:3001/landing-v1.0.0.js
```

---

## 📊 Monitoreo y Debugging

### 🔍 Logs de Webpack

Al ejecutar `npm run dev`, verás:

```
Building in development mode
webpack 5.101.0 compiled successfully
Local:    http://localhost:3001/
```

### 📈 Variables de Debug

En modo desarrollo, el bundle expone:

```javascript
// Información de build
process.env.NODE_ENV          // 'development' | 'production'
process.env.INCLUDE_STYLES    // 'true'
process.env.COMPONENT_VERSION // '1.0.0'
__WEBPACK_STYLES_AVAILABLE__  // true
```

### 🎯 Métricas de Estilos

En producción, el servidor registra:

```javascript
console.log('📦 Webpack - Estilos guardados:', {
  totalStyles: window.__LANDING_STYLES__.length,
  criticalStylesLength: window._landingCriticalStyles.length,
  currentContentLength: content.length
});
```

---

## 🚀 Despliegue en Diferentes Entornos

### 🏠 **Desarrollo Local**

```bash
npm run dev                    # Servidor local completo
```

### 🧪 **Testing/Staging**

```bash
npm run build                  # Generar bundle
# Servir con servidor estático
npx http-server dist -p 3001 --cors
```

### 🏭 **Producción**

```bash
npm run build                  # Bundle optimizado
# Copiar dist/landing-v1.0.0.js al CDN
# URL final: https://your-cdn.com/landing-v1.0.0.js
```

---

## 📋 Checklist de Configuración

### ✅ Verificación del Servidor

- [ ] Puerto 3001 disponible
- [ ] Node.js versión 16+
- [ ] Dependencias instaladas (`npm install`)
- [ ] Webpack configurado correctamente
- [ ] CORS headers funcionando

### ✅ Verificación de Build

- [ ] `npm run build` ejecuta sin errores
- [ ] `dist/landing-v1.0.0.js` generado
- [ ] Bundle size < 200KB
- [ ] Estilos preservados en variables globales

### ✅ Verificación de Integración

- [ ] Component se registra como `landing-web-component`
- [ ] Eventos custom funcionando
- [ ] Shadow DOM aplicando estilos
- [ ] CORS permitiendo carga cross-origin

---

**🎯 Objetivo:** Este servidor proporciona un entorno de desarrollo robusto y confiable para el componente Landing, facilitando tanto el desarrollo local como la generación de bundles optimizados para integración en aplicaciones Vue.js y otras tecnologías.