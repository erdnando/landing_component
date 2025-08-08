# Guía de Implementación del LoadingView para Microfrontends

## 📋 Índice
1. [Descripción General](#descripción-general)
2. [Requisitos Previos](#requisitos-previos)
3. [Archivos Necesarios](#archivos-necesarios)
4. [Implementación Paso a Paso](#implementación-paso-a-paso)
5. [Configuración de Estilos](#configuración-de-estilos)
6. [Integración con Vue.js](#integración-con-vuejs)
7. [Personalización](#personalización)
8. [Solución de Problemas](#solución-de-problemas)
9. [Mejores Prácticas](#mejores-prácticas)

## 🎯 Descripción General

El LoadingView es una pantalla de carga épica con animaciones futuristas que incluye:
- 🚀 Cohete animado con fuego y partículas
- ⭐ Estrellas flotantes con animaciones
- 📊 Barra de progreso dinámica
- 🎨 Transición suave de fade-out
- 📱 Dimensiones optimizadas (375px × 850px)
- 🔒 Control de scroll durante transiciones

## ⚡ Requisitos Previos

- **React 18+** con TypeScript
- **Webpack** o bundler similar
- **CSS-in-JS** o manejo de estilos CSS
- Arquitectura de **microfrontend** con Shadow DOM (opcional)

## 📁 Archivos Necesarios

### 1. Componente Principal
```
src/components/loading/LoadingView.tsx
```

### 2. Estilos
```
src/styles/microfrontend-styles.ts  (o archivo CSS equivalente)
```

### 3. Integración en App Principal
```
src/App.tsx  (modificaciones necesarias)
```

## 🛠 Implementación Paso a Paso

### Paso 1: Crear el Componente LoadingView

Crea el archivo `src/components/loading/LoadingView.tsx`:

```tsx
import React, { useEffect, useState } from 'react';

interface LoadingViewProps {
  loadingMessage?: string;
  onLoadingComplete?: () => void;
}

const LoadingView: React.FC<LoadingViewProps> = ({ 
  loadingMessage = "Validando código...",
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
      data-component="basicos"
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

      {/* Header con logos - PERSONALIZAR AQUÍ */}
      <div className="header-logos-floating">
        <div className="bradescard-logo-glow">Tu Marca</div>
        <div className="promoda-logo-glow">Tu Producto</div>
      </div>

      {/* Cohete principal animado */}
      <div 
        className="rocket-launch-container"
        data-component="basicos"
        data-element="rocket-container"
      >
        <div 
          className="rocket-spaceship"
          data-component="basicos"
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
        data-component="basicos"
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
            <span className="message-emoji">🔒</span>
          </div>
          <p className="message-text">{loadingMessage}</p>
          <div className="loading-dots">
            <span className="dot dot-1">.</span>
            <span className="dot dot-2">.</span>
            <span className="dot dot-3">.</span>
          </div>
        </div>

        {/* Texto adicional futurista - PERSONALIZAR AQUÍ */}
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

      {/* Footer minimalista - PERSONALIZAR AQUÍ */}
      <div className="loading-footer-minimal">
        <p>Tu Marca · Tu Producto · v1.0.0</p>
      </div>
    </div>
  );
};

export default LoadingView;
```

### Paso 2: Integrar en App.tsx

Modifica tu `src/App.tsx`:

```tsx
import React, { useState } from 'react';
import LoadingView from './components/loading/LoadingView';
// ... otros imports

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'loading' | 'main'>('loading');

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setCurrentView('main');
  };

  if (currentView === 'loading') {
    return (
      <LoadingView 
        loadingMessage="Validando código..."
        onLoadingComplete={handleLoadingComplete}
      />
    );
  }

  return (
    <div className="app-container">
      {/* Tu aplicación principal aquí */}
    </div>
  );
};

export default App;
```

## 🎨 Configuración de Estilos

### Opción 1: CSS Modules / Archivo CSS Regular

Crea `src/styles/loading-styles.css`:

```css
/* ESTILOS PRINCIPALES DEL LOADING VIEW */

/* Container principal - DIMENSIONES CRÍTICAS */
.loading-view-fullscreen {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  width: 375px !important;
  height: 850px !important;
  max-width: 375px !important;
  min-width: 375px !important;
  min-height: 850px !important;
  max-height: 850px !important;
  z-index: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  font-family: Arial, Helvetica, sans-serif !important;
  overflow: hidden !important;
  user-select: none !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
  transition: opacity 1s ease-out, filter 1s ease-out !important;
}

/* Transición de finalización */
.loading-view-fullscreen.loading-completing {
  opacity: 0 !important;
  filter: blur(1px) !important;
}

/* Overlay para bloquear interacciones */
.loading-overlay {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 10 !important;
  pointer-events: auto !important;
  background-color: transparent !important;
}

/* Fondo animado */
.loading-background {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(135deg, 
    #0f0f23 0%, 
    #1a1a2e 25%, 
    #16213e 50%, 
    #0f0f23 100%) !important;
  overflow: hidden !important;
}

/* Gradient cósmico animado */
.cosmic-gradient {
  position: absolute !important;
  top: -50% !important;
  left: -50% !important;
  width: 200% !important;
  height: 200% !important;
  background: radial-gradient(circle at 30% 40%, 
    rgba(123, 67, 151, 0.3) 0%, 
    rgba(220, 66, 127, 0.2) 25%, 
    rgba(255, 154, 0, 0.1) 50%, 
    transparent 70%) !important;
  animation: cosmicRotate 20s linear infinite !important;
}

@keyframes cosmicRotate {
  from { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  to { transform: rotate(360deg) scale(1); }
}

/* Container de estrellas */
.stars-container {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden !important;
}

/* Estrellas animadas */
.star {
  position: absolute !important;
  width: 2px !important;
  height: 2px !important;
  background-color: #fff !important;
  border-radius: 50% !important;
  opacity: 0 !important;
  animation: twinkle linear infinite !important;
  box-shadow: 0 0 6px #fff !important;
}

@keyframes twinkle {
  0%, 100% { 
    opacity: 0; 
    transform: scale(0.8); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.2); 
  }
}

/* Header con logos flotantes */
.header-logos-floating {
  position: absolute !important;
  top: 80px !important;
  left: 0 !important;
  width: 100% !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0 40px !important;
  z-index: 5 !important;
}

.bradescard-logo-glow, .promoda-logo-glow {
  font-size: 16px !important;
  font-weight: bold !important;
  color: #00d4ff !important;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.8) !important;
  animation: logoFloat 3s ease-in-out infinite !important;
}

.promoda-logo-glow {
  animation-delay: 1.5s !important;
  color: #ff6b6b !important;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.8) !important;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* COHETE ANIMADO */
.rocket-launch-container {
  position: absolute !important;
  top: 150px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 120px !important;
  height: 200px !important;
  z-index: 4 !important;
}

.rocket-spaceship {
  position: relative !important;
  width: 100% !important;
  height: 100% !important;
  animation: rocketHover 4s ease-in-out infinite !important;
}

@keyframes rocketHover {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

.rocket-body {
  position: absolute !important;
  top: 20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 40px !important;
  height: 100px !important;
  background: linear-gradient(180deg, #e8e8e8 0%, #c0c0c0 50%, #a8a8a8 100%) !important;
  border-radius: 20px 20px 8px 8px !important;
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 2px 0 rgba(255, 255, 255, 0.4),
    inset 0 -2px 0 rgba(0, 0, 0, 0.2) !important;
}

.rocket-tip {
  position: absolute !important;
  top: -15px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 0 !important;
  height: 0 !important;
  border-left: 15px solid transparent !important;
  border-right: 15px solid transparent !important;
  border-bottom: 20px solid #ff4757 !important;
  filter: drop-shadow(0 0 10px rgba(255, 71, 87, 0.6)) !important;
}

.rocket-middle {
  position: relative !important;
  width: 100% !important;
  height: 60px !important;
  margin-top: 10px !important;
}

.rocket-window {
  position: absolute !important;
  top: 15px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 16px !important;
  height: 16px !important;
  background: radial-gradient(circle, #87ceeb 30%, #4169e1 70%) !important;
  border-radius: 50% !important;
  box-shadow: 
    0 0 15px rgba(135, 206, 235, 0.8),
    inset 0 -2px 2px rgba(0, 0, 0, 0.2) !important;
  animation: windowGlow 2s ease-in-out infinite alternate !important;
}

@keyframes windowGlow {
  from { box-shadow: 0 0 15px rgba(135, 206, 235, 0.8), inset 0 -2px 2px rgba(0, 0, 0, 0.2); }
  to { box-shadow: 0 0 25px rgba(135, 206, 235, 1), inset 0 -2px 2px rgba(0, 0, 0, 0.2); }
}

.rocket-details {
  position: absolute !important;
  top: 35px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 30px !important;
  height: 15px !important;
}

.rocket-line {
  width: 100% !important;
  height: 2px !important;
  background-color: #666 !important;
  margin: 2px 0 !important;
  border-radius: 1px !important;
}

.rocket-fins {
  position: absolute !important;
  bottom: -5px !important;
  width: 100% !important;
  height: 20px !important;
}

.rocket-fin {
  position: absolute !important;
  bottom: 0 !important;
  width: 15px !important;
  height: 20px !important;
  background: linear-gradient(135deg, #ff6348 0%, #ff4757 100%) !important;
  clip-path: polygon(0 100%, 100% 100%, 50% 0) !important;
}

.rocket-fin-left {
  left: -8px !important;
  transform: rotate(-10deg) !important;
}

.rocket-fin-right {
  right: -8px !important;
  transform: rotate(10deg) !important;
}

/* Fuego del cohete */
.rocket-fire {
  position: absolute !important;
  bottom: -40px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 35px !important;
  height: 45px !important;
}

.fire-flame {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40% !important;
  animation: fireFlicker 0.1s ease-in-out infinite alternate !important;
}

.fire-flame-1 {
  width: 35px !important;
  height: 45px !important;
  background: radial-gradient(ellipse at bottom, 
    #ff9500 0%, #ff6b00 30%, #ff4500 60%, #ff0000 90%) !important;
}

.fire-flame-2 {
  width: 28px !important;
  height: 38px !important;
  background: radial-gradient(ellipse at bottom, 
    #ffb700 0%, #ff8c00 40%, #ff4500 80%) !important;
  animation-delay: 0.05s !important;
}

.fire-flame-3 {
  width: 20px !important;
  height: 30px !important;
  background: radial-gradient(ellipse at bottom, 
    #ffff00 0%, #ffa500 50%, #ff6500 100%) !important;
  animation-delay: 0.1s !important;
}

@keyframes fireFlicker {
  0% { transform: translateX(-50%) scale(1) rotate(-2deg); }
  100% { transform: translateX(-50%) scale(1.1) rotate(2deg); }
}

/* Partículas del cohete */
.rocket-particles {
  position: absolute !important;
  bottom: -60px !important;
  left: 0 !important;
  width: 100% !important;
  height: 30px !important;
  overflow: hidden !important;
}

.particle {
  position: absolute !important;
  width: 3px !important;
  height: 3px !important;
  background-color: #ff6b00 !important;
  border-radius: 50% !important;
  animation: particleRise linear infinite !important;
  opacity: 0.8 !important;
}

@keyframes particleRise {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}

/* Ondas de choque */
.shock-waves {
  position: absolute !important;
  bottom: -20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 100px !important;
  height: 50px !important;
}

.shock-wave {
  position: absolute !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border-radius: 50% !important;
  border: 2px solid rgba(255, 107, 0, 0.6) !important;
  animation: shockExpand 2s ease-out infinite !important;
}

.shock-wave-1 {
  width: 60px !important;
  height: 30px !important;
}

.shock-wave-2 {
  width: 80px !important;
  height: 40px !important;
  animation-delay: 0.7s !important;
}

.shock-wave-3 {
  width: 100px !important;
  height: 50px !important;
  animation-delay: 1.4s !important;
}

@keyframes shockExpand {
  0% {
    transform: translateX(-50%) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) scale(2);
    opacity: 0;
  }
}

/* CONTENIDO PRINCIPAL */
.loading-content-center {
  position: relative !important;
  z-index: 3 !important;
  text-align: center !important;
  color: white !important;
  margin-top: 250px !important;
}

.loading-title-epic {
  margin-bottom: 40px !important;
}

.loading-title-epic h1 {
  font-size: 28px !important;
  font-weight: bold !important;
  color: #ffffff !important;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.8) !important;
  margin: 0 0 15px 0 !important;
  animation: titlePulse 3s ease-in-out infinite !important;
}

@keyframes titlePulse {
  0%, 100% { 
    text-shadow: 0 0 30px rgba(0, 212, 255, 0.8); 
    transform: scale(1);
  }
  50% { 
    text-shadow: 0 0 40px rgba(0, 212, 255, 1); 
    transform: scale(1.02);
  }
}

.title-underline-glow {
  width: 150px !important;
  height: 3px !important;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #00d4ff 25%, 
    #ff6b6b 50%, 
    #00d4ff 75%, 
    transparent 100%) !important;
  margin: 0 auto !important;
  animation: underlineFlow 2s ease-in-out infinite !important;
}

@keyframes underlineFlow {
  0%, 100% { opacity: 0.6; transform: scaleX(1); }
  50% { opacity: 1; transform: scaleX(1.1); }
}

/* BARRA DE PROGRESO */
.progress-container {
  margin: 40px auto !important;
  width: 280px !important;
}

.progress-bar {
  width: 100% !important;
  height: 12px !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px !important;
  overflow: hidden !important;
  border: 2px solid rgba(0, 212, 255, 0.3) !important;
  box-shadow: 
    0 0 20px rgba(0, 212, 255, 0.2),
    inset 0 0 10px rgba(0, 0, 0, 0.3) !important;
}

.progress-fill {
  height: 100% !important;
  background: linear-gradient(90deg, 
    #00d4ff 0%, 
    #0099cc 25%, 
    #00d4ff 50%, 
    #66e0ff 75%, 
    #00d4ff 100%) !important;
  border-radius: 18px !important;
  transition: width 0.3s ease !important;
  position: relative !important;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.6) !important;
  animation: progressGlow 2s ease-in-out infinite !important;
}

@keyframes progressGlow {
  0%, 100% { 
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
  }
  50% { 
    box-shadow: 0 0 25px rgba(0, 212, 255, 0.9);
  }
}

.progress-glow {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  width: 30px !important;
  height: 100% !important;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.4) 50%, 
    transparent 100%) !important;
  animation: progressSweep 2s ease-in-out infinite !important;
}

@keyframes progressSweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress-text {
  text-align: center !important;
  margin-top: 15px !important;
  font-size: 18px !important;
  font-weight: bold !important;
  color: #00d4ff !important;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.8) !important;
  animation: numberPulse 1s ease-in-out infinite !important;
}

@keyframes numberPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* MENSAJE DE LOADING */
.loading-message-epic {
  margin: 30px auto !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 15px !important;
}

.message-icon {
  position: relative !important;
  width: 60px !important;
  height: 60px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.pulse-ring {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 100% !important;
  height: 100% !important;
  border: 2px solid rgba(0, 212, 255, 0.6) !important;
  border-radius: 50% !important;
  animation: pulseExpand 2s ease-out infinite !important;
}

.pulse-ring-2 {
  animation-delay: 0.7s !important;
  border-color: rgba(255, 107, 107, 0.6) !important;
}

.pulse-ring-3 {
  animation-delay: 1.4s !important;
  border-color: rgba(255, 154, 0, 0.6) !important;
}

@keyframes pulseExpand {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

.message-emoji {
  font-size: 24px !important;
  z-index: 2 !important;
  position: relative !important;
  animation: emojiSpin 4s ease-in-out infinite !important;
}

@keyframes emojiSpin {
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(-5deg) scale(1.1); }
  50% { transform: rotate(0deg) scale(1); }
  75% { transform: rotate(5deg) scale(1.1); }
}

.message-text {
  font-size: 16px !important;
  color: #e8e8e8 !important;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3) !important;
  margin: 0 !important;
  font-weight: 500 !important;
}

.loading-dots {
  display: flex !important;
  gap: 8px !important;
  margin-top: 10px !important;
}

.dot {
  width: 8px !important;
  height: 8px !important;
  background-color: #00d4ff !important;
  border-radius: 50% !important;
  animation: dotBounce 1.4s ease-in-out infinite !important;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.6) !important;
}

.dot-1 { animation-delay: 0s !important; }
.dot-2 { animation-delay: 0.2s !important; }
.dot-3 { animation-delay: 0.4s !important; }

@keyframes dotBounce {
  0%, 80%, 100% { 
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% { 
    transform: scale(1.2);
    opacity: 1;
  }
}

/* STATUS DE LOADING */
.loading-status {
  margin-top: 40px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 12px !important;
  align-items: flex-start !important;
}

.status-item {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;
  font-size: 14px !important;
  color: #a8a8a8 !important;
  width: 100% !important;
  justify-content: flex-start !important;
}

.status-item-loading {
  color: #00d4ff !important;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5) !important;
}

.status-icon {
  color: #4caf50 !important;
  font-weight: bold !important;
  text-shadow: 0 0 10px rgba(76, 175, 80, 0.6) !important;
  animation: checkGlow 2s ease-in-out infinite !important;
}

@keyframes checkGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(76, 175, 80, 0.6); }
  50% { text-shadow: 0 0 20px rgba(76, 175, 80, 1); }
}

.status-icon-loading {
  color: #ffa726 !important;
  animation: loadingSpin 1s linear infinite !important;
  text-shadow: 0 0 15px rgba(255, 167, 38, 0.8) !important;
}

@keyframes loadingSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* CÍRCULOS DECORATIVOS */
.decorative-circles {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  pointer-events: none !important;
  overflow: hidden !important;
}

.circle {
  position: absolute !important;
  border: 2px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 50% !important;
  animation: circleFloat linear infinite !important;
}

.circle-1 {
  width: 80px !important;
  height: 80px !important;
  top: 20% !important;
  left: 10% !important;
  animation-duration: 20s !important;
  border-color: rgba(0, 212, 255, 0.2) !important;
}

.circle-2 {
  width: 120px !important;
  height: 120px !important;
  top: 60% !important;
  right: 15% !important;
  animation-duration: 25s !important;
  animation-direction: reverse !important;
  border-color: rgba(255, 107, 107, 0.2) !important;
}

.circle-3 {
  width: 60px !important;
  height: 60px !important;
  bottom: 30% !important;
  left: 20% !important;
  animation-duration: 18s !important;
  border-color: rgba(255, 154, 0, 0.2) !important;
}

.circle-4 {
  width: 100px !important;
  height: 100px !important;
  top: 40% !important;
  right: 25% !important;
  animation-duration: 22s !important;
  animation-direction: reverse !important;
  border-color: rgba(156, 39, 176, 0.2) !important;
}

@keyframes circleFloat {
  0% { 
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.7;
  }
  100% { 
    transform: translateY(0px) rotate(360deg);
    opacity: 0.3;
  }
}

/* FOOTER */
.loading-footer-minimal {
  position: absolute !important;
  bottom: 30px !important;
  left: 0 !important;
  width: 100% !important;
  text-align: center !important;
  z-index: 3 !important;
}

.loading-footer-minimal p {
  font-size: 12px !important;
  color: rgba(255, 255, 255, 0.6) !important;
  margin: 0 !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
}

/* RESPONSIVE ADJUSTMENTS */
@media (max-width: 400px) {
  .loading-view-fullscreen {
    width: 100vw !important;
    min-width: 100vw !important;
    max-width: 100vw !important;
  }
  
  .progress-container {
    width: 250px !important;
  }
  
  .loading-title-epic h1 {
    font-size: 24px !important;
  }
}

/* SHADOW DOM SPECIFIC STYLES */
:host .loading-view-fullscreen,
:host(.basicos-web-component) .loading-view-fullscreen,
[data-component="basicos"] .loading-view-fullscreen {
  /* Los mismos estilos que .loading-view-fullscreen */
}
```

### Opción 2: CSS-in-JS (si usas styled-components o emotion)

Para implementar los estilos mediante CSS-in-JS, puedes copiar los estilos del archivo `microfrontend-styles.ts` del proyecto Basicos.

## 🔌 Integración con Vue.js

Si necesitas integrar con Vue.js, asegúrate de pasar el callback correctamente:

```typescript
// En tu componente Vue
export default {
  mounted() {
    // Configurar el callback para cuando termine el loading
    if (window.basicosWebComponent) {
      window.basicosWebComponent.setLoadingCallback(() => {
        this.showMainContent = true;
      });
    }
  }
}
```

## 🎨 Personalización

### Cambiar Logos y Textos

1. **Header logos**: Modifica las líneas en `LoadingView.tsx`:
```tsx
<div className="bradescard-logo-glow">Tu Marca</div>
<div className="promoda-logo-glow">Tu Producto</div>
```

2. **Footer**: Cambia:
```tsx
<p>Tu Marca · Tu Producto · v1.0.0</p>
```

3. **Mensajes de estado**: Personaliza en:
```tsx
<div className="status-item">
  <span className="status-icon">✓</span>
  <span>Tu mensaje personalizado</span>
</div>
```

### Ajustar Tiempos

1. **Velocidad de progreso** (línea 32):
```tsx
}, 26); // Cambiar este valor (menor = más rápido)
```

2. **Duración de transición** (línea 39):
```tsx
setTimeout(onLoadingComplete, 1000); // Cambiar duración
```

### Cambiar Colores

En el CSS, busca y reemplaza estos valores:
- `#00d4ff` - Azul principal
- `#ff6b6b` - Rojo/rosa
- `#ff9500` - Naranja (fuego del cohete)

## 🐛 Solución de Problemas

### Problema: Aparece scroll durante la transición
**Solución**: Verifica que tengas el useEffect de control de scroll implementado correctamente.

### Problema: Dimensiones incorrectas
**Solución**: Asegúrate de que las dimensiones estén fijas en 375px × 850px en los estilos CSS.

### Problema: Animaciones no funcionan
**Solución**: Verifica que los estilos CSS estén correctamente importados y no haya conflictos de especificidad.

### Problema: No funciona en Vue.js
**Solución**: Implementa el sistema de callbacks correctamente en lugar de usar timeouts fijos.

## 📋 Mejores Prácticas

1. **Mantén las dimensiones exactas**: 375px × 850px
2. **Usa el sistema de callbacks** en lugar de timeouts fijos
3. **Implementa el control de scroll** durante transiciones
4. **Personaliza solo textos y colores**, mantén la estructura
5. **Testa en diferentes navegadores** y dispositivos
6. **Usa !important en estilos críticos** para microfrontends

## 📝 Notas Finales

- El componente está optimizado para arquitectura de microfrontend
- Las animaciones están optimizadas para rendimiento
- Los estilos usan especificidad alta para evitar conflictos
- El control de scroll previene problemas de UX durante transiciones

¡Tu LoadingView épico está listo para implementar! 🚀
