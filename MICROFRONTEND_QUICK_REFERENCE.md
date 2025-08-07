# 🚀 Microfrontend Quick Reference
## Cheatsheet para Desarrollo Rápido

---

## ⚡ Comandos Esenciales

```bash
# Crear nuevo componente
./create-microfrontend.sh ComponentName

# Instalar dependencias
npm install

# Desarrollo
npm run dev                 # Servidor desarrollo (puerto 3001)
npm run build              # Build producción
npm run build:watch        # Build en modo watch
npm run clean              # Limpiar dist/

# Validación
npm run type-check         # Verificar TypeScript
npm run lint              # Linting
npm run analyze           # Análisis de bundle
```

---

## 📁 Estructura Obligatoria

```
component-name/
├── src/
│   ├── styles/
│   │   └── microfrontend-styles.ts    ⭐ OBLIGATORIO
│   ├── ComponentWebComponent.ts       ⭐ OBLIGATORIO
│   ├── App.tsx                       ⭐ OBLIGATORIO
│   └── index.ts                      ⭐ OBLIGATORIO
├── package.json                      ⭐ OBLIGATORIO
├── webpack.config.js                 ⭐ OBLIGATORIO
└── tsconfig.json                     ⭐ OBLIGATORIO
```

---

## 🎨 Plantilla CSS Base

```typescript
// src/styles/microfrontend-styles.ts
export const RESET_STYLES = \`
*, *::before, *::after {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

.component-container {
  all: initial !important;
  display: block !important;
  width: 100% !important;
  max-width: 375px !important;
  min-height: 600px !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
}
\`;

export function getAllMicrofrontendStyles(): string {
  return \`\${RESET_STYLES}\`;
}

export function injectMicrofrontendStyles(shadowRoot: ShadowRoot): void {
  const styleElement = document.createElement('style');
  styleElement.id = 'microfrontend-consolidated-styles';
  styleElement.textContent = getAllMicrofrontendStyles();
  shadowRoot.appendChild(styleElement);
}
```

---

## 🔧 Web Component Template

```typescript
// src/ComponentWebComponent.ts
import React from 'react';
import ReactDOM from 'react-dom/client';
import { injectMicrofrontendStyles } from './styles/microfrontend-styles';
import App from './App';

class ComponentWebComponent extends HTMLElement {
  private shadowRoot!: ShadowRoot;
  private reactRoot: any;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.initializeMicrofrontend();
  }

  private initializeMicrofrontend(): void {
    // 1. Inyectar estilos
    injectMicrofrontendStyles(this.shadowRoot);

    // 2. Crear contenedor
    const appContainer = document.createElement('div');
    appContainer.id = 'microfrontend-root';
    appContainer.className = 'component-container';
    this.shadowRoot.appendChild(appContainer);

    // 3. Montar React
    this.reactRoot = ReactDOM.createRoot(appContainer);
    this.reactRoot.render(<App />);
  }

  connectedCallback() {
    console.log('🔗 Componente conectado');
  }

  disconnectedCallback() {
    if (this.reactRoot) {
      this.reactRoot.unmount();
    }
  }
}

customElements.define('component-name-microfrontend', ComponentWebComponent);
export default ComponentWebComponent;
```

---

## 🎯 Reglas CSS Críticas

### ✅ **SIEMPRE**
```css
/* Usar !important en TODO */
.mi-clase {
  property: value !important;
}

/* Reset completo */
*, *::before, *::after {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

/* Contenedor principal */
.component-container {
  all: initial !important;
  /* resto de estilos... */
}
```

### ❌ **NUNCA**
```css
/* Sin !important */
.mi-clase {
  property: value; /* ❌ No encapsula */
}

/* Estilos globales */
body, html {
  /* ❌ Afecta host */
}

/* Selectores sin especificidad */
div {
  /* ❌ Muy genérico */
}
```

---

## 🎨 Paleta de Colores Estándar

```typescript
const COLORS = {
  primary: '#e91e63',      // Rosa principal
  secondary: '#d81b60',    // Rosa oscuro
  accent: '#f06292',       // Rosa claro
  background: '#ffffff',   // Fondo
  surface: '#f8f8f8',     // Superficie
  text: '#333333',        // Texto principal
  textSecondary: '#666666', // Texto secundario
  success: '#4caf50',     // Verde
  warning: '#ff9800',     // Naranja
  error: '#f44336'        // Rojo
};
```

---

## 📏 Sistema de Espaciado

```css
/* Basado en 4px */
.spacing-xs   { margin: 4px !important; }    /* 4px */
.spacing-sm   { margin: 8px !important; }    /* 8px */
.spacing-md   { margin: 12px !important; }   /* 12px */
.spacing-lg   { margin: 16px !important; }   /* 16px */
.spacing-xl   { margin: 20px !important; }   /* 20px */
.spacing-xxl  { margin: 24px !important; }   /* 24px */

/* Padding equivalente */
.p-xs   { padding: 4px !important; }
.p-sm   { padding: 8px !important; }
.p-md   { padding: 12px !important; }
.p-lg   { padding: 16px !important; }
.p-xl   { padding: 20px !important; }
.p-xxl  { padding: 24px !important; }
```

