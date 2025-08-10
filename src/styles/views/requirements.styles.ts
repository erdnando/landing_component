/**
 * ESTILOS DE VISTA DE REQUERIMIENTOS
 * Vista de validación de requisitos con colores claros
 */

export const REQUIREMENTS_STYLES = `
/* === CREATIVE & PREMIUM REQUIREMENTS VIEW === */
.landing-component-container[data-view="requirements"] {
  background: linear-gradient(135deg, #fff0f6 0%, #fbeaff 100%) !important;
  min-height: 100vh !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: flex-start !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  position: relative !important;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif !important;
  overflow-x: hidden !important;
}

/* HEADER flotante con gradiente y sombra */
.requirements-header {
  width: 100% !important;
  background: linear-gradient(90deg, #ff5f8f 0%, #ffb6b9 100%) !important;
  color: #fff !important;
  font-size: clamp(1.3rem, 2.5vw, 2rem) !important;
  font-weight: 700 !important;
  text-align: center !important;
  padding: clamp(18px, 5vw, 32px) 0 clamp(8px, 2vw, 18px) 0 !important;
  border-radius: 0 0 32px 32px !important;
  box-shadow: 0 8px 32px 0 rgba(255, 95, 143, 0.18), 0 1.5px 6px 0 rgba(0,0,0,0.04) !important;
  letter-spacing: 0.5px !important;
  margin-bottom: clamp(12px, 3vw, 32px) !important;
  z-index: 2 !important;
  position: relative !important;
  filter: drop-shadow(0 2px 16px #ffb6b9aa) !important;
  animation: headerFloat 3s ease-in-out infinite alternate !important;
}
@keyframes headerFloat {
  0% { filter: drop-shadow(0 2px 16px #ffb6b9aa); }
  100% { filter: drop-shadow(0 8px 32px #ff5f8faa); }
}

.requirements-subtitle {
  color: #7c7c7c !important;
  font-size: clamp(0.95rem, 2vw, 1.1rem) !important;
  text-align: center !important;
  margin-bottom: clamp(18px, 3vw, 32px) !important;
  font-weight: 400 !important;
  z-index: 2 !important;
  letter-spacing: 0.1em !important;
  text-shadow: 0 1px 0 #fff !important;
}

/* Lista de requisitos con separadores animados */
.requirements-list {
  display: flex !important;
  flex-direction: column !important;
  gap: clamp(18px, 3vw, 32px) !important;
  width: 100% !important;
  max-width: 420px !important;
    background: rgba(255,255,255,0.75) !important;
  }
  @keyframes cardFadeIn {
    0% { opacity: 0; transform: translateY(24px) scale(0.98); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Iconos grandes, animados y con fondo premium */
  .requirement-icon {
    font-size: clamp(2.2rem, 5vw, 2.8rem) !important;
    color: #ff2e7a !important;
    background: linear-gradient(135deg, #fff0f6 0%, #ffb6b9 100%) !important;
    border-radius: 16px !important;
    padding: clamp(8px, 2vw, 14px) !important;
    box-shadow: 0 2px 8px 0 rgba(255, 95, 143, 0.10) !important;
    margin-right: clamp(8px, 2vw, 14px) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: background 0.3s, color 0.3s, transform 0.2s !important;
    animation: iconPopIn 0.8s cubic-bezier(.4,1.6,.6,1) both;
  }
  .requirement-card:hover .requirement-icon {
    background: linear-gradient(135deg, #ffb6b9 0%, #fff0f6 100%) !important;
    color: #fff !important;
    transform: scale(1.12) rotate(-6deg) !important;
    filter: drop-shadow(0 0 8px #ffb6b9cc);
  }
  @keyframes iconPopIn {
    0% { opacity: 0; transform: scale(0.7) rotate(-10deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
  }

  /* Footer con badge de versión y fondo translúcido */
  .requirements-footer {
    margin-top: clamp(32px, 8vw, 64px) !important;
    text-align: center !important;
    color: #b0b0b0 !important;
    font-size: clamp(0.9rem, 2vw, 1.05rem) !important;
    font-weight: 400 !important;
    z-index: 2 !important;
    position: relative !important;
  }
  .requirements-version {
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%) !important;
  pointer-events: none !important;
}


.bradescard-logo, .promoda-logo {
  font-size: clamp(18px, 4.5vw, 22px) !important;
  font-weight: 700 !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
  letter-spacing: -0.3px !important;
  position: relative !important;
  z-index: 2 !important;
}

.card-mini-modern {
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 50px !important;
  height: 32px !important;
  background: linear-gradient(135deg, #1f2937, #374151) !important;
  border-radius: 6px !important;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.1) !important;
  z-index: 1 !important;
}

.card-chip-mini {
  position: absolute !important;
  top: 6px !important;
  left: 8px !important;
  width: 12px !important;
  height: 10px !important;
  background: linear-gradient(135deg, #d4af37, #ffd700) !important;
  border-radius: 2px !important;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2) !important;
}

.card-shine-mini {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%) !important;
  border-radius: 6px !important;
}

/* Contenido principal con padding responsivo */
.requirements-content {
  flex: 1 !important;
  padding: clamp(20px, 5vw, 30px) !important;
  display: flex !important;
  flex-direction: column !important;
  max-height: calc(100vh - 140px) !important;
  overflow-y: auto !important;
}

/* Título EXACTO como la imagen */
.requirements-title-modern {
  text-align: left !important;
  margin: clamp(25px, 6vw, 35px) clamp(25px, 6vw, 35px) clamp(20px, 5vw, 30px) !important;
}

.requirements-title-modern h2 {
  font-size: clamp(22px, 5.5vw, 28px) !important;
  font-weight: 600 !important;
  color: #e91e63 !important;
  margin-bottom: clamp(8px, 2vw, 12px) !important;
  letter-spacing: -0.2px !important;
}

.requirements-subtitle {
  font-size: clamp(14px, 3.5vw, 16px) !important;
  color: #666666 !important;
  margin: 0 !important;
  font-weight: 400 !important;
}

/* Grid EXACTO como la imagen - 3 elementos */
.requirements-list-modern {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  grid-template-rows: auto auto !important;
  gap: clamp(20px, 5vw, 30px) !important;
  margin: 0 clamp(25px, 6vw, 35px) clamp(30px, 7vw, 40px) !important;
}

/* Primer item ocupa toda la fila superior */
.requirement-item-modern:first-child {
  grid-column: 1 / -1 !important;
}

.requirement-item-modern {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
  gap: clamp(12px, 3vw, 16px) !important;
  padding: clamp(20px, 5vw, 25px) clamp(15px, 4vw, 20px) !important;
  background: white !important;
  border: 2px solid #f0f0f0 !important;
  border-radius: clamp(10px, 2.5vw, 12px) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
  transition: all 0.2s ease !important;
  min-height: clamp(120px, 30vw, 140px) !important;
}

.requirement-item-modern:hover {
  border-color: #e91e63 !important;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.15) !important;
  transform: translateY(-2px) !important;
}

.requirement-icon-wrapper {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: clamp(50px, 12vw, 60px) !important;
  height: clamp(50px, 12vw, 60px) !important;
  background: #f8f8f8 !important;
  border: 2px solid #e0e0e0 !important;
  border-radius: clamp(8px, 2vw, 10px) !important;
  margin-bottom: clamp(6px, 1.5vw, 8px) !important;
}

.requirement-text-modern {
  flex: 1 !important;
}

.requirement-text-modern strong {
  display: block !important;
  font-size: clamp(14px, 3.5vw, 16px) !important;
  font-weight: 600 !important;
  color: #e91e63 !important;
  margin-bottom: clamp(2px, 0.5vw, 4px) !important;
  line-height: 1.2 !important;
}

.requirement-text-modern p {
  font-size: clamp(12px, 3vw, 14px) !important;
  color: #666666 !important;
  margin: 0 !important;
  line-height: 1.3 !important;
  font-weight: 400 !important;
}

/* Botón EXACTO como la imagen */
.requirements-footer {
  margin-top: auto !important;
  padding: 0 clamp(25px, 6vw, 35px) clamp(30px, 7vw, 40px) !important;
}

.buttons-container-modern {
  display: flex !important;
  justify-content: center !important;
  margin-bottom: clamp(20px, 5vw, 25px) !important;
}

.btn-primary {
  background: white !important;
  color: #e91e63 !important;
  border: 2px solid #e91e63 !important;
  padding: clamp(14px, 3.5vw, 16px) clamp(40px, 10vw, 50px) !important;
  border-radius: clamp(25px, 6vw, 30px) !important;
  font-size: clamp(16px, 4vw, 18px) !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  text-transform: none !important;
  letter-spacing: normal !important;
  min-width: clamp(200px, 50vw, 250px) !important;
}

.btn-primary:hover {
  background: #e91e63 !important;
  color: white !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 12px rgba(233, 30, 99, 0.2) !important;
}

/* Versión EXACTA como la imagen */
.version-footer-modern {
  text-align: center !important;
}

.version-footer-modern p {
  font-size: clamp(12px, 3vw, 14px) !important;
  color: #999999 !important;
  margin: 0 !important;
  font-weight: 400 !important;
}

/* Responsividad específica para dispositivos */
/* iPhone SE (320px) */
@media screen and (max-width: 320px) {
  .header-logos-modern {
    padding: 15px 15px 10px !important;
  }
  
  .requirements-content {
    padding: 15px !important;
    max-height: calc(100vh - 120px) !important;
  }
  
  .requirement-item-modern {
    min-height: 120px !important;
    padding: 15px 10px !important;
  }
  
  .requirements-list-modern {
    gap: 15px !important;
  }
}

/* iPhone XR y similares (375px-414px) */
@media screen and (min-width: 375px) and (max-width: 414px) {
  .requirements-content {
    max-height: calc(100vh - 130px) !important;
  }
}

/* Dispositivos más grandes en horizontal */
@media screen and (min-width: 600px) and (max-height: 500px) {
  .requirements-view {
    height: 100vh !important;
  }
  
  .requirements-content {
    max-height: calc(100vh - 100px) !important;
  }
  
  .requirements-list-modern {
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 15px !important;
  }
  
  .requirement-item-modern {
    min-height: 110px !important;
  }
}

/* Tablets */
@media screen and (min-width: 768px) {
  .requirements-list-modern {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 25px !important;
  }
  
  .requirements-content {
    max-width: 600px !important;
    margin: 0 auto !important;
  }
}

.requirement-check {
  flex-shrink: 0 !important;
  width: clamp(32px, 8vw, 38px) !important;
  height: clamp(32px, 8vw, 38px) !important;
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: white !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: clamp(18px, 4.5vw, 22px) !important;
  font-weight: 900 !important;
  box-shadow: 
    0 6px 20px rgba(16, 185, 129, 0.4),
    inset 0 1px 2px rgba(255, 255, 255, 0.3) !important;
  position: relative !important;
  animation: checkFloat 3s ease-in-out infinite !important;
}

@keyframes checkFloat {
  0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
  50% { transform: translateY(-3px) scale(1.05) rotate(5deg); }
}

/* Footer ESPECTACULAR */
.requirements-footer {
  margin-top: auto !important;
  padding-top: clamp(30px, 7vw, 40px) !important;
  position: relative !important;
  z-index: 2 !important;
}

.buttons-container-modern {
  display: flex !important;
  gap: clamp(16px, 4vw, 20px) !important;
  margin-bottom: clamp(25px, 6vw, 30px) !important;
}

.btn {
  flex: 1 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(12px, 3vw, 15px) !important;
  padding: clamp(18px, 4.5vw, 22px) clamp(28px, 6vw, 35px) !important;
  border-radius: clamp(12px, 3vw, 16px) !important;
  font-size: clamp(16px, 4vw, 19px) !important;
  font-weight: 700 !important;
  border: none !important;
  cursor: pointer !important;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  position: relative !important;
  overflow: hidden !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
}

.btn::before {
  content: '' !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  width: 0 !important;
  height: 0 !important;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%) !important;
  border-radius: 50% !important;
  transition: all 0.6s ease !important;
  transform: translate(-50%, -50%) !important;
}

.btn:hover::before {
  width: 400px !important;
  height: 400px !important;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  border: 2px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.15),
    inset 0 1px 2px rgba(255, 255, 255, 0.3) !important;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
  transform: translateY(-4px) scale(1.02) !important;
  box-shadow: 
    0 12px 35px rgba(0, 0, 0, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.4) !important;
}

.btn-primary {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)) !important;
  color: #e91e63 !important;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.3) !important;
  border: 2px solid rgba(255, 255, 255, 0.5) !important;
}

.btn-primary:hover {
  transform: translateY(-6px) scale(1.05) !important;
  background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.95)) !important;
  box-shadow: 
    0 15px 45px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.8),
    0 0 0 2px rgba(255, 255, 255, 0.4),
    0 0 30px rgba(255, 255, 255, 0.3) !important;
  color: #d81b60 !important;
}

.btn-icon {
  font-size: clamp(16px, 4vw, 20px) !important;
  transition: transform 0.3s ease !important;
}

.btn:hover .btn-icon {
  transform: scale(1.2) !important;
}

.btn-text {
  position: relative !important;
  z-index: 2 !important;
}

.btn-icon {
  font-size: clamp(12px, 3vw, 14px) !important;
}

/* Notas informativas PREMIUM */
.requirements-note {
  display: flex !important;
  align-items: center !important;
  gap: clamp(15px, 3.5vw, 18px) !important;
  padding: clamp(18px, 4.5vw, 22px) !important;
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: clamp(10px, 2.5vw, 14px) !important;
  margin-bottom: clamp(20px, 5vw, 25px) !important;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.3) !important;
  position: relative !important;
  overflow: hidden !important;
}

.requirements-note::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 2px !important;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4)) !important;
}

.note-icon {
  flex-shrink: 0 !important;
  width: clamp(28px, 7vw, 32px) !important;
  height: clamp(28px, 7vw, 32px) !important;
  background: rgba(255, 255, 255, 0.9) !important;
  color: #e91e63 !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: clamp(16px, 4vw, 18px) !important;
  font-weight: 800 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.requirements-note p {
  font-size: clamp(15px, 3.8vw, 17px) !important;
  color: white !important;
  margin: 0 !important;
  font-weight: 500 !important;
  line-height: 1.5 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
}

/* Versión PREMIUM */
.version-footer-modern {
  text-align: center !important;
  padding: clamp(20px, 4vw, 25px) 0 !important;
}

.version-footer-modern p {
  font-size: clamp(13px, 3.2vw, 15px) !important;
  color: rgba(255, 255, 255, 0.7) !important;
  margin: 0 !important;
  font-weight: 400 !important;
  opacity: 0.9 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
}

/* Responsive */
@media screen and (max-width: 480px) {
  .requirements-view {
    padding: clamp(10px, 3vw, 15px) !important;
  }
  
  .requirement-item-modern {
    flex-direction: column !important;
    text-align: center !important;
    gap: 12px !important;
  }
  
  .buttons-container-modern {
    flex-direction: column !important;
  }
}
`;
