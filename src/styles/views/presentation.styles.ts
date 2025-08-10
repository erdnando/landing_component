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

.presentation-view .card-image-container { display: flex !important; justify-content: center !important; }
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


.presentation-view .card-number {
  text-align: center !important;
  margin: var(--spacing-md) 0 !important;
  position: relative !important;
  z-index: 2 !important;
}


.presentation-view .card-number span {
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