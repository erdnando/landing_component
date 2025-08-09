/**
 * PUNTO ÚNICO DE VERDAD - Estilos para Microfrontend RESPONSIVO
 * Este archivo consolida TODOS los estilos necesarios para el Web Component
 * Diseñado específicamente para arquitectura de microfrontend con Shadow DOM
 * COMPLETAMENTE RESPONSIVO para smartphones y tabletas en orientación vertical
 */

// ==========================================
// ESTILOS BASE Y RESET RESPONSIVOS
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

/* SISTEMA DE BREAKPOINTS RESPONSIVOS */
:root {
  /* Pequeños smartphones (iPhone SE, 5/5s) */
  --bp-xs: 320px;
  /* Smartphones estándar (iPhone 6/7/8) */
  --bp-sm: 375px;
  /* Smartphones grandes (iPhone Plus, Galaxy S) */
  --bp-md: 414px;
  /* Phablets (iPhone Max, Pixel XL) */
  --bp-lg: 480px;
  /* Tabletas pequeñas vertical */
  --bp-xl: 768px;
  /* Tabletas medianas vertical */
  --bp-xxl: 834px;
  /* Tabletas grandes vertical */
  --bp-xxxl: 1024px;

  /* Variables de espaciado responsivo */
  --spacing-xs: clamp(8px, 2vw, 12px);
  --spacing-sm: clamp(12px, 3vw, 16px);
  --spacing-md: clamp(16px, 4vw, 24px);
  --spacing-lg: clamp(24px, 6vw, 32px);
  --spacing-xl: clamp(32px, 8vw, 48px);

  /* Variables de tipografía responsiva */
  --font-size-xs: clamp(10px, 2.5vw, 12px);
  --font-size-sm: clamp(12px, 3vw, 14px);
  --font-size-md: clamp(14px, 3.5vw, 16px);
  --font-size-lg: clamp(16px, 4vw, 20px);
  --font-size-xl: clamp(20px, 5vw, 28px);
  --font-size-xxl: clamp(28px, 7vw, 36px);
  --font-size-hero: clamp(32px, 8vw, 48px);

  /* Variables de dimensiones responsivas */
  --container-width: clamp(320px, 100vw, 100vw);
  --container-max-width: min(100vw, 1024px);
  --container-height: clamp(568px, 100vh, 100vh);
  --content-padding: clamp(16px, 4vw, 32px);
  --border-radius: clamp(8px, 2vw, 16px);
}

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
  background-color: #e91e63 !important;
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

/* RESPONSIVE BREAKPOINTS */

/* Smartphones pequeños (320px - 374px) */
@media screen and (max-width: 374px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 12px !important;
    min-height: 568px !important;
  }
  
  .app {
    min-height: 568px !important;
  }
}

/* Smartphones estándar (375px - 413px) */
@media screen and (min-width: 375px) and (max-width: 413px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 16px !important;
    min-height: 667px !important;
  }
  
  .app {
    min-height: 667px !important;
  }
}

/* Smartphones grandes (414px - 479px) */
@media screen and (min-width: 414px) and (max-width: 479px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 20px !important;
    min-height: 736px !important;
  }
  
  .app {
    min-height: 736px !important;
  }
}

/* Phablets (480px - 767px) */
@media screen and (min-width: 480px) and (max-width: 767px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 24px !important;
    min-height: 800px !important;
  }
  
  .app {
    min-height: 800px !important;
  }
}

/* Tabletas pequeñas (768px - 833px) */
@media screen and (min-width: 768px) and (max-width: 833px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 32px !important;
    min-height: 1024px !important;
  }
  
  .app {
    min-height: 1024px !important;
  }
}

/* Tabletas medianas (834px - 1023px) */
@media screen and (min-width: 834px) and (max-width: 1023px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 40px !important;
    min-height: 1112px !important;
  }
  
  .app {
    min-height: 1112px !important;
  }
}

