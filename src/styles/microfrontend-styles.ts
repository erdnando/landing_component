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

  /* Variables de altura por breakpoint */
  --height-xs: clamp(568px, 100vh, 100vh);      /* iPhone SE */
  --height-sm: clamp(667px, 100vh, 100vh);      /* iPhone 6/7/8 */
  --height-md: clamp(736px, 100vh, 100vh);      /* iPhone Plus */
  --height-lg: clamp(800px, 100vh, 100vh);      /* Phablets */
  --height-xl: clamp(1024px, 100vh, 100vh);     /* iPad Mini */
  --height-xxl: clamp(1112px, 100vh, 100vh);    /* iPad */
  --height-xxxl: clamp(1366px, 100vh, 100vh);   /* iPad Pro */
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
    min-height: var(--height-xs) !important;
  }
  
  .app {
    min-height: var(--height-xs) !important;
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
    min-height: var(--height-sm) !important;
  }
  
  .app {
    min-height: var(--height-sm) !important;
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
    min-height: var(--height-md) !important;
  }
  
  .app {
    min-height: var(--height-md) !important;
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
    min-height: var(--height-lg) !important;
  }
  
  .app {
    min-height: var(--height-lg) !important;
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
    min-height: var(--height-xl) !important;
  }
  
  .app {
    min-height: var(--height-xl) !important;
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
    min-height: var(--height-xxl) !important;
  }
  
  .app {
    min-height: var(--height-xxl) !important;
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
    min-height: var(--height-xxxl) !important;
  }
  
  .app {
    min-height: var(--height-xxxl) !important;
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
  animation: viewFadeIn 700ms ease-out 120ms both !important;
}

/* Encabezado de marcas en presentación */
.header-logos-modern {
  position: absolute !important;
  top: max(8px, env(safe-area-inset-top)) !important;
  left: 0 !important;
  right: 0 !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding-left: max(12px, env(safe-area-inset-left)) !important;
  padding-right: max(12px, env(safe-area-inset-right)) !important;
  gap: 8px !important;
  font-size: clamp(12px, 3.2vw, 16px) !important;
  color: rgba(255,255,255,0.9) !important;
  z-index: 3 !important;
  line-height: 1.1 !important;
  text-align: initial !important;
  pointer-events: none !important; /* evita bloquear clics del contenido */
}

/* Posiciona y recorta los textos de marca en el header */
.header-logos-modern .bradescard-logo,
.header-logos-modern .promoda-logo {
  font-weight: 700 !important;
  letter-spacing: 0.2px !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 46% !important; /* evita empalmes en pantallas muy angostas */
}

.header-logos-modern .promoda-logo {
  margin-left: auto !important; /* asegura alineación a la derecha */
  text-align: right !important;
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

/* Fade-in de vistas para evitar flash blanco */
@keyframes viewFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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
  width: clamp(162px, 40.5vw, 252px) !important; /* ~10% smaller */
  height: clamp(99px, 25.2vw, 153px) !important;  /* ~10% smaller */
  margin: var(--spacing-lg) auto !important;
  background:
    radial-gradient(120% 60% at 0% 0%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0) 60%) ,
    linear-gradient(135deg, #f7f7fa, #e5e6ee 40%, #d8d9e4) !important;
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
  background:
    linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%),
    repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 4px) !important; /* subtle texture */
  z-index: 1 !important;
}

/* brand strip */
.credit-card::after {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 34% !important;
  background: linear-gradient(90deg, rgba(233,30,99,0.12), rgba(233,30,99,0.06)) !important;
  z-index: 0 !important;
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

/* Marca y brillo de la tarjeta */
.card-brand {
  position: absolute !important;
  top: clamp(8px, 2vw, 12px) !important;
  left: clamp(10px, 2.5vw, 14px) !important;
  font-size: clamp(10px, 2.8vw, 12px) !important;
  font-weight: bold !important;
  color: #c2185b !important;
  text-transform: uppercase !important;
  letter-spacing: 0.6px !important;
  z-index: 2 !important;
}

.card-image-container { display: flex !important; justify-content: center !important; }
.card-image { position: relative !important; }
.card-shine {
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%) !important;
  mix-blend-mode: screen !important;
  pointer-events: none !important;
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
  font-size: clamp(12px, 3.4vw, 15px) !important;
  color: #2f2f2f !important;
  font-weight: 600 !important;
  letter-spacing: 2.2px !important;
  font-family: 'OCR A Std', 'Courier New', monospace !important;
  text-shadow: 0.5px 0.5px 0 #ffffff, -0.5px -0.5px 0 rgba(0,0,0,0.15) !important; /* embossed */
}

