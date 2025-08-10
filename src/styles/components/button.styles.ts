/**
 * ESTILOS DE COMPONENTES BOTONES
 * Botones base reutilizables con variantes
 */

export const BUTTON_STYLES = `
/* DEFINICIÓN ÚNICA - Botones base /* Estilo para el footer legal */
.legal-footer-modern { 
  margin-top: 0 !important; 
  padding: clamp(8px, 2vw, 12px) !important; 
  opacity: 0.85 !important;
  text-align: center !important;
  color: rgba(51, 51, 51, 0.7) !important; /* Color gris oscuro para mejor legibilidad en fondo claro */
}

.legal-footer-modern p { 
  font-size: clamp(0.8rem, 2.2vw, 0.9rem) !important;
  background: rgba(233, 30, 99, 0.08) !important; /* Fondo rosa muy sutil */
  padding: 4px 12px !important;
  border-radius: 12px !important;
  backdrop-filter: blur(4px) !important;
  -webkit-backdrop-filter: blur(4px) !important;
  border: 1px solid rgba(233, 30, 99, 0.1) !important; /* Borde rosa sutil */
  display: inline-block !important;
  margin: 0 auto !important;
}

.legal-footer-modern .footer-link { 
  color: #e91e63 !important; 
  text-decoration: underline !important; 
  display: inline !important; 
}

/* Media query para tabletas y pantallas más grandes */
@media screen and (min-width: 768px) {
  .button-container-modern {
    padding-top: clamp(24px, 6vw, 36px) !important;
    padding-bottom: clamp(20px, 5vw, 30px) !important;
  }
  
  .btn.btn-primary.btn-start-modern {
    max-width: 300px !important;
  }
  
  .legal-footer-modern { 
    margin-top: clamp(4px, 1vh, 10px) !important; 
  }
} */
.btn {
  display: inline-block !important;
  padding: clamp(10px, 3vw, 16px) clamp(20px, 5vw, 32px) !important;
  border: 1px solid #e91e63 !important; /* Borde del color principal */
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
  background: rgba(233, 30, 99, 0.9) !important; /* Rosa más intenso al hover */
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 24px rgba(233, 30, 99, 0.3) !important;
  border-color: rgba(255, 255, 255, 0.9) !important; /* Borde blanco más visible */
  backdrop-filter: blur(15px) !important;
  -webkit-backdrop-filter: blur(15px) !important;
  color: white !important; /* Aseguramos texto blanco en hover */
}

.btn:active {
  transform: translateY(-1px) !important; /* Consistente con requirements-btn */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1) !important; /* Consistente con requirements-btn */
}

/* Efecto de onda al hacer click - consistente con requirements-btn */
.btn.btn-primary.btn-start-modern::after {
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

.btn.btn-primary.btn-start-modern:active::after {
  width: 300px !important;
  height: 300px !important;
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
  border: 2px solid rgba(255, 255, 255, 0.3) !important; /* Mantenemos este borde específico para botones secundarios */
  backdrop-filter: blur(10px) !important;
  padding: clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 28px) !important;
  font-size: var(--font-size-md) !important;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}

/* START button tweaks: identical to requirements button */
.btn.btn-primary.btn-start-modern {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: clamp(14px, 3.5vw, 18px) clamp(30px, 7.5vw, 36px) !important; /* Mismo padding que requirements-btn */
  min-width: clamp(180px, 45vw, 300px) !important; /* Mismo ancho que requirements-btn */
  line-height: 1.15 !important;
  text-align: center !important;
  width: 100% !important; /* Asegura que ocupa todo el espacio disponible */
  max-width: 300px !important; /* Limita el ancho máximo */
  margin: 0 auto !important; /* Centra el botón */
  border: 1px solid rgba(255, 255, 255, 0.5) !important; /* Borde blanco semi-transparente */
  box-shadow: 0 6px 14px rgba(233, 30, 99, 0.25) !important;
  
  /* Mismo estilo que requirements-btn */
  background: rgba(233, 30, 99, 0.8) !important; /* Fondo rosa más visible */
  backdrop-filter: blur(10px) !important; /* Efecto de desenfoque de fondo */
  -webkit-backdrop-filter: blur(10px) !important; /* Para Safari */
  border-radius: clamp(25px, 6.5vw, 30px) !important;
  position: relative !important;
  overflow: hidden !important;
  color: white !important; /* Texto blanco para mejor contraste */
}
.btn-start-modern .btn-icon { display: none !important; }

/* Animación del botón igual que RequirementsView */
.btn.btn-primary.btn-start-modern {
  animation: pulseButton 2.5s infinite ease-in-out !important;
}

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

/* Contenedor para el botón - imita el estilo del footer de RequirementsView */
.button-container-modern {
  width: 100% !important;
  padding: clamp(20px, 5vw, 30px) clamp(20px, 5vw, 32px) !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-top: auto !important; /* Empuja el contenedor hacia abajo */
  background: rgba(233, 30, 99, 0.05) !important; /* Fondo sutil como footer de requirements */
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-top: 1px solid rgba(233, 30, 99, 0.1) !important; /* Borde rosa sutil */
}

/* Extra compact for small widths */
@media screen and (max-width: 374px) {
  .btn.btn-primary.btn-start-modern {
    padding: 12px 25px !important; /* Igual que RequirementsView en pantallas pequeñas */
    min-width: 160px !important; /* Mismo ancho mínimo que RequirementsView en pantallas pequeñas */
    font-size: 0.95rem !important; /* Mismo tamaño de fuente que RequirementsView */
  }
  
  .button-container-modern {
    padding: 16px !important;
  }
}

/* Media query para tabletas y pantallas más grandes - mismo que RequirementsView */
@media screen and (min-width: 768px) {
  .button-container-modern {
    padding-top: clamp(24px, 6vw, 36px) !important;
    padding-bottom: clamp(20px, 5vw, 30px) !important;
  }
  
  .btn.btn-primary.btn-start-modern {
    max-width: 300px !important;
  }
}
`;