/* Tabletas grandes (1024px+) */
@media screen and (min-width: 1024px) {
  .landing-component-container,
  .basicos-component-container,
  .legales-component-container,
  .sms-component-container,
  .ine-component-container,
  .selfie-component-container,
  .capturarapida-component-container,
  .capturacompleta-component-container,
  .altaproducto-component-container {
    padding: 48px !important;
    min-height: 1366px !important;
  }
  
  .app {
    min-height: 1366px !important;
  }
}
`;

// ==========================================
// ESTILOS DE PRESENTACIÓN RESPONSIVOS
// ==========================================
export const PRESENTATION_STYLES = `
/* Vista de presentación - BASE RESPONSIVA */
.presentation-view {
  background: #e91e63 !important;
  background: linear-gradient(135deg, #e91e63, #c2185b) !important;
  color: white !important;
  text-align: center !important;
  padding: var(--content-padding) !important;
  height: 100% !important;
  min-height: var(--container-height) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  position: relative !important;
  overflow: auto !important;
  width: 100% !important;
  max-width: var(--container-max-width) !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
  box-sizing: border-box !important;
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

/* Título principal - RESPONSIVO */
.main-title-modern {
  position: relative !important;
  z-index: 2 !important;
  margin-bottom: var(--spacing-lg) !important;
  padding: var(--spacing-md) 0 !important;
}

.main-title-modern h1 {
  font-size: var(--font-size-hero) !important;
  font-weight: bold !important;
  color: white !important;
  margin-bottom: var(--spacing-sm) !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
  line-height: 1.2 !important;
  letter-spacing: -0.5px !important;
}

.main-title-modern p {
  font-size: var(--font-size-lg) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  margin-top: var(--spacing-sm) !important;
  line-height: 1.4 !important;
  font-weight: 300 !important;
}

/* Tarjeta de crédito - RESPONSIVA */
.credit-card {
  position: relative !important;
  z-index: 2 !important;
  width: clamp(180px, 45vw, 280px) !important;
  height: clamp(110px, 28vw, 170px) !important;
  margin: var(--spacing-xl) auto !important;
  background: linear-gradient(135deg, #f8f8f8, #e0e0e0) !important;
  border-radius: var(--border-radius) !important;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
  overflow: hidden !important;
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) !important;
  transition: transform 0.3s ease !important;
}

.credit-card:hover {
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) !important;
}

.credit-card::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  ) !important;
  z-index: 1 !important;
}

/* Contenido de la tarjeta - RESPONSIVO */
.card-header {
  padding: var(--spacing-sm) var(--spacing-md) !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  background: linear-gradient(90deg, 
    rgba(233, 30, 99, 0.1) 0%, 
    rgba(233, 30, 99, 0.05) 100%) !important;
}

.card-logos {
  display: flex !important;
  gap: var(--spacing-xs) !important;
  align-items: center !important;
}

