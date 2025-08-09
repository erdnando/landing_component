/**
 * ÍNDICE DE ESTILOS MODULARES
 * Archivo central para importar y combinar todos los estilos
 */

// Estilos base
import { RESET_STYLES } from './base/reset.styles';
import { CONTAINER_STYLES } from './base/container.styles';
import { RESPONSIVE_STYLES } from './base/responsive.styles';

// Estilos de componentes
import { BUTTON_STYLES } from './components/button.styles';
import { LOADING_STYLES } from './components/loading.styles';

// Estilos de vistas
import { PRESENTATION_STYLES } from './views/presentation.styles';
import { REQUIREMENTS_STYLES } from './views/requirements.styles';

/**
 * Combina todos los estilos modulares en un string único
 * Mantiene el orden de importación para precedencia CSS
 */
export const MICROFRONTEND_STYLES = `
${RESET_STYLES}
${CONTAINER_STYLES}
${BUTTON_STYLES}
${LOADING_STYLES}
${PRESENTATION_STYLES}
${REQUIREMENTS_STYLES}
${RESPONSIVE_STYLES}
`;

// Exportaciones individuales para uso específico
export {
  RESET_STYLES,
  CONTAINER_STYLES,
  RESPONSIVE_STYLES,
  BUTTON_STYLES,
  LOADING_STYLES,
  PRESENTATION_STYLES,
  REQUIREMENTS_STYLES
};
