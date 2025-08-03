import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';

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
      primary: "#f8fafc",
      secondary: "#e2e8f0",
      background: "#ffffff",
      text: "#1e293b",
      accent: "#3b82f6"
    }
  },
  {
    name: "Dark",
    description: "Easy on the eyes dark mode",
    colors: {
      primary: "#1e293b",
      secondary: "#334155",
      background: "#0f172a",
      text: "#f1f5f9",
      accent: "#6366f1"
    }
  },
  {
    name: "Midnight",
    description: "Cyber neon terminal style",
    colors: {
      primary: "#0a0a0a",
      secondary: "#1a1a1a",
      background: "#000000",
      text: "#00ff00",
      accent: "#00ffff"
    }
  },
  {
    name: "Solaris",
    description: "Warm golden sunrise theme",
    colors: {
      primary: "#fef3c7",
      secondary: "#fbbf24",
      background: "#fffbeb",
      text: "#92400e",
      accent: "#f59e0b"
    }
  },
  {
    name: "Kyoto Garden",
    description: "Peaceful Japanese garden",
    colors: {
      primary: "#ecfdf5",
      secondary: "#6ee7b7",
      background: "#f0fdf4",
      text: "#065f46",
      accent: "#10b981"
    }
  },
  {
    name: "Retro Groove",
    description: "80s synthwave vibes",
    colors: {
      primary: "#1e1b4b",
      secondary: "#7c3aed",
      background: "#0f0f23",
      text: "#c4b5fd",
      accent: "#f59e0b"
    }
  },
  {
    name: "Oceanic",
    description: "Deep ocean blue theme",
    colors: {
      primary: "#0c4a6e",
      secondary: "#0284c7",
      background: "#082f49",
      text: "#bae6fd",
      accent: "#38bdf8"
    }
  },
  {
    name: "Sakura",
    description: "Delicate cherry blossom",
    colors: {
      primary: "#fdf2f8",
      secondary: "#f9a8d4",
      background: "#fef7ff",
      text: "#831843",
      accent: "#ec4899"
    }
  },
  {
    name: "Mint Leaf",
    description: "Fresh mint green theme",
    colors: {
      primary: "#f0fdf4",
      secondary: "#86efac",
      background: "#f7fefc",
      text: "#14532d",
      accent: "#22c55e"
    }
  },
  {
    name: "Dracula",
    description: "Popular vampire theme",
    colors: {
      primary: "#44475a",
      secondary: "#6272a4",
      background: "#282a36",
      text: "#f8f8f2",
      accent: "#bd93f9"
    }
  }
];

const ThemeShowcase: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("Dark");

  return (
    <section id="themes" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Palette className="w-12 h-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            10+ Beautiful Themes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Customize Smart Clipboard to match your workflow and aesthetic preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {themes.map((theme, index) => (
            <div
              key={theme.name}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedTheme === theme.name ? 'scale-105' : ''
              }`}
              onClick={() => setSelectedTheme(theme.name)}
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