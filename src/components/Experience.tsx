import React from 'react';
import { Calendar, Briefcase, MapPin, Navigation, Milestone, Route } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented microservices architecture"
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
      milestone: "Current Destination",
      roadSign: "🏆 Senior Level"
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.",
      achievements: [
        "Delivered 15+ client projects on time",
        "Reduced bug reports by 60%",
        "Implemented automated testing"
      ],
      technologies: ["React", "Python", "Django", "MongoDB", "Docker"],
      milestone: "Growth Junction",
      roadSign: "⚡ Full Stack"
    },
    {
      id: 3,
      position: "Junior Frontend Developer",
      company: "StartupHub",
      location: "Remote",
      period: "2019 - 2020",
      description: "Built responsive web applications and collaborated with cross-functional teams. Focused on user experience optimization.",
      achievements: [
        "Increased user engagement by 25%",
        "Optimized loading times by 50%",
        "Built reusable component library"
      ],
      technologies: ["JavaScript", "Vue.js", "CSS3", "HTML5", "Git"],
      milestone: "First Stop",
      roadSign: "🚀 Career Start"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Route className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Career Roadmap
              </span>
            </h2>
            <Navigation className="w-8 h-8 text-purple-400 ml-4" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through my professional journey - from first steps to current achievements
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="relative">
          {/* Curved Road Path */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full max-w-4xl opacity-20" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <path
                d="M100 500 Q300 200 500 300 T700 100"
                stroke="url(#roadGradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray="20 10"
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Experience Milestones */}
          <div className="relative z-20 space-y-16">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={`flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-full max-w-md ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                }`}>
                  {/* Road Sign */}
                  <div className={`flex items-center mb-4 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-lg font-bold text-sm transform -rotate-2 shadow-lg">
                      {exp.roadSign}
                    </div>
                  </div>

                  {/* Milestone Marker */}
                  <div className={`flex items-center mb-6 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <Milestone className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{experienceData.length - index}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="relative group">
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    
                    <div className="relative bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                      {/* Milestone Badge */}
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {exp.milestone}
                      </div>

                      {/* Header */}
                      <div className="mt-4 mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                            <span className="text-sm text-gray-400 flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                        <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                        <div className="flex items-center text-gray-400 mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-white mb-3 flex items-center">
                          <span className="mr-2">🎯</span> Key Achievements:
                        </h5>
                        <ul className="text-sm text-gray-300 space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-400 mr-2 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/50 rounded-full text-sm text-blue-300 hover:scale-105 transition-transform duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Journey Stats */}
          <div className="mt-20 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Journey Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Years Experience</h4>
                <p className="text-gray-300">Professional development journey</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Projects Delivered</h4>
                <p className="text-gray-300">Successful implementations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Career Milestones</h4>
                <p className="text-gray-300">Major achievements unlocked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
