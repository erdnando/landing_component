/**
 * PUNTO ÚNICO DE VERDAD - Estilos para Microfrontend RESPONSIVO
 * Este archivo consolida TODOS los estilos necesarios para el Web Component
 * Diseñado específicamente para arquitectura de microfrontend con Shadow DOM
 * COMPLETAMENTE RESPONSIVO para smartphones y tabletas en orientación vertical
 */

// ==========================================
// ESTILOS BASE Y RESET RESPONSIVOS
// ==========================================
import { RESET_STYLES } from './base/reset.styles';

// ==========================================
// ESTILOS DE PRESENTACIÓN RESPONSIVOS
// ==========================================
import { PRESENTATION_STYLES } from './views/presentation.styles';

// ==========================================
// ESTILOS DE BOTONES RESPONSIVOS
// ==========================================
import { BUTTON_STYLES } from './components/button.styles';

// ==========================================
// ESTILOS DE REQUIREMENTS RESPONSIVOS (importados modularmente)
// ==========================================
import { REQUIREMENTS_STYLES } from './views/requirements.styles';

// ==========================================
// ESTILOS DE LOADING VIEW RESPONSIVOS
// ==========================================
import { LOADING_STYLES } from './components/loading.styles';
// ==========================================
// FUNCIÓN CONSOLIDADORA PRINCIPAL
// ==========================================
export function getAllMicrofrontendStyles(): string {
  return `
    ${RESET_STYLES}
    ${PRESENTATION_STYLES}
    ${BUTTON_STYLES}
    ${REQUIREMENTS_STYLES}
    ${LOADING_STYLES}
  `;
}

// ==========================================
// FUNCIÓN PARA INYECCIÓN EN SHADOW DOM
// ==========================================
export function injectMicrofrontendStyles(shadowRoot: ShadowRoot): void {
  const styleElement = document.createElement('style');
  styleElement.id = 'microfrontend-consolidated-styles';
  styleElement.textContent = getAllMicrofrontendStyles();
  shadowRoot.appendChild(styleElement);
  
  console.log('🎨 Microfrontend - Estilos RESPONSIVOS inyectados:', {
    resetStyles: RESET_STYLES.length,
    presentationStyles: PRESENTATION_STYLES.length,
    buttonStyles: BUTTON_STYLES.length,
    requirementsStyles: REQUIREMENTS_STYLES.length,
    loadingStyles: LOADING_STYLES.length,
    totalLength: getAllMicrofrontendStyles().length,
    responsive: true,
    breakpoints: ['320px', '375px', '414px', '480px', '768px', '834px', '1024px']
  });
}

// ==========================================
// METADATA DEL COMPONENTE
// ==========================================
export const MICROFRONTEND_METADATA = {
  version: '2.0.0-responsive',
  architecture: 'microfrontend',
  encapsulation: 'shadow-dom',
  target: 'vue-integration',
  stylesConsolidated: true,
  responsive: true,
  supportedDevices: [
    'iPhone SE (320px)',
    'iPhone 6/7/8 (375px)',
    'iPhone Plus (414px)',
    'iPhone X/XS (375px)',
    'iPhone XR/11 (414px)',
    'iPhone Pro Max (428px)',
    'Galaxy S (360px-412px)',
    'iPad Mini (768px)',
    'iPad (834px)',
    'iPad Pro (1024px)'
  ],
  breakpoints: {
    xs: '320px',
    sm: '375px', 
    md: '414px',
    lg: '480px',
    xl: '768px',
    xxl: '834px',
    xxxl: '1024px'
  },
  lastUpdated: '2025-08-09'
};
