export const NEW_REQUIREMENTS_STYLES = `

/* ================ VISTA 2: DISEÑO PREMIUM INSPIRADO EN TARJETA ELEGANTE ================ */

.requirements-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
  
  /* Fondo premium con gradiente suave y textura inspirado en tarjeta elegante */
  background: 
    linear-gradient(135deg, 
      rgba(248, 250, 252, 0.95) 0%,
      rgba(241, 245, 249, 0.92) 25%,
      rgba(248, 250, 252, 0.95) 50%,
      rgba(236, 242, 248, 0.9) 75%,
      rgba(248, 250, 252, 0.95) 100%),
    radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.02) 0%, transparent 50%);
  background-attachment: fixed;
  
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
}

/* Contenedor principal como tarjeta premium */
.requirements-main-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(20px, 5vw, 40px);
  margin: clamp(15px, 4vw, 30px);
  margin-top: clamp(80px, 15vw, 120px); /* Espacio para el header band */
  margin-bottom: clamp(10px, 3vw, 20px);
  
  /* Diseño de tarjeta premium inspirado en la vista 1 */
  background: 
    linear-gradient(145deg, 
      rgba(255, 255, 255, 0.95) 0%,
      rgba(248, 250, 252, 0.9) 30%,
      rgba(255, 255, 255, 0.95) 70%,
      rgba(241, 245, 249, 0.85) 100%);
  
  border-radius: clamp(16px, 4vw, 28px);
  border: 1px solid rgba(226, 232, 240, 0.6);
  
  /* Sombras múltiples para profundidad premium */
  box-shadow: 
    0 8px 32px rgba(15, 23, 42, 0.06),
    0 4px 16px rgba(15, 23, 42, 0.04),
    0 2px 8px rgba(15, 23, 42, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  
  position: relative;
  overflow: hidden;
}

/* Efecto brillante sutil */
.requirements-main-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1) 50%,
    transparent
  );
  animation: shimmer-light 6s ease-in-out infinite;
}

@keyframes shimmer-light {
  0%, 100% { left: -100%; opacity: 0; }
  50% { left: 100%; opacity: 1; }
}

/* ============ TÍTULO ELEGANTE ============ */

.requirements-title-elegant {
  text-align: center;
  margin-bottom: clamp(30px, 6vw, 50px);
  position: relative;
  z-index: 2;
}

.requirements-title-elegant h2 {
  font-size: clamp(24px, 5.5vw, 36px);
  font-weight: 700;
  letter-spacing: -0.025em;
  
  /* Gradiente de texto premium inspirado en colores suaves */
  background: linear-gradient(
    135deg,
    #1e293b 0%,
    #334155 25%,
    #475569 50%,
    #1e293b 75%,
    #0f172a 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  margin: 0 0 clamp(8px, 2vw, 16px) 0;
  line-height: 1.2;
}

.requirements-title-elegant .subtitle {
  font-size: clamp(14px, 3.5vw, 18px);
  color: #64748b;
  font-weight: 500;
  margin-bottom: clamp(15px, 3vw, 25px);
  letter-spacing: 0.01em;
}

.requirements-title-elegant .title-decoration {
  width: clamp(60px, 15vw, 120px);
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    #3b82f6 20%,
    #8b5cf6 50%,
    #06b6d4 80%,
    transparent
  );
  margin: 0 auto;
  border-radius: 2px;
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.6; transform: scaleX(1); }
  50% { opacity: 1; transform: scaleX(1.1); }
}

/* ============ GRID DE REQUISITOS PREMIUM ============ */

.requirements-grid-premium {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 4vw, 24px);
  width: 100%;
  max-width: 500px;
  margin-bottom: clamp(25px, 5vw, 40px);
}

@media (max-width: 480px) {
  .requirements-grid-premium {
    gap: clamp(12px, 3vw, 18px);
  }
}

/* Tarjetas individuales premium */
.requirement-card-premium {
  display: flex;
  align-items: center;
  padding: clamp(16px, 4vw, 24px);
  gap: clamp(16px, 4vw, 20px);
  
  /* Fondo de tarjeta elegante */
  background: 
    linear-gradient(135deg, 
      rgba(255, 255, 255, 0.9) 0%,
      rgba(248, 250, 252, 0.8) 100%);
  
  border-radius: clamp(12px, 3vw, 20px);
  border: 1px solid rgba(226, 232, 240, 0.5);
  
  /* Sombra suave pero definida */
  box-shadow: 
    0 4px 20px rgba(15, 23, 42, 0.04),
    0 2px 8px rgba(15, 23, 42, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.requirement-card-premium:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 32px rgba(15, 23, 42, 0.08),
    0 4px 16px rgba(15, 23, 42, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* Contenedor de iconos elegante */
.card-icon-container {
  width: clamp(48px, 12vw, 64px);
  height: clamp(48px, 12vw, 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  /* Fondo circular con gradiente suave */
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(147, 51, 234, 0.08) 50%,
    rgba(16, 185, 129, 0.1) 100%
  );
  
  border-radius: 50%;
  border: 1px solid rgba(59, 130, 246, 0.15);
  
  /* Efecto glassmorphism */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  
  position: relative;
  overflow: hidden;
}

.card-icon-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  border-radius: 50%;
}

.card-icon-container svg {
  color: #3b82f6;
  opacity: 0.8;
  z-index: 1;
  position: relative;
}

/* Texto de las tarjetas */
.requirement-card-premium h3 {
  font-size: clamp(16px, 4vw, 20px);
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 clamp(4px, 1vw, 6px) 0;
  letter-spacing: -0.01em;
  flex: 1;
}

.requirement-card-premium p {
  font-size: clamp(13px, 3.2vw, 16px);
  color: #64748b;
  margin: 0;
  line-height: 1.4;
  font-weight: 400;
}

/* Status de requisitos */
.requirement-status {
  width: clamp(24px, 6vw, 32px);
  height: clamp(24px, 6vw, 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: clamp(12px, 3vw, 16px);
  
  box-shadow: 
    0 4px 12px rgba(16, 185, 129, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  flex-shrink: 0;
}

/* Ajuste para organizar contenido en las tarjetas */
.requirement-card-premium {
  display: flex;
  align-items: center;
  gap: clamp(16px, 4vw, 20px);
}

.requirement-card-premium > div:nth-child(2) {
  flex: 1;
  min-width: 0;
}

/* ============ SECCIÓN DE INFORMACIÓN ELEGANTE ============ */

.info-section-elegant {
  display: flex;
  align-items: center;
  gap: clamp(12px, 3vw, 16px);
  padding: clamp(16px, 4vw, 24px);
  width: 100%;
  max-width: 500px;
  
  background: 
    linear-gradient(135deg, 
      rgba(59, 130, 246, 0.05) 0%,
      rgba(147, 51, 234, 0.03) 100%);
  
  border-radius: clamp(12px, 3vw, 16px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.info-section-elegant .info-icon {
  width: clamp(24px, 6vw, 32px);
  height: clamp(24px, 6vw, 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: clamp(12px, 3vw, 16px);
  flex-shrink: 0;
}

.info-section-elegant p {
  font-size: clamp(13px, 3.2vw, 16px);
  color: #475569;
  margin: 0;
  font-weight: 500;
}

/* ============ FOOTER ELEGANTE ============ */

.requirements-footer-elegant {
  padding: clamp(20px, 5vw, 30px);
  padding-top: clamp(10px, 2.5vw, 20px);
  background: 
    linear-gradient(180deg, 
      rgba(255, 255, 255, 0.0) 0%,
      rgba(248, 250, 252, 0.6) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(226, 232, 240, 0.5);
  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons-container-elegant {
  display: flex;
  gap: clamp(12px, 3vw, 16px);
  margin-bottom: clamp(16px, 4vw, 24px);
  max-width: 500px;
  width: 100%;
}

/* Botones elegantes */
.btn-elegant {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(6px, 1.5vw, 10px);
  
  padding: clamp(14px, 3.5vw, 20px) clamp(16px, 4vw, 24px);
  border-radius: clamp(12px, 3vw, 16px);
  border: none;
  font-size: clamp(14px, 3.5vw, 18px);
  font-weight: 600;
  letter-spacing: 0.01em;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* Botón secundario */
.btn-secondary-elegant {
  background: 
    linear-gradient(135deg, 
      rgba(255, 255, 255, 0.9) 0%,
      rgba(248, 250, 252, 0.8) 100%);
  
  color: #475569;
  border: 1px solid rgba(226, 232, 240, 0.6);
  
  box-shadow: 
    0 4px 16px rgba(15, 23, 42, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.btn-secondary-elegant:hover {
  background: 
    linear-gradient(135deg, 
      rgba(248, 250, 252, 0.95) 0%,
      rgba(241, 245, 249, 0.9) 100%);
  
  transform: translateY(-1px);
  box-shadow: 
    0 6px 24px rgba(15, 23, 42, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* Botón primario */
.btn-primary-elegant {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  
  box-shadow: 
    0 4px 16px rgba(59, 130, 246, 0.3),
    0 2px 8px rgba(59, 130, 246, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-primary-elegant:hover {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  transform: translateY(-1px);
  box-shadow: 
    0 6px 24px rgba(59, 130, 246, 0.4),
    0 4px 12px rgba(59, 130, 246, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.btn-elegant .btn-icon {
  font-size: clamp(16px, 4vw, 20px);
}

.btn-elegant .btn-text {
  font-weight: 600;
}

/* Footer de versión elegante */
.version-footer-elegant {
  text-align: center;
  margin-top: clamp(8px, 2vw, 12px);
  max-width: 500px;
  width: 100%;
}

.version-footer-elegant p {
  font-size: clamp(12px, 3vw, 14px);
  color: #94a3b8;
  margin: 0;
  font-weight: 400;
  opacity: 0.8;
}

/* ============ RESPONSIVE ENHANCEMENTS ============ */

@media (max-width: 400px) {
  .requirements-main-card {
    margin: clamp(10px, 3vw, 15px);
    padding: clamp(16px, 4vw, 20px);
    margin-top: clamp(70px, 12vw, 90px);
  }
  
  .requirement-card-premium {
    padding: clamp(14px, 3.5vw, 18px);
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .requirements-grid-premium {
    max-width: 600px;
  }
  
  .buttons-container-elegant {
    max-width: 600px;
  }
  
  .info-section-elegant {
    max-width: 600px;
  }
}

@media (min-width: 1025px) {
  .requirements-grid-premium {
    max-width: 650px;
  }
  
  .buttons-container-elegant {
    max-width: 650px;
  }
  
  .info-section-elegant {
    max-width: 650px;
  }
}

/* ============ ACCESIBILIDAD ============ */

@media (prefers-reduced-motion: reduce) {
  .shimmer-light,
  .glow-pulse {
    animation: none;
  }
  
  .btn-elegant,
  .requirement-card-premium {
    transition: none;
  }
}

/* Safe area para dispositivos con notch */
@supports (padding: max(0px)) {
  .requirements-view {
    padding-left: max(env(safe-area-inset-left), 0px);
    padding-right: max(env(safe-area-inset-right), 0px);
  }
  
  .requirements-footer-elegant {
    padding-bottom: max(clamp(20px, 5vw, 30px), env(safe-area-inset-bottom));
  }
}

`;
