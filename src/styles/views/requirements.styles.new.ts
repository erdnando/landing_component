/**
 * ESTILOS RENOVADOS DE VISTA DE REQUERIMIENTOS
 * Vista moderna de validación de requisitos con diseño premium
 */

export const REQUIREMENTS_STYLES = `
/* === REQUIREMENTS VIEW - VERSIÓN PREMIUM === */
.requirements-view {
  display: flex !important;
  flex-direction: column !important;
  min-height: 100vh !important;
  height: 100vh !important; /* Asegura que ocupe toda la altura disponible */
  background: linear-gradient(135deg, #ff5f8f 0%, #ff8eb2 100%) !important;
  color: #333 !important;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif !important;
  padding: 0 !important;
  position: relative !important;
  overflow-x: hidden !important;
  box-sizing: border-box !important;
}

/* Header con banner y logos */
.header-banner {
  width: 100% !important;
  background: #e91e63 !important; /* Color de fondo por defecto, se cubrirá con la imagen */
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  position: relative !important;
  overflow: hidden !important;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 600 160"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23e91e63;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ff6090;stop-opacity:1" /></linearGradient></defs><rect width="600" height="160" fill="url(%23grad)"/></svg>') !important; /* Gradiente por defecto */
}

/* Para usar una imagen externa, habilitamos esta opción: */
.header-banner::before {
  content: '' !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background-image: url('./images/header-banner.png') !important; /* Ruta relativa a la carpeta public */
  background-size: cover !important;
  background-position: center !important;
  z-index: 1 !important;
  opacity: 0 !important; /* Se cambia a 1 cuando la imagen está disponible */
}
.header-logos-modern {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: clamp(16px, 4vw, 24px) clamp(20px, 5vw, 32px) !important;
  position: relative !important;
  z-index: 2 !important;
  height: clamp(80px, 20vw, 120px) !important; /* Altura del banner */
}

.bradescard-logo, .promoda-logo {
  color: white !important;
  font-size: clamp(1.2rem, 3vw, 1.5rem) !important;
  font-weight: 700 !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
  letter-spacing: -0.3px !important;
  position: relative !important;
  z-index: 2 !important;
}

.card-mini-modern {
  position: relative !important;
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

/* Contenido principal con fondo blanco redondeado */
.requirements-title {
  color: white !important;
  font-size: clamp(1.5rem, 4vw, 2rem) !important;
  font-weight: 700 !important;
  text-align: left !important;
  margin: clamp(16px, 4vw, 24px) clamp(20px, 5vw, 32px) 0 !important;
  letter-spacing: -0.2px !important;
}

.requirements-subtitle {
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: clamp(0.95rem, 2.6vw, 1.1rem) !important;
  text-align: left !important;
  font-weight: 400 !important;
  margin: clamp(4px, 1vw, 8px) clamp(20px, 5vw, 32px) clamp(24px, 6vw, 32px) !important;
}

/* Cards de requisitos */
.requirements-cards {
  display: flex !important;
  flex-direction: column !important;
  gap: clamp(16px, 4vw, 24px) !important;
  padding: 0 clamp(20px, 5vw, 32px) !important;
  margin-bottom: clamp(24px, 6vw, 32px) !important;
}

.requirement-card {
  background: white !important;
  border-radius: clamp(16px, 4vw, 20px) !important;
  padding: clamp(16px, 4vw, 20px) !important;
  display: flex !important;
  align-items: center !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition: transform 0.3s, box-shadow 0.3s !important;
  animation: fadeIn 0.5s ease-out backwards !important;
}

/* Animar entrada de cards secuencialmente */
.requirement-card:nth-child(1) { animation-delay: 0.1s !important; }
.requirement-card:nth-child(2) { animation-delay: 0.25s !important; }
.requirement-card:nth-child(3) { animation-delay: 0.4s !important; }

.requirement-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15) !important;
}

.requirement-icon {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: clamp(50px, 13vw, 60px) !important;
  height: clamp(50px, 13vw, 60px) !important;
  background: rgba(233, 30, 99, 0.08) !important;
  border-radius: 50% !important;
  margin-right: clamp(16px, 4vw, 20px) !important;
}

.requirement-icon svg {
  width: clamp(30px, 8vw, 36px) !important;
  height: clamp(30px, 8vw, 36px) !important;
  transition: transform 0.3s !important;
}

.requirement-card:hover .requirement-icon svg {
  transform: scale(1.1) !important;
}

.requirement-title {
  color: #e91e63 !important;
  font-size: clamp(0.95rem, 2.6vw, 1.1rem) !important;
  font-weight: 600 !important;
}

/* Botón de continuar */
.requirements-btn {
  background: white !important;
  color: #e91e63 !important;
  font-size: clamp(1rem, 2.8vw, 1.15rem) !important;
  font-weight: 700 !important;
  border: 1px solid #e91e63 !important; /* Borde del color principal */
  border-radius: clamp(25px, 6.5vw, 30px) !important;
  padding: clamp(14px, 3.5vw, 18px) clamp(30px, 7.5vw, 36px) !important;
  cursor: pointer !important;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, border-color 0.3s !important;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08) !important;
  position: relative !important;
  overflow: hidden !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  min-width: clamp(180px, 45vw, 300px) !important;
}

/* Efecto de onda al hacer click */
.requirements-btn::after {
  content: '' !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  width: 0 !important;
  height: 0 !important;
  background: rgba(255, 255, 255, 0.4) !important;
  border-radius: 50% !important;
  transform: translate(-50%, -50%) !important;
  transition: width 0.6s, height 0.6s !important;
}

.requirements-btn:active::after {
  width: 300px !important;
  height: 300px !important;
}

.requirements-btn:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12) !important;
  border-color: #ff4081 !important; /* Borde más claro al hacer hover */
}

.requirements-btn:active {
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1) !important;
}

/* Animación del botón */
@keyframes pulseButton {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

.requirements-footer .requirements-btn {
  animation: pulseButton 2.5s infinite ease-in-out !important;
}

/* Footer con versión y botón */
.requirements-footer {
  margin-top: auto !important;
  width: 100% !important;
  padding-top: clamp(20px, 5vw, 30px) !important;
  padding-bottom: clamp(16px, 4vw, 20px) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(16px, 4vw, 24px) !important;
}

.requirements-version {
  text-align: center !important;
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: clamp(0.8rem, 2.2vw, 0.9rem) !important;
  font-weight: 400 !important;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividad específica para dispositivos más pequeños */
@media screen and (max-width: 374px) {
  .requirement-icon {
    width: 45px !important;
    height: 45px !important;
    margin-right: 12px !important;
  }
  
  .requirement-icon svg {
    width: 26px !important;
    height: 26px !important;
  }
  
  .requirements-btn {
    padding: 12px 25px !important;
    font-size: 0.95rem !important;
    min-width: 160px !important;
  }
  
  .requirements-footer {
    padding-top: 16px !important;
    gap: 12px !important;
  }
}

/* Tabletas y pantallas más grandes */
@media screen and (min-width: 768px) {
  .requirements-cards {
    max-width: 500px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .requirements-title, .requirements-subtitle {
    text-align: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .requirements-footer {
    padding-top: clamp(24px, 6vw, 36px) !important;
    padding-bottom: clamp(20px, 5vw, 30px) !important;
  }
  
  .requirements-btn {
    max-width: 300px !important;
  }
}
`;
