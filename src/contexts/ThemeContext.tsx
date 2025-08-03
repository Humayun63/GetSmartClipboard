import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeName = 'light' | 'dark' | 'midnight' | 'solaris' | 'kyoto' | 'retro' | 'oceanic' | 'sakura' | 'matrix' | '8bit' | 'monochrome' | 'golden' | 'cosmic';

interface ThemeContextType {
  currentTheme: ThemeName;
  isDark: boolean;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Themes that are considered "dark"
const darkThemes: ThemeName[] = ['dark', 'midnight', 'matrix', '8bit', 'cosmic'];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    // Check localStorage first, then system preference, default to dark
    const saved = localStorage.getItem('smart-clipboard-theme') as ThemeName | null;
    if (saved && isValidTheme(saved)) {
      return saved;
    }
    // Check system preference for dark/light
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Default to dark
  });

  const isDark = darkThemes.includes(currentTheme);

  function isValidTheme(theme: string): theme is ThemeName {
    return ['light', 'dark', 'midnight', 'solaris', 'kyoto', 'retro', 'oceanic', 'sakura', 'matrix', '8bit', 'monochrome', 'golden', 'cosmic'].includes(theme as ThemeName);
  }

  useEffect(() => {
    // Apply theme to document
    localStorage.setItem('smart-clipboard-theme', currentTheme);
    
    // Remove all theme data attributes
    document.documentElement.removeAttribute('data-theme');
    
    // Add dark class if needed
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Set the specific theme
    if (currentTheme !== 'light') {
      document.documentElement.setAttribute('data-theme', currentTheme === '8bit' ? '8-bit' : currentTheme);
    }
  }, [currentTheme, isDark]);

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
  };

  const toggleTheme = () => {
    setCurrentTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, isDark, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};