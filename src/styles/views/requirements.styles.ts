/**
 * ESTILOS DE VISTA DE REQUERIMIENTOS
 * Vista de validación de requisitos con colores claros
 */

export const REQUIREMENTS_STYLES = `
/* Vista de requerimientos con colores claros */
.requirements-view {
  background: #f8fafc !important;
  color: #334155 !important;
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

/* Header con logos en colores claros */
.header-logos-modern {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: clamp(15px, 3vw, 20px) 0 !important;
  border-bottom: 2px solid #e2e8f0 !important;
  margin-bottom: clamp(20px, 5vw, 30px) !important;
  position: relative !important;
}

.bradescard-logo, .promoda-logo {
  font-size: clamp(18px, 4vw, 22px) !important;
  font-weight: 700 !important;
  color: #e91e63 !important;
}

.card-mini-modern {
  position: absolute !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 40px !important;
  height: 25px !important;
  background: linear-gradient(135deg, #e91e63, #f06292) !important;
  border-radius: 4px !important;
  box-shadow: 0 2px 8px rgba(233, 30, 99, 0.3) !important;
}

.card-chip-mini {
  position: absolute !important;
  top: 4px !important;
  left: 6px !important;
  width: 8px !important;
  height: 6px !important;
  background: rgba(255, 255, 255, 0.8) !important;
  border-radius: 1px !important;
}

.card-shine-mini {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%) !important;
  border-radius: 4px !important;
}

/* Título con colores claros */
.requirements-title-modern {
  text-align: center !important;
  margin-bottom: clamp(25px, 6vw, 35px) !important;
}

.requirements-title-modern h2 {
  font-size: clamp(24px, 6vw, 32px) !important;
  font-weight: 700 !important;
  color: #e91e63 !important;
  margin-bottom: clamp(10px, 2vw, 15px) !important;
}

.title-underline {
  width: 60px !important;
  height: 3px !important;
  background: #e91e63 !important;
  margin: 0 auto !important;
  border-radius: 2px !important;
}

/* Lista de requisitos con estilo claro */
.requirements-list-modern {
  display: flex !important;
  flex-direction: column !important;
  gap: clamp(16px, 4vw, 20px) !important;
  margin-bottom: clamp(25px, 6vw, 35px) !important;
}

.requirement-item-modern {
  display: flex !important;
  align-items: center !important;
  gap: clamp(15px, 3vw, 20px) !important;
  padding: clamp(16px, 4vw, 20px) !important;
  background: #ffffff !important;
  border: 2px solid #e2e8f0 !important;
  border-radius: clamp(10px, 2vw, 12px) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
  transition: all 0.3s ease !important;
}

.requirement-item-modern:hover {
  border-color: #e91e63 !important;
  box-shadow: 0 4px 16px rgba(233, 30, 99, 0.1) !important;
  transform: translateY(-2px) !important;
}

.requirement-icon-wrapper {
  flex-shrink: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: clamp(50px, 12vw, 60px) !important;
  height: clamp(50px, 12vw, 60px) !important;
  background: #fdf2f8 !important;
  border: 2px solid #fbcfe8 !important;
  border-radius: 50% !important;
}

.requirement-text-modern {
  flex: 1 !important;
}

.requirement-text-modern strong {
  display: block !important;
  font-size: clamp(16px, 4vw, 18px) !important;
  font-weight: 600 !important;
  color: #1e293b !important;
  margin-bottom: 4px !important;
}

.requirement-text-modern p {
  font-size: clamp(14px, 3.5vw, 16px) !important;
  color: #64748b !important;
  margin: 0 !important;
  line-height: 1.4 !important;
}

.requirement-check {
  flex-shrink: 0 !important;
  width: clamp(24px, 6vw, 28px) !important;
  height: clamp(24px, 6vw, 28px) !important;
  background: #10b981 !important;
  color: white !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: clamp(14px, 3vw, 16px) !important;
  font-weight: 600 !important;
}

/* Footer con colores claros */
.requirements-footer {
  margin-top: auto !important;
  padding-top: clamp(20px, 5vw, 30px) !important;
}

.buttons-container-modern {
  display: flex !important;
  gap: clamp(12px, 3vw, 16px) !important;
  margin-bottom: clamp(20px, 4vw, 25px) !important;
}

.btn {
  flex: 1 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: clamp(8px, 2vw, 10px) !important;
  padding: clamp(14px, 3vw, 16px) clamp(20px, 4vw, 24px) !important;
  border-radius: clamp(8px, 2vw, 10px) !important;
  font-size: clamp(14px, 3.5vw, 16px) !important;
  font-weight: 600 !important;
  border: none !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
}

.btn-secondary {
  background: #f1f5f9 !important;
  color: #475569 !important;
  border: 2px solid #cbd5e1 !important;
}

.btn-secondary:hover {
  background: #e2e8f0 !important;
  border-color: #94a3b8 !important;
  transform: translateY(-1px) !important;
}

.btn-primary {
  background: linear-gradient(135deg, #e91e63, #f06292) !important;
  color: white !important;
  box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3) !important;
}

.btn-primary:hover {
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 16px rgba(233, 30, 99, 0.4) !important;
}

.btn-icon {
  font-size: clamp(12px, 3vw, 14px) !important;
}

/* Nota informativa */
.requirements-note {
  display: flex !important;
  align-items: center !important;
  gap: clamp(10px, 2vw, 12px) !important;
  padding: clamp(12px, 3vw, 16px) !important;
  background: #fef3c7 !important;
  border: 1px solid #fbbf24 !important;
  border-radius: clamp(6px, 1.5vw, 8px) !important;
  margin-bottom: clamp(15px, 3vw, 20px) !important;
}

.note-icon {
  flex-shrink: 0 !important;
  width: clamp(20px, 5vw, 24px) !important;
  height: clamp(20px, 5vw, 24px) !important;
  background: #f59e0b !important;
  color: white !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: clamp(12px, 3vw, 14px) !important;
  font-weight: 600 !important;
}

.requirements-note p {
  font-size: clamp(13px, 3vw, 15px) !important;
  color: #92400e !important;
  margin: 0 !important;
  font-weight: 500 !important;
}

/* Versión */
.version-footer-modern {
  text-align: center !important;
}

.version-footer-modern p {
  font-size: clamp(11px, 2.5vw, 13px) !important;
  color: #94a3b8 !important;
  margin: 0 !important;
  font-weight: 400 !important;
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
