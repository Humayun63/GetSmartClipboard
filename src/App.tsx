import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ThemeShowcase from './components/ThemeShowcase';
import AppPreview from './components/AppPreview';
import Troubleshooting from './components/Troubleshooting';
import Contribute from './components/Contribute';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Features />
          <ThemeShowcase />
          <AppPreview />
          <Troubleshooting />
          <Contribute />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;