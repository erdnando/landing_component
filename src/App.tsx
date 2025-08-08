import React, { useState, useEffect } from 'react';
// ESTILOS CONSOLIDADOS: Ya no se importan CSS individuales
// Todos los estilos están consolidados en microfrontend-styles.ts
import { AppProvider, useAppContext } from './core/context/AppContext';
import PresentationView from './components/presentation/PresentationView';
import RequirementsView from './components/requirements/RequirementsView';
import LoadingView from './components/loading/LoadingView';

const AppContent: React.FC = () => {
  const { currentView, setCurrentView } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  // Simulamos el proceso de carga inicial
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Simular procesos de inicialización
        await new Promise(resolve => setTimeout(resolve, 5000)); // 5 segundos de carga para ver la animación
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error durante la inicialización:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const goToRequirements = () => {
    setCurrentView('requirements');
  };

  const backToPresentation = () => {
    setCurrentView('presentation');
  };

  const handleContinue = () => {
    alert('¡Proceso completado! Aquí continuaría el flujo...');
  };
  
  // Estilo inline para forzar que el componente se vea correctamente
  const appStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '375px',
    height: isLoading ? '850px' : '667px', // Altura ajustada para LoadingView
    background: isLoading ? 'transparent' : '#e91e63',
    margin: '0 auto',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  };

  // Si está cargando, mostrar el LoadingView
  if (isLoading) {
    return (
      <div className="app" style={appStyle}>
        <LoadingView 
          loadingMessage="Iniciando experiencia Promoda..."
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    );
  }

  return (
    <div className="app" style={appStyle}>
      {currentView === 'presentation' ? (
        <PresentationView onNext={goToRequirements} />
      ) : (
        <RequirementsView onBack={backToPresentation} onContinue={handleContinue} />
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
