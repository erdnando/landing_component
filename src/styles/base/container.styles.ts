/**
 * ESTILOS DE CONTENEDORES BASE
 * Contenedores principales y elementos base responsivos
 */

export const CONTAINER_STYLES = `
/* Contenedor principal del componente - COMPLETAMENTE RESPONSIVO */
.landing-component-container,
.basicos-component-container,
.legales-component-container,
.sms-component-container,
.ine-component-container,
.selfie-component-container,
.capturarapida-component-container,
.capturacompleta-component-container,
.altaproducto-component-container {
  all: initial !important;
  display: block !important;
  width: 100% !important;
  max-width: var(--container-max-width) !important;
  height: 100% !important;
  min-height: var(--container-height) !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
  color: white !important;
  background-color: transparent !important;
  overflow: auto !important;
  position: relative !important;
  padding: var(--content-padding) !important;
}

/* Reset de elementos HTML específicos */
h1, h2, h3, h4, h5, h6, p, span, div, button, input, a, ul, ol, li {
  all: unset !important;
  box-sizing: border-box !important;
  display: block !important;
  line-height: normal !important;
  color: inherit !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

/* Contenedor de la aplicación - RESPONSIVO */
.app {
  width: 100% !important;
  max-width: var(--container-max-width) !important;
  height: auto !important;
  min-height: var(--container-height) !important;
  background: transparent;
  margin: 0 auto !important;
  position: relative !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  display: flex !important;
  flex-direction: column !important;
  box-sizing: border-box !important;
  font-family: Arial, sans-serif !important;
  color: white !important;
  z-index: 1 !important;
  border: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

/* Capa del loading para cross-fade */
.loading-layer {
  position: absolute !important;
  inset: 0 !important;
  z-index: 100 !important;
  pointer-events: none !important; /* El propio LoadingView tiene su overlay para bloquear */
}
`;
