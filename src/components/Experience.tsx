
import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

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
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"]
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
      technologies: ["React", "Python", "Django", "MongoDB", "Docker"]
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
      technologies: ["JavaScript", "Vue.js", "CSS3", "HTML5", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-black border border-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Briefcase className="w-6 h-6 text-purple-400 mr-3" />
                        <span className="text-sm text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                    <h4 className="text-lg text-purple-400 mb-2">{exp.company}</h4>
                    <div className="flex items-center text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm text-purple-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
