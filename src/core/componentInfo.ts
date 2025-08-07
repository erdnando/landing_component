// Información del componente para registry y Flow Designer
export const componentInfo = {
  id: 'landing',
  name: 'Landing Page Component',
  version: '1.0.0',
  tagName: 'landing-web-component', // Coincide con el nombre definido en customElements.define
  description: 'Componente de página de aterrizaje para captura de datos básicos',
  category: 'Proceso',
  contract: {
    inputs: ['sessionId', 'userId', 'flowContext', 'config', 'inputData'],
    outputs: ['landing_data', 'completed_at', 'session_id', 'user_id'],
    events: [
      'component-ready',
      'output-data', 
      'request-navigation',
      'data-changed',
      'node-error'
    ]
  },
  provider: {
    name: 'Fábrica de Componentes Demo',
    version: '1.0.0',
    contact: 'dev@fabrica-demo.com'
  }
};
