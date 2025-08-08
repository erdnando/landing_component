import React, { useEffect, useState } from 'react';

interface LoadingViewProps {
  loadingMessage?: string;
  onLoadingComplete?: () => void;
}

const LoadingView: React.FC<LoadingViewProps> = ({ 
  loadingMessage = "Iniciando sistema...",
  onLoadingComplete
}) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showStars, setShowStars] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  useEffect(() => {
    // Animación de progreso
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Iniciar la transición de fade-out
          setIsCompleting(true);
          // Llamar al callback después de la transición
          if (onLoadingComplete) {
            setTimeout(onLoadingComplete, 1000); // 1 segundo para la transición
          }
          return 100;
        }
        return prev + 2;
      });
    }, 26); // 26ms para completar en ~1.3 segundos

    // Mostrar estrellas después de un momento
    const starTimeout = setTimeout(() => {
      setShowStars(true);
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(starTimeout);
    };
  }, [onLoadingComplete]);

  // Effect para controlar el scroll durante la transición
  useEffect(() => {
    if (isCompleting) {
      // Guardar el estado actual del overflow
      const originalOverflow = document.body.style.overflow || '';
      const originalOverflowX = document.body.style.overflowX || '';
      const originalOverflowY = document.body.style.overflowY || '';
      
      // Deshabilitar scroll completamente
      document.body.style.overflow = 'hidden';
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'hidden';
      
      // También aplicar al html para mayor seguridad
      const htmlElement = document.documentElement;
      const originalHtmlOverflow = htmlElement.style.overflow || '';
      htmlElement.style.overflow = 'hidden';
      
      // Restaurar el scroll después de la transición
      const restoreScrollTimeout = setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        document.body.style.overflowX = originalOverflowX;
        document.body.style.overflowY = originalOverflowY;
        htmlElement.style.overflow = originalHtmlOverflow;
      }, 1100); // Un poco más que la duración de la transición
      
      return () => {
        clearTimeout(restoreScrollTimeout);
        // Restaurar inmediatamente si el componente se desmonta
        document.body.style.overflow = originalOverflow;
        document.body.style.overflowX = originalOverflowX;
        document.body.style.overflowY = originalOverflowY;
        htmlElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isCompleting]);

  return (
    <div 
      className={`loading-view-fullscreen ${isCompleting ? 'loading-completing' : ''}`}
      data-component="landing"
      data-view="loading"
      data-microfrontend="true"
      style={{
        opacity: isCompleting ? 0 : 1,
        transition: 'opacity 1s ease-out, filter 1s ease-out'
      }}
    >
      {/* Overlay para bloquear interacciones */}
      <div className="loading-overlay"></div>
      
      {/* Fondo animado con estrellas */}
      <div className="loading-background">
        <div className="stars-container">
          {showStars && [...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="star" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient animado */}
        <div className="cosmic-gradient"></div>
      </div>

      {/* Header con logos */}
      <div className="header-logos-floating">
        <div className="bradescard-logo-glow">Bradescard</div>
        <div className="promoda-logo-glow">Promoda</div>
      </div>

      {/* Cohete principal animado */}
      <div 
        className="rocket-launch-container"
        data-component="landing"
        data-element="rocket-container"
      >
        <div 
          className="rocket-spaceship"
          data-component="landing"
          data-element="rocket"
        >
          {/* Cuerpo del cohete */}
          <div className="rocket-body">
            <div className="rocket-tip"></div>
            <div className="rocket-middle">
              <div className="rocket-window"></div>
              <div className="rocket-details">
                <div className="rocket-line"></div>
                <div className="rocket-line"></div>
              </div>
            </div>
            <div className="rocket-fins">
              <div className="rocket-fin rocket-fin-left"></div>
              <div className="rocket-fin rocket-fin-right"></div>
            </div>
          </div>
          
          {/* Fuego del cohete */}
          <div className="rocket-fire">
            <div className="fire-flame fire-flame-1"></div>
            <div className="fire-flame fire-flame-2"></div>
            <div className="fire-flame fire-flame-3"></div>
          </div>
          
          {/* Humo/partículas */}
          <div className="rocket-particles">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${45 + Math.random() * 10}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Ondas de choque */}
        <div className="shock-waves">
          <div className="shock-wave shock-wave-1"></div>
          <div className="shock-wave shock-wave-2"></div>
          <div className="shock-wave shock-wave-3"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div 
        className="loading-content-center"
        data-component="landing"
        data-content="loading-center"
      >
        <div className="loading-title-epic">
          <h1>Iniciando Sistema</h1>
          <div className="title-underline-glow"></div>
        </div>

        {/* Barra de progreso futurista */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${loadingProgress}%` }}
            >
              <div className="progress-glow"></div>
            </div>
          </div>
          <div className="progress-text">{loadingProgress}%</div>
        </div>

        {/* Mensaje de loading con efectos */}
        <div className="loading-message-epic">
          <div className="message-icon">
            <div className="pulse-ring"></div>
            <div className="pulse-ring pulse-ring-2"></div>
            <div className="pulse-ring pulse-ring-3"></div>
            <span className="message-emoji">🚀</span>
          </div>
          <p className="message-text">{loadingMessage}</p>
          <div className="loading-dots">
            <span className="dot dot-1">.</span>
            <span className="dot dot-2">.</span>
            <span className="dot dot-3">.</span>
          </div>
        </div>

        {/* Texto adicional futurista */}
        <div className="loading-status">
          <div className="status-item">
            <span className="status-icon">✓</span>
            <span>Conexión segura establecida</span>
          </div>
          <div className="status-item">
            <span className="status-icon">✓</span>
            <span>Encriptación activada</span>
          </div>
          <div className="status-item status-item-loading">
            <span className="status-icon-loading">⚡</span>
            <span>Validando credenciales...</span>
          </div>
        </div>
      </div>

      {/* Círculos decorativos animados */}
      <div className="decorative-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      {/* Footer minimalista */}
      <div className="loading-footer-minimal">
        <p>Bradescard · Promoda · v1.0.0</p>
      </div>
    </div>
  );
};

export default LoadingView;
