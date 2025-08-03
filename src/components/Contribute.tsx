import React from 'react';
import { Github, Star, GitFork, Users, Code, Heart } from 'lucide-react';

const Contribute: React.FC = () => {
  return (
    <section id="contribute" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🤝 Join Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Want to make Smart Clipboard even better? Join us on GitHub and help build the future of clipboard management!
          </p>
        </div>

        {/* GitHub stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-900 dark:text-white font-semibold">Stars</span>
            <span className="text-gray-600 dark:text-gray-400">⭐</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
            <GitFork className="w-5 h-5 text-blue-500" />
            <span className="text-gray-900 dark:text-white font-semibold">Forks</span>
            <span className="text-gray-600 dark:text-gray-400">🍴</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-gray-900 dark:text-white font-semibold">Contributors</span>
            <span className="text-gray-600 dark:text-gray-400">👥</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why contribute */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Contribute?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Improve Your Skills
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Work with Electron, Node.js, and modern web technologies in a real-world project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Join the Community
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Connect with other developers and help shape the future of productivity tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Make a Difference
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Help thousands of developers and professionals boost their productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to contribute */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How to Get Started
            </h3>

            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <h4 className="font-bold text-gray-900 dark:text-white">Fork the Repository</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-11">
                  Create your own copy of the project to start contributing.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <h4 className="font-bold text-gray-900 dark:text-white">Create a Feature Branch</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-11">
                  Work on your improvements in a dedicated branch.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <h4 className="font-bold text-gray-900 dark:text-white">Submit a Pull Request</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-11">
                  Share your changes with the community for review and integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Contribute?</h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Whether you're fixing bugs, adding features, or improving documentation, every contribution makes Smart Clipboard better for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Humayun63/SmartClipboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                <Github size={24} />
                <span>View Repository</span>
              </a>
              <a
                href="https://github.com/Humayun63/SmartClipboard/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                <Code size={24} />
                <span>Browse Issues</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;