.logo-text {
  font-size: var(--font-size-xs) !important;
  font-weight: bold !important;
  color: #e91e63 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

.card-chip {
  width: clamp(20px, 5vw, 32px) !important;
  height: clamp(16px, 4vw, 24px) !important;
  background: linear-gradient(45deg, #d4af37, #ffd700) !important;
  border-radius: 3px !important;
  position: relative !important;
  box-shadow: 
    inset 0 1px 2px rgba(0, 0, 0, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.1) !important;
}

.card-chip::after {
  content: "" !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 60% !important;
  height: 60% !important;
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 2px,
    transparent 2px,
    transparent 4px
  ) !important;
}

.card-number {
  text-align: center !important;
  margin: var(--spacing-md) 0 !important;
  position: relative !important;
  z-index: 2 !important;
}

.card-number span {
  font-size: var(--font-size-md) !important;
  color: #333 !important;
  font-weight: 500 !important;
  letter-spacing: 2px !important;
  font-family: 'Courier New', monospace !important;
}

.card-footer {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0 var(--spacing-md) var(--spacing-sm) !important;
  margin-top: auto !important;
}

.card-holder {
  font-size: var(--font-size-xs) !important;
  color: #666 !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

.card-expiry {
  font-size: var(--font-size-xs) !important;
  color: #666 !important;
  font-weight: 500 !important;
  font-family: 'Courier New', monospace !important;
}

/* Sección de beneficios - RESPONSIVA */
.benefits-section-modern {
  position: relative !important;
  z-index: 2 !important;
  margin-top: var(--spacing-lg) !important;
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: var(--spacing-md) !important;
}

.benefits-title-modern h2 {
  font-size: var(--font-size-xl) !important;
  color: white !important;
  margin-bottom: var(--spacing-lg) !important;
  font-weight: bold !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
  line-height: 1.3 !important;
}

.benefits-grid-modern {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(clamp(140px, 35vw, 200px), 1fr)) !important;
  gap: var(--spacing-md) !important;
  align-items: start !important;
  justify-content: center !important;
  padding: 0 var(--spacing-sm) !important;
}

/* Beneficio individual - RESPONSIVO */
.benefit-item-modern {
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: var(--border-radius) !important;
  padding: var(--spacing-md) !important;
  text-align: center !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease !important;
  min-height: clamp(120px, 25vw, 160px) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.benefit-item-modern:hover {
  transform: translateY(-4px) !important;
  background: rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
}

.benefit-icon-wrapper {
  margin-bottom: var(--spacing-sm) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: clamp(40px, 10vw, 60px) !important;
  height: clamp(40px, 10vw, 60px) !important;
  background: rgba(255, 255, 255, 0.2) !important;
  border-radius: 50% !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
}

.benefit-icon {
  font-size: clamp(18px, 5vw, 28px) !important;
  color: white !important;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)) !important;
}

.benefit-text h3 {
  font-size: var(--font-size-md) !important;
  color: white !important;
  margin-bottom: var(--spacing-xs) !important;
  font-weight: bold !important;
  line-height: 1.3 !important;
}

.benefit-text p {
  font-size: var(--font-size-sm) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  line-height: 1.4 !important;
  margin: 0 !important;
}

/* Botón de acción - RESPONSIVO */
.action-section-modern {
  position: relative !important;
  z-index: 2 !important;
  margin-top: var(--spacing-xl) !important;
  padding: var(--spacing-lg) 0 !important;
}

