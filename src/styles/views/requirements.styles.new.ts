/**
 * ESTILOS RENOVADOS DE VISTA DE REQUERIMIENTOS
 * Vista moderna de validación de requisitos con diseño premium
 */

export const REQUIREMENTS_STYLES = `
/* === REQUIREMENTS VIEW - VERSIÓN PREMIUM CON FONDO BLANCO === */
.requirements-view {
  display: flex !important;
  flex-direction: column !important;
  min-height: 100vh !important;
  height: 100vh !important; /* Asegura que ocupe toda la altura disponible */
  
  /* Fondo blanco con degradado sutil tipo gainsbourg */
  background: 
    /* Capa 1: Fondo base blanco */
    white,
    /* Capa 2: Degradado sutil */
    radial-gradient(circle at center top, rgba(255, 222, 235, 0.7) 0%, transparent 70%),
    /* Capa 3: Degradado adicional para textura */
    radial-gradient(circle at bottom right, rgba(250, 209, 226, 0.6) 0%, transparent 60%) !important;
  
  /* Sombra interna para efecto de profundidad */
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.03) !important;
  
  color: #333 !important;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif !important;
  padding: 0 !important;
  position: relative !important;
  overflow-x: hidden !important;
  box-sizing: border-box !important;
  
  /* Formas decorativas sutiles */
  &::before {
    content: '' !important;
    position: absolute !important;
    width: 300px !important;
    height: 300px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 50% !important;
    top: -100px !important;
    right: -100px !important;
    z-index: 0 !important;
    filter: blur(40px) !important;
  }
  
  &::after {
    content: '' !important;
    position: absolute !important;
    width: 200px !important;
    height: 200px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 50% !important;
    bottom: -50px !important;
    left: -50px !important;
    z-index: 0 !important;
    filter: blur(40px) !important;
  }
}

/* Header con banner y logos - versión suave */
.header-banner {
  width: 100% !important;
  background: rgba(255, 110, 150, 0.85) !important; /* Color rosa más suave */
  backdrop-filter: blur(8px) !important; /* Efecto de desenfoque de fondo */
  -webkit-backdrop-filter: blur(8px) !important; /* Para Safari */
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  position: relative !important;
  overflow: hidden !important;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 600 160"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23e91e63;stop-opacity:0.75" /><stop offset="100%" style="stop-color:%23ff6090;stop-opacity:0.75" /></linearGradient></defs><rect width="600" height="160" fill="url(%23grad)"/></svg>') !important; /* Gradiente con transparencia */
  border-bottom: 1px solid rgba(255, 255, 255, 0.4) !important; /* Borde inferior más visible */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important; /* Sombra sutil */
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
  padding: 6px 12px !important;
  background: rgba(255, 255, 255, 0.1) !important; /* Fondo sutil */
  backdrop-filter: blur(6px) !important; /* Efecto glass */
  -webkit-backdrop-filter: blur(6px) !important;
  border-radius: 8px !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important; /* Borde sutil */
}

.card-mini-modern {
  position: relative !important;
  width: 50px !important;
  height: 32px !important;
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(55, 65, 81, 0.9)) !important; /* Gradiente con transparencia */
  border-radius: 6px !important;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.15) !important;
  z-index: 1 !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important; /* Borde sutil */
  transform: perspective(500px) rotateY(-5deg) !important; /* Efecto 3D sutil */
  transition: transform 0.3s ease !important;
  
  &:hover {
    transform: perspective(500px) rotateY(0deg) !important;
  }
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

/* Contenido principal con efecto glassmorphism */
.requirements-title {
  color: #e91e63 !important; /* Cambiado a rosa para mejor contraste con fondo blanco */
  font-size: clamp(1.5rem, 4vw, 2rem) !important;
  font-weight: 700 !important;
  text-align: center !important; /* Centrado para alinear con el panel */
  margin: clamp(20px, 5vw, 30px) auto clamp(10px, 2.5vw, 15px) !important; /* Ajuste de márgenes */
  letter-spacing: -0.2px !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important; /* Sombra más sutil para texto */
  position: relative !important;
  z-index: 2 !important;
  max-width: 90% !important; /* Control de ancho para pantallas grandes */
}

.requirements-subtitle {
  background: transparent !important; /* Fondo transparente para contener el panel */
  text-align: center !important;
  margin: clamp(15px, 4vw, 25px) auto clamp(25px, 6vw, 35px) !important; /* Más espacio después */
  padding: 0 clamp(10px, 2.5vw, 16px) !important; /* Mismo padding horizontal que las tarjetas */
  width: 100% !important; /* Ancho completo del contenedor */
  display: block !important;
  max-width: 100% !important; /* Asegurar que use todo el ancho disponible */
  box-sizing: border-box !important; /* Incluir padding en el cálculo del ancho */
}

/* Estilo para el panel interno, similar a la tarjeta de mensualidad */
.subtitle-content {
  background: #e91e63 !important; /* Fondo rosa sólido como en la imagen */
  color: white !important; /* Texto blanco como en la imagen */
  font-size: clamp(1rem, 2.8vw, 1.2rem) !important; /* Ligeramente más grande */
  font-weight: 600 !important;
  padding: clamp(16px, 4vw, 20px) !important; /* Mismo padding que las tarjetas */
  border-radius: clamp(16px, 4vw, 20px) !important; /* Mismo border-radius que las tarjetas */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08) !important; /* Misma sombra que las tarjetas */
  border: 1px solid rgba(255, 255, 255, 0.2) !important; /* Borde sutil */
  display: block !important; /* Block en lugar de inline-block para tomar todo el ancho */
  width: 100% !important; /* Ancho completo para coincidir con la imagen */
  margin: 0 !important; /* Sin margen para ocupar todo el espacio */
  
  /* Efecto similar al de la imagen */
  position: relative !important;
  overflow: hidden !important;
  transition: transform 0.3s, box-shadow 0.3s !important;
}

.subtitle-content:after {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent) !important;
  pointer-events: none !important;
}

/* Aplicar transición y efectos similares a las tarjetas de requisitos */
.subtitle-content:hover {
  transform: translateY(-2px) !important; /* Un poco menos que las tarjetas para ser más sutil */
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12) !important;
}

/* Quitamos la animación de pulse para mantenerlo más parecido a la imagen */
@keyframes subtitlePulse {
  from {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
  to {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
}

/* Cards de requisitos */
.requirements-cards {
  display: flex !important;
  flex-direction: column !important;
  gap: clamp(16px, 4vw, 24px) !important;
  padding: 0 clamp(10px, 2.5vw, 16px) !important; /* Reducido para coincidir con el panel de subtítulo */
  margin-bottom: clamp(24px, 6vw, 32px) !important;
}

.requirement-card {
  background: rgba(255, 255, 255, 0.85) !important; /* Fondo semi-transparente */
  backdrop-filter: blur(12px) !important; /* Efecto de desenfoque de fondo (glassmorphism) */
  -webkit-backdrop-filter: blur(12px) !important; /* Para Safari */
  border-radius: clamp(16px, 4vw, 20px) !important;
  padding: clamp(16px, 4vw, 20px) !important;
  display: flex !important;
  align-items: center !important;
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6) !important; /* Borde superior brillante */
  border: 1px solid rgba(255, 255, 255, 0.18) !important; /* Borde sutil */
  transition: transform 0.3s, box-shadow 0.3s, backdrop-filter 0.3s !important;
  animation: fadeIn 0.5s ease-out backwards !important;
}

/* Animar entrada de cards secuencialmente */
.requirement-card:nth-child(1) { animation-delay: 0.1s !important; }
.requirement-card:nth-child(2) { animation-delay: 0.25s !important; }
.requirement-card:nth-child(3) { animation-delay: 0.4s !important; }

.requirement-card:hover {
  transform: translateY(-4px) !important;
  backdrop-filter: blur(16px) !important; /* Aumentamos el desenfoque al hacer hover */
  -webkit-backdrop-filter: blur(16px) !important;
  box-shadow: 
    0 12px 28px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  background: rgba(255, 255, 255, 0.9) !important; /* Ligeramente más opaco al hacer hover */
}

.requirement-icon {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: clamp(50px, 13vw, 60px) !important;
  height: clamp(50px, 13vw, 60px) !important;
  background: #e91e63 !important; /* Fondo rosa sólido como en la imagen */
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-radius: 50% !important;
  margin-right: clamp(16px, 4vw, 20px) !important;
  box-shadow: 
    0 4px 12px rgba(233, 30, 99, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3) !important; /* Brillo superior más intenso */
  border: 1px solid rgba(255, 255, 255, 0.2) !important; /* Borde blanco sutil */
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

/* Botón de continuar con efecto glassmorphism - más destacado */
.requirements-btn {
  background: rgba(233, 30, 99, 0.8) !important; /* Fondo rosa más visible */
  backdrop-filter: blur(10px) !important; /* Efecto de desenfoque de fondo */
  -webkit-backdrop-filter: blur(10px) !important; /* Para Safari */
  color: white !important; /* Texto blanco para mejor contraste */
  font-size: clamp(1rem, 2.8vw, 1.15rem) !important;
  font-weight: 700 !important;
  border: 1px solid rgba(255, 255, 255, 0.5) !important; /* Borde blanco semi-transparente */
  border-radius: clamp(25px, 6.5vw, 30px) !important;
  padding: clamp(14px, 3.5vw, 18px) clamp(30px, 7.5vw, 36px) !important;
  cursor: pointer !important;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s !important;
  box-shadow: 
    0 6px 14px rgba(233, 30, 99, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.6) !important; /* Brillo superior */
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
  backdrop-filter: blur(15px) !important; /* Aumentamos el desenfoque al hacer hover */
  -webkit-backdrop-filter: blur(15px) !important;
  box-shadow: 
    0 12px 24px rgba(233, 30, 99, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
  border-color: rgba(255, 255, 255, 0.9) !important; /* Borde blanco más visible al hover */
  background: rgba(233, 30, 99, 0.9) !important; /* Rosa más intenso al hover */
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

/* Footer con versión y botón - estilo glassmorphism */
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
  background: rgba(233, 30, 99, 0.05) !important; /* Fondo más sutil para contraste con fondo blanco */
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-top: 1px solid rgba(233, 30, 99, 0.1) !important; /* Borde rosa sutil */
}

.requirements-version {
  text-align: center !important;
  color: rgba(51, 51, 51, 0.9) !important; /* Color más oscuro para mejor legibilidad */
  font-size: clamp(0.8rem, 2.2vw, 0.9rem) !important;
  font-weight: 500 !important; /* Peso medio para mejor visibilidad */
  background: rgba(233, 30, 99, 0.15) !important; /* Fondo rosa más visible */
  padding: 6px 15px !important; /* Padding aumentado */
  border-radius: 12px !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
  border: 1px solid rgba(233, 30, 99, 0.25) !important; /* Borde rosa más visible */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important; /* Sombra sutil para destacar */
}

/* Animaciones mejoradas para efecto glassmorphism */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

/* Animación sutil para destacar el subtítulo */
@keyframes subtitlePulse {
  from {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: rgba(233, 30, 99, 0.25);
  }
  to {
    box-shadow: 0 6px 20px rgba(233, 30, 99, 0.15);
    border-color: rgba(233, 30, 99, 0.4);
  }
}

/* Animación para efecto de pulso en elementos glass */
@keyframes glassShine {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Indicador de carga glassmorphism */
.glass-loader {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 80px !important;
  height: 80px !important;
  background: rgba(255, 255, 255, 0.6) !important; /* Fondo más sólido para mejor contraste */
  backdrop-filter: blur(15px) !important;
  -webkit-backdrop-filter: blur(15px) !important;
  border-radius: 50% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  border: 1px solid rgba(233, 30, 99, 0.2) !important; /* Borde rosa sutil */
  box-shadow: 0 8px 32px rgba(233, 30, 99, 0.15) !important; /* Sombra rosa */
  z-index: 10 !important;
  animation: pulse 2s infinite ease-in-out !important;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.4);
  }
  70% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 10px rgba(233, 30, 99, 0);
  }
  100% {
    transform: translate(-50%, -50%) scale(0.95);
    box-shadow: 0 0 0 0 rgba(233, 30, 99, 0);
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
