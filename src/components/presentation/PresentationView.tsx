import React from 'react';

interface PresentationViewProps {
  onNext: () => void;
}

const PresentationView: React.FC<PresentationViewProps> = ({ onNext }) => {
  
  return (
    <div className="presentation-view">
      {/* Header con logos */}
      <div className="header-logos-modern">
        <div className="bradescard-logo">Bradescard</div>
        <div className="promoda-logo">Promoda</div>
      </div>
      
      {/* Título principal con diseño mejorado */}
      <div className="main-title-modern">
        <h1>Tarjeta de crédito <span className="branded-text">Promoda</span> <span className="branded-text-secondary">Bradescard</span></h1>
        <p>¡Solicítala hoy <strong>sin costo</strong>!</p>
      </div>

      {/* Beneficios destacados en formato moderno y elegante */}
      <div className="benefits-grid-modern">
        <div className="benefit-card-modern">
          <div className="benefit-icon-wrapper">
            <span className="benefit-percent">5%</span>
          </div>
          <div className="benefit-desc">
            <strong>de descuento</strong>
            <p>en tu primera compra y siempre</p>
          </div>
        </div>
        
        <div className="benefit-card-modern">
          <div className="benefit-icon-wrapper">
            <span className="benefit-value">4</span>
          </div>
          <div className="benefit-desc">
            <strong>meses sin intereses</strong>
            <p>en tiendas Promoda</p>
          </div>
        </div>
        
        <div className="benefit-card-modern highlight">
          <div className="benefit-icon-wrapper">
            <span className="benefit-percent">20%</span>
          </div>
          <div className="benefit-desc">
            <strong>de descuento en Starbucks</strong>
            <p>con tu tarjeta nueva</p>
          </div>
        </div>
        
        <div className="benefit-card-modern">
          <div className="benefit-icon-wrapper">
            <span className="benefit-icon">$</span>
          </div>
          <div className="benefit-desc">
            <strong>Mensualidad</strong>
            <p>de $61+IVA</p>
          </div>
        </div>
      </div>
      
      <div className="promo-badge">
        <span className="promo-icon">★</span>
        <p className="promo-tagline">Beneficios y promos todo el año</p>
        <span className="promo-icon">★</span>
      </div>

      {/* Tarjeta de crédito simplificada */}
      {/* <div className="card-image-container">
        <div className="credit-card-static">
           <div className="card-shine"></div> 
         

           <div className="card-number">
            <span>**** **** **** 2458</span>
          </div> 
        </div>
      </div> */}
      <div className="credit-card">
        <div className="credit-card-chip"></div>
        <div className="credit-card-number">**** **** **** 2458</div>
        <div className="credit-card-name">NOMBRE APELLIDO</div>
        <div className="credit-card-expiry">12/28</div>
      </div>

      {/* Instrucción simple con icono */}
      <div className="simple-instruction-container">
        <div className="instruction-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="white" strokeWidth="2"/>
            <path d="M4 8H20" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <p className="simple-instruction">Solo necesitas tu INE</p>
      </div>

      {/* Botón Iniciar con efecto - Contenedor para alinear con RequirementsView */}
      <div className="button-container-modern">
        <button className="btn btn-primary btn-start-modern" onClick={onNext}>
          <span className="btn-text">Iniciar</span>
          <span className="btn-icon">→</span>
        </button>
      </div>

      {/* Footer legal estilizado */}
      <div className="legal-footer-modern">
        <p>Términos en <a href="#" className="footer-link">www.bradescard.com.mx</a> | v1.0.0</p>
      </div>
    </div>
  );
};

export default PresentationView;