.card-footer {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0 var(--spacing-md) var(--spacing-sm) !important;
  margin-top: auto !important;
}

.card-holder {
  font-size: clamp(9px, 2.4vw, 11px) !important;
  color: #5a5a5a !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

.card-expiry {
  font-size: clamp(9px, 2.4vw, 11px) !important;
  color: #5a5a5a !important;
  font-weight: 700 !important;
  font-family: 'OCR A Std', 'Courier New', monospace !important;
  letter-spacing: 1.2px !important;
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
  align-items: stretch !important; /* ensure equal height within row */
  justify-content: center !important;
  padding: 0 var(--spacing-sm) !important;
}

/* Alinear estilos para la clase usada en el JSX */
.benefit-card-modern {
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: var(--border-radius) !important;
  padding: var(--spacing-md) !important;
  text-align: center !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease !important;
  min-height: clamp(120px, 25vw, 160px) !important;
  height: 100% !important; /* fill row height */
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.benefit-card-modern.highlight {
  border-color: rgba(255,255,255,0.35) !important;
}

/* Contenido interno de los beneficios */
.benefit-percent, .benefit-value, .benefit-icon {
  font-weight: 800 !important;
  font-size: clamp(16px, 6.5vw, 28px) !important;
  line-height: 1 !important;
}

.benefit-desc { text-align: center !important; }
.benefit-desc strong { font-size: var(--font-size-md) !important; }
.benefit-desc p { font-size: var(--font-size-sm) !important; opacity: 0.95 !important; }

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

/* Badge promocional compacto */
.promo-badge {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: var(--spacing-xs) !important;
  margin: var(--spacing-md) 0 !important;
  color: rgba(255,255,255,0.95) !important;
}
.promo-icon { font-size: var(--font-size-md) !important; opacity: 0.9 !important; }
.promo-tagline { font-size: var(--font-size-sm) !important; font-weight: 600 !important; }

/* Instrucción simple compacta */
.simple-instruction-container { 
  display: flex !important; align-items: center !important; justify-content: center !important; 
  gap: var(--spacing-sm) !important; margin: var(--spacing-md) 0 clamp(2px, 0.6vh, 6px) !important; 
}
.instruction-icon { opacity: 0.95 !important; }
.simple-instruction { font-size: var(--font-size-md) !important; }

/* Botón iniciar específico (hereda de .btn .btn-primary) */
.btn-start-modern { margin-top: auto !important; }

/* Footer legal compacto */
.legal-footer-modern { margin-top: clamp(2px, 0.8vh, 8px) !important; padding-top: var(--spacing-xs) !important; opacity: 0.85 !important; }
.legal-footer-modern p { font-size: var(--font-size-xs) !important; }
.legal-footer-modern .footer-link { color: #fff !important; text-decoration: underline !important; display: inline !important; }

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

/* Ultra-compact phones (320px–359px) */
@media screen and (min-width: 320px) and (max-width: 359px) {
  .main-title-modern { margin-bottom: var(--spacing-sm) !important; }
  .benefits-grid-modern { grid-template-columns: 1fr !important; gap: 10px !important; }
  .benefit-card-modern { 
    min-height: 79px !important; /* ~10% shorter */
    padding: 8px 10px !important; 
    flex-direction: row !important; 
    align-items: center !important; 
    justify-content: flex-start !important; 
    gap: 8px !important; 
    height: auto !important; 
  }
  .benefit-icon-wrapper { width: 30px !important; height: 30px !important; margin-bottom: 0 !important; flex-shrink: 0 !important; }
  .benefit-percent, .benefit-value, .benefit-icon { font-size: clamp(13px, 5.5vw, 17px) !important; }
  .benefit-desc { text-align: left !important; }
  .benefit-desc strong { font-size: var(--font-size-sm) !important; line-height: 1.2 !important; }
  .benefit-desc p { font-size: var(--font-size-xs) !important; line-height: 1.2 !important; }
  .promo-badge { margin: 8px 0 6px !important; }
  .credit-card { width: 146px !important; height: 90px !important; margin: 10px auto !important; }
  .simple-instruction-container { margin: 8px 0 0 !important; gap: 8px !important; }
}

/* Corrección para Galaxy S8+ (360px-374px): 2 columnas y espaciado reducido */
@media screen and (min-width: 360px) and (max-width: 374px) {
  .main-title-modern { margin-bottom: var(--spacing-sm) !important; }
  .main-title-modern h1 { line-height: 1.15 !important; }

  .benefits-grid-modern { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
  .benefit-card-modern { 
    min-height: 96px !important; 
    padding: 10px 12px !important; 
    flex-direction: row !important; 
    align-items: center !important; 
    justify-content: flex-start !important; 
    gap: 10px !important; 
    height: auto !important; 
  }
  .benefit-icon-wrapper { width: 34px !important; height: 34px !important; margin-bottom: 0 !important; flex-shrink: 0 !important; }
  .benefit-percent, .benefit-value, .benefit-icon { font-size: clamp(14px, 5.5vw, 18px) !important; }
  .benefit-desc { text-align: left !important; }
  .benefit-desc strong { font-size: var(--font-size-sm) !important; line-height: 1.2 !important; }
  .benefit-desc p { font-size: var(--font-size-xs) !important; line-height: 1.2 !important; }

  .promo-badge { margin: 8px 0 6px !important; }
  .promo-tagline { font-size: 13px !important; }

  .credit-card { width: 150px !important; height: 94px !important; margin: 12px auto !important; }

  .simple-instruction-container { margin: 8px 0 2px !important; gap: 8px !important; }
  .simple-instruction-container .instruction-icon svg { width: 14px !important; height: 14px !important; }
  .simple-instruction { font-size: 14px !important; }

  .btn-start-modern { margin-top: auto !important; }
}

/* Smartphones estándar (375px - 413px) */
@media screen and (min-width: 375px) and (max-width: 413px) {
  .benefits-grid-modern { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
  .benefit-card-modern { min-height: 116px !important; }
  .promo-badge { margin: 10px 0 8px !important; }
  .credit-card { margin: 14px auto !important; }
  .simple-instruction-container { margin: 10px 0 4px !important; }
}

/* Smartphones grandes y phablets (414px - 767px) */
@media screen and (min-width: 414px) and (max-width: 767px) {
  .main-title-modern { margin-bottom: var(--spacing-md) !important; }
  .benefits-grid-modern { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
  .benefit-card-modern { min-height: 120px !important; }
  .promo-badge { margin: 10px 0 8px !important; }
  .credit-card { width: 220px !important; height: 140px !important; margin: 12px auto !important; }
  .simple-instruction-container { margin: 10px 0 0 !important; gap: 10px !important; }
  .simple-instruction { font-size: 15px !important; }
  .btn-start-modern { margin-top: auto !important; }
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

/* iPad mini (768px-834px) reduce verticalidad */
@media screen and (min-width: 768px) and (max-width: 834px) {
  .main-title-modern { margin-bottom: var(--spacing-md) !important; }
  .credit-card { margin: var(--spacing-lg) auto !important; width: 260px !important; height: 158px !important; }
  .benefits-grid-modern { gap: 22px !important; }
  .promo-badge { margin: 12px 0 10px !important; }
  .simple-instruction-container { margin: 12px 0 0 !important; }
  .action-button-modern { margin-top: var(--spacing-md) !important; }
}

/* Compactación por altura para que quepa todo el contenido */
@media screen and (max-height: 820px) {
  .presentation-view { padding-top: clamp(8px, 2vh, 16px) !important; }
  .main-title-modern { margin-bottom: var(--spacing-sm) !important; }
  .main-title-modern h1 { font-size: clamp(22px, 6.5vw, 30px) !important; }
  .benefits-section-modern { margin-top: var(--spacing-md) !important; gap: var(--spacing-sm) !important; }
  .benefits-grid-modern { gap: clamp(8px, 2.5vw, 16px) !important; align-items: stretch !important; }
  .benefit-card-modern { min-height: clamp(100px, 22vw, 140px) !important; padding: clamp(10px, 2.8vw, 14px) !important; height: 100% !important; }
  .benefit-icon-wrapper { width: clamp(36px, 9vw, 52px) !important; height: clamp(36px, 9vw, 52px) !important; }
  .credit-card { width: clamp(180px, 55vw, 260px) !important; height: clamp(110px, 35vw, 158px) !important; margin: clamp(8px, 2vh, 16px) auto !important; }
  .btn { font-size: clamp(14px, 3.6vw, 16px) !important; padding: clamp(10px, 2.8vw, 14px) clamp(20px, 6vw, 28px) !important; }
}

/* Slightly shorter phones: compress a bit more */
@media screen and (max-height: 780px) and (min-width: 360px) and (max-width: 480px) {
  .benefits-grid-modern { gap: 10px !important; }
  .promo-badge { margin: 8px 0 6px !important; }
  .credit-card { margin: 10px auto !important; }
  .simple-instruction-container { margin: 8px 0 0 !important; }
}
/* iPhone SE-like height (e.g., 375x667): compact horizontal benefit cards */
@media screen and (min-width: 375px) and (max-width: 413px) and (max-height: 740px) {
  .benefit-card-modern {
    min-height: 56px !important; /* ~10% shorter */
    padding: 8px 12px !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-start !important;
    gap: 8px !important;
    height: auto !important;
  }
  .benefit-icon-wrapper { width: 32px !important; height: 32px !important; margin-bottom: 0 !important; flex-shrink: 0 !important; }
  .benefit-percent, .benefit-value, .benefit-icon { font-size: clamp(13px, 5vw, 17px) !important; }
  .benefit-desc { text-align: left !important; }
  .benefit-desc strong { font-size: var(--font-size-sm) !important; line-height: 1.2 !important; }
  .benefit-desc p { font-size: var(--font-size-xs) !important; line-height: 1.2 !important; }
}

@media screen and (max-height: 700px) {
  .benefits-grid-modern { grid-template-columns: 1fr !important; }
  .main-title-modern h1 { font-size: clamp(20px, 6vw, 26px) !important; }
  .credit-card { width: clamp(160px, 60vw, 220px) !important; height: clamp(100px, 34vw, 140px) !important; }
  .legal-footer-modern { margin-top: clamp(4px, 1vh, 10px) !important; }
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

/* START button tweaks: compact height and hide arrow icon */
.btn.btn-primary.btn-start-modern {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: clamp(10px, 2.6vw, 14px) clamp(22px, 6vw, 30px) !important;
  min-width: clamp(170px, 46vw, 240px) !important;
  line-height: 1.15 !important;
}
.btn-start-modern .btn-icon { display: none !important; }

/* Extra compact for small widths */
@media screen and (max-width: 374px) {
  .btn.btn-primary.btn-start-modern {
    padding: 10px 18px !important;
    min-width: 160px !important;
    font-size: var(--font-size-md) !important;
  }
}

@media screen and (min-width: 375px) and (max-width: 413px) {
  .btn.btn-primary.btn-start-modern {
    padding: 12px 20px !important;
    min-width: 170px !important;
  }
}

@media screen and (min-width: 414px) and (max-width: 767px) {
  .btn.btn-primary.btn-start-modern {
    padding: 12px 22px !important;
    min-width: 190px !important;
  }
}
`;

// ==========================================
// ESTILOS DE REQUIREMENTS RESPONSIVOS (importados modularmente)
// ==========================================
import { REQUIREMENTS_STYLES as REQUIREMENTS_STYLES_PREMIUM } from './views/requirements.styles.new';
export const REQUIREMENTS_STYLES = REQUIREMENTS_STYLES_PREMIUM;

// ==========================================
// ESTILOS DE LOADING VIEW RESPONSIVOS
// ==========================================
export const LOADING_STYLES = `
/* ESTILOS PRINCIPALES DEL LOADING VIEW - RESPONSIVO */

/* El LoadingView usa el mismo container base que las otras vistas */
.landing-component-container[data-view="loading"] {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  position: relative !important;
  overflow: hidden !important;
  user-select: none !important;
  height: 100% !important;
  min-height: var(--container-height) !important;
}

/* Transición de finalización */
.landing-component-container.loading-completing {
  opacity: 0 !important;
  filter: blur(1px) !important;
  pointer-events: none !important;
  background: transparent !important;
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
  transition: opacity 0.8s ease-out !important;
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
  left: 0px !important;
  width: 90% !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  /* Base horizontal padding plus safe-area insets */
  padding: 0 clamp(12px, 4vw, 32px) !important;
  padding-left: max(clamp(12px, 4vw, 32px), env(safe-area-inset-left)) !important;
  padding-right: max(clamp(12px, 4vw, 32px), env(safe-area-inset-right)) !important;
  z-index: 5 !important;
  box-sizing: border-box !important;
}

/* Ajustes específicos para móviles */
@media (max-width: 480px) {
  .header-logos-floating {
    gap: 0px !important;
  }

  .bradescard-logo-glow, .promoda-logo-glow {
    font-size: clamp(14px, 3.5vw, 18px) !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-width: 42vw !important; /* prevent overflow on each side */
  }
}

/* iPhone 12 Pro y similares */
@media (max-width: 390px) {
  .header-logos-floating { gap: 6px !important; }
  .bradescard-logo-glow, .promoda-logo-glow { font-size: clamp(12px, 3vw, 16px) !important; }
}

.bradescard-logo-glow, .promoda-logo-glow {
  font-size: var(--font-size-lg) !important;
  font-weight: bold !important;
  color: #00d4ff !important;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.8) !important;
  animation: logoFloat 3s ease-in-out infinite !important;
  max-width: 46vw !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.promoda-logo-glow {
  animation-delay: 1.5s !important;
  color: #ff6b6b !important;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.8) !important;
  margin-left: auto !important; /* keep right aligned without overflow */
}

/* === DEBUG VISUAL (TEMPORAL) === */
.landing-component-container.loading-debug .header-logos-floating {
  outline: 1px dashed rgba(255,255,255,0.35) !important;
}
.landing-component-container.loading-debug .bradescard-logo-glow,
.landing-component-container.loading-debug .promoda-logo-glow {
  outline: 1px solid rgba(255,0,0,0.6) !important;
  background: rgba(0,0,0,0.25) !important;
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

@keyframes windowGlow {
  0% { box-shadow: 0 0 15px rgba(135, 206, 235, 0.8), inset 0 -2px 2px rgba(0, 0, 0, 0.2); }
  100% { box-shadow: 0 0 25px rgba(135, 206, 235, 1), inset 0 -2px 2px rgba(0, 0, 0, 0.2); }
}

/* Sección media del cohete */
.rocket-middle {
  position: relative !important;
  width: 100% !important;
  height: 60% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: space-around !important;
}

/* Detalles del cohete */
.rocket-details {
  display: flex !important;
  flex-direction: column !important;
  gap: clamp(3px, 1vw, 6px) !important;
  margin-top: clamp(8px, 2vw, 12px) !important;
}

.rocket-line {
  width: clamp(20px, 5vw, 35px) !important;
  height: clamp(1px, 0.3vw, 2px) !important;
  background: rgba(0, 0, 0, 0.3) !important;
  border-radius: 1px !important;
}

/* Aletas del cohete */
.rocket-fins {
  position: absolute !important;
  bottom: -5px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 100% !important;
  height: clamp(15px, 4vw, 25px) !important;
}

.rocket-fin {
  position: absolute !important;
  bottom: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.rocket-fin-left {
  left: -5px !important;
  border-right: clamp(8px, 2vw, 15px) solid #b0b0b0 !important;
  border-bottom: clamp(10px, 2.5vw, 18px) solid transparent !important;
  border-top: clamp(5px, 1.2vw, 8px) solid transparent !important;
}

.rocket-fin-right {
  right: -5px !important;
  border-left: clamp(8px, 2vw, 15px) solid #b0b0b0 !important;
  border-bottom: clamp(10px, 2.5vw, 18px) solid transparent !important;
  border-top: clamp(5px, 1.2vw, 8px) solid transparent !important;
}

/* Fuego del cohete */
.rocket-fire {
  position: absolute !important;
  bottom: -clamp(20px, 5vw, 40px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: clamp(20px, 5vw, 35px) !important;
  height: clamp(25px, 6vw, 50px) !important;
  z-index: -1 !important;
}

.fire-flame {
  position: absolute !important;
  bottom: 0 !important;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40% !important;
  animation: flameFlicker 0.1s ease-in-out infinite alternate !important;
}

.fire-flame-1 {
  left: 20% !important;
  width: 60% !important;
  height: 80% !important;
  background: radial-gradient(ellipse at bottom, #ff6b35 0%, #f7931e 50%, transparent 70%) !important;
  animation-delay: 0s !important;
}

.fire-flame-2 {
  left: 30% !important;
  width: 40% !important;
  height: 100% !important;
  background: radial-gradient(ellipse at bottom, #ffa500 0%, #ff4500 50%, transparent 70%) !important;
  animation-delay: 0.05s !important;
}

.fire-flame-3 {
  left: 35% !important;
  width: 30% !important;
  height: 70% !important;
  background: radial-gradient(ellipse at bottom, #ffffff 0%, #ffa500 50%, transparent 70%) !important;
  animation-delay: 0.1s !important;
}

@keyframes flameFlicker {
  0% { transform: scaleY(1) scaleX(1); }
  100% { transform: scaleY(1.1) scaleX(0.9); }
}

/* Partículas del cohete */
.rocket-particles {
  position: absolute !important;
  bottom: -clamp(15px, 4vw, 30px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: clamp(30px, 7vw, 50px) !important;
  height: clamp(20px, 5vw, 40px) !important;
}

.particle {
  position: absolute !important;
  width: clamp(2px, 0.5vw, 4px) !important;
  height: clamp(2px, 0.5vw, 4px) !important;
  background: #ffa500 !important;
  border-radius: 50% !important;
  animation: particleFloat linear infinite !important;
}

@keyframes particleFloat {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}

/* Ondas de choque */
.shock-waves {
  position: absolute !important;
  bottom: -clamp(10px, 2.5vw, 20px) !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: clamp(60px, 15vw, 100px) !important;
  height: clamp(20px, 5vw, 40px) !important;
}

.shock-wave {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: 50% !important;
  animation: shockWave 2s ease-out infinite !important;
}

.shock-wave-1 {
  width: 40% !important;
  height: 20% !important;
  animation-delay: 0s !important;
}

.shock-wave-2 {
  width: 60% !important;
  height: 30% !important;
  animation-delay: 0.3s !important;
}

.shock-wave-3 {
  width: 80% !important;
  height: 40% !important;
  animation-delay: 0.6s !important;
}

@keyframes shockWave {
  0% {
    opacity: 1;
    transform: translateX(-50%) scale(0.8);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) scale(1.2);
  }
}
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

/* ELEMENTOS FALTANTES DEL LOADING VIEW */

/* Animaciones adicionales del progreso */
@keyframes progressGlow {
  0% { box-shadow: 0 0 15px rgba(0, 212, 255, 0.6); }
  50% { box-shadow: 0 0 25px rgba(0, 212, 255, 0.9); }
  100% { box-shadow: 0 0 15px rgba(0, 212, 255, 0.6); }
}

@keyframes numberPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes underlineFlow {
  0% { opacity: 0.6; transform: scaleX(0.8); }
  50% { opacity: 1; transform: scaleX(1.1); }
  100% { opacity: 0.6; transform: scaleX(0.8); }
}

/* Círculos decorativos animados */
.decorative-circles {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none !important;
  z-index: 1 !important;
}

.circle {
  position: absolute !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.03) !important;
  animation: circleFloat linear infinite !important;
}

.circle-1 {
  width: clamp(60px, 15vw, 120px) !important;
  height: clamp(60px, 15vw, 120px) !important;
  top: 20% !important;
  left: 10% !important;
  animation-duration: 20s !important;
}

.circle-2 {
  width: clamp(80px, 20vw, 160px) !important;
  height: clamp(80px, 20vw, 160px) !important;
  top: 60% !important;
  right: 15% !important;
  animation-duration: 15s !important;
  animation-delay: -5s !important;
}

.circle-3 {
  width: clamp(40px, 10vw, 80px) !important;
  height: clamp(40px, 10vw, 80px) !important;
  top: 80% !important;
  left: 20% !important;
  animation-duration: 25s !important;
  animation-delay: -10s !important;
}

.circle-4 {
  width: clamp(100px, 25vw, 200px) !important;
  height: clamp(100px, 25vw, 200px) !important;
  top: 10% !important;
  right: 5% !important;
  animation-duration: 30s !important;
  animation-delay: -15s !important;
}

@keyframes circleFloat {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.3;
  }
  25% { 
    transform: translateY(-20px) translateX(10px) scale(1.1);
    opacity: 0.1;
  }
  50% { 
    transform: translateY(-40px) translateX(-5px) scale(0.9);
    opacity: 0.4;
  }
  75% { 
    transform: translateY(-15px) translateX(-10px) scale(1.05);
    opacity: 0.2;
  }
}

/* Status items y dots animados */
.loading-status {
  margin-top: var(--spacing-xl) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: var(--spacing-sm) !important;
}

.status-item {
  display: flex !important;
  align-items: center !important;
  gap: var(--spacing-xs) !important;
  font-size: var(--font-size-sm) !important;
  color: rgba(255, 255, 255, 0.8) !important;
}

.status-item-loading {
  color: #00d4ff !important;
  animation: statusPulse 2s ease-in-out infinite !important;
}

.status-icon {
  color: #4caf50 !important;
  font-weight: bold !important;
}

.status-icon-loading {
  color: #00d4ff !important;
  animation: iconSpin 1s linear infinite !important;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

@keyframes iconSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Loading dots animados */
.loading-dots {
  display: flex !important;
  gap: var(--spacing-xs) !important;
  justify-content: center !important;
  margin-top: var(--spacing-sm) !important;
}

.dot {
  font-size: var(--font-size-lg) !important;
  color: #00d4ff !important;
  animation: dotBounce 1.4s ease-in-out infinite both !important;
}

.dot-1 {
  animation-delay: -0.32s !important;
}

.dot-2 {
  animation-delay: -0.16s !important;
}

.dot-3 {
  animation-delay: 0s !important;
}

@keyframes dotBounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Message icon con pulse rings */
.message-icon {
  position: relative !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-bottom: var(--spacing-md) !important;
}

.pulse-ring {
  position: absolute !important;
  border: 2px solid rgba(0, 212, 255, 0.3) !important;
  border-radius: 50% !important;
  animation: pulseRing 2s linear infinite !important;
}

.pulse-ring {
  width: 60px !important;
  height: 60px !important;
}

.pulse-ring-2 {
  width: 80px !important;
  height: 80px !important;
  animation-delay: 0.5s !important;
}

.pulse-ring-3 {
  width: 100px !important;
  height: 100px !important;
  animation-delay: 1s !important;
}

.message-emoji {
  font-size: var(--font-size-xl) !important;
  z-index: 2 !important;
  position: relative !important;
}

@keyframes pulseRing {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Progress glow effect */
.progress-glow {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  width: 20px !important;
  height: 100% !important;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%) !important;
  border-radius: inherit !important;
  animation: progressShimmer 2s ease-in-out infinite !important;
}

@keyframes progressShimmer {
  0% { opacity: 0; transform: translateX(-20px); }
  50% { opacity: 1; transform: translateX(0px); }
  100% { opacity: 0; transform: translateX(20px); }
}

/* RESPONSIVE BREAKPOINTS ESPECÍFICOS PARA LOADING */

/* Smartphones pequeños (hasta 374px) */
@media screen and (max-width: 374px) {
  .landing-component-container[data-view="loading"] {
    min-height: var(--height-xs) !important;
  }
  
  .rocket-launch-container {
    width: 60px !important;
    height: clamp(70px, 20vw, 90px) !important;
  }
  
  .progress-container {
    width: 180px !important;
  }
}

/* Smartphones estándar (375px - 413px) */
@media screen and (min-width: 375px) and (max-width: 413px) {
  .landing-component-container[data-view="loading"] {
    min-height: var(--height-sm) !important;
  }
}

/* Smartphones grandes (414px - 479px) */
@media screen and (min-width: 414px) and (max-width: 479px) {
  .landing-component-container[data-view="loading"] {
    min-height: var(--height-md) !important;
  }
}

/* Phablets (480px - 767px) */
@media screen and (min-width: 480px) and (max-width: 767px) {
  .landing-component-container[data-view="loading"] {
    min-height: var(--height-lg) !important;
  }
}

/* Tabletas pequeñas (768px - 833px) */
@media screen and (min-width: 768px) and (max-width: 833px) {
  .landing-component-container[data-view="loading"] {
    min-height: var(--height-xl) !important;
  }
  
  .rocket-launch-container {
    width: 140px !important;
    height: clamp(200px, 30vw, 220px) !important;
  }
  
  .progress-container {
    width: 400px !important;
  }
}

/* Tabletas medianas (834px - 1023px) */
@media screen and (min-width: 834px) and (max-width: 1023px) {
  .landing-component-container[data-view="loading"] {
    min-height: var(--height-xxl) !important;
  }
}

/* Tabletas grandes (1024px+) */
@media screen and (min-width: 1024px) {
  .landing-component-container[data-view="loading"] {
    min-height: var(--height-xxxl) !important;
  }
} {
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
