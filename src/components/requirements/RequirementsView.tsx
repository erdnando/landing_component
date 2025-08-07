import React from 'react';
// ESTILOS CONSOLIDADOS: Ya no se importan CSS individuales
// Todos los estilos están consolidados en microfrontend-styles.ts

interface RequirementsViewProps {
  onBack: () => void;
  onContinue: () => void;
}

const RequirementsView: React.FC<RequirementsViewProps> = ({ 
  onBack, 
  onContinue 
}) => {
  return (
    <div className="requirements-view">
      {/* Header elegante con logos */}
      <div className="header-logos-modern">
        <div className="bradescard-logo">Bradescard</div>
        <div className="promoda-logo">Promoda</div>
        <div className="card-mini-modern">
          <div className="card-chip-mini"></div>
          <div className="card-shine-mini"></div>
        </div>
      </div>

      {/* Título con estilo moderno */}
      <div className="requirements-title-modern">
        <h2>Antes de comenzar</h2>
        <div className="title-underline"></div>
      </div>

      {/* Lista de requisitos con diseño moderno */}
      <div className="requirements-list-modern">
        <div className="requirement-item-modern">
          <div className="requirement-icon-wrapper">
            <svg width="40" height="24" viewBox="0 0 60 40" fill="none">
              <rect x="4" y="8" width="52" height="32" rx="4" fill="#F5F5F5" stroke="#e91e63" strokeWidth="1.5"/>
              <rect x="8" y="12" width="44" height="6" rx="1" fill="#e91e63" opacity="0.8"/>
              <rect x="8" y="22" width="20" height="4" rx="1" fill="#e91e63" opacity="0.6"/>
            </svg>
          </div>
          <div className="requirement-text-modern">
            <strong>INE vigente</strong>
            <p>Documento de identificación oficial</p>
          </div>
          <div className="requirement-check">✓</div>
        </div>

        <div className="requirement-item-modern">
          <div className="requirement-icon-wrapper">
            <svg width="24" height="40" viewBox="0 0 40 60" fill="none">
              <rect x="6" y="8" width="28" height="48" rx="6" fill="#F5F5F5" stroke="#e91e63" strokeWidth="1.5"/>
              <circle cx="20" cy="14" r="2" fill="#e91e63"/>
              <path d="M16 52 L24 52" stroke="#e91e63" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="requirement-text-modern">
            <strong>Teléfono celular</strong>
            <p>Con conexión a internet</p>
          </div>
          <div className="requirement-check">✓</div>
        </div>

        <div className="requirement-item-modern">
          <div className="requirement-icon-wrapper">
            <svg width="40" height="24" viewBox="0 0 60 40" fill="none">
              <path d="M8 12 L30 28 L52 12" stroke="#e91e63" strokeWidth="2" fill="none"/>
              <rect x="6" y="10" width="48" height="24" rx="4" fill="none" stroke="#e91e63" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="requirement-text-modern">
            <strong>Buena conexión</strong>
            <p>Para completar el proceso sin interrupciones</p>
          </div>
          <div className="requirement-check">✓</div>
        </div>
      </div>

      {/* Botones modernos */}
      <div className="requirements-footer">
        {/* Botones en fila */}
        <div className="buttons-container-modern buttons-row" style={{ marginBottom: '30px' }}>
          <button className="btn btn-secondary btn-back" onClick={onBack}>
            <span className="btn-icon">←</span>
            <span className="btn-text">Volver</span>
          </button>
          <button className="btn btn-primary btn-continue" onClick={onContinue}>
            <span className="btn-text">¡Todo Listo!</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
        
        {/* Nota informativa */}
        <div className="requirements-note">
          <div className="note-icon">ⓘ</div>
          <p>Todos los requisitos son necesarios para continuar</p>
        </div>

        {/* Versión */}
        <div className="version-footer-modern">
          <p>Versión: 1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default RequirementsView;
