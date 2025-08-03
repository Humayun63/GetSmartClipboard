import React, { useEffect, useRef, useState } from 'react';
import { 
  Clipboard, 
  Zap, 
  Palette, 
  Shield, 
  Keyboard, 
  MousePointer 
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const features: Feature[] = [
  {
    icon: <Clipboard className="w-8 h-8" />,
    title: "Clipboard History Manager",
    description: "Automatically captures and stores up to 50 clipboard items with persistent storage.",
    details: ["Real-time clipboard monitoring", "Persistent storage", "Configurable history size"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast Access",
    description: "Quick paste shortcuts and smart paste menu for instant productivity.",
    details: ["Cmd+Option+V for paste menu", "Cmd+Alt+1-9 for quick paste", "Instant search & filter"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Beautiful Themes",
    description: "Choose from 10+ carefully crafted themes to match your workflow.",
    details: ["Light & Dark modes", "Developer themes", "Custom color schemes"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacy First",
    description: "All data stored locally on your device. No network communication.",
    details: ["Local storage only", "No data collection", "Secure IPC communication"]
  },
  {
    icon: <Keyboard className="w-8 h-8" />,
    title: "Global Shortcuts",
    description: "Access your clipboard from anywhere with customizable keyboard shortcuts.",
    details: ["System-wide shortcuts", "Accessibility permissions", "Background operation"]
  },
  {
    icon: <MousePointer className="w-8 h-8" />,
    title: "System Tray Integration",
    description: "Seamless integration with macOS system tray for easy access.",
    details: ["Tray icon support", "Right-click menu", "Auto-start with system"]
  }
];

const Features: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(features.length).fill(false));
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleFeatures(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need for a smarter clipboard experience, built with developers in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => featureRefs.current[index] = el}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 ${
                visibleFeatures[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl mb-6 text-white transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;