/**
 * ESTILOS DE VISTA DE PRESENTACIÓN
 * Vista principal con tarjeta de crédito y beneficios
 * Usando colores claros como en la segunda imagen
 */

export const PRESENTATION_STYLES = `
/* Vista de presentación - BASE RESPONSIVA con colores claros */
.presentation-view {
  background: #f8fafc !important;
  color: #334155 !important;
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
  color: #e91e63 !important;
  z-index: 3 !important;
  line-height: 1.1 !important;
  text-align: initial !important;
  pointer-events: none !important;
}

/* Posiciona y recorta los textos de marca en el header */
.header-logos-modern .bradescard-logo,
.header-logos-modern .promoda-logo {
  font-weight: 700 !important;
  letter-spacing: 0.2px !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  max-width: 46% !important;
}

.header-logos-modern .promoda-logo {
  margin-left: auto !important;
  text-align: right !important;
}

/* Fade-in de vistas para evitar flash blanco */
@keyframes viewFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Título principal - RESPONSIVO con colores claros */
.main-title-modern {
  position: relative !important;
  z-index: 2 !important;
  margin-bottom: var(--spacing-lg) !important;
  padding: var(--spacing-md) 0 !important;
}

.main-title-modern h1 {
  font-size: var(--font-size-hero) !important;
  font-weight: bold !important;
  color: #1e293b !important;
  margin-bottom: var(--spacing-sm) !important;
  line-height: 1.2 !important;
  letter-spacing: -0.5px !important;
}

.main-title-modern p {
  font-size: var(--font-size-lg) !important;
  color: #64748b !important;
  margin-top: var(--spacing-sm) !important;
  line-height: 1.4 !important;
  font-weight: 300 !important;
}

/* Tarjeta de crédito con estilo claro */
.credit-card {
  position: relative !important;
  z-index: 2 !important;
  width: clamp(162px, 40.5vw, 252px) !important;
  height: clamp(99px, 25.2vw, 153px) !important;
  margin: var(--spacing-lg) auto !important;
  background: linear-gradient(135deg, #ffffff, #f1f5f9) !important;
  border-radius: var(--border-radius) !important;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.06) !important;
  overflow: hidden !important;
  border: 1px solid #e2e8f0 !important;
  transition: transform 0.3s ease !important;
}

.credit-card:hover {
  transform: translateY(-2px) !important;
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.12),
    0 6px 16px rgba(0, 0, 0, 0.08) !important;
}

/* Contenido de la tarjeta - RESPONSIVO */
.card-header {
  padding: var(--spacing-sm) var(--spacing-md) !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  background: linear-gradient(90deg, 
    rgba(233, 30, 99, 0.05) 0%, 
    rgba(233, 30, 99, 0.02) 100%) !important;
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

.card-brand {
  position: absolute !important;
  top: clamp(8px, 2vw, 12px) !important;
  left: clamp(10px, 2.5vw, 14px) !important;
  font-size: clamp(10px, 2.8vw, 12px) !important;
  font-weight: bold !important;
  color: #e91e63 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.6px !important;
  z-index: 2 !important;
}

.card-number {
  text-align: center !important;
  margin: var(--spacing-md) 0 !important;
  position: relative !important;
  z-index: 2 !important;
}

.card-number span {
  font-size: clamp(12px, 3.4vw, 15px) !important;
  color: #475569 !important;
  font-weight: 600 !important;
  letter-spacing: 2.2px !important;
  font-family: 'OCR A Std', 'Courier New', monospace !important;
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
  color: #64748b !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

.card-expiry {
  font-size: clamp(9px, 2.4vw, 11px) !important;
  color: #64748b !important;
  font-weight: 700 !important;
  font-family: 'OCR A Std', 'Courier New', monospace !important;
  letter-spacing: 1.2px !important;
}

/* Sección de beneficios con colores claros */
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
  color: #1e293b !important;
  margin-bottom: var(--spacing-lg) !important;
  font-weight: bold !important;
  line-height: 1.3 !important;
}

.benefits-grid-modern {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(clamp(140px, 35vw, 200px), 1fr)) !important;
  gap: var(--spacing-md) !important;
  align-items: stretch !important;
  justify-content: center !important;
  padding: 0 var(--spacing-sm) !important;
}

/* Tarjetas de beneficios con estilo claro */
.benefit-card-modern {
  background: #ffffff !important;
  border-radius: var(--border-radius) !important;
  padding: var(--spacing-md) !important;
  text-align: center !important;
  border: 1px solid #e2e8f0 !important;
  transition: all 0.3s ease !important;
  min-height: clamp(120px, 25vw, 160px) !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
}

.benefit-card-modern:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
  border-color: #e91e63 !important;
}

.benefit-icon-wrapper {
  margin-bottom: var(--spacing-sm) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: clamp(40px, 10vw, 60px) !important;
  height: clamp(40px, 10vw, 60px) !important;
  background: #fdf2f8 !important;
  border-radius: 50% !important;
  border: 2px solid #fbcfe8 !important;
}

.benefit-icon {
  font-size: clamp(18px, 5vw, 28px) !important;
  color: #e91e63 !important;
}

.benefit-text h3 {
  font-size: var(--font-size-md) !important;
  color: #1e293b !important;
  margin-bottom: var(--spacing-xs) !important;
  font-weight: bold !important;
  line-height: 1.3 !important;
}

.benefit-text p {
  font-size: var(--font-size-sm) !important;
  color: #64748b !important;
  line-height: 1.4 !important;
  margin: 0 !important;
}

/* Botón de acción con estilo claro */
.action-section-modern {
  position: relative !important;
  z-index: 2 !important;
  margin-top: var(--spacing-xl) !important;
  padding: var(--spacing-lg) 0 !important;
}

.action-button-modern {
  background: linear-gradient(135deg, #e91e63, #f06292) !important;
  color: white !important;
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
    0 6px 20px rgba(233, 30, 99, 0.3),
    0 2px 8px rgba(233, 30, 99, 0.2) !important;
  border: 2px solid transparent !important;
  outline: none !important;
  display: block !important;
  margin: 0 auto !important;
  width: fit-content !important;
  min-width: clamp(200px, 50vw, 280px) !important;
}

.action-button-modern:hover {
  transform: translateY(-2px) scale(1.02) !important;
  box-shadow: 
    0 8px 24px rgba(233, 30, 99, 0.4),
    0 4px 12px rgba(233, 30, 99, 0.25) !important;
}

.action-button-modern:active {
  transform: translateY(0) scale(0.98) !important;
  box-shadow: 
    0 4px 16px rgba(233, 30, 99, 0.3) !important;
}
`;
