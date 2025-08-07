/**
 * Bundle consolidado de estilos para el Web Component
 * Este archivo asegura que todos los estilos se incluyan en el bundle de webpack
 */

// Importar todos los archivos CSS para que webpack los procese
import '../styles/globals.css';
import '../styles/presentation.css'; 
import '../styles/requirements.css';

// Exportar una función que retorne todos los estilos como string
export function getBundledStyles(): string {
  // En tiempo de ejecución, intentar capturar estilos del DOM
  let styles = '';
  
  try {
    // Capturar estilos insertados por webpack
    const styleElements = document.querySelectorAll('style[id*="landing"], style[data-webpack]');
    styleElements.forEach(element => {
      styles += element.textContent || '';
    });
    
    // Capturar de variables globales si webpack las guardó
    if (typeof window !== 'undefined') {
      if ((window as any)._landingComponentStyles) {
        styles += (window as any)._landingComponentStyles.join('\n');
      }
      if ((window as any)._landingCriticalStyles) {
        styles += (window as any)._landingCriticalStyles;
      }
    }
  } catch (e) {
    console.warn('Could not capture bundled styles:', e);
  }
  
  return styles;
}

// Estilos críticos que deben estar siempre disponibles
export const CRITICAL_STYLES = `
  /* Reset básico */
  *, *::before, *::after {
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
  }

  /* Vista de presentación */
  .presentation-view {
    background: linear-gradient(135deg, #e91e63, #c2185b) !important;
    color: white !important;
    text-align: center !important;
    padding: 12px !important;
    min-height: 600px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    position: relative !important;
    overflow: hidden !important;
  }

  /* Tarjeta de crédito */
  .credit-card {
    width: 180px !important;
    height: 110px !important;
    background: linear-gradient(135deg, #2c2c2c, #1a1a1a) !important;
    border-radius: 12px !important;
    padding: 12px !important;
    position: relative !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
    overflow: hidden !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    margin: 18px auto !important;
    display: block !important;
  }

  /* Grid de beneficios */
  .benefits-grid-modern {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    grid-gap: 12px !important;
    margin: 0 auto 18px !important;
    width: 92% !important;
    position: relative !important;
    z-index: 1 !important;
    flex-grow: 1 !important;
    align-content: center !important;
  }

  .benefit-card-modern {
    display: flex !important;
    align-items: center !important;
    background: rgba(255, 255, 255, 0.15) !important;
    border-radius: 12px !important;
    padding: 12px !important;
    text-align: left !important;
    height: 100% !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
    backdrop-filter: blur(5px) !important;
    transition: transform 0.2s, background 0.2s !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    min-height: 70px !important;
  }

  .benefit-icon-wrapper {
    width: 36px !important;
    height: 36px !important;
    min-width: 36px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: white !important;
    border-radius: 50% !important;
    margin-right: 10px !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15) !important;
    transition: all 0.3s ease !important;
    flex-shrink: 0 !important;
  }

  .benefit-value {
    font-size: 24px !important;
    font-weight: 700 !important;
    color: #e91e63 !important;
    text-shadow: none !important;
    display: inline-block !important;
    text-align: center !important;
    line-height: 1.2 !important;
    vertical-align: middle !important;
    /* CRÍTICO: Asegurar que el texto sea siempre visible */
    -webkit-text-fill-color: #e91e63 !important;
    background: none !important;
    background-clip: initial !important;
    -webkit-background-clip: initial !important;
    /* Evitar conflictos con flexbox */
    position: relative !important;
    z-index: 2 !important;
  }

  .benefit-percent {
    font-size: 28px !important;
    font-weight: 700 !important;
    color: #e91e63 !important;
    display: inline-block !important;
    text-align: center !important;
    line-height: 1.2 !important;
    vertical-align: middle !important;
    /* GRADIENTE SOLO COMO FALLBACK - Asegurar visibilidad primero */
    -webkit-text-fill-color: #e91e63 !important;
    /* Gradiente como mejora visual si es soportado */
    background: linear-gradient(135deg, #e91e63, #f06292) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    /* Si el gradiente no funciona, mantener el color sólido */
    color: #e91e63 !important;
    position: relative !important;
    z-index: 2 !important;
  }

  /* DEFINICIÓN DEFINITIVA PARA .benefit-icon - OPTIMIZADA PARA VISIBILIDAD */
  .benefit-icon {
    /* Fuente y tamaño */
    font-size: 18px !important;
    font-weight: 700 !important;
    font-family: Arial, Helvetica, sans-serif !important;
    
    /* Color - FORZADO para máxima visibilidad */
    color: #e91e63 !important;
    -webkit-text-fill-color: #e91e63 !important;
    text-fill-color: #e91e63 !important;
    
    /* Layout y posicionamiento */
    display: inline-block !important;
    text-align: center !important;
    line-height: 1 !important;
    vertical-align: middle !important;
    
    /* Espaciado */
    margin: 0 !important;
    padding: 0 !important;
    
    /* Reset completo de propiedades problemáticas */
    background: none !important;
    background-color: transparent !important;
    background-image: none !important;
    background-clip: initial !important;
    -webkit-background-clip: initial !important;
    text-shadow: none !important;
    box-shadow: none !important;
    border: none !important;
    outline: none !important;
    
    /* Z-index para asegurar que esté encima */
    position: relative !important;
    z-index: 10 !important;
    
    /* Asegurar que el elemento esté visible */
    opacity: 1 !important;
    visibility: visible !important;
  }

  /* ESTILOS DE BOTONES OPTIMIZADOS */
  .btn {
    display: inline-block !important;
    padding: 12px 24px !important;
    border: none !important;
    border-radius: 25px !important;
    background: white !important;
    color: #e91e63 !important;
    font-weight: bold !important;
    text-transform: uppercase !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    text-align: center !important;
    min-width: 120px !important;
    font-size: 14px !important;
    margin: 10px 0 !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
    text-decoration: none !important;
    outline: none !important;
    appearance: none !important;
  }

  .btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15) !important;
  }

  .presentation-view .btn-primary {
    background: white !important;
    color: #e91e63 !important;
    width: 80% !important;
    max-width: 250px !important;
    margin: 10px auto !important;
  }

  .presentation-view .btn-secondary {
    background: transparent !important;
    color: white !important;
    border: 1px solid white !important;
    width: 80% !important;
    max-width: 250px !important;
    margin: 10px auto !important;
  }

  /* Vista de requisitos */
  .requirements-view {
    background: linear-gradient(to bottom, #ffffff, #f8f8f8) !important;
    color: #333333 !important;
    padding: 14px !important;
    min-height: 600px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    position: relative !important;
    overflow: hidden !important;
    width: 100% !important;
    max-width: 375px !important;
    margin: 0 auto !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
`;

// Función para inyectar estilos críticos inmediatamente
export function injectCriticalStyles(shadowRoot: ShadowRoot): void {
  const criticalStyleElement = document.createElement('style');
  criticalStyleElement.id = 'critical-landing-styles';
  criticalStyleElement.textContent = CRITICAL_STYLES;
  shadowRoot.appendChild(criticalStyleElement);
}
