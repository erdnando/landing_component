/**
 * Style injector utility
 * This script ensures styles are properly injected into any page that uses the component
 * UPDATED: Includes specific styles that were being lost during integration
 */

export const injectGlobalStyles = () => {
  // Default styles for the component with enhanced isolation
  const defaultStyles = `
    /* Variables globales */
    :root {
      --landing-primary-color: #e91e63;
      --landing-primary-dark: #c2185b;
      --landing-primary-light: #f48fb1;
      --landing-text-color: #333333;
      --landing-text-light: #666666;
    }
    
    /* Estilos extremadamente aislados para el componente */
    landing-web-component {
      all: initial !important;
      display: block !important;
      width: 100% !important;
      min-height: 600px !important;
      max-width: 375px !important;
      margin: 0 auto !important;
      font-family: Arial, Helvetica, sans-serif !important;
      position: relative !important;
      box-sizing: border-box !important;
      overflow: auto !important;
      isolation: isolate !important;
      color: initial !important;
      background: transparent !important;
    }
    
    /* Selector más fuerte para el contenedor interno */
    landing-web-component::part(container),
    landing-web-component > *,
    landing-web-component::shadow > * {
      all: initial !important;
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      min-height: 600px !important;
      max-width: 375px !important;
      margin: 0 auto !important;
      font-family: Arial, Helvetica, sans-serif !important;
      box-sizing: border-box !important;
      background-color: var(--landing-primary-color, #e91e63) !important;
      color: white !important;
    }
    
    /* Tarjeta visual - definida también fuera del shadow DOM */
    landing-web-component .card-visual-modern,
    landing-web-component::shadow .card-visual-modern {
      width: 80% !important;
      max-width: 300px !important;
      height: 180px !important;
      margin: 20px auto !important;
      background: linear-gradient(135deg, #333, #1a1a1a) !important;
      border-radius: 12px !important;
      position: relative !important;
      overflow: hidden !important;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Botones - definidos también fuera del shadow DOM */
    landing-web-component .btn-primary,
    landing-web-component::shadow .btn-primary {
      background: white !important;
      color: var(--landing-primary-color, #e91e63) !important;
      display: inline-block !important;
      padding: 12px 24px !important;
      border: none !important;
      border-radius: 25px !important;
      font-weight: bold !important;
      text-align: center !important;
      width: 80% !important;
      max-width: 250px !important;
      margin: 10px auto !important;
    }
  `;
  
  // CSS específico para contrarrestar cualquier reset global que pueda afectar al componente
  const resetOverrides = `
    /* Esto contrarrestará cualquier reset global */
    landing-web-component * {
      box-sizing: border-box !important;
    }
    
    /* Propiedades específicas para textos */
    landing-web-component h1,
    landing-web-component h2,
    landing-web-component p,
    landing-web-component div {
      color: inherit !important;
      font-family: inherit !important;
    }
  `;
  
  // Check if styles are already added and add them in the correct order
  const styleIds = ['landing-component-global-styles', 'landing-component-reset-overrides'];
  
  if (!document.getElementById(styleIds[0])) {
    const styleEl = document.createElement('style');
    styleEl.id = styleIds[0];
    styleEl.textContent = defaultStyles;
    document.head.appendChild(styleEl);
  }
  
  if (!document.getElementById(styleIds[1])) {
    const resetEl = document.createElement('style');
    resetEl.id = styleIds[1];
    resetEl.textContent = resetOverrides;
    document.head.appendChild(resetEl);
  }
  
  // También crear un elemento <link> con atributo rel="stylesheet" que apunta a integration.css
  // Esto es una técnica alternativa para asegurar que los estilos se carguen
  if (!document.querySelector('link#landing-integration-styles')) {
    try {
      const linkEl = document.createElement('link');
      linkEl.id = 'landing-integration-styles';
      linkEl.rel = 'stylesheet';
      linkEl.type = 'text/css';
      
      // Convertir los estilos a un blob y crear una URL
      const blob = new Blob([defaultStyles + resetOverrides + getCriticalStyles()], { type: 'text/css' });
      const url = URL.createObjectURL(blob);
      linkEl.href = url;
      
      document.head.appendChild(linkEl);
    } catch (e) {
      console.warn('Error creating style link:', e);
    }
  }
};

/**
 * Estilos críticos que se pierden durante la integración
 * Estos estilos se aplican con !important para asegurar que no sean sobrescritos
 */
export const getCriticalStyles = () => `
/* ESTILOS CRÍTICOS PARA INTEGRACIÓN */

/* Beneficios en formato grid moderno - STYLE PERDIDO SOLUCIONADO */
.benefits-grid-modern {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  grid-gap: 10px !important;
  margin: 0 auto 15px !important;
  width: 92% !important;
  position: relative !important;
  z-index: 1 !important;
}

.benefit-card-modern {
  display: flex !important;
  align-items: center !important;
  background: rgba(255, 255, 255, 0.15) !important;
  border-radius: 12px !important;
  padding: 10px !important;
  transition: all 0.3s ease !important;
  backdrop-filter: blur(5px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.benefit-card-modern:hover {
  background: rgba(255, 255, 255, 0.25) !important;
  transform: translateY(-2px) !important;
}

.benefit-icon-modern {
  width: 24px !important;
  height: 24px !important;
  margin-right: 8px !important;
  flex-shrink: 0 !important;
}

.benefit-text-modern {
  font-size: 12px !important;
  font-weight: 600 !important;
  color: #ffffff !important;
  line-height: 1.3 !important;
}

/* Otros estilos críticos que se pueden perder */
.presentation-container {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  min-height: 600px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  padding: 20px !important;
  position: relative !important;
  overflow: hidden !important;
}

.requirements-container {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  min-height: 600px !important;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
  padding: 20px !important;
  position: relative !important;
  overflow: hidden !important;
}

.landing-title {
  font-size: 28px !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  text-align: center !important;
  margin-bottom: 10px !important;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
  line-height: 1.2 !important;
}

.landing-button {
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4) !important;
  color: white !important;
  border: none !important;
  padding: 15px 30px !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  border-radius: 25px !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  min-width: 200px !important;
  margin: 20px 0 !important;
}

.landing-button:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
  background: linear-gradient(45deg, #FF5252, #26C6DA) !important;
}

/* Responsive para benefits-grid-modern */
@media (max-width: 768px) {
  .benefits-grid-modern {
    grid-template-columns: 1fr !important;
    width: 95% !important;
  }
}
`;

/**
 * Inyecta estilos específicamente en el Shadow DOM de un componente
 */
export const injectShadowStyles = (shadowRoot: ShadowRoot) => {
  // Verificar si ya se han inyectado
  if (shadowRoot.querySelector('style[data-landing-critical]')) {
    return;
  }

  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-landing-critical', 'true');
  styleElement.textContent = getCriticalStyles();
  
  // Insertar al principio del shadow root
  shadowRoot.insertBefore(styleElement, shadowRoot.firstChild);
  
  console.log('✅ Estilos críticos inyectados en Shadow DOM');
};

// Register and inject styles automatically
injectGlobalStyles();
