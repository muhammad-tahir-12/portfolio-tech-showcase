import React from 'react';
import { Calendar, GraduationCap, MapPin, Compass, Trophy, BookOpen } from 'lucide-react';
import { useEducation } from '@/hooks/usePortfolioData';

const Education = () => {
  const { data: educationData, isLoading, isError } = useEducation();

  // Loading state
  if (isLoading) {
    return (
      <section id="education" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h2>
          </div>
          <div className="animate-pulse space-y-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-full max-w-lg">
                  <div className="h-80 bg-gray-700 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section id="education" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-red-400 text-xl">Error loading education data. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  // Helper function to format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Helper function to create period string
  const createPeriod = (startDate: string | null, endDate: string | null) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    return `${start} - ${end}`;
  };

  // Helper function to determine icon based on degree
  const getIcon = (degree: string) => {
    if (degree.toLowerCase().includes('master')) return Trophy;
    if (degree.toLowerCase().includes('bachelor')) return BookOpen;
    if (degree.toLowerCase().includes('phd') || degree.toLowerCase().includes('doctorate')) return Trophy;
    return GraduationCap;
  };

  // Helper function to determine color based on level
  const getColor = (index: number) => {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-red-500 to-pink-500'
    ];
    return colors[index % colors.length];
  };

  // Helper function to determine category
  const getCategory = (degree: string) => {
    if (degree.toLowerCase().includes('master')) return 'Graduate Studies';
    if (degree.toLowerCase().includes('bachelor')) return 'Undergraduate Studies';
    if (degree.toLowerCase().includes('phd') || degree.toLowerCase().includes('doctorate')) return 'Doctoral Studies';
    if (degree.toLowerCase().includes('high school') || degree.toLowerCase().includes('diploma')) return 'Secondary Education';
    return 'Academic Studies';
  };

  // Helper function to determine waypoint
  const getWaypoint = (index: number, total: number, degree: string) => {
    if (index === 0 && degree.toLowerCase().includes('master')) return 'Advanced Learning Hub';
    if (index === 0) return 'Current Achievement';
    if (index === total - 1) return 'Starting Point';
    if (degree.toLowerCase().includes('bachelor')) return 'Foundation Base';
    return 'Learning Milestone';
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
      {/* Background Navigation Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-24 h-24 border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-dashed border-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Compass className="w-8 h-8 text-green-400 mr-4 animate-spin" />
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h2>
            <MapPin className="w-8 h-8 text-purple-400 ml-4" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through my educational pathway - each stop building the foundation for the next
          </p>
        </div>

        {/* Navigation Route Container */}
        <div className="relative">
          {/* Navigation Path */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full max-w-5xl opacity-30" viewBox="0 0 1000 800">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M150 650 Q400 500 500 400 Q600 300 850 150"
                stroke="url(#pathGradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray="15 5"
                filter="url(#glow)"
                className="animate-pulse"
              />
              {/* Waypoint markers along the path */}
              {educationData?.map((_, index) => {
                const positions = [
                  { cx: 200, cy: 600 },
                  { cx: 500, cy: 400 },
                  { cx: 800, cy: 200 }
                ];
                const pos = positions[index] || positions[positions.length - 1];
                const colors = ["#10B981", "#3B82F6", "#8B5CF6"];
                return (
                  <circle 
                    key={index} 
                    cx={pos.cx} 
                    cy={pos.cy} 
                    r="8" 
                    fill={colors[index % colors.length]} 
                    className="animate-pulse"
                  />
                );
              })}
            </svg>
          </div>

          {/* Education Waypoints */}
          <div className="relative z-20 space-y-20">
            {educationData?.map((edu, index) => {
              const IconComponent = getIcon(edu.degree);
              const color = getColor(index);
              const category = getCategory(edu.degree);
              const waypoint = getWaypoint(index, educationData.length, edu.degree);
              
              return (
                <div key={edu.id} className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-full max-w-lg ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}>
                    {/* Waypoint Direction Sign */}
                    <div className={`flex items-center mb-6 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                      <div className="relative">
                        <div className="bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-gray-600 rounded-lg px-6 py-3 shadow-lg transform rotate-1">
                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">{category}</div>
                            <div className="text-sm font-bold text-white">{waypoint}</div>
                          </div>
                        </div>
                        {/* Arrow pointer */}
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-700`}></div>
                      </div>
                    </div>

                    {/* Navigation Waypoint Marker */}
                    <div className={`flex items-center mb-8 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                      <div className="relative group">
                        <div className={`w-20 h-20 bg-gradient-to-r ${color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        {/* Waypoint number */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                          <span className="text-sm font-bold text-gray-800">{educationData.length - index}</span>
                        </div>
                        {/* Compass indicator */}
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center">
                          <Compass className="w-3 h-3 text-gray-300" />
                        </div>
                      </div>
                    </div>

                    {/* Education Destination Card */}
                    <div className="relative group">
                      {/* Glowing background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-300`}></div>
                      
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                        {/* Category ribbon */}
                        <div className={`absolute -top-3 left-8 bg-gradient-to-r ${color} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                          {category}
                        </div>

                        {/* Header section */}
                        <div className="mt-6 mb-8">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                              <span className="text-sm text-gray-400">{createPeriod(edu.start_date, edu.end_date)}</span>
                            </div>
                            {edu.gpa && (
                              <div className={`px-3 py-1 bg-gradient-to-r ${color} bg-opacity-20 border border-current rounded-full`}>
                                <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                  GPA: {edu.gpa}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-white mb-3">{edu.degree}</h3>
                          <h4 className={`text-xl font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-4`}>
                            {edu.institution}
                          </h4>
                          {edu.location && (
                            <div className="flex items-center text-gray-400 mb-4">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                          )}
                        </div>
                        
                        {edu.description && (
                          <p className="text-gray-300 mb-8 leading-relaxed text-lg">{edu.description}</p>
                        )}
                        
                        {/* Achievements section */}
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                              Key Achievements
                            </h5>
                            <div className="grid grid-cols-1 gap-3">
                              {edu.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-center bg-gray-800/50 rounded-lg p-3">
                                  <span className="text-green-400 mr-3 text-lg">🎯</span>
                                  <span className="text-gray-300">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Navigation coordinates */}
                        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                          <div className="text-xs text-gray-400 mb-1">DESTINATION COORDINATES</div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-300">Level: {educationData.length - index}</span>
                            <span className="text-sm text-gray-300">Status: Completed ✓</span>
                            <span className={`text-sm bg-gradient-to-r ${color} bg-clip-text text-transparent font-bold`}>
                              {waypoint}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Learning Journey Summary */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Journey Complete</h3>
                <p className="text-gray-300 text-lg">Educational pathway successfully navigated</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{educationData?.length || 0}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Degrees Earned</h4>
                  <p className="text-gray-300">Educational milestones achieved</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {educationData?.reduce((total, edu) => total + (edu.achievements?.length || 0), 0) || 0}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Achievements</h4>
                  <p className="text-gray-300">Academic accomplishments</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Excellence</h4>
                  <p className="text-gray-300">Commitment to learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
