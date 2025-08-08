/**
 * PUNTO ÚNICO DE VERDAD - Estilos para Microfrontend
 * Este archivo consolida TODOS los estilos necesarios para el Web Component
 * Diseñado específicamente para arquitectura de microfrontend con Shadow DOM
 */

// ==========================================
// ESTILOS BASE Y RESET
// ==========================================
export const RESET_STYLES = `
/* Reset completo para Shadow DOM y modo desarrollo */
*, *::before, *::after {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  font-family: inherit !important;
  border: none !important;
  outline: none !important;
  text-decoration: none !important;
  background-color: transparent !important;
}

/* Reset específico para el body en modo desarrollo */
body {
  margin: 0 !important;
  padding: 0 !important;
  background-color: #f5f5f5 !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

/* Reset para el elemento root en modo desarrollo */
#root {
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100% !important;
  background-color: #f5f5f5 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: flex-start !important;
}

/* Contenedor principal del componente */
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
  max-width: 375px !important;
  height: 100% !important;
  min-height: min(600px, 100vh) !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
  color: white !important;
  background-color: #e91e63 !important;
  overflow: auto !important;
  position: relative !important;
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

/* Contenedor de la aplicación */
.app {
  width: 100% !important;
  max-width: 375px !important;
  height: 100% !important;
  min-height: min(600px, 100%) !important;
  background: #e91e63 !important;
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
`;

