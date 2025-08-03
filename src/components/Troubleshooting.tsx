import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Settings, 
  RotateCcw, 
  Shield,
  RefreshCw 
} from 'lucide-react';

interface TroubleshootingItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  solutions: string[];
}

const troubleshootingItems: TroubleshootingItem[] = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Tray Icon Not Visible",
    description: "The system tray icon isn't showing up in the menu bar.",
    solutions: [
      "Enable tray icon from app settings menu",
      "Check macOS menu bar preferences in System Preferences",
      "Restart the application to refresh tray integration",
      "Ensure the app has proper permissions"
    ]
  },
  {
    icon: <RotateCcw className="w-6 h-6" />,
    title: "Reset Clipboard History",
    description: "Need to clear all saved clipboard items and start fresh.",
    solutions: [
      "Open app menu and select 'Clear History'",
      "Use the clear button in the main window",
      "Restart the app to reset temporary data",
      "Check storage settings to adjust history size"
    ]
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Auto Start Not Working",
    description: "App doesn't start automatically when you log in to macOS.",
    solutions: [
      "Check login items in macOS System Preferences",
      "Enable auto-start in Smart Clipboard settings",
      "Verify app permissions in Security & Privacy",
      "Reinstall the app if the issue persists"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Global Shortcuts Not Working",
    description: "Keyboard shortcuts like Cmd+Option+V aren't responding.",
    solutions: [
      "Grant accessibility permissions in System Preferences",
      "Check for conflicting shortcuts from other apps",
      "Restart the app to refresh shortcut registration",
      "Verify shortcuts in app settings menu"
    ]
  }
];

const Troubleshooting: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="troubleshooting" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="w-12 h-12 text-orange-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🔧 Troubleshooting Tips
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Quick solutions to common issues. Get Smart Clipboard working perfectly on your system.
          </p>
        </div>

        <div className="space-y-4">
          {troubleshootingItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  {expandedItems.includes(index) ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              {expandedItems.includes(index) && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="ml-16 space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Solutions:
                    </h4>
                    {item.solutions.map((solution, solutionIndex) => (
                      <div
                        key={solutionIndex}
                        className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs font-bold rounded-full flex-shrink-0 mt-0.5">
                          {solutionIndex + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {solution}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional help */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-blue-200 dark:border-gray-600">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you're still experiencing issues, the community is here to help!
            </p>
            <a
              href="https://github.com/Humayun63/SmartClipboard/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <AlertCircle size={20} />
              <span>Report an Issue</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;