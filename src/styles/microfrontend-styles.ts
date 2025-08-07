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