.action-button-modern {
  background: linear-gradient(135deg, #fff, #f0f0f0) !important;
  color: #e91e63 !important;
  border: none !important;
  padding: var(--spacing-md) var(--spacing-xl) !important;
  border-radius: 50px !important;
  font-size: var(--font-size-lg) !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
  border: 2px solid transparent !important;
  outline: none !important;
  display: block !important;
  margin: 0 auto !important;
  width: fit-content !important;
  min-width: clamp(200px, 50vw, 280px) !important;
}

.action-button-modern:hover {
  transform: translateY(-2px) scale(1.02) !important;
  background: linear-gradient(135deg, #ffffff, #f8f8f8) !important;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.25),
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}

.action-button-modern:active {
  transform: translateY(0) scale(0.98) !important;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.7) !important;
}

/* RESPONSIVE BREAKPOINTS ESPECÍFICOS PARA PRESENTACIÓN */

/* Smartphones pequeños (hasta 374px) */
@media screen and (max-width: 374px) {
  .presentation-view {
    padding: 12px !important;
  }
  
  .main-title-modern h1 {
    font-size: 24px !important;
  }
  
  .credit-card {
    width: 160px !important;
    height: 100px !important;
    margin: 16px auto !important;
  }
  
  .benefits-grid-modern {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
  
  .benefit-item-modern {
    min-height: 100px !important;
    padding: 12px !important;
  }
}

/* Smartphones estándar (375px - 413px) */
@media screen and (min-width: 375px) and (max-width: 413px) {
  .benefits-grid-modern {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* Smartphones grandes y phablets (414px - 767px) */
@media screen and (min-width: 414px) and (max-width: 767px) {
  .benefits-grid-modern {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px !important;
  }
  
  .credit-card {
    width: 240px !important;
    height: 150px !important;
  }
}

/* Tabletas (768px+) */
@media screen and (min-width: 768px) {
  .benefits-grid-modern {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 32px !important;
    max-width: 600px !important;
    margin: 0 auto !important;
  }
  
  .credit-card {
    width: 280px !important;
    height: 170px !important;
  }
  
  .action-button-modern {
    min-width: 320px !important;
    padding: 20px 48px !important;
  }
}

/* Tabletas grandes (1024px+) */
@media screen and (min-width: 1024px) {
  .presentation-view {
    max-width: 800px !important;
  }
  
  .benefits-grid-modern {
    grid-template-columns: repeat(2, 1fr) !important;
    max-width: 700px !important;
  }
}
`;

// ==========================================
// ESTILOS DE BOTONES RESPONSIVOS
// ==========================================
export const BUTTON_STYLES = `
/* DEFINICIÓN ÚNICA - Botones base RESPONSIVOS */
.btn {
  display: inline-block !important;
  padding: clamp(10px, 3vw, 16px) clamp(20px, 5vw, 32px) !important;
  border: none !important;
  border-radius: 25px !important;
  background: white !important;
  color: #e91e63 !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  text-align: center !important;
  min-width: clamp(120px, 30vw, 180px) !important;
  font-size: var(--font-size-md) !important;
  margin: var(--spacing-sm) 0 !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
  text-decoration: none !important;
  letter-spacing: 0.5px !important;
}

.btn:hover {
  background: #f5f5f5 !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
}

.btn:active {
  transform: translateY(0) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
}

/* Botón primario responsivo */
.btn-primary {
  background: linear-gradient(135deg, #ffffff, #f8f8f8) !important;
  color: #e91e63 !important;
  font-weight: bold !important;
  padding: clamp(12px, 3vw, 18px) clamp(24px, 6vw, 36px) !important;
  min-width: clamp(150px, 40vw, 220px) !important;
  font-size: var(--font-size-lg) !important;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(10px) !important;
  padding: clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 28px) !important;
  font-size: var(--font-size-md) !important;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}
`;

// ==========================================
// ESTILOS DE REQUIREMENTS RESPONSIVOS
// ==========================================
export const REQUIREMENTS_STYLES = `
/* Vista de requerimientos - BASE RESPONSIVA */
.requirements-view {
  background: #e91e63 !important;
  background: linear-gradient(135deg, #e91e63, #c2185b) !important;
  color: white !important;
  padding: var(--content-padding) !important;
  height: 100% !important;
  min-height: var(--container-height) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  position: relative !important;
  overflow: auto !important;
  width: 100% !important;
  max-width: var(--container-max-width) !important;
  margin: 0 auto !important;
  font-family: Arial, Helvetica, sans-serif !important;
  box-sizing: border-box !important;
}

/* Header responsivo */
.requirements-header {
  position: relative !important;
  z-index: 2 !important;
  margin-bottom: var(--spacing-lg) !important;
  text-align: center !important;
}

.requirements-header h2 {
  font-size: var(--font-size-xl) !important;
  color: white !important;
  margin-bottom: var(--spacing-md) !important;
  font-weight: bold !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
  line-height: 1.3 !important;
}

.requirements-header p {
  font-size: var(--font-size-md) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  line-height: 1.4 !important;
  margin-bottom: var(--spacing-lg) !important;
}

/* Lista de requerimientos responsiva */
.requirements-list {
  display: flex !important;
  flex-direction: column !important;
  gap: var(--spacing-md) !important;
  margin-bottom: var(--spacing-xl) !important;
}

.requirement-item {
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: var(--border-radius) !important;
  padding: var(--spacing-md) !important;
  display: flex !important;
  align-items: center !important;
  gap: var(--spacing-md) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease !important;
}

.requirement-item:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.requirement-icon-wrapper {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: clamp(40px, 10vw, 60px) !important;
  height: clamp(40px, 10vw, 60px) !important;
  background: rgba(255, 255, 255, 0.2) !important;
  border-radius: 50% !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  flex-shrink: 0 !important;
}

.requirement-icon {
  font-size: clamp(18px, 5vw, 28px) !important;
  color: white !important;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)) !important;
}

.requirement-text {
  flex: 1 !important;
}

.requirement-text h3 {
  font-size: var(--font-size-lg) !important;
  color: white !important;
  margin-bottom: var(--spacing-xs) !important;
  font-weight: bold !important;
  line-height: 1.3 !important;
}

.requirement-text p {
  font-size: var(--font-size-sm) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  line-height: 1.4 !important;
  margin: 0 !important;
}

/* Botones de acción responsivos */
.requirements-actions {
  display: flex !important;
  flex-direction: column !important;
  gap: var(--spacing-md) !important;
  margin-top: auto !important;
  padding-top: var(--spacing-lg) !important;
}

@media screen and (min-width: 480px) {
  .requirements-actions {
    flex-direction: row !important;
    justify-content: space-between !important;
  }
}

.requirements-back-btn,
.requirements-continue-btn {
  flex: 1 !important;
  padding: var(--spacing-md) var(--spacing-lg) !important;
  border-radius: 50px !important;
  font-size: var(--font-size-md) !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  border: none !important;
  outline: none !important;
  min-height: 48px !important;
}

.requirements-back-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(10px) !important;
}

.requirements-back-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
  transform: translateY(-2px) !important;
}

.requirements-continue-btn {
  background: linear-gradient(135deg, #fff, #f0f0f0) !important;
  color: #e91e63 !important;
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
}

.requirements-continue-btn:hover {
  transform: translateY(-2px) scale(1.02) !important;
  background: linear-gradient(135deg, #ffffff, #f8f8f8) !important;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.25),
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
}

/* SVG icons responsivos */
.requirement-icon-wrapper svg {
  width: 60% !important;
  height: 60% !important;
  fill: currentColor !important;
}

.requirement-icon-wrapper svg rect,
.requirement-icon-wrapper svg circle,
.requirement-icon-wrapper svg path {
  fill: #e91e63 !important;
  stroke: #e91e63 !important;
}
`;

// ==========================================
// ESTILOS DE LOADING VIEW RESPONSIVOS
// ==========================================
export const LOADING_STYLES = `
/* ESTILOS PRINCIPALES DEL LOADING VIEW - RESPONSIVO */

/* Container principal - DIMENSIONES RESPONSIVAS */
.loading-view-fullscreen {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-width: var(--container-max-width) !important;
  min-width: 320px !important;
  min-height: var(--container-height) !important;
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
  padding: var(--content-padding) !important;
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

/* Fondo animado responsivo */
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

/* Header con logos flotantes - RESPONSIVO */
.header-logos-floating {
  position: absolute !important;
  top: clamp(60px, 15vh, 120px) !important;
  left: 0 !important;
  width: 100% !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0 var(--spacing-xl) !important;
  z-index: 5 !important;
}

.bradescard-logo-glow, .promoda-logo-glow {
  font-size: var(--font-size-lg) !important;
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

/* COHETE ANIMADO - RESPONSIVO */
.rocket-launch-container {
  position: absolute !important;
  top: clamp(120px, 25vh, 200px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: clamp(80px, 20vw, 150px) !important;
  height: clamp(120px, 30vw, 250px) !important;
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
  width: clamp(30px, 8vw, 50px) !important;
  height: clamp(60px, 15vw, 120px) !important;
  background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 50%, #a8a8a8 100%) !important;
  border-radius: clamp(15px, 4vw, 25px) clamp(15px, 4vw, 25px) clamp(6px, 2vw, 10px) clamp(6px, 2vw, 10px) !important;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 2px 0 rgba(255, 255, 255, 0.4),
    inset 0 -2px 0 rgba(0, 0, 0, 0.2) !important;
}

.rocket-tip {
  position: absolute !important;
  top: -10px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 0 !important;
  height: 0 !important;
  border-left: clamp(10px, 3vw, 18px) solid transparent !important;
  border-right: clamp(10px, 3vw, 18px) solid transparent !important;
  border-bottom: clamp(15px, 4vw, 25px) solid #ff4757 !important;
  filter: drop-shadow(0 0 10px rgba(255, 71, 87, 0.6)) !important;
}

/* Resto de elementos del cohete con dimensiones responsivas */
.rocket-window {
  position: absolute !important;
  top: clamp(12px, 3vw, 20px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: clamp(12px, 3vw, 20px) !important;
  height: clamp(12px, 3vw, 20px) !important;
  background: radial-gradient(circle, #87ceeb 30%, #4169e1 70%) !important;
  border-radius: 50% !important;
  box-shadow: 
    0 0 15px rgba(135, 206, 235, 0.8),
    inset 0 -2px 2px rgba(0, 0, 0, 0.2) !important;
  animation: windowGlow 2s ease-in-out infinite alternate !important;
}

/* CONTENIDO PRINCIPAL RESPONSIVO */
.loading-content-center {
  position: relative !important;
  z-index: 3 !important;
  text-align: center !important;
  color: white !important;
  margin-top: clamp(180px, 40vh, 350px) !important;
  padding: 0 var(--spacing-md) !important;
}

.loading-title-epic {
  margin-bottom: var(--spacing-xl) !important;
}

.loading-title-epic h1 {
  font-size: var(--font-size-hero) !important;
  font-weight: bold !important;
  color: #ffffff !important;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.8) !important;
  margin: 0 0 var(--spacing-md) 0 !important;
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
  width: clamp(100px, 40vw, 200px) !important;
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

/* BARRA DE PROGRESO RESPONSIVA */
.progress-container {
  margin: var(--spacing-xl) auto !important;
  width: clamp(200px, 70vw, 350px) !important;
}

.progress-bar {
  width: 100% !important;
  height: clamp(8px, 2vw, 16px) !important;
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

.progress-text {
  text-align: center !important;
  margin-top: var(--spacing-md) !important;
  font-size: var(--font-size-lg) !important;
  font-weight: bold !important;
  color: #00d4ff !important;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.8) !important;
  animation: numberPulse 1s ease-in-out infinite !important;
}

/* MENSAJE DE LOADING RESPONSIVO */
.loading-message-epic {
  margin: var(--spacing-xl) auto !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: var(--spacing-md) !important;
}

.message-text {
  font-size: var(--font-size-md) !important;
  color: #e8e8e8 !important;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3) !important;
  margin: 0 !important;
  font-weight: 500 !important;
  text-align: center !important;
}

/* FOOTER RESPONSIVO */
.loading-footer-minimal {
  position: absolute !important;
  bottom: var(--spacing-lg) !important;
  left: 0 !important;
  width: 100% !important;
  text-align: center !important;
  z-index: 3 !important;
  padding: 0 var(--spacing-md) !important;
}

.loading-footer-minimal p {
  font-size: var(--font-size-xs) !important;
  color: rgba(255, 255, 255, 0.6) !important;
  margin: 0 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
}

/* RESPONSIVE BREAKPOINTS ESPECÍFICOS PARA LOADING */

/* Smartphones pequeños (hasta 374px) */
@media screen and (max-width: 374px) {
  .loading-view-fullscreen {
    padding: 12px !important;
  }
  
  .rocket-launch-container {
    width: 60px !important;
    height: 90px !important;
  }
  
  .progress-container {
    width: 180px !important;
  }
}

/* Tabletas (768px+) */
@media screen and (min-width: 768px) {
  .loading-view-fullscreen {
    max-width: 600px !important;
  }
  
  .rocket-launch-container {
    width: 140px !important;
    height: 220px !important;
  }
  
  .progress-container {
    width: 400px !important;
  }
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
