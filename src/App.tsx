import React, { useState, useEffect } from 'react';
// ESTILOS CONSOLIDADOS: Ya no se importan CSS individuales
// Todos los estilos están consolidados en microfrontend-styles.ts
import { AppProvider, useAppContext } from './core/context/AppContext';
import PresentationView from './components/presentation/PresentationView';
import { RequirementsView } from './components/requirements/RequirementsView';
import LoadingView from './components/loading/LoadingView';

const AppContent: React.FC = () => {
  const { currentView, setCurrentView } = useAppContext();
  // For debugging responsiveness we force loading view
  const [isLoading, setIsLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);

  // Simulamos el proceso de carga inicial
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Simular procesos de inicialización - reducido a 3 segundos
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // No iniciar transición aquí, dejar que el LoadingView lo maneje
        
      } catch (error) {
        console.error('Error durante la inicialización:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const handleLoadingComplete = () => {
    // Iniciar handoff: mostrar main debajo y mantener loading para cross-fade
    setShowMain(true);
    // Quitar loading después del fade-out
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  };

  const goToRequirements = () => {
    setCurrentView('requirements');
  };

  const backToPresentation = () => {
    setCurrentView('presentation');
  };

  const handleContinue = () => {
    alert('¡Proceso completado! Aquí continuaría el flujo...');
  };
  
  // Estilo inline responsivo para el contenedor de la aplicación
  const appStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: isLoading ? '100vw' : 'min(100vw, 1024px)',
    height: 'auto',
    minHeight: '100vh', // Siempre usar 100vh para evitar saltos
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)',
    margin: '0 auto',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    transition: 'background 0.8s ease-out', // Transición más rápida y directa
  };

  return (
    <div className="app" style={appStyle}>
      {(showMain || !isLoading) && (
        currentView === 'presentation' ? (
          <PresentationView onNext={goToRequirements} />
        ) : (
          <RequirementsView onContinue={handleContinue} />
        )
      )}

      {isLoading && (
        <div className="loading-layer">
          <LoadingView 
            loadingMessage="Iniciando experiencia Promoda..."
            onLoadingComplete={handleLoadingComplete}
            isCompleting={false}
          />
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
