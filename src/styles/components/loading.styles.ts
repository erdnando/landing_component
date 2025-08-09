/**
 * ESTILOS DE COMPONENTE DE CARGA
 * Spinner y vista de carga con colores claros
 */

export const LOADING_STYLES = `
/* Vista de carga con colores claros */
.loading-view {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: #f8fafc !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  z-index: 9999 !important;
  animation: fadeIn 300ms ease-out !important;
}

.loading-text {
  font-size: clamp(18px, 4vw, 24px) !important;
  font-weight: 600 !important;
  color: #e91e63 !important;
  margin-bottom: clamp(20px, 5vw, 30px) !important;
  text-align: center !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

/* Spinner animado */
.spinner {
  width: clamp(40px, 8vw, 50px) !important;
  height: clamp(40px, 8vw, 50px) !important;
  border: 4px solid #e2e8f0 !important;
  border-top: 4px solid #e91e63 !important;
  border-radius: 50% !important;
  animation: spin 1s linear infinite !important;
}

@keyframes spin {
  0% { transform: rotate(0deg) !important; }
  100% { transform: rotate(360deg) !important; }
}

@keyframes fadeIn {
  from { opacity: 0 !important; }
  to { opacity: 1 !important; }
}

/* Loading dots alternativo */
.loading-dots {
  display: flex !important;
  gap: 8px !important;
  margin-top: 20px !important;
}

.loading-dot {
  width: 12px !important;
  height: 12px !important;
  background: #e91e63 !important;
  border-radius: 50% !important;
  animation: bounce 1.4s infinite both !important;
}

.loading-dot:nth-child(2) {
  animation-delay: 0.2s !important;
}

.loading-dot:nth-child(3) {
  animation-delay: 0.4s !important;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0) !important;
  }
  40% {
    transform: scale(1) !important;
  }
}
`;
