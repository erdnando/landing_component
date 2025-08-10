import React from 'react';

export const RequirementsView = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <div className="requirements-view">
      <div className="header-logos-modern">
        <div className="bradescard-logo">bradescard</div>
        <div className="card-mini-modern">
          <div className="card-chip-mini" />
          <div className="card-shine-mini" />
        </div>
        <div className="promoda-logo">Promoda</div>
      </div>
      
      <h1 className="requirements-title">
        Antes de comenzar
      </h1>
      <div className="requirements-subtitle">
        Asegúrate de cumplir con los requisitos:
      </div>
      
      <div className="requirements-cards">
        <div className="requirement-card">
          <div className="requirement-icon">
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="32" height="20" rx="3" fill="#fff" stroke="#e91e63" strokeWidth="2" />
              <rect x="6" y="8" width="8" height="8" rx="2" fill="#f8bbd0" />
              <rect x="16" y="10" width="12" height="4" rx="1.5" fill="#e91e63" />
            </svg>
          </div>
          <div className="requirement-title">INE vigente</div>
        </div>
        
        <div className="requirement-card">
          <div className="requirement-icon">
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="2" width="20" height="32" rx="4" fill="#fff" stroke="#e91e63" strokeWidth="2" />
              <rect x="10" y="30" width="8" height="2" rx="1" fill="#e91e63" />
              <rect x="12" y="6" width="4" height="16" rx="2" fill="#f8bbd0" />
            </svg>
          </div>
          <div className="requirement-title">Teléfono celular</div>
        </div>
        
        <div className="requirement-card">
          <div className="requirement-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 24c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#f8bbd0" />
              <path d="M6 18c3.31-4.42 9.69-4.42 13 0M18 18c3.31-4.42 9.69-4.42 13 0" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 22c1.1-1.47 3.9-1.47 5 0M20 22c1.1-1.47 3.9-1.47 5 0" stroke="#e91e63" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="requirement-title">Buena conexión a internet</div>
        </div>
      </div>
      
      <button className="requirements-btn" onClick={onContinue}>
        ¡Todo Listo!
      </button>
      
      <footer className="requirements-footer">
        <div className="requirements-version">Versión: 1.0.0</div>
      </footer>
    </div>
  );
}