// ==========================================
// ESTILOS DE PRESENTACIÓN
// ==========================================
export const PRESENTATION_STYLES = `
/* Vista de presentación */
.presentation-view {
  background: #e91e63 !important;
  background: linear-gradient(135deg, #e91e63, #c2185b) !important;
  color: white !important;
  text-align: center !important;
  padding: 12px 12px 8px !important; /* Reducimos padding inferior */
  height: 100% !important;
  min-height: min(600px, 100vh) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important; /* Cambiamos a flex-start para mejor control del espacio */
  position: relative !important;
  overflow: auto !important; /* Permitimos scroll en caso de necesidad */
  width: 100% !important;
  max-width: 375px !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
  box-sizing: border-box !important;
}

/* Media query para compactar elementos en pantallas pequeñas */
@media (max-height: 650px) {
  .presentation-view {
    padding: 8px !important;
  }
  
  .main-title-modern {
    margin-bottom: 8px !important;
  }
  
  .main-title-modern h1 {
    font-size: 20px !important;
    margin-bottom: 4px !important;
  }
  
  .main-title-modern p {
    font-size: 14px !important;
    margin-top: 2px !important;
  }
  
  .credit-card {
    margin: 10px auto !important;
    width: 150px !important;
    height: 90px !important;
  }
}

/* Efecto de degradado sutil en el fondo */
.presentation-view::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: radial-gradient(
    circle at top right,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%
  ) !important;
  z-index: 0 !important;
  pointer-events: none !important;
}

/* Tarjeta de crédito - DEFINICIÓN ÚNICA */
.credit-card {
  width: 170px !important;
  height: 100px !important; /* Reducimos altura */
  background: linear-gradient(135deg, #2c2c2c, #1a1a1a) !important;
  border-radius: 12px !important;
  padding: 12px !important;
  position: relative !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.1) !important;
  overflow: hidden !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  margin: 12px auto !important; /* Reducimos margen */
  display: block !important;
}

.card-brand {
  color: white !important;
  font-size: 16px !important;
  font-weight: bold !important;
  position: absolute !important;
  bottom: 15px !important;
  left: 15px !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
}

.card-chip {
  width: 28px !important;
  height: 22px !important;
  background: linear-gradient(45deg, #ffd700, #ffaa00) !important;
  border-radius: 4px !important;
  position: absolute !important;
  top: 25px !important;
  left: 15px !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
}

.card-shine {
  position: absolute !important;
  top: -50% !important;
  left: -50% !important;
  width: 200% !important;
  height: 200% !important;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 60%
  ) !important;
  transform: rotate(30deg) !important;
  pointer-events: none !important;
}

/* Benefits grid - DEFINICIÓN ÚNICA */
.benefits-grid-modern {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  grid-template-rows: auto auto !important; /* Forzar 2 filas para mostrar los 4 elementos */
  grid-gap: 8px !important; /* Aumentamos el gap */
  margin: 0 auto 10px !important; /* Aumentamos el margen inferior */
  width: 90% !important; /* Aumentamos el ancho para mejor distribución */
  position: relative !important;
  z-index: 1 !important;
  flex-grow: 1 !important;
  align-content: flex-start !important;
  overflow: visible !important;
  padding: 0 !important;
  grid-auto-rows: minmax(54px, auto) !important; /* Aumentamos la altura mínima */
  max-height: 200px !important;
  justify-content: center !important; /* Centrar en horizontal */
}

/* Media queries para adaptación responsiva */
@media (max-height: 650px) {
  .benefits-grid-modern {
    grid-template-columns: 1fr 1fr !important; /* Mantener 2 columnas */
    grid-template-rows: auto auto !important; /* Forzar 2 filas */
    grid-gap: 4px !important; /* Reducir aún más el espacio entre tarjetas */
    grid-gap: 8px !important; /* Reducimos el espacio entre elementos */
    max-height: none !important;
    margin-bottom: 8px !important;
    grid-auto-rows: minmax(55px, auto) !important; /* Altura mínima reducida */
    width: 98% !important; /* Aprovechamos más espacio horizontal */
  }
  
  .benefit-card-modern {
    min-height: 62px !important; /* Aumentamos la altura mínima */
    height: auto !important;
    padding: 6px 8px !important;
  }
}

/* Adaptación para pantallas muy pequeñas */
@media (max-height: 550px) {
  .benefits-grid-modern {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important; /* Mantener 2 columnas */
    grid-template-rows: auto auto !important; /* Forzar 2 filas */
    grid-gap: 6px !important; /* Espacio mínimo entre elementos */
    grid-auto-rows: minmax(45px, auto) !important; /* Altura mínima muy reducida */
    max-height: none !important;
    width: 100% !important; /* Ancho completo para aprovechar todo el espacio */
    padding: 0 4px !important; /* Padding horizontal mínimo */
    margin-bottom: 6px !important;
    margin-top: 6px !important;
  }
  
  .benefit-card-modern {
    min-height: 52px !important; /* Aumentamos la altura mínima */
    height: auto !important;
    padding: 5px 6px !important; /* Padding mínimo */
    margin-bottom: 0 !important;
  }
  
  .benefit-desc strong {
    font-size: 11px !important;
    line-height: 1 !important;
  }
  
  .benefit-desc p {
    font-size: 9px !important;
    margin-top: 1px !important;
    line-height: 1 !important;
  }
  
  /* Reducir espacio para título y otros elementos */
  .main-title-modern {
    margin-bottom: 6px !important;
  }
  
  .main-title-modern h1 {
    font-size: 18px !important;
    margin-bottom: 2px !important;
  }
  
  .credit-card {
    height: 85px !important;
    width: 140px !important;
    margin: 8px auto !important;
  }
}

/* Si la pantalla es ancha pero baja, mantener 2 columnas */
@media (min-width: 400px) and (max-height: 600px) {
  .benefits-grid-modern {
    grid-template-columns: 1fr 1fr !important;
  }
}

.benefit-card-modern {
  display: flex !important;
  align-items: flex-start !important; /* Alineamos al inicio para mejor distribución de texto */
  background: rgba(255, 255, 255, 0.2) !important; /* Aumentamos ligeramente la opacidad */
  border-radius: 10px !important;
  padding: 10px !important; /* Aumentamos el padding */
  text-align: left !important;
  height: 100% !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.12) !important; /* Mejoramos la sombra */
  backdrop-filter: blur(5px) !important;
  transition: transform 0.2s, background 0.2s !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  min-height: 80px !important;
  max-height: 85px !important; /* Aumentamos ligeramente la altura máxima */
  margin-bottom: 0 !important;
  width: 100% !important; /* Ancho completo dentro del grid */
  max-width: 155px !important; /* Aumentamos ligeramente el ancho máximo */
}

.benefit-card-modern:hover {
  transform: translateY(-2px) !important;
  background: rgba(255, 255, 255, 0.2) !important;
}

/* Estilos responsivos para tarjetas de beneficios en pantallas pequeñas */
@media (max-height: 650px) {
  .benefit-card-modern {
    min-height: auto !important;
    padding: 10px !important;
    margin-bottom: 8px !important;

  }
  
  .benefit-icon-wrapper {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px !important;
    margin-right: 8px !important;
  }
  
  .benefit-desc {
    flex: 1 !important;
    padding-right: 4px !important;
  }
  
  .benefit-desc strong {
    font-size: 14px !important;
    white-space: normal !important;
    line-height: 1.2 !important;
    margin-bottom: 1px !important;
  }
  
  .benefit-desc p {
    font-size: 11px !important;
    white-space: normal !important;
    line-height: 1.2 !important;
    overflow: visible !important;
  }
}

/* DEFINICIÓN ÚNICA Y OPTIMIZADA - benefit-icon-wrapper */
.benefit-icon-wrapper {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: white !important;
  border-radius: 50% !important;
  margin-right: 8px !important; /* Aumentamos el margen */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
  transition: all 0.3s ease !important;
  flex-shrink: 0 !important;
}

.benefit-icon-wrapper:hover {
  transform: scale(1.1) !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}

/* DEFINICIÓN ÚNICA Y OPTIMIZADA - benefit-value */
.benefit-value {
  font-size: 24px !important;
  font-weight: 700 !important;
  color: #e91e63 !important;
  text-shadow: none !important;
  display: inline-block !important;
  text-align: center !important;
  line-height: 1.2 !important;
  vertical-align: middle !important;
  /* CRÍTICO: Asegurar visibilidad máxima */
  -webkit-text-fill-color: #e91e63 !important;
  background: none !important;
  background-clip: initial !important;
  -webkit-background-clip: initial !important;
  position: relative !important;
  z-index: 10 !important;
  opacity: 1 !important;
  visibility: visible !important;
}

/* DEFINICIÓN ÚNICA Y OPTIMIZADA - benefit-percent */
.benefit-percent {
  font-size: 20px !important;
  font-weight: 700 !important;
  color: #e91e63 !important;
  display: inline-block !important;
  text-align: center !important;
  line-height: 1.2 !important;
  vertical-align: middle !important;
  /* Gradiente como mejora visual SI funciona */
  background: linear-gradient(135deg, #e91e63, #f06292) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  /* Fallback si gradiente falla */
  position: relative !important;
  z-index: 10 !important;
  opacity: 1 !important;
  visibility: visible !important;
}

/* Media query para ajustar tamaños de porcentajes y textos */
@media (max-height: 650px) {
  .benefit-percent {
    font-size: 20px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .benefit-value {
    font-size: 20px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .benefit-icon-wrapper {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px !important;
    margin-right: 8px !important;
    padding: 0 !important;
  }
  
  .benefit-desc {
    padding-right: 0 !important; /* Eliminar padding extra */
  }
}

/* Ajustes adicionales para pantallas muy pequeñas */
@media (max-height: 550px) {
  .benefit-percent {
    font-size: 20px !important;
    margin: 0 !important;
    line-height: 1 !important;
  }
  
  .benefit-value {
    font-size: 18px !important;
    margin: 0 !important;
    line-height: 1 !important;
  }
  
  /* Mejorar distribución del espacio en las tarjetas */
  .benefit-icon-wrapper {
    width: 28px !important;
    height: 28px !important;
    min-width: 28px !important;
    margin-right: 6px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
  }
  
  .benefit-icon {
    font-size: 15px !important;
  }
  
  .benefit-desc strong {
    font-size: 11px !important;
    line-height: 1.1 !important;
    margin: 0 !important;
  }
  
  .benefit-desc p {
    font-size: 9px !important;
    line-height: 1 !important;
    margin-top: 1px !important;
    max-height: 18px !important;
  }
}

/* DEFINICIÓN ÚNICA Y OPTIMIZADA - benefit-icon */
.benefit-icon {
  font-size: 18px !important;
  font-weight: 700 !important;
  font-family: Arial, Helvetica, sans-serif !important;
  /* Color forzado para máxima visibilidad */
  color: #e91e63 !important;
  -webkit-text-fill-color: #e91e63 !important;
  text-fill-color: #e91e63 !important;
  /* Layout */
  display: inline-block !important;
  text-align: center !important;
  line-height: 1 !important;
  vertical-align: middle !important;
  /* Espaciado */
  margin: 0 !important;
  padding: 0 !important;
  /* Reset completo */
  background: none !important;
  background-color: transparent !important;
  background-image: none !important;
  background-clip: initial !important;
  -webkit-background-clip: initial !important;
  text-shadow: none !important;
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
  /* Visibilidad forzada */
  position: relative !important;
  z-index: 10 !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.benefit-desc {
  flex: 1 !important;
  width: calc(100% - 44px) !important; /* Restamos el nuevo ancho del icono + margen */
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  padding-top: 3px !important; /* Añadimos padding superior */
}

.benefit-desc strong {
  font-size: 13px !important; /* Aumentamos tamaño de fuente */
  font-weight: bold !important;
  display: block !important;
  line-height: 1.2 !important; /* Aumentamos interlineado */
  letter-spacing: -0.2px !important;
  color: white !important;
  white-space: normal !important; /* Permitimos que ocupe más de una línea */
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 100% !important;
  margin-bottom: 2px !important; /* Añadimos margen inferior */
}

.benefit-desc p {
  font-size: 11px !important; /* Aumentamos tamaño de fuente */
  line-height: 1.15 !important; /* Aumentamos interlineado */
  margin-top: 2px !important;
  opacity: 0.95 !important; /* Aumentamos opacidad */
  color: rgba(255, 255, 255, 0.95) !important;
  white-space: normal !important; /* Permitimos que ocupe más de una línea */
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 100% !important;
  height: auto !important;
  max-height: 14px !important; /* Altura máxima reducida */
}

/* ESTILOS ADICIONALES PARA TEXTOS Y LABELS FALTANTES */
.header-logos-modern {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 10px !important;
  padding: 10px !important;
  position: relative !important;
  z-index: 1 !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
  border-radius: 8px !important;
  width: 100% !important;
  max-width: 350px !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

.bradescard-logo {
  font-size: 18px !important;
  font-weight: bold !important;
  color: white !important;
  margin: 0 !important;
  padding: 0 !important;
  display: inline-block !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
}

.promoda-logo {
  font-size: 18px !important;
  font-weight: bold !important;
  color: white !important;
  font-style: italic !important;
  margin: 0 !important;
  padding: 0 !important;
  display: inline-block !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
}

/* Títulos y textos principales */
.main-title-modern {
  margin-bottom: 15px !important;
  padding: 0 10px !important;
  position: relative !important;
  z-index: 1 !important;
}

.main-title-modern h1 {
  font-size: 24px !important;
  font-weight: bold !important;
  margin-bottom: 8px !important;
  color: white !important;
  text-align: center !important;
  display: block !important;
}

.main-title-modern p {
  font-size: 16px !important;
  color: white !important;
  margin-top: 5px !important;
  text-align: center !important;
  display: block !important;
}

/* Estilos para elementos de texto generales */
.presentation-view h1,
.presentation-view h2,
.presentation-view h3,
.presentation-view p,
.presentation-view span {
  color: white !important;
  text-align: center !important;
  margin: 8px 0 !important;
  padding: 0 !important;
  display: block !important;
  font-family: Arial, Helvetica, sans-serif !important;

  
}

.presentation-view h1 {
  font-size: 24px !important;
  font-weight: bold !important;
  margin-bottom: 10px !important;
}

.presentation-view h2 {
  font-size: 20px !important;
  font-weight: bold !important;
}

.presentation-view p {
  font-size: 16px !important;
  line-height: 1.5 !important;
}

/* Botones con estilos mejorados */
.buttons-container {
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  margin-top: 20px !important;
  padding: 10px 0 !important;
  position: relative !important;
  z-index: 1 !important;
}

/* Estilos para la tarjeta visual */
.card-image-container {
  margin: 18px 0 !important;
  perspective: 1000px !important;
  position: relative !important;
  z-index: 1 !important;
}

.card-image {
  margin: 0 auto !important;
  display: flex !important;
  justify-content: center !important;
  transform-style: preserve-3d !important;
  transition: transform 0.5s !important;
}

/* Textos especiales con marca */
.branded-text {
  font-style: italic !important;
  font-weight: bold !important;
}

.branded-text-secondary {
  opacity: 0.8 !important;
  font-size: 0.9em !important;
}

/* Footer con información adicional */
.version-footer-modern {
  text-align: center !important;
  font-size: 11px !important;
  color: rgba(255, 255, 255, 0.7) !important;
  margin-top: 15px !important;
  padding: 5px !important;
  position: relative !important;
  z-index: 1 !important;
}

.version-footer-modern .version-text {
  font-size: 10px !important;
  opacity: 0.7 !important;
  font-family: monospace !important;
  color: rgba(255, 255, 255, 0.5) !important;
}

/* ESTILOS ADICIONALES CRÍTICOS PARA ELEMENTOS FALTANTES */

/* Promo badge moderno */
.promo-badge {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 5px auto !important;
  padding: 8px 14px !important;
  border-radius: 20px !important;
  background: rgba(0, 0, 0, 0.15) !important;
  width: auto !important;
  max-width: 90% !important;
  position: relative !important;
  z-index: 1 !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.promo-tagline {
  font-size: 13px !important;
  font-weight: 500 !important;
  margin: 0 8px !important;
  color: white !important;
  display: inline-block !important;
}

.promo-icon {
  font-size: 12px !important;
  opacity: 0.7 !important;
  color: white !important;
  display: inline-block !important;
}

/* Instrucción simple con icono */
.simple-instruction-container {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0px 0 !important;
  position: relative !important;
  z-index: 1 !important;
}

.instruction-icon {
  margin-right: 8px !important;
  display: flex !important;
  align-items: center !important;
  color: white !important;
}

.simple-instruction {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: white !important;
  display: inline-block !important;
}

/* Footer legal moderno */
.legal-footer-modern {
  font-size: 10px !important;
  opacity: 0.8 !important;
  margin-top: 15px !important;
  padding: 5px 0 !important;
  position: relative !important;
  z-index: 1 !important;
  color: rgba(255, 255, 255, 0.8) !important;
}

.footer-link {
  color: white !important;
  text-decoration: none !important;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.5) !important;
  display: inline !important;
}

/* Botón moderno con animación */
.btn-start-modern {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 180px !important;
  margin: 15px auto !important;
  padding: 12px 0 !important;
  border-radius: 30px !important;
  position: relative !important;
  z-index: 1 !important;
  background: white !important;
  color: #e91e63 !important;
  font-weight: 600 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s !important;
  overflow: hidden !important;
  cursor: pointer !important;
  border: none !important;
  text-decoration: none !important;
}

.btn-start-modern:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25) !important;
}

.btn-start-modern .btn-text {
  margin-right: 5px !important;
  color: #e91e63 !important;
  display: inline-block !important;
}

.btn-start-modern .btn-icon {
  font-size: 16px !important;
  transition: transform 0.3s !important;
  color: #e91e63 !important;
  display: inline-block !important;
}

.btn-start-modern:hover .btn-icon {
  transform: translateX(3px) !important;
}
`;

