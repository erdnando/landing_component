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

/* Contenedor para la tarjeta (sin perspectiva 3D) */
.card-image-container {
  display: flex !important;
  justify-content: center !important;
  margin: var(--spacing-lg) 0 !important;
  position: relative !important;
  width: 100% !important;
  z-index: 2 !important;
}

/* Tarjeta estática sin animación */
.card-image-static {
  position: relative !important;
  display: flex !important;
  justify-content: center !important;
  animation: cardEntrance 0.6s ease-out forwards !important; /* Animación de entrada inicial */
  -webkit-animation: cardEntrance 0.6s ease-out forwards !important;
  -moz-animation: cardEntrance 0.6s ease-out forwards !important;
  width: 100% !important;
}

/* Animación de entrada para la tarjeta */
@keyframes cardEntrance {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@-webkit-keyframes cardEntrance {
  0% { opacity: 0; -webkit-transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; -webkit-transform: translateY(0) scale(1); }
}
@-moz-keyframes cardEntrance {
  0% { opacity: 0; -moz-transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; -moz-transform: translateY(0) scale(1); }
}

/* Tarjeta de crédito estática con estilo rosa como en la imagen */
.credit-card-static {
  position: relative !important;
  z-index: 2 !important;
  width: clamp(162px, 40.5vw, 252px) !important;
  height: clamp(99px, 25.2vw, 153px) !important;
  margin: var(--spacing-md) auto !important;
  background: linear-gradient(135deg, #e91e63, #d81b60) !important;
  border-radius: var(--border-radius) !important;
  box-shadow: 
    0 8px 24px rgba(233, 30, 99, 0.25),
    0 4px 12px rgba(233, 30, 99, 0.15) !important;
  overflow: hidden !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: transform 0.3s ease !important;
  -webkit-transition: -webkit-transform 0.3s ease !important;
  -moz-transition: -moz-transform 0.3s ease !important;
  display: flex !important;
  flex-direction: column !important;
  color: white !important;
  background-color: #e91e63 !important; /* Fondo de respaldo */
}

.credit-card-static:hover {
  transform: translateY(-2px) !important;
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.12),
    0 6px 16px rgba(0, 0, 0, 0.08) !important;
}

/* Chip de la tarjeta - actualizamos para mejor visualización */
.credit-card-static .card-chip {
  width: 30px !important;
  height: 22px !important;
  background: linear-gradient(45deg, #f5d76e, #f9d423) !important;
  border-radius: 3px !important;
  position: absolute !important;
  top: 25% !important;
  left: 10% !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 215, 0, 0.8) !important;
  z-index: 2 !important;
  opacity: 1 !important;
}

/* Brillo de la tarjeta */
.credit-card-static .card-shine {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 100% !important;
  background: radial-gradient(
    circle at 50% 10%,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(255, 255, 255, 0) 70%
  ) !important;
  z-index: 1 !important;
  pointer-events: none !important;
}

/* Marca de la tarjeta - no visible en la imagen de referencia */
.credit-card-static .card-brand {
  display: none !important;
}

/* Número de la tarjeta */
.credit-card-static .card-number {
  position: absolute !important;
  bottom: clamp(15px, 3.5vw, 25px) !important;
  left: 0 !important;
  right: 0 !important;
  text-align: center !important;
  z-index: 2 !important;
}

.credit-card-static .card-number span {
  font-size: clamp(10px, 2.8vw, 14px) !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  letter-spacing: 1.5px !important;
  font-family: 'OCR A Std', 'Courier New', monospace !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2) !important;
}

/* Evitar que el hover afecte durante la animación */
.card-flip-animation .credit-card:hover {
  transform: none !important;
  -webkit-transform: none !important;
  -moz-transform: none !important;
}

/* Estilos específicos para navegadores problemáticos */
.safari-browser .card-flip-animation {
  transform: rotateY(0deg) !important;
  -webkit-transform: rotateY(0deg) !important;
  animation: safariFlip 1.5s ease-in-out forwards !important;
  -webkit-animation: safariFlip 1.5s ease-in-out forwards !important;
}

@keyframes safariFlip {
  0% { transform: rotateY(0deg) scale(1); opacity: 1; }
  10% { transform: rotateY(36deg) scale(1.05); }
  20% { transform: rotateY(72deg) scale(1.1); opacity: 0.8; }
  30% { transform: rotateY(108deg) scale(1.05); opacity: 0.6; }
  40% { transform: rotateY(144deg) scale(1); opacity: 0.4; }
  50% { transform: rotateY(180deg) scale(0.95); opacity: 0.5; }
  60% { transform: rotateY(216deg) scale(1); opacity: 0.6; }
  70% { transform: rotateY(252deg) scale(1.05); opacity: 0.8; }
  80% { transform: rotateY(288deg) scale(1.1); opacity: 0.9; }
  90% { transform: rotateY(324deg) scale(1.05); }
  100% { transform: rotateY(360deg) scale(1); opacity: 1; }
}

