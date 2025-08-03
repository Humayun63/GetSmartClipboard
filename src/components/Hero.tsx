import React from 'react';
import { Download, Github, ChevronDown } from 'lucide-react';
import Logo from '../icons/Logo';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo width={100} height={100} />
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Smart Clipboard
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your productivity booster – a smarter clipboard for macOS.
          </p>

          {/* Features preview */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 max-w-2xl mx-auto">
            <span className="px-3 py-1 bg-white/10 rounded-full">📋 50+ Item History</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">⚡ Global Shortcuts</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">🎨 10+ Themes</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">🔧 Open Source</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://github.com/Humayun63/SmartClipboard/releases/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <Download size={24} />
              <span>Download for macOS</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">.dmg</span>
            </a>
            
            <a
              href="https://github.com/Humayun63/SmartClipboard"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20"
            >
              <Github size={24} />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToFeatures}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;