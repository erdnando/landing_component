export const BUTTON_STYLES = `
/* DEFINICIÓN ÚNICA - Botones base RESPONSIVOS */
.btn {
  display: inline-block !important;
  padding: clamp(10px, 3vw, 16px) clamp(20px, 5vw, 32px) !important;
  border: none !important;
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
  background: #f5f5f5 !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
}

.btn:active {
  transform: translateY(0) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
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
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  backdrop-filter: blur(10px) !important;
  padding: clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 28px) !important;
  font-size: var(--font-size-md) !important;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}

/* START button tweaks: compact height and hide arrow icon */
.btn.btn-primary.btn-start-modern {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: clamp(10px, 2.6vw, 14px) clamp(22px, 6vw, 30px) !important;
  min-width: clamp(170px, 46vw, 240px) !important;
  line-height: 1.15 !important;
}
.btn-start-modern .btn-icon { display: none !important; }

/* Extra compact for small widths */
@media screen and (max-width: 374px) {
  .btn.btn-primary.btn-start-modern {
    padding: 10px 18px !important;
    min-width: 160px !important;
    font-size: var(--font-size-md) !important;
  }
}

@media screen and (min-width: 375px) and (max-width: 413px) {
  .btn.btn-primary.btn-start-modern {
    padding: 12px 20px !important;
    min-width: 170px !important;
  }
}

@media screen and (min-width: 414px) and (max-width: 767px) {
  .btn.btn-primary.btn-start-modern {
    padding: 12px 22px !important;
    min-width: 190px !important;
  }
}
`;