@-webkit-keyframes safariFlip {
  0% { -webkit-transform: rotateY(0deg) scale(1); opacity: 1; }
  10% { -webkit-transform: rotateY(36deg) scale(1.05); }
  20% { -webkit-transform: rotateY(72deg) scale(1.1); opacity: 0.8; }
  30% { -webkit-transform: rotateY(108deg) scale(1.05); opacity: 0.6; }
  40% { -webkit-transform: rotateY(144deg) scale(1); opacity: 0.4; }
  50% { -webkit-transform: rotateY(180deg) scale(0.95); opacity: 0.5; }
  60% { -webkit-transform: rotateY(216deg) scale(1); opacity: 0.6; }
  70% { -webkit-transform: rotateY(252deg) scale(1.05); opacity: 0.8; }
  80% { -webkit-transform: rotateY(288deg) scale(1.1); opacity: 0.9; }
  90% { -webkit-transform: rotateY(324deg) scale(1.05); }
  100% { -webkit-transform: rotateY(360deg) scale(1); opacity: 1; }
}

/* Fallback para navegadores sin soporte 3D completo */
.ie-browser .card-flip-animation, 
.edge-browser .card-flip-animation,
.no-3d-support .card-flip-animation {
  animation: fadeInOut 1.5s ease-in-out forwards !important;
  -webkit-animation: fadeInOut 1.5s ease-in-out forwards !important;
  -moz-animation: fadeInOut 1.5s ease-in-out forwards !important;
  transform-style: flat !important;
  -webkit-transform-style: flat !important;
}

@keyframes fadeInOut {
  0% { transform: scale(1) rotate(0deg); opacity: 1; }
  25% { transform: scale(0.9) rotate(90deg); opacity: 0.7; }
  50% { transform: scale(0.8) rotate(180deg); opacity: 0.5; }
  75% { transform: scale(0.9) rotate(270deg); opacity: 0.7; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
}

@-webkit-keyframes fadeInOut {
  0% { -webkit-transform: scale(1) rotate(0deg); opacity: 1; }
  25% { -webkit-transform: scale(0.9) rotate(90deg); opacity: 0.7; }
  50% { -webkit-transform: scale(0.8) rotate(180deg); opacity: 0.5; }
  75% { -webkit-transform: scale(0.9) rotate(270deg); opacity: 0.7; }
  100% { -webkit-transform: scale(1) rotate(360deg); opacity: 1; }
}

@-moz-keyframes fadeInOut {
  0% { -moz-transform: scale(1) rotate(0deg); opacity: 1; }
  25% { -moz-transform: scale(0.9) rotate(90deg); opacity: 0.7; }
  50% { -moz-transform: scale(0.8) rotate(180deg); opacity: 0.5; }
  75% { -moz-transform: scale(0.9) rotate(270deg); opacity: 0.7; }
  100% { -moz-transform: scale(1) rotate(360deg); opacity: 1; }
}

/* Fallback adicional para Opera */
.opera-browser .card-flip-animation {
  animation: fadeInOut 1.5s ease-in-out forwards !important;
  -o-animation: fadeInOut 1.5s ease-in-out forwards !important;
}

/* Animación de giro tipo moneda */
@keyframes cardFlip {
  0% { transform: rotateY(0deg); }
  25% { transform: rotateY(90deg) scale(1.1); }
  50% { transform: rotateY(180deg) scale(1); }
  75% { transform: rotateY(270deg) scale(1.1); }
  100% { transform: rotateY(calc(360deg * var(--num-rotations))); }
}
@-webkit-keyframes cardFlip {
  0% { -webkit-transform: rotateY(0deg); }
  25% { -webkit-transform: rotateY(90deg) scale(1.1); }
  50% { -webkit-transform: rotateY(180deg) scale(1); }
  75% { -webkit-transform: rotateY(270deg) scale(1.1); }
  100% { -webkit-transform: rotateY(calc(360deg * var(--num-rotations))); }
}
@-moz-keyframes cardFlip {
  0% { -moz-transform: rotateY(0deg); }
  25% { -moz-transform: rotateY(90deg) scale(1.1); }
  50% { -moz-transform: rotateY(180deg) scale(1); }
  75% { -moz-transform: rotateY(270deg) scale(1.1); }
  100% { -moz-transform: rotateY(calc(360deg * var(--num-rotations))); }
}

/* Clase que aplica la animación de giro */
.card-flip-animation {
  animation: cardFlip 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards !important;
  -webkit-animation: cardFlip 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards !important;
  -moz-animation: cardFlip 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards !important;
  transform-origin: center center !important;
  -webkit-transform-origin: center center !important;
  -moz-transform-origin: center center !important;
  backface-visibility: visible !important;
  -webkit-backface-visibility: visible !important;
  -moz-backface-visibility: visible !important;
  will-change: transform !important; /* Mejora el rendimiento de la animación */
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
