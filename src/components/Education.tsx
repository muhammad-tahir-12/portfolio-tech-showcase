
import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2018 - 2020",
      description: "Specialized in Software Engineering and Machine Learning. Graduated with distinction.",
      gpa: "3.8/4.0"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2014 - 2018",
      description: "Focused on full-stack development and database systems. Active in coding competitions.",
      gpa: "3.6/4.0"
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "Central High School",
      period: "2010 - 2014",
      description: "Valedictorian. President of Computer Science Club.",
      gpa: "4.0/4.0"
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-blue-400 mb-3">{edu.institution}</h4>
                    <p className="text-gray-300 mb-3">{edu.description}</p>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full">
                      <span className="text-sm text-blue-400">GPA: {edu.gpa}</span>
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

export default Education;
