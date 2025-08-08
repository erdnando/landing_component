import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Importar estilos consolidados para modo desarrollo
import { getAllMicrofrontendStyles } from './styles/microfrontend-styles';

// ESTILOS CONSOLIDADOS: Ya no se importan CSS individuales
// Todos los estilos están consolidados en microfrontend-styles.ts

// Función para inyectar estilos en el documento principal (modo desarrollo)
function injectStylesForDevelopment() {
  // Crear elemento style si no existe
  let styleElement = document.getElementById('microfrontend-dev-styles') as HTMLStyleElement;
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'microfrontend-dev-styles';
    document.head.appendChild(styleElement);
  }
  
  // Inyectar todos los estilos consolidados
  styleElement.textContent = getAllMicrofrontendStyles();
  console.log('🎨 Estilos de desarrollo inyectados correctamente');
}

// SPA CLÁSICO: Siempre montar la app React en #root
if (typeof window !== 'undefined') {
  const container = document.getElementById('root');
  if (container) {
    injectStylesForDevelopment();
    const root = createRoot(container);
    root.render(React.createElement(App));
    console.log('🛠️ React App: SPA montada correctamente en #root');
  } else {
    console.error('No se encontró el elemento #root en el HTML. La app no puede montarse.');
  }
} else {
  console.warn('Window object not available - Server Side Rendering?');
}

// Exportar componente React para uso directo si es necesario
export { default as LandingComponent } from './App';
