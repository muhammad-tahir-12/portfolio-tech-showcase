
import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies and clean, innovative solutions.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-blue-500/20 ring-offset-4 ring-offset-black">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face" 
                  alt="Profile" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold">
                  JS
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            
            {/* Typing Animation Text */}
            <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed h-16 md:h-20">
              <span>{displayedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            
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
                <Linkedin size={24} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
