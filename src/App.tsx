import React from 'react';
// ESTILOS CONSOLIDADOS: Ya no se importan CSS individuales
// Todos los estilos están consolidados en microfrontend-styles.ts
import { AppProvider, useAppContext } from './core/context/AppContext';
import PresentationView from './components/presentation/PresentationView';
import RequirementsView from './components/requirements/RequirementsView';

const AppContent: React.FC = () => {
  const { currentView, setCurrentView } = useAppContext();

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
    height: '667px', // Altura fija estándar para móvil (iPhone 6/7/8)
    background: '#e91e63',
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
