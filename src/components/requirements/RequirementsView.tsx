import React from 'react';

interface RequirementsViewProps {
  onContinue: () => void;
  bannerImage?: string; // URL opcional para la imagen del banner
}

export const RequirementsView = ({ onContinue, bannerImage }: RequirementsViewProps) => {
  // Estado para controlar la visualización del indicador de carga
  const [isLoading, setIsLoading] = React.useState(true);
  
  // Efecto para ocultar el indicador de carga después de un tiempo
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Generar estilos dinámicos para el banner si se proporciona una imagen
  const headerBannerStyle = bannerImage ? {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : undefined;

  return (
    <div className="requirements-view">
      {/* Indicador de carga con efecto glassmorphism */}
      {isLoading && (
        <div className="glass-loader">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="rgba(233, 30, 99, 0.2)"/>
            <path d="M12 2v4c4.42 0 8 3.58 8 8s-3.58 8-8 8v4c6.63 0 12-5.37 12-12S18.63 2 12 2z" fill="#e91e63">
              <animateTransform 
                attributeName="transform" 
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1s"
                repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      )}
      
      <div className="header-banner" style={headerBannerStyle}>
        <div className="header-logos-modern">
          <div className="bradescard-logo">Bradescard</div>
          <div className="card-mini-modern">
            <div className="card-chip-mini" />
            <div className="card-shine-mini" />
          </div>
          <div className="promoda-logo">Promoda</div>
        </div>
      </div>
      
      <h1 className="requirements-title">
        Antes de comenzar
      </h1>
      <div className="requirements-subtitle">
        <div className="subtitle-content">
          Asegúrate de cumplir con los requisitos
        </div>
      </div>
      
      <div className="requirements-cards">
        <div className="requirement-card">
          <div className="requirement-icon">
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="32" height="20" rx="3" fill="none" stroke="#ffffff" strokeWidth="2" />
              <rect x="6" y="8" width="8" height="8" rx="2" fill="#ffffff" />
              <rect x="16" y="10" width="12" height="4" rx="1.5" fill="#ffffff" />
            </svg>
          </div>
          <div className="requirement-title">INE vigente</div>
        </div>
        
        <div className="requirement-card">
          <div className="requirement-icon">
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="2" width="20" height="32" rx="4" fill="none" stroke="#ffffff" strokeWidth="2" />
              <rect x="10" y="30" width="8" height="2" rx="1" fill="#ffffff" />
              <rect x="12" y="6" width="4" height="16" rx="2" fill="#ffffff" />
            </svg>
          </div>
          <div className="requirement-title">Teléfono celular</div>
        </div>
        
        <div className="requirement-card">
          <div className="requirement-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 24c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#ffffff" />
              <path d="M6 18c3.31-4.42 9.69-4.42 13 0M18 18c3.31-4.42 9.69-4.42 13 0" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 22c1.1-1.47 3.9-1.47 5 0M20 22c1.1-1.47 3.9-1.47 5 0" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="requirement-title">Buena conexión a internet</div>
        </div>
      </div>
      
      <footer className="requirements-footer">
        <button className="requirements-btn" onClick={onContinue}>
          ¡Todo Listo!
        </button>
        <div className="requirements-version">Versión: 1.0.0</div>
      </footer>
    </div>
  );
}