---

## 🔤 Tipografía

```css
/* Tamaños */
.text-xs    { font-size: 10px !important; }
.text-sm    { font-size: 12px !important; }
.text-base  { font-size: 14px !important; }
.text-lg    { font-size: 16px !important; }
.text-xl    { font-size: 18px !important; }
.text-2xl   { font-size: 20px !important; }
.text-3xl   { font-size: 24px !important; }

/* Pesos */
.font-normal  { font-weight: 400 !important; }
.font-medium  { font-weight: 500 !important; }
.font-bold    { font-weight: 600 !important; }
.font-black   { font-weight: 700 !important; }
```

---

## 🎛️ Componentes Comunes

### 🔘 Botón Básico
```css
.btn {
  display: inline-block !important;
  padding: 12px 24px !important;
  border: none !important;
  border-radius: 25px !important;
  background: #e91e63 !important;
  color: white !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  text-decoration: none !important;
}

.btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 15px rgba(233, 30, 99, 0.3) !important;
}
```

### 📋 Input de Formulario
```css
.form-input {
  width: 100% !important;
  padding: 12px 16px !important;
  border: 2px solid #e0e0e0 !important;
  border-radius: 8px !important;
  font-size: 16px !important;
  transition: border-color 0.3s !important;
  box-sizing: border-box !important;
}

.form-input:focus {
  border-color: #e91e63 !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1) !important;
}
```

### 🃏 Card Básica
```css
.card {
  background: white !important;
  border-radius: 12px !important;
  padding: 20px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.2s, box-shadow 0.2s !important;
}

.card:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}
```

---

## 🚀 Package.json Básico

```json
{
  "name": "component-name-microfrontend",
  "version": "1.0.0",
  "main": "dist/component-name-v1.0.0.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development --open",
    "clean": "rm -rf dist"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.0",
    "webpack-dev-server": "^4.15.0",
    "ts-loader": "^9.4.0",
    "style-loader": "^3.3.0",
    "css-loader": "^6.8.0"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

---

## ⚙️ Webpack Config Básico

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'component-name-v1.0.0.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ComponentNameMicrofrontend',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    port: 3001,
    open: true
  }
};
```

---

## 🧪 Testing Básico

```javascript
// __tests__/component.test.js
describe('Microfrontend', () => {
  test('registers web component', () => {
    require('../src/index.ts');
    expect(customElements.get('component-name-microfrontend')).toBeDefined();
  });

  test('creates shadow DOM', () => {
    require('../src/index.ts');
    const element = document.createElement('component-name-microfrontend');
    expect(element.shadowRoot).toBeTruthy();
  });
});
```

---

## 🔍 Debug Utils

```javascript
// Debug en consola
window.debugMicrofrontend = function(componentName) {
  const component = document.querySelector(componentName);
  const shadowRoot = component?.shadowRoot;
  
  console.log('🔍 Debug Info:', {
    component: !!component,
    shadowRoot: !!shadowRoot,
    styles: shadowRoot?.querySelector('#microfrontend-consolidated-styles')?.textContent?.length,
    reactRoot: !!shadowRoot?.querySelector('#microfrontend-root')
  });
};

// Uso: debugMicrofrontend('component-name-microfrontend')
```

---

## 📊 Métricas de Éxito

| Métrica | Target | ✅ | ❌ |
|---------|--------|----|----|
| Bundle Size | < 200KB | ✅ | > 200KB |
| CSS Duplication | < 5% | ✅ | > 5% |
| Load Time | < 2s | ✅ | > 2s |
| Build Time | < 30s | ✅ | > 30s |

---

## 🚨 Checklist Pre-Deploy

- [ ] `npm run build` exitoso
- [ ] Bundle < 200KB
- [ ] Sin errores en console
- [ ] Shadow DOM funciona
- [ ] Estilos encapsulados
- [ ] React se monta/desmonta
- [ ] Funciona en Vue.js host
- [ ] Performance OK
- [ ] Tests pasan
- [ ] README actualizado

---

## 🆘 Problemas Frecuentes

### ❓ **Estilos no se aplican**
```
✅ Solución: Verificar !important en todos los CSS
✅ Verificar inyección de estilos en Shadow DOM
```

### ❓ **Bundle muy grande**
```
✅ Solución: npm run analyze
✅ Verificar imports innecesarios
✅ Usar dynamic imports
```

### ❓ **Memory leaks**
```
✅ Solución: Implementar disconnectedCallback()
✅ Verificar reactRoot.unmount()
```

### ❓ **No funciona en Vue**
```
✅ Solución: Verificar custom events
✅ Revisar attribute binding
✅ Probar en Simple Browser
```

---

**⚡ Tiempo estimado por componente**: 2-3 horas  
**🎯 Objetivo**: 10 componentes completados  
**📅 Timeline**: 1-2 semanas  

---

*Mantén este cheatsheet a mano durante el desarrollo. Cada componente debe seguir exactamente estos patrones.*
