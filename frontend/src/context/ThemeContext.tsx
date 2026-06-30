import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'modern' | 'book';

interface ThemeContextType {
  mode: ThemeMode;
  toggleThemeMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Pull previous settings or default to the premium modern theme
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('radar-theme-mode');
    return (saved === 'book') ? 'book' : 'modern';
  });

  useEffect(() => {
    const body = document.body;
    if (mode === 'book') {
      body.classList.add('book-mode-active');
      localStorage.setItem('radar-theme-mode', 'book');
    } else {
      body.classList.remove('book-mode-active');
      localStorage.setItem('radar-theme-mode', 'modern');
    }
  }, [mode]);

  const toggleThemeMode = () => {
    setMode((prev) => (prev === 'modern' ? 'book' : 'modern'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for rapid consumption within nested components
export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};