import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Importar explícitamente todos los estilos
import './styles/globals.css';
import './styles/presentation.css';
import './styles/requirements.css';
import './styles/integration.css';

// MODO DUAL: React Development + Web Component Production
if (typeof window !== 'undefined') {
  // MODO DESARROLLO: Aplicación React normal
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(React.createElement(App));
    console.log('🛠️ React App: Aplicación cargada correctamente');
  } else {
    // MODO PRODUCCIÓN: Cargar Web Component para integración
    console.log('🌐 Modo Web Component: Cargando para integración externa');
    
    // Verificar disponibilidad de React
    if (!(window as any).React) {
      console.warn('React not found globally. Consider providing React as external dependency.');
    }
    
    if (!(window as any).ReactDOM) {
      console.warn('ReactDOM not found globally. Consider providing ReactDOM as external dependency.');
    }
    
    // Importar y registrar el Web Component
    import('./LandingWebComponent').then(() => {
      console.log('📦 Landing Web Component v1.0.0 loaded successfully');
    }).catch((error) => {
      console.error('❌ Error loading Landing Web Component:', error);
    });
  }
} else {
  console.warn('Window object not available - Server Side Rendering?');
}

// Exportar componente React para uso directo si es necesario
export { default as LandingComponent } from './App';