// ==========================================
// ESTILOS DE BOTONES
// ==========================================
export const BUTTON_STYLES = `
/* DEFINICIÓN ÚNICA - Botones base */
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

/* DEFINICIÓN ÚNICA - btn-primary */
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
`;

// ==========================================
// ESTILOS DE LOADING VIEW
// ==========================================
export const LOADING_STYLES = `
/* ESTILOS PRINCIPALES DEL LOADING VIEW */

/* Container principal - DIMENSIONES CRÍTICAS */
.loading-view-fullscreen {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  width: 375px !important;
  height: 850px !important;
  max-width: 375px !important;
  min-width: 375px !important;
  min-height: 850px !important;
  max-height: 850px !important;
  z-index: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  font-family: Arial, Helvetica, sans-serif !important;
  overflow: hidden !important;
  user-select: none !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
  transition: opacity 1s ease-out, filter 1s ease-out !important;
}

/* Transición de finalización */
.loading-view-fullscreen.loading-completing {
  opacity: 0 !important;
  filter: blur(1px) !important;
}

/* Overlay para bloquear interacciones */
.loading-overlay {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 10 !important;
  pointer-events: auto !important;
  background-color: transparent !important;
}

/* Fondo animado */
.loading-background {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(135deg, 
    #0f0f23 0%, 
    #1a1a2e 25%, 
    #16213e 50%, 
    #0f0f23 100%) !important;
  overflow: hidden !important;
}

/* Gradient cósmico animado */
.cosmic-gradient {
  position: absolute !important;
  top: -50% !important;
  left: -50% !important;
  width: 200% !important;
  height: 200% !important;
  background: radial-gradient(circle at 30% 40%, 
    rgba(123, 67, 151, 0.3) 0%, 
    rgba(220, 66, 127, 0.2) 25%, 
    rgba(255, 154, 0, 0.1) 50%, 
    transparent 70%) !important;
  animation: cosmicRotate 20s linear infinite !important;
}

@keyframes cosmicRotate {
  from { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  to { transform: rotate(360deg) scale(1); }
}

/* Container de estrellas */
.stars-container {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
}

/* Estrellas animadas */
.star {
  position: absolute !important;
  width: 2px !important;
  height: 2px !important;
  background-color: #fff !important;
  border-radius: 50% !important;
  opacity: 0 !important;
  animation: twinkle linear infinite !important;
  box-shadow: 0 0 6px #fff !important;
}

@keyframes twinkle {
  0%, 100% { 
    opacity: 0; 
    transform: scale(0.8); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.2); 
  }
}

/* Header con logos flotantes */
.header-logos-floating {
  position: absolute !important;
  top: 80px !important;
  left: 0 !important;
  width: 100% !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0 40px !important;
  z-index: 5 !important;
}

.bradescard-logo-glow, .promoda-logo-glow {
  font-size: 16px !important;
  font-weight: bold !important;
  color: #00d4ff !important;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.8) !important;
  animation: logoFloat 3s ease-in-out infinite !important;
}

.promoda-logo-glow {
  animation-delay: 1.5s !important;
  color: #ff6b6b !important;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.8) !important;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* COHETE ANIMADO */
.rocket-launch-container {
  position: absolute !important;
  top: 150px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 120px !important;
  height: 200px !important;
  z-index: 4 !important;
}

.rocket-spaceship {
  position: relative !important;
  width: 100% !important;
  height: 100% !important;
  animation: rocketHover 4s ease-in-out infinite !important;
}

@keyframes rocketHover {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

.rocket-body {
  position: absolute !important;
  top: 20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 40px !important;
  height: 100px !important;
  background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 50%, #a8a8a8 100%) !important;
  border-radius: 20px 20px 8px 8px !important;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 2px 0 rgba(255, 255, 255, 0.4),
    inset 0 -2px 0 rgba(0, 0, 0, 0.2) !important;
}

.rocket-tip {
  position: absolute !important;
  top: -15px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 0 !important;
  height: 0 !important;
  border-left: 15px solid transparent !important;
  border-right: 15px solid transparent !important;
  border-bottom: 20px solid #ff4757 !important;
  filter: drop-shadow(0 0 10px rgba(255, 71, 87, 0.6)) !important;
}

.rocket-middle {
  position: relative !important;
  width: 100% !important;
  height: 60px !important;
  margin-top: 10px !important;
}

.rocket-window {
  position: absolute !important;
  top: 15px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 16px !important;
  height: 16px !important;
  background: radial-gradient(circle, #87ceeb 30%, #4169e1 70%) !important;
  border-radius: 50% !important;
  box-shadow: 
    0 0 15px rgba(135, 206, 235, 0.8),
    inset 0 -2px 2px rgba(0, 0, 0, 0.2) !important;
  animation: windowGlow 2s ease-in-out infinite alternate !important;
}

@keyframes windowGlow {
  from { box-shadow: 0 0 15px rgba(135, 206, 235, 0.8), inset 0 -2px 2px rgba(0, 0, 0, 0.2); }
  to { box-shadow: 0 0 25px rgba(135, 206, 235, 1), inset 0 -2px 2px rgba(0, 0, 0, 0.2); }
}

.rocket-details {
  position: absolute !important;
  top: 35px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 30px !important;
  height: 15px !important;
}

.rocket-line {
  width: 100% !important;
  height: 2px !important;
  background-color: #666 !important;
  margin: 2px 0 !important;
  border-radius: 1px !important;
}

.rocket-fins {
  position: absolute !important;
  bottom: -5px !important;
  width: 100% !important;
  height: 20px !important;
}

.rocket-fin {
  position: absolute !important;
  bottom: 0 !important;
  width: 15px !important;
  height: 20px !important;
  background: linear-gradient(135deg, #ff6348 0%, #ff4757 100%) !important;
  clip-path: polygon(0 100%, 100% 100%, 50% 0) !important;
}

.rocket-fin-left {
  left: -8px !important;
  transform: rotate(-10deg) !important;
}

.rocket-fin-right {
  right: -8px !important;
  transform: rotate(10deg) !important;
}

/* Fuego del cohete */
.rocket-fire {
  position: absolute !important;
  bottom: -40px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 35px !important;
  height: 45px !important;
}

.fire-flame {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40% !important;
  animation: fireFlicker 0.1s ease-in-out infinite alternate !important;
}

.fire-flame-1 {
  width: 35px !important;
  height: 45px !important;
  background: radial-gradient(ellipse at bottom, 
    #ff9500 0%, #ff6b00 30%, #ff4500 60%, #ff0000 90%) !important;
}

.fire-flame-2 {
  width: 28px !important;
  height: 38px !important;
  background: radial-gradient(ellipse at bottom, 
    #ffb700 0%, #ff8c00 40%, #ff4500 80%) !important;
  animation-delay: 0.05s !important;
}

.fire-flame-3 {
  width: 20px !important;
  height: 30px !important;
  background: radial-gradient(ellipse at bottom, 
    #ffff00 0%, #ffa500 50%, #ff6500 100%) !important;
  animation-delay: 0.1s !important;
}

@keyframes fireFlicker {
  0% { transform: translateX(-50%) scale(1) rotate(-2deg); }
  100% { transform: translateX(-50%) scale(1.1) rotate(2deg); }
}

/* Partículas del cohete */
.rocket-particles {
  position: absolute !important;
  bottom: -60px !important;
  left: 0 !important;
  width: 100% !important;
  height: 30px !important;
  overflow: hidden !important;
}

.particle {
  position: absolute !important;
  width: 3px !important;
  height: 3px !important;
  background-color: #ff6b00 !important;
  border-radius: 50% !important;
  animation: particleRise linear infinite !important;
  opacity: 0.8 !important;
}

@keyframes particleRise {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}

/* Ondas de choque */
.shock-waves {
  position: absolute !important;
  bottom: -20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 100px !important;
  height: 50px !important;
}

.shock-wave {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border-radius: 50% !important;
  border: 2px solid rgba(255, 107, 0, 0.6) !important;
  animation: shockExpand 2s ease-out infinite !important;
}

.shock-wave-1 {
  width: 60px !important;
  height: 30px !important;
}

.shock-wave-2 {
  width: 80px !important;
  height: 40px !important;
  animation-delay: 0.7s !important;
}

.shock-wave-3 {
  width: 100px !important;
  height: 50px !important;
  animation-delay: 1.4s !important;
}

@keyframes shockExpand {
  0% {
    transform: translateX(-50%) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) scale(2);
    opacity: 0;
  }
}

/* CONTENIDO PRINCIPAL */
.loading-content-center {
  position: relative !important;
  z-index: 3 !important;
  text-align: center !important;
  color: white !important;
  margin-top: 250px !important;
}

.loading-title-epic {
  margin-bottom: 40px !important;
}

.loading-title-epic h1 {
  font-size: 28px !important;
  font-weight: bold !important;
  color: #ffffff !important;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.8) !important;
  margin: 0 0 15px 0 !important;
  animation: titlePulse 3s ease-in-out infinite !important;
}

@keyframes titlePulse {
  0%, 100% { 
    text-shadow: 0 0 30px rgba(0, 212, 255, 0.8); 
    transform: scale(1);
  }
  50% { 
    text-shadow: 0 0 40px rgba(0, 212, 255, 1); 
    transform: scale(1.02);
  }
}

.title-underline-glow {
  width: 150px !important;
  height: 3px !important;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #00d4ff 25%, 
    #ff6b6b 50%, 
    #00d4ff 75%, 
    transparent 100%) !important;
  margin: 0 auto !important;
  animation: underlineFlow 2s ease-in-out infinite !important;
}

@keyframes underlineFlow {
  0%, 100% { opacity: 0.6; transform: scaleX(1); }
  50% { opacity: 1; transform: scaleX(1.1); }
}

/* BARRA DE PROGRESO */
.progress-container {
  margin: 40px auto !important;
  width: 280px !important;
}

.progress-bar {
  width: 100% !important;
  height: 12px !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px !important;
  overflow: hidden !important;
  border: 2px solid rgba(0, 212, 255, 0.3) !important;
  box-shadow: 
    0 0 20px rgba(0, 212, 255, 0.2),
    inset 0 0 10px rgba(0, 0, 0, 0.3) !important;
}

.progress-fill {
  height: 100% !important;
  background: linear-gradient(90deg, 
    #00d4ff 0%, 
    #0099cc 25%, 
    #00d4ff 50%, 
    #66e0ff 75%, 
    #00d4ff 100%) !important;
  border-radius: 18px !important;
  transition: width 0.3s ease !important;
  position: relative !important;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.6) !important;
  animation: progressGlow 2s ease-in-out infinite !important;
}

@keyframes progressGlow {
  0%, 100% { 
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
  }
  50% { 
    box-shadow: 0 0 25px rgba(0, 212, 255, 0.9);
  }
}

.progress-glow {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  width: 30px !important;
  height: 100% !important;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.4) 50%, 
    transparent 100%) !important;
  animation: progressSweep 2s ease-in-out infinite !important;
}

@keyframes progressSweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress-text {
  text-align: center !important;
  margin-top: 15px !important;
  font-size: 18px !important;
  font-weight: bold !important;
  color: #00d4ff !important;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.8) !important;
  animation: numberPulse 1s ease-in-out infinite !important;
}

@keyframes numberPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* MENSAJE DE LOADING */
.loading-message-epic {
  margin: 30px auto !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 15px !important;
}

.message-icon {
  position: relative !important;
  width: 60px !important;
  height: 60px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.pulse-ring {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 100% !important;
  height: 100% !important;
  border: 2px solid rgba(0, 212, 255, 0.6) !important;
  border-radius: 50% !important;
  animation: pulseExpand 2s ease-out infinite !important;
}

.pulse-ring-2 {
  animation-delay: 0.7s !important;
  border-color: rgba(255, 107, 107, 0.6) !important;
}

.pulse-ring-3 {
  animation-delay: 1.4s !important;
  border-color: rgba(255, 154, 0, 0.6) !important;
}

@keyframes pulseExpand {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

.message-emoji {
  font-size: 24px !important;
  z-index: 2 !important;
  position: relative !important;
  animation: emojiSpin 4s ease-in-out infinite !important;
}

@keyframes emojiSpin {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(-5deg) scale(1.1); }
  50% { transform: rotate(0deg) scale(1); }
  75% { transform: rotate(5deg) scale(1.1); }
}

.message-text {
  font-size: 16px !important;
  color: #e8e8e8 !important;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3) !important;
  margin: 0 !important;
  font-weight: 500 !important;
}

.loading-dots {
  display: flex !important;
  gap: 8px !important;
  margin-top: 10px !important;
}

.dot {
  width: 8px !important;
  height: 8px !important;
  background-color: #00d4ff !important;
  border-radius: 50% !important;
  animation: dotBounce 1.4s ease-in-out infinite !important;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.6) !important;
}

.dot-1 { animation-delay: 0s !important; }
.dot-2 { animation-delay: 0.2s !important; }
.dot-3 { animation-delay: 0.4s !important; }

@keyframes dotBounce {
  0%, 80%, 100% { 
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% { 
    transform: scale(1.2);
    opacity: 1;
  }
}

/* STATUS DE LOADING */
.loading-status {
  margin-top: 40px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  align-items: flex-start !important;
}

.status-item {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  font-size: 14px !important;
  color: #a8a8a8 !important;
  width: 100% !important;
  justify-content: flex-start !important;
}

.status-item-loading {
  color: #00d4ff !important;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5) !important;
}

.status-icon {
  color: #4caf50 !important;
  font-weight: bold !important;
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.6) !important;
  animation: checkGlow 2s ease-in-out infinite !important;
}

@keyframes checkGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(76, 175, 80, 0.6); }
  50% { text-shadow: 0 0 20px rgba(76, 175, 80, 1); }
}

.status-icon-loading {
  color: #ffa726 !important;
  animation: loadingSpin 1s linear infinite !important;
  text-shadow: 0 0 15px rgba(255, 167, 38, 0.8) !important;
}

@keyframes loadingSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* CÍRCULOS DECORATIVOS */
.decorative-circles {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none !important;
  overflow: hidden !important;
}

.circle {
  position: absolute !important;
  border: 2px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 50% !important;
  animation: circleFloat linear infinite !important;
}

.circle-1 {
  width: 80px !important;
  height: 80px !important;
  top: 20% !important;
  left: 10% !important;
  animation-duration: 20s !important;
  border-color: rgba(0, 212, 255, 0.2) !important;
}

.circle-2 {
  width: 120px !important;
  height: 120px !important;
  top: 60% !important;
  right: 15% !important;
  animation-duration: 25s !important;
  animation-direction: reverse !important;
  border-color: rgba(255, 107, 107, 0.2) !important;
}

.circle-3 {
  width: 60px !important;
  height: 60px !important;
  bottom: 30% !important;
  left: 20% !important;
  animation-duration: 18s !important;
  border-color: rgba(255, 154, 0, 0.2) !important;
}

.circle-4 {
  width: 100px !important;
  height: 100px !important;
  top: 40% !important;
  right: 25% !important;
  animation-duration: 22s !important;
  animation-direction: reverse !important;
  border-color: rgba(156, 39, 176, 0.2) !important;
}

@keyframes circleFloat {
  0% { 
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.7;
  }
  100% { 
    transform: translateY(0px) rotate(360deg);
    opacity: 0.3;
  }
}

/* FOOTER */
.loading-footer-minimal {
  position: absolute !important;
  bottom: 30px !important;
  left: 0 !important;
  width: 100% !important;
  text-align: center !important;
  z-index: 3 !important;
}

.loading-footer-minimal p {
  font-size: 12px !important;
  color: rgba(255, 255, 255, 0.6) !important;
  margin: 0 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
}

/* RESPONSIVE ADJUSTMENTS */
@media (max-width: 400px) {
  .loading-view-fullscreen {
    width: 100vw !important;
    min-width: 100vw !important;
    max-width: 100vw !important;
  }
  
  .progress-container {
    width: 250px !important;
  }
  
  .loading-title-epic h1 {
    font-size: 24px !important;
  }
}
`;

