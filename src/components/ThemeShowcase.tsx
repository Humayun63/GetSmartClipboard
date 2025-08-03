import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Theme {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
}

const themes: Theme[] = [
  {
    name: "Light",
    description: "Clean, modern light interface",
    colors: {
      primary: "#ffffff",
      secondary: "#f5f5f7",
      background: "#ffffff",
      text: "#1d1d1f",
      accent: "#667eea"
    }
  },
  {
    name: "Dark",
    description: "Easy on the eyes dark mode",
    colors: {
      primary: "#1a1a1a",
      secondary: "#2d2d2d",
      background: "#1a1a1a",
      text: "#ffffff",
      accent: "#667eea"
    }
  },
  {
    name: "Midnight",
    description: "A deep, elegant dark base with neon cyan accents, perfect for night coders",
    colors: {
      primary: "#0D1117",
      secondary: "#161B22",
      background: "#0D1117",
      text: "#C9D1D9",
      accent: "#39D3F0"
    }
  },
  {
    name: "Solaris",
    description: "A bright, warm theme inspired by the sun. Perfect for everyone",
    colors: {
      primary: "#FFF8E1",
      secondary: "#FFECB3",
      background: "#FFF8E1",
      text: "#4E342E",
      accent: "#FF8F00"
    }
  },
  {
    name: "Kyoto",
    description: "A calming theme with natural tones. Perfect for writers and thinkers",
    colors: {
      primary: "#F5F5F5",
      secondary: "#E0E0E0",
      background: "#F5F5F5",
      text: "#333333",
      accent: "#4CAF50"
    }
  },
  {
    name: "Retro",
    description: "A funky, 70s-inspired theme. Perfect for creatives",
    colors: {
      primary: "#ECEFF1",
      secondary: "#CFD8DC",
      background: "#ECEFF1",
      text: "#37474F",
      accent: "#FF7043"
    }
  },
  {
    name: "Oceanic",
    description: "A cool, refreshing blue theme. Perfect for designers",
    colors: {
      primary: "#E3F2FD",
      secondary: "#BBDEFB",
      background: "#E3F2FD",
      text: "#0D47A1",
      accent: "#2196F3"
    }
  },
  {
    name: "Sakura",
    description: "A soft, pinkish theme inspired by cherry blossoms. Perfect for everyone",
    colors: {
      primary: "#FFF0F5",
      secondary: "#FFE4E1",
      background: "#FFF0F5",
      text: "#6A5ACD",
      accent: "#FF69B4"
    }
  },
  {
    name: "Matrix",
    description: "A classic green-on-black hacker theme. Perfect for developers",
    colors: {
      primary: "#000000",
      secondary: "#0D0D0D",
      background: "#000000",
      text: "#00FF00",
      accent: "#00FF00"
    }
  },
  {
    name: "8-Bit",
    description: "A nostalgic theme with pixel-art colors. Perfect for gamers",
    colors: {
      primary: "#2F3542",
      secondary: "#57606F",
      background: "#2F3542",
      text: "#FFFFFF",
      accent: "#FF4757"
    }
  },
  {
    name: "Monochrome",
    description: "A minimalist black and white theme. Perfect for professionals",
    colors: {
      primary: "#FFFFFF",
      secondary: "#F5F5F5",
      background: "#FFFFFF",
      text: "#000000",
      accent: "#333333"
    }
  },
  {
    name: "Golden",
    description: "A warm, cozy theme inspired by sunset. Perfect for photographers and artists",
    colors: {
      primary: "#FFF3E0",
      secondary: "#FFE0B2",
      background: "#FFF3E0",
      text: "#5D4037",
      accent: "#FF9800"
    }
  },
  {
    name: "Cosmic",
    description: "A deep space theme with purples and blues. Perfect for dreamers",
    colors: {
      primary: "#191D3A",
      secondary: "#24284B",
      background: "#191D3A",
      text: "#E0E0E0",
      accent: "#8E44AD"
    }
  }
];

const ThemeShowcase: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<string>(currentTheme);
  
  // Convert theme name format (e.g., '8bit' to '8-Bit' for display)
  const formatThemeName = (name: string): string => {
    if (name === '8bit') return '8-Bit';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  // Convert display name to theme name format for context (e.g., '8-Bit' to '8bit')
  const getThemeValue = (displayName: string): string => {
    if (displayName === '8-Bit') return '8bit';
    return displayName.toLowerCase();
  };
  
  // Update the actual theme when selected theme changes
  useEffect(() => {
    const themeValue = getThemeValue(selectedTheme);
    setTheme(themeValue as any);
  }, [selectedTheme, setTheme]);
  
  // Update selected theme when context theme changes
  useEffect(() => {
    setSelectedTheme(formatThemeName(currentTheme));
  }, [currentTheme]);

  return (
    <section id="themes" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Palette className="w-12 h-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            13 Beautiful Themes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Customize Smart Clipboard with a variety of themes - from light and dark modes to vibrant color schemes that match your style and workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {themes.map((theme, index) => (
            <div
              key={theme.name}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedTheme === theme.name ? 'scale-105' : ''
              }`}
              onClick={() => setSelectedTheme(formatThemeName(getThemeValue(theme.name)))}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Theme preview */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div 
                  className="h-32 p-4 flex flex-col justify-between"
                  style={{ backgroundColor: theme.colors.background }}
                >
                  {/* Top bar */}
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.accent }}
                    ></div>
                    <div 
                      className="w-3 h-3 rounded-full opacity-60"
                      style={{ backgroundColor: theme.colors.secondary }}
                    ></div>
                    <div 
                      className="w-3 h-3 rounded-full opacity-40"
                      style={{ backgroundColor: theme.colors.primary }}
                    ></div>
                  </div>
                  
                  {/* Content preview */}
                  <div className="space-y-2">
                    <div 
                      className="h-2 rounded"
                      style={{ backgroundColor: theme.colors.primary, width: '80%' }}
                    ></div>
                    <div 
                      className="h-2 rounded"
                      style={{ backgroundColor: theme.colors.secondary, width: '60%' }}
                    ></div>
                    <div 
                      className="h-2 rounded"
                      style={{ backgroundColor: theme.colors.primary, width: '90%' }}
                    ></div>
                  </div>
                </div>

                {/* Selection indicator */}
                {selectedTheme === theme.name && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Preview</span>
                </div>
              </div>

              {/* Theme info */}
              <div className="mt-4 text-center">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {theme.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected theme details */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedTheme} Theme
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {themes.find(t => t.name === selectedTheme)?.description}
            </p>
            <div className="flex justify-center space-x-4">
              {Object.entries(themes.find(t => t.name === selectedTheme)?.colors || {}).map(([key, color]) => (
                <div key={key} className="text-center">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 mx-auto mb-2"
                    style={{ backgroundColor: color }}
                  ></div>
                  <span className="text-xs text-gray-500 dark:text-gray-500 capitalize">
                    {key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeShowcase;