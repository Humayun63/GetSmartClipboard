import React from 'react';
import { Play, Image } from 'lucide-react';

const AppPreview: React.FC = () => {
  return null;
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch how Smart Clipboard transforms your copy-paste workflow with intuitive design and powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Screenshot */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              {/* Window chrome */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">Smart Clipboard</span>
              </div>

              {/* App interface mockup */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-gray-300 text-sm">npm install smart-clipboard</span>
                  <span className="text-xs text-gray-500">2m ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-gray-300 text-sm">https://github.com/Humayun63/SmartClipboard</span>
                  <span className="text-xs text-gray-500">5m ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-600 rounded-lg">
                  <span className="text-white text-sm">export const theme = 'dark'</span>
                  <span className="text-xs text-purple-300">8m ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-gray-300 text-sm">Smart Clipboard is amazing!</span>
                  <span className="text-xs text-gray-500">12m ago</span>
                </div>
              </div>

              {/* Search bar */}
              <div className="mt-6 p-3 bg-gray-800 rounded-lg border border-gray-600">
                <span className="text-gray-400 text-sm">🔍 Search clipboard history...</span>
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                <Play size={24} className="text-gray-900 ml-1" />
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Copy Anything
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your regular copy actions (Cmd+C) are automatically captured and stored in the history.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Smart Paste Menu
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Press Cmd+Option+V to see all your recent clipboard items in a beautiful overlay.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Quick Shortcuts
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use Cmd+Alt+1 through Cmd+Alt+9 for instant access to your most recent items.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://github.com/Humayun63/SmartClipboard/releases/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                <Image size={20} />
                <span>Download & Try It Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;