// ==========================================
// ESTILOS DE REQUIREMENTS
// ==========================================
export const REQUIREMENTS_STYLES = `
/* Vista de requisitos */
.requirements-view {
  background: linear-gradient(to bottom, #ffffff, #f8f8f8) !important;
  color: #333333 !important;
  padding: 14px !important;
  height: 100% !important;  //<--------------------------
  min-height: min(600px, 100%) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  position: relative !important;
  overflow: auto !important;
  width: 100% !important;
  max-width: 375px !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
  box-sizing: border-box !important;
}

/* Header moderno con logos */
.requirements-view .header-logos-modern {
  margin-bottom: 18px !important;
  background: linear-gradient(135deg, #e91e63, #d81b60) !important;
  padding: 12px !important;
  border-radius: 10px !important;
  color: white !important;
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  box-shadow: 0 2px 10px rgba(233, 30, 99, 0.2) !important;
  width: 100% !important;
  z-index: 1 !important;
}

.requirements-view .bradescard-logo,
.requirements-view .promoda-logo {
  color: white !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  letter-spacing: -0.3px !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
}

.card-mini-modern {
  width: 35px !important;
  height: 22px !important;
  background: linear-gradient(135deg, #333, #1a1a1a) !important;
  border-radius: 4px !important;
  position: relative !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
  overflow: hidden !important;
}

.card-chip-mini {
  width: 7px !important;
  height: 5px !important;
  background: linear-gradient(45deg, #ffd700, #ffaa00) !important;
  border-radius: 1px !important;
  position: absolute !important;
  top: 4px !important;
  left: 4px !important;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3) !important;
}

.card-shine-mini {
  position: absolute !important;
  top: -50% !important;
  left: -50% !important;
  width: 200% !important;
  height: 200% !important;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 70%
  ) !important;
  transform: rotate(30deg) !important;
  pointer-events: none !important;
}

/* Título centrado */
.requirements-title-modern {
  text-align: center !important;
  margin-bottom: 25px !important;
  padding-top: 10px !important;
}

.requirements-title-modern h2 {
  font-size: 22px !important;
  font-weight: bold !important;
  color: #e91e63 !important;
  margin-bottom: 5px !important;
  letter-spacing: -0.5px !important;
}

.title-underline {
  height: 3px !important;
  width: 60px !important;
  background: linear-gradient(to right, #e91e63, rgba(233, 30, 99, 0.3)) !important;
  border-radius: 2px !important;
  margin: 6px auto 0 !important;
}

/* Lista de requisitos moderna */
.requirements-list-modern {
  margin-bottom: 20px !important;
  flex-grow: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  overflow-y: auto !important;
  min-height: 0 !important; /* Permite que se comprima */
  padding-bottom: 10px !important;
}

.requirement-item-modern {
  display: flex !important;
  align-items: center !important;
  padding: 18px 16px !important;
  margin-bottom: 16px !important;
  background: white !important;
  border-radius: 12px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
  border: 1px solid rgba(233, 30, 99, 0.1) !important;
  transition: all 0.2s ease !important;
  position: relative !important;
}

.requirement-item-modern:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}

.requirement-icon-wrapper {
  margin-right: 15px !important;
  flex-shrink: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgba(233, 30, 99, 0.05) !important;
  width: 46px !important;
  height: 46px !important;
  border-radius: 50% !important;
  padding: 8px !important;
}

.requirement-text-modern {
  flex: 1 !important;
}

.requirement-text-modern strong {
  display: block !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  color: #333 !important;
  margin-bottom: 2px !important;
}

.requirement-text-modern p {
  font-size: 12px !important;
  color: #666 !important;
  margin: 0 !important;
  line-height: 1.3 !important;
}

.requirement-check {
  width: 24px !important;
  height: 24px !important;
  border-radius: 50% !important;
  background-color: #e91e63 !important;
  color: white !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 14px !important;
  font-weight: bold !important;
  margin-left: 10px !important;
}

/* Contenedor de botones moderno */
.requirements-footer {
  margin-top: 185px !important;
  padding-top: 20px !important;
}

.requirements-note {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-top: 12px !important;
  padding: 8px 15px !important;
  background: rgba(233, 30, 99, 0.06) !important;
  border-radius: 20px !important;
  font-size: 12px !important;
  color: #666 !important;
}

.note-icon {
  margin-right: 8px !important;
  font-size: 14px !important;
  color: #e91e63 !important;
}

/* Buttons container */
.buttons-container-modern {
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  margin-bottom: 0 !important;
  margin-top: auto !important;
  padding-top: 12px !important;
  position: sticky !important;
  bottom: 0 !important;
  background: inherit !important;
  z-index: 10 !important;
}

.buttons-row {
  flex-direction: row !important;
  justify-content: space-between !important;
}

/* Botones en vista de requisitos */
.requirements-view .btn {
  width: 100% !important;
  margin: 0 !important;
  padding: 12px 0 !important;
}

/* Botones en fila */
.buttons-row .btn {
  width: 48% !important;
  padding: 12px 10px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 30px !important;
  font-weight: 600 !important;
  transition: all 0.3s !important;
}

/* Botones específicos */
.btn-continue {
  background: linear-gradient(135deg, #e91e63, #d81b60) !important;
  color: white !important;
  box-shadow: 0 4px 12px rgba(233, 30, 99, 0.25) !important;
  min-height: 44px !important; /* Altura mínima para facilitar tap en móvil */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.btn-continue:hover {
  background: linear-gradient(135deg, #d81b60, #c2185b) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 15px rgba(233, 30, 99, 0.3) !important;
}

.btn-back {
  background: transparent !important;
  color: #e91e63 !important;
  border: 1px solid #e91e63 !important;
  min-height: 44px !important; /* Altura mínima para facilitar tap en móvil */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.btn-back:hover {
  background: rgba(233, 30, 99, 0.08) !important;
  border-color: #d81b60 !important;
  color: #d81b60 !important;
}

.btn-text {
  margin: 0 5px !important;
}

.btn-icon {
  font-size: 16px !important;
  transition: transform 0.2s !important;
}

.btn-continue:hover .btn-icon {
  transform: translateX(3px) !important;
}

.btn-back:hover .btn-icon {
  transform: translateX(-3px) !important;
}

/* Footer de versión moderno */
.requirements-view .version-footer-modern {
  text-align: center !important;
  font-size: 11px !important;
  color: #999 !important;
  margin-top: 12px !important;
  opacity: 0.8 !important;
}

/* SVG estilos para iconos de requisitos */
.requirement-icon-wrapper svg {
  width: 100% !important;
  height: 100% !important;
  max-width: 40px !important;
  max-height: 40px !important;
}

.requirement-icon-wrapper svg rect,
.requirement-icon-wrapper svg circle,
.requirement-icon-wrapper svg path {
  fill: #e91e63 !important;
  stroke: #e91e63 !important;
}
`;

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
  
  console.log('🎨 Microfrontend - Estilos consolidados inyectados:', {
    resetStyles: RESET_STYLES.length,
    presentationStyles: PRESENTATION_STYLES.length,
    buttonStyles: BUTTON_STYLES.length,
    requirementsStyles: REQUIREMENTS_STYLES.length,
    loadingStyles: LOADING_STYLES.length,
    totalLength: getAllMicrofrontendStyles().length
  });
}

// ==========================================
// METADATA DEL COMPONENTE
// ==========================================
export const MICROFRONTEND_METADATA = {
  version: '1.0.0',
  architecture: 'microfrontend',
  encapsulation: 'shadow-dom',
  target: 'vue-integration',
  stylesConsolidated: true,
  lastUpdated: '2025-08-07'
};
