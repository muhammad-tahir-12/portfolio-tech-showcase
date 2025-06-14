import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// Sample data - replace with your actual information
const SAMPLE_PROFILE = {
  name: "Your Name", // Replace with your name
  title: "Flutter Developer",
  description: "Passionate Flutter Developer crafting beautiful, high-performance mobile applications for iOS and Android with exceptional user experiences and clean, scalable code.",
  avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  github_url: "https://github.com/yourusername", // Replace with your GitHub
  linkedin_url: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
};

const HeroFallback = React.memo(() => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = useMemo(() => SAMPLE_PROFILE.description, []);

  const animateText = useCallback(() => {
    if (currentIndex < fullText.length) {
      const rafId = requestAnimationFrame(() => {
        setTimeout(() => {
          setDisplayedText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 50);
      });
      return () => cancelAnimationFrame(rafId);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    return animateText();
  }, [animateText]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const socialLinks = useMemo(() => [
    {
      href: SAMPLE_PROFILE.github_url,
      icon: Github,
      label: "GitHub"
    },
    {
      href: SAMPLE_PROFILE.linkedin_url,
      icon: Linkedin,
      label: "LinkedIn"
    }
  ], []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-900 to-black dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-blue-500/20 ring-offset-4 ring-offset-black dark:ring-offset-black">
                <AvatarImage 
                  src={SAMPLE_PROFILE.avatar_url} 
                  alt={SAMPLE_PROFILE.name} 
                  className="object-cover"
                  loading="eager"
                  decoding="async"
                />
                <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold">
                  {SAMPLE_PROFILE.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {SAMPLE_PROFILE.title.split(' ').slice(0, -1).join(' ')}
              </span>
              <br />
              <span className="text-white dark:text-white">{SAMPLE_PROFILE.title.split(' ').slice(-1)[0]}</span>
            </h1>
            
            {/* Typing Animation */}
            <div className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed h-16 md:h-20">
              <span>{displayedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
                aria-label="View my work"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-gray-400 dark:border-gray-600 text-gray-300 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                aria-label="Get in touch"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in">
            <div className="flex justify-center space-x-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={24} className="text-gray-300 dark:text-gray-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroFallback.displayName = 'HeroFallback';

export default HeroFallback; 