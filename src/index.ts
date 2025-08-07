import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Importar explícitamente todos los estilos
import './styles/globals.css';
import './styles/presentation.css';
import './styles/requirements.css';
import './styles/integration.css';

// APLICACIÓN REACT NORMAL - Renderizar directamente
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(React.createElement(App));
  console.log('🛠️ React App: Aplicación cargada correctamente');
} else {
  console.error('❌ No se encontró el contenedor #root para React');
}
