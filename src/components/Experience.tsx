import React from 'react';
import { Calendar, Briefcase, MapPin, Users, Award, Code, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { useExperience } from '@/hooks/usePortfolioData';

const Experience = () => {
  const { data: experienceData, isLoading, isError } = useExperience();

  // Loading state
  if (isLoading) {
    return (
      <section id="experience" className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Timeline
            </h2>
          </div>
          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-64 bg-gray-800/30 rounded-2xl backdrop-blur border border-gray-700/30"></div>
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
      <section id="experience" className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-400 text-xl">Error loading experience data. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  // Helper functions
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const createPeriod = (startDate: string | null, endDate: string | null) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    return `${start} - ${end}`;
  };

  const calculateDuration = (startDate: string | null, endDate: string | null) => {
    if (!startDate) return '';
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = Math.round((end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 30.44));
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''}`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return remainingMonths === 0 ? `${years} year${years !== 1 ? 's' : ''}` : `${years}y ${remainingMonths}m`;
  };

  const getExperienceLevel = (position: string, index: number) => {
    const pos = position.toLowerCase();
    if (pos.includes('senior') || pos.includes('lead') || pos.includes('principal')) {
      return { level: 'Senior', color: 'from-amber-400 to-orange-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/20' };
    }
    if (pos.includes('junior') || pos.includes('intern') || pos.includes('associate')) {
      return { level: 'Junior', color: 'from-green-400 to-emerald-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20' };
    }
    return { level: 'Professional', color: 'from-blue-400 to-indigo-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' };
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/40 backdrop-blur border border-gray-700/50 mb-8">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-200 font-medium text-sm">Career Evolution</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6 leading-tight">
            Professional Timeline
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through transformative roles that have shaped my expertise in technology and leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-indigo-400/50"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experienceData?.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const level = getExperienceLevel(exp.position, index);
              const duration = calculateDuration(exp.start_date, exp.end_date);
              
              return (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-5 h-5 bg-gray-900 border-4 border-blue-400 rounded-full shadow-lg shadow-blue-400/25"></div>
                    <div className="absolute -inset-2 bg-blue-400/20 rounded-full animate-pulse"></div>
                  </div>

                  {/* Experience Card */}
                  <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full max-w-lg ${isLeft ? 'pr-12' : 'pl-12'} group`}>
                      <div className="relative">
                        {/* Card */}
                        <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl shadow-black/20 overflow-hidden group-hover:border-gray-600/50 transition-all duration-500 group-hover:shadow-blue-500/10">
                          {/* Top Accent Line */}
                          <div className={`h-1 bg-gradient-to-r ${level.color}`}></div>
                          
                          <div className="p-8">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex-1">
                                {/* Experience Level Badge */}
                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${level.bgColor} ${level.borderColor} border mb-4`}>
                                  <Award className="w-4 h-4" />
                                  <span className="text-sm font-semibold text-white">{level.level}</span>
                                  {duration && (
                                    <>
                                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                      <span className="text-sm text-gray-300">{duration}</span>
                                    </>
                                  )}
                                </div>

                                {/* Position Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                  {exp.position}
                                </h3>

                                {/* Company */}
                                <div className="flex items-center gap-2 text-gray-300 mb-4">
                                  <Briefcase className="w-5 h-5 text-blue-400" />
                                  <span className="font-semibold text-lg">{exp.company}</span>
                                </div>
                              </div>

                              {/* Position Number */}
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${level.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                {String(experienceData.length - index).padStart(2, '0')}
                              </div>
                            </div>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{createPeriod(exp.start_date, exp.end_date)}</span>
                              </div>
                              {exp.location && (
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6 text-base">
                              {exp.description}
                            </p>

                            {/* Key Achievements */}
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="mb-6">
                                <h4 className="flex items-center gap-2 text-white font-semibold mb-4">
                                  <Users className="w-5 h-5 text-green-400" />
                                  Key Impact
                                </h4>
                                <div className="space-y-3">
                                  {exp.achievements.slice(0, 3).map((achievement, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors group/item">
                                      <ArrowUpRight className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0 group-hover/item:text-blue-400 transition-colors" />
                                      <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                                        {achievement}
                                      </span>
                                    </div>
                                  ))}
                                  {exp.achievements.length > 3 && (
                                    <div className="text-sm text-gray-400 italic pl-7">
                                      +{exp.achievements.length - 3} more key achievements
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Technologies */}
                            {exp.technologies && exp.technologies.length > 0 && (
                              <div>
                                <h4 className="flex items-center gap-2 text-white font-semibold mb-4">
                                  <Code className="w-5 h-5 text-purple-400" />
                                  Technology Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.slice(0, 8).map((tech, idx) => (
                                    <span 
                                      key={idx} 
                                      className="px-3 py-1.5 bg-gray-800/60 border border-gray-600/40 rounded-lg text-xs font-medium text-gray-300 hover:bg-gray-700/60 hover:text-white hover:border-gray-500/60 transition-all duration-200"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                  {exp.technologies.length > 8 && (
                                    <span className="px-3 py-1.5 bg-gray-800/40 border border-gray-600/30 rounded-lg text-xs text-gray-400">
                                      +{exp.technologies.length - 8} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Hover Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${level.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                        </div>

                        {/* Connector Arrow */}
                        <div className={`absolute top-8 ${isLeft ? '-right-3' : '-left-3'} w-6 h-6 bg-gray-900 border border-gray-700 transform rotate-45 ${isLeft ? 'border-l-0 border-b-0' : 'border-r-0 border-t-0'}`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-24">
          <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/30 p-10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl"></div>
            
            <div className="relative">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Career Impact
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Measurable results and continuous growth across diverse technology environments
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{experienceData?.length || 0}</div>
                  <div className="text-sm text-gray-400 font-medium">Professional Roles</div>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {experienceData?.reduce((total, exp) => total + (exp.achievements?.length || 0), 0) || 0}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Key Achievements</div>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {new Set(experienceData?.flatMap(exp => exp.technologies || [])).size || 0}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Technologies</div>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {experienceData?.reduce((sum, exp) => {
                      const start = exp.start_date ? new Date(exp.start_date) : null;
                      const end = exp.end_date ? new Date(exp.end_date) : new Date();
                      if (!start) return sum;
                      return sum + Math.round((end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 365.25));
                    }, 0) || 0}+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
