import React, { createContext, useContext, useState } from 'react';
import { ViewType } from '../types';

interface AppContextProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewType>('presentation');

  return (
    <AppContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
