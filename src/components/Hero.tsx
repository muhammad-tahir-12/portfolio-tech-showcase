
import React from 'react';
import { Github, Link } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies.
              Passionate about clean code, innovative solutions, and bringing ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:scale-110 transition-all duration-300 border border-gray-700"
              >
                <Github size={24} className="text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:scale-110 transition-all duration-300 border border-gray-700"
              >
                <Link size={24} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
