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
  overflow: hidden !important;
}

/* Transición de finalización */
.landing-component-container.loading-completing {
  opacity: 0 !important;
  filter: blur(1px) !important;
  pointer-events: none !important;
  background: transparent !important;
  overflow: hidden !important;
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
  overflow: hidden !important;
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
