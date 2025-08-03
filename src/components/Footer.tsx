import React from 'react';
import { Github, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">SC</span>
              </div>
              <span className="text-2xl font-bold">Smart Clipboard</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              A powerful, open-source clipboard manager that enhances your copy-paste workflow 
              with intelligent features and beautiful themes.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by the open-source community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#themes" className="text-gray-400 hover:text-white transition-colors">
                  Themes
                </a>
              </li>
              <li>
                <a href="#troubleshooting" className="text-gray-400 hover:text-white transition-colors">
                  Troubleshooting
                </a>
              </li>
              <li>
                <a href="#contribute" className="text-gray-400 hover:text-white transition-colors">
                  Contribute
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/Humayun63/SmartClipboard/releases/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Download</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Humayun63/SmartClipboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Humayun63/SmartClipboard/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Report Issues</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Humayun63/SmartClipboard/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                >
                  <span>Documentation</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2025 Smart Clipboard. Open source under MIT License.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Humayun63/SmartClipboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://github.com/Humayun63/SmartClipboard/releases/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
            >
              Download Latest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;