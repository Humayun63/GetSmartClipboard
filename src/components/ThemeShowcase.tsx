import React, { useState, useEffect } from 'react';
import { Palette, Check, RefreshCw, Copy, Zap, ArrowLeftRight, Star } from 'lucide-react';
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
  const [compareTheme, setCompareTheme] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  // State for theme search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'light' | 'dark' | 'colorful' | 'favorites'>('all');
  
  // State for favorite themes
  const [favoriteThemes, setFavoriteThemes] = useState<string[]>([]);
  
  // Load favorite themes from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteThemes');
    if (savedFavorites) {
      try {
        setFavoriteThemes(JSON.parse(savedFavorites));
      } catch (e) {
        console.error('Error loading favorite themes:', e);
      }
    }
  }, []);
  
  // Save favorite themes to localStorage when they change
  useEffect(() => {
    localStorage.setItem('favoriteThemes', JSON.stringify(favoriteThemes));
  }, [favoriteThemes]);
  
  // Toggle a theme as favorite
  const toggleFavorite = (themeName: string) => {
    setFavoriteThemes(prev => {
      if (prev.includes(themeName)) {
        return prev.filter(name => name !== themeName);
      } else {
        return [...prev, themeName];
      }
    });
  };
  
  // Filtered themes based on search and filter
  const filteredThemes = themes.filter(theme => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Type filter
    let matchesType = true;
    if (filterType === 'light') {
      matchesType = theme.name === 'Light' || theme.name === 'Solaris' || theme.name === 'Sakura' || theme.name === 'Golden';
    } else if (filterType === 'dark') {
      matchesType = theme.name === 'Dark' || theme.name === 'Midnight' || theme.name === 'Matrix' || theme.name === 'Cosmic';
    } else if (filterType === 'colorful') {
      matchesType = theme.name !== 'Light' && theme.name !== 'Dark' && 
                   theme.name !== 'Midnight' && theme.name !== 'Monochrome';
    } else if (filterType === 'favorites') {
      matchesType = favoriteThemes.includes(theme.name);
    }
    
    return matchesSearch && matchesType;
  });
  
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
  
  // State for theme preview animation
  const [previewAnimation, setPreviewAnimation] = useState<boolean>(false);
  const [animatingTheme, setAnimatingTheme] = useState<string | null>(null);
  
  // State for theme preview mode
  const [previewMode, setPreviewMode] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<string | null>(null);
  const [previewTimeout, setPreviewTimeout] = useState<number | null>(null);
  
  // Select a random theme with animation
  const selectRandomTheme = () => {
    setPreviewAnimation(true);
    
    // Animate through 5 random themes quickly before settling on the final one
    let count = 0;
    const maxCount = 5;
    const interval = setInterval(() => {
      const themeNames = themes.map(t => t.name);
      let randomTheme;
      do {
        randomTheme = themeNames[Math.floor(Math.random() * themeNames.length)];
      } while (randomTheme === selectedTheme && randomTheme === animatingTheme);
      
      setAnimatingTheme(randomTheme);
      
      count++;
      if (count >= maxCount) {
        clearInterval(interval);
        setSelectedTheme(randomTheme);
        setTimeout(() => {
          setPreviewAnimation(false);
          setAnimatingTheme(null);
        }, 300);
      }
    }, 150);
  };
  
  // Handle color copying
  const copyColorToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  };
  
  // Toggle theme comparison mode
  const toggleComparisonMode = () => {
    if (showComparison) {
      setShowComparison(false);
      setCompareTheme(null);
    } else {
      setShowComparison(true);
      // Select a different theme for comparison
      const otherThemes = themes.filter(t => t.name !== selectedTheme);
      setCompareTheme(otherThemes[Math.floor(Math.random() * otherThemes.length)].name);
    }
  };
  
  // Function to start theme preview
  const startThemePreview = (themeName: string) => {
    // Clear any existing preview timeout
    if (previewTimeout) {
      clearTimeout(previewTimeout);
      setPreviewTimeout(null);
    }
    
    // Set the preview theme
    setPreviewTheme(themeName);
    setPreviewMode(true);
    
    // Apply the theme temporarily
    const formattedTheme = formatThemeName(getThemeValue(themeName));
    document.documentElement.setAttribute('data-theme', formattedTheme.toLowerCase());
    
    // If it's a dark theme, add the dark class
    const isDarkTheme = ['Dark', 'Midnight', 'Matrix', 'Cosmic', '8-Bit'].includes(themeName);
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Function to end theme preview
  const endThemePreview = () => {
    // Only end if we're in preview mode
    if (previewMode) {
      setPreviewMode(false);
      setPreviewTheme(null);
      
      // Restore the selected theme
      const formattedTheme = formatThemeName(getThemeValue(selectedTheme));
      document.documentElement.setAttribute('data-theme', formattedTheme.toLowerCase());
      
      // Restore dark mode if needed
      const isDarkTheme = ['Dark', 'Midnight', 'Matrix', 'Cosmic', '8-Bit'].includes(selectedTheme);
      if (isDarkTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
  
  // Function to handle mouse enter on theme card
  const handleThemeCardMouseEnter = (themeName: string) => {
    // Start a timeout to preview the theme after a short delay
    const timeout = setTimeout(() => {
      startThemePreview(themeName);
    }, 500); // 500ms delay before preview starts
    
    setPreviewTimeout(timeout);
  };
  
  // Function to handle mouse leave on theme card
  const handleThemeCardMouseLeave = () => {
    // Clear the timeout if it exists
    if (previewTimeout) {
      clearTimeout(previewTimeout);
      setPreviewTimeout(null);
    }
    
    // End the preview with a slight delay to make it feel smoother
    setTimeout(() => {
      endThemePreview();
    }, 200);
  };
  
  // Update the actual theme when selected theme changes
  useEffect(() => {
    const themeValue = getThemeValue(selectedTheme);
    
    // Show a brief flash animation when changing themes
    const flashElement = document.createElement('div');
    flashElement.className = 'fixed inset-0 bg-white z-50 pointer-events-none';
    flashElement.style.animation = 'theme-flash 0.5s ease-out forwards';
    document.body.appendChild(flashElement);
    
    // Add the animation style if it doesn't exist
    if (!document.getElementById('theme-flash-style')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'theme-flash-style';
      styleElement.textContent = `
        @keyframes theme-flash {
          0% { opacity: 0.8; }
          100% { opacity: 0; }
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    // Remove the flash element after animation completes
    setTimeout(() => {
      document.body.removeChild(flashElement);
    }, 500);
    
    setTheme(themeValue as any);
  }, [selectedTheme, setTheme]);
  
  // Update selected theme when context theme changes
  useEffect(() => {
    setSelectedTheme(formatThemeName(currentTheme));
  }, [currentTheme]);

  return (
    <section id="themes" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Palette className="w-12 h-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            13 Beautiful Themes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Customize Smart Clipboard with a variety of themes - from light and dark modes to vibrant color schemes that match your style and workflow.
          </p>
          
          {/* Interactive controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={selectRandomTheme}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <RefreshCw size={16} />
              <span>Random Theme</span>
            </button>
            
            <button 
              onClick={toggleComparisonMode}
              className={`flex items-center gap-2 px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 ${showComparison ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
            >
              {showComparison ? (
                <>
                  <ArrowLeftRight size={16} />
                  <span>Exit Comparison</span>
                </>
              ) : (
                <>
                  <Zap size={16} />
                  <span>Compare Themes</span>
                </>
              )}
            </button>
          </div>
          
          {/* Preview mode indicator */}
          {previewMode && previewTheme && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: themes.find(t => t.name === previewTheme)?.colors.accent }}
              ></div>
              <span>Previewing {previewTheme} Theme</span>
              <button 
                className="ml-2 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-all duration-300"
                onClick={() => {
                  endThemePreview();
                  setSelectedTheme(previewTheme);
                }}
                title="Apply this theme"
              >
                <Check size={14} />
              </button>
            </div>
          )}
          
          {/* Search and filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search themes..."
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                 <button
                   className={`px-4 py-2 rounded-lg transition-all duration-300 ${filterType === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                   onClick={() => setFilterType('all')}
                 >
                   All
                 </button>
                 <button
                   className={`px-4 py-2 rounded-lg transition-all duration-300 ${filterType === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                   onClick={() => setFilterType('light')}
                 >
                   Light
                 </button>
                 <button
                   className={`px-4 py-2 rounded-lg transition-all duration-300 ${filterType === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                   onClick={() => setFilterType('dark')}
                 >
                   Dark
                 </button>
                 <button
                   className={`px-4 py-2 rounded-lg transition-all duration-300 ${filterType === 'colorful' ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                   onClick={() => setFilterType('colorful')}
                 >
                   Colorful
                 </button>
                 <button
                   className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1 ${filterType === 'favorites' ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                   onClick={() => setFilterType('favorites')}
                 >
                   <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" 
                     fill={filterType === 'favorites' ? 'currentColor' : 'none'} 
                     stroke="currentColor" 
                     strokeWidth="2" 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     className="w-4 h-4"
                   >
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                   </svg>
                   Favorites
                   {favoriteThemes.length > 0 && (
                     <span className="ml-1 bg-white text-amber-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                       {favoriteThemes.length}
                     </span>
                   )}
                 </button>
               </div>
            </div>
            {filteredThemes.length === 0 && (
              <div className="text-center mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400">No themes match your search criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Theme statistics */}
         <div className="mb-12 max-w-4xl mx-auto">
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md text-center">
               <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{themes.length}</div>
               <div className="text-sm text-gray-600 dark:text-gray-300">Total Themes</div>
             </div>
             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md text-center">
               <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                 {themes.filter(t => t.name === 'Light' || t.name === 'Dark').length}
               </div>
               <div className="text-sm text-gray-600 dark:text-gray-300">Base Themes</div>
             </div>
             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md text-center">
               <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                 {themes.filter(t => t.name !== 'Light' && t.name !== 'Dark').length}
               </div>
               <div className="text-sm text-gray-600 dark:text-gray-300">Creative Themes</div>
             </div>
             <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md text-center">
               <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                 {Object.keys(themes[0].colors).length}
               </div>
               <div className="text-sm text-gray-600 dark:text-gray-300">Color Variables</div>
             </div>
           </div>
         </div>
         
         {/* Theme count indicator - shows when filtering is active */}
         {(searchQuery || filterType !== 'all') && (
           <div className="mb-6 text-center">
             <div className="inline-block bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-md">
               <span className="font-medium">
                 Showing {filteredThemes.length} of {themes.length} themes
                 {filterType !== 'all' && (
                   <span className="ml-1">
                     in <span className="font-semibold capitalize">{filterType}</span> category
                   </span>
                 )}
                 {searchQuery && (
                   <span className="ml-1">
                     matching <span className="font-semibold italic">"{searchQuery}"</span>
                   </span>
                 )}
               </span>
               {(searchQuery || filterType !== 'all') && (
                 <button 
                   className="ml-3 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                   onClick={() => {
                     setSearchQuery('');
                     setFilterType('all');
                   }}
                 >
                   Clear filters
                 </button>
               )}
             </div>
           </div>
         )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
           {filteredThemes.map((theme, index) => (
            <div
              key={theme.name}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                selectedTheme === theme.name ? 'scale-105' : ''
              }`}
              onClick={() => setSelectedTheme(formatThemeName(getThemeValue(theme.name)))}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Favorite button */}
              <button
                className="absolute top-2 left-2 z-10 w-8 h-8 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(theme.name);
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill={favoriteThemes.includes(theme.name) ? 'currentColor' : 'none'} 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`w-5 h-5 ${favoriteThemes.includes(theme.name) ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </button>
              {/* Theme preview */}
               <div 
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group ${previewTheme === theme.name ? 'ring-2 ring-blue-400 scale-105 shadow-xl' : ''}`}
                  onClick={() => setSelectedTheme(formatThemeName(getThemeValue(theme.name)))}
                  onMouseEnter={() => handleThemeCardMouseEnter(theme.name)}
                  onMouseLeave={handleThemeCardMouseLeave}
                >
                  {/* Favorite button */}
                  <button 
                    className="absolute top-2 right-2 z-30 bg-black/30 hover:bg-black/50 p-1.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      toggleFavorite(theme.name);
                    }}
                    aria-label={favoriteThemes.includes(theme.name) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Star 
                      size={16} 
                      fill={favoriteThemes.includes(theme.name) ? 'gold' : 'transparent'} 
                      color={favoriteThemes.includes(theme.name) ? 'gold' : 'white'} 
                    />
                  </button>
                <div 
                  className="h-48 p-4 flex flex-col justify-between transition-all duration-300 relative"
                  style={{ backgroundColor: theme.colors.background }}
                >
                  {/* App mockup header */}
                  <div className="flex items-center justify-between mb-3">
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
                    <div 
                      className="text-xs font-medium truncate"
                      style={{ color: theme.colors.text }}
                    >
                      Smart Clipboard
                    </div>
                  </div>
                  
                  {/* App mockup content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title bar */}
                    <div 
                      className="text-xs font-bold mb-2"
                      style={{ color: theme.colors.text }}
                    >
                      Recent Clips
                    </div>
                    
                    {/* Clipboard items */}
                    <div className="space-y-2">
                      <div 
                        className="p-2 rounded text-xs flex items-center"
                        style={{ 
                          backgroundColor: theme.colors.secondary,
                          color: theme.colors.text
                        }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: theme.colors.accent }}
                        ></div>
                        <div className="truncate">Text clip example</div>
                      </div>
                      <div 
                        className="p-2 rounded text-xs flex items-center"
                        style={{ 
                          backgroundColor: theme.colors.primary,
                          color: theme.colors.text,
                          border: `1px solid ${theme.colors.secondary}`
                        }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: theme.colors.accent }}
                        ></div>
                        <div className="truncate">Image clip preview</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom action button */}
                  <div 
                    className="mt-2 py-1 px-3 rounded-full text-xs text-center font-medium w-full transition-transform hover:scale-105"
                    style={{ 
                      background: theme.colors.accent,
                      color: '#ffffff',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                  >
                    New Clip
                  </div>
                  
                  {/* Theme name tooltip */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {theme.name}
                  </div>
                </div>

                {/* Selection indicator */}
                {selectedTheme === theme.name && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                  <span className="text-white font-semibold text-lg mb-2">Apply Theme</span>
                  <div className="flex space-x-2">
                    {Object.entries(theme.colors).slice(0, 3).map(([key, color]) => (
                      <div 
                        key={key} 
                        className="w-6 h-6 rounded-full border border-white/30 transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                        title={`${key}: ${color}`}
                      />
                    ))}
                  </div>
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

        {/* Theme comparison guide - only shown when comparison is active */}
        {showComparison && compareTheme && (
          <div className="mb-12 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Theme Comparison Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium">What to look for:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Color harmony and contrast between elements</li>
                  <li>Readability of text on different backgrounds</li>
                  <li>How accent colors draw attention to important elements</li>
                  <li>Overall mood and aesthetic feeling</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Tips for choosing:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Consider your lighting environment and screen brightness</li>
                  <li>Think about extended usage and eye comfort</li>
                  <li>Match your theme to your productivity patterns</li>
                  <li>Try themes at different times of day</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Theme details section */}
        <div className="mt-16 text-center">
          {previewAnimation && animatingTheme && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div 
                className="text-center p-8 rounded-xl animate-pulse"
                style={{
                  backgroundColor: themes.find(t => t.name === animatingTheme)?.colors.background,
                  color: themes.find(t => t.name === animatingTheme)?.colors.text,
                }}
              >
                <h2 className="text-4xl font-bold mb-2">{animatingTheme}</h2>
                <div className="flex gap-2 justify-center">
                  {Object.values(themes.find(t => t.name === animatingTheme)?.colors || {}).slice(0, 5).map((color, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full transition-all duration-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <div className={`flex flex-col ${showComparison ? 'lg:flex-row' : ''} gap-6 max-w-6xl mx-auto`}>
            {/* Selected theme details */}
            <div 
              className={`rounded-2xl p-8 shadow-xl transition-all duration-500 flex-1 ${showComparison ? 'lg:w-1/2' : 'w-full'}`}
              style={{
                backgroundColor: themes.find(t => t.name === selectedTheme)?.colors.background,
                color: themes.find(t => t.name === selectedTheme)?.colors.text,
                boxShadow: `0 10px 40px ${themes.find(t => t.name === selectedTheme)?.colors.accent}40`
              }}
            >
              <h3 
                className="text-3xl font-bold mb-4 transition-all duration-300"
                style={{ color: themes.find(t => t.name === selectedTheme)?.colors.text }}
              >
                {selectedTheme} Theme
              </h3>
              <p 
                className="text-lg mb-8 max-w-2xl mx-auto transition-all duration-300"
                style={{ color: themes.find(t => t.name === selectedTheme)?.colors.text + 'CC' }}
              >
                {themes.find(t => t.name === selectedTheme)?.description}
              </p>
              
              <div className={`grid grid-cols-2 ${showComparison ? 'md:grid-cols-3' : 'md:grid-cols-5'} gap-4 mb-8`}>
                {Object.entries(themes.find(t => t.name === selectedTheme)?.colors || {}).map(([key, color]) => (
                  <div 
                    key={key} 
                    className="p-4 rounded-lg transition-transform hover:scale-105 cursor-pointer relative"
                    style={{ 
                      backgroundColor: key === 'background' ? themes.find(t => t.name === selectedTheme)?.colors.primary : color,
                      border: `1px solid ${themes.find(t => t.name === selectedTheme)?.colors.secondary}`,
                    }}
                    onClick={() => copyColorToClipboard(color)}
                    title={`Click to copy: ${color}`}
                  >
                    <div 
                      className="w-full h-10 rounded mb-2 transition-all duration-300 hover:transform hover:scale-105"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="flex justify-between items-center">
                      <span 
                        className="text-xs font-medium capitalize"
                        style={{ color: themes.find(t => t.name === selectedTheme)?.colors.text }}
                      >
                        {key}
                      </span>
                      <span 
                        className="text-xs font-mono"
                        style={{ color: themes.find(t => t.name === selectedTheme)?.colors.text + '99' }}
                      >
                        {color}
                      </span>
                    </div>
                    
                    {/* Copy indicator */}
                    {copiedColor === color && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg animate-pulse">
                        <div className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Copy size={12} />
                          Copied!
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div 
                className="py-3 px-6 rounded-full inline-block font-medium text-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  backgroundColor: themes.find(t => t.name === selectedTheme)?.colors.accent,
                  color: '#ffffff',
                  boxShadow: `0 4px 12px ${themes.find(t => t.name === selectedTheme)?.colors.accent}80`
                }}
                onClick={() => alert(`${selectedTheme} theme applied to your Smart Clipboard!`)}
              >
                Apply This Theme
              </div>
            </div>
            
            {/* Comparison theme details */}
            {showComparison && compareTheme && (
              <div 
                className="rounded-2xl p-8 shadow-xl transition-all duration-500 flex-1 lg:w-1/2 relative"
                style={{
                  backgroundColor: themes.find(t => t.name === compareTheme)?.colors.background,
                  color: themes.find(t => t.name === compareTheme)?.colors.text,
                  boxShadow: `0 10px 40px ${themes.find(t => t.name === compareTheme)?.colors.accent}40`
                }}
              >
                <button 
                  className="absolute top-4 right-4 bg-gray-200/30 hover:bg-gray-200/50 p-2 rounded-full transition-all duration-300"
                  onClick={() => {
                    const otherThemes = themes.filter(t => t.name !== selectedTheme && t.name !== compareTheme);
                    setCompareTheme(otherThemes[Math.floor(Math.random() * otherThemes.length)].name);
                  }}
                  title="Try another theme for comparison"
                >
                  <RefreshCw size={16} style={{ color: themes.find(t => t.name === compareTheme)?.colors.text }} />
                </button>
                
                <h3 
                  className="text-3xl font-bold mb-4 transition-all duration-300"
                  style={{ color: themes.find(t => t.name === compareTheme)?.colors.text }}
                >
                  {compareTheme} Theme
                </h3>
                <p 
                  className="text-lg mb-8 max-w-2xl mx-auto transition-all duration-300"
                  style={{ color: themes.find(t => t.name === compareTheme)?.colors.text + 'CC' }}
                >
                  {themes.find(t => t.name === compareTheme)?.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {Object.entries(themes.find(t => t.name === compareTheme)?.colors || {}).map(([key, color]) => (
                    <div 
                      key={key} 
                      className="p-4 rounded-lg transition-transform hover:scale-105 cursor-pointer relative"
                      style={{ 
                        backgroundColor: key === 'background' ? themes.find(t => t.name === compareTheme)?.colors.primary : color,
                        border: `1px solid ${themes.find(t => t.name === compareTheme)?.colors.secondary}`,
                      }}
                      onClick={() => copyColorToClipboard(color)}
                      title={`Click to copy: ${color}`}
                    >
                      <div 
                        className="w-full h-10 rounded mb-2 transition-all duration-300 hover:transform hover:scale-105"
                        style={{ backgroundColor: color }}
                      ></div>
                      <div className="flex justify-between items-center">
                        <span 
                          className="text-xs font-medium capitalize"
                          style={{ color: themes.find(t => t.name === compareTheme)?.colors.text }}
                        >
                          {key}
                        </span>
                        <span 
                          className="text-xs font-mono"
                          style={{ color: themes.find(t => t.name === compareTheme)?.colors.text + '99' }}
                        >
                          {color}
                        </span>
                      </div>
                      
                      {/* Copy indicator */}
                      {copiedColor === color && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg animate-pulse">
                          <div className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Copy size={12} />
                            Copied!
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div 
                  className="py-3 px-6 rounded-full inline-block font-medium text-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ 
                    backgroundColor: themes.find(t => t.name === compareTheme)?.colors.accent,
                    color: '#ffffff',
                    boxShadow: `0 4px 12px ${themes.find(t => t.name === compareTheme)?.colors.accent}80`
                  }}
                  onClick={() => {
                    setSelectedTheme(compareTheme);
                    setShowComparison(false);
                    setCompareTheme(null);
                  }}
                >
                  Switch to This Theme
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeShowcase;