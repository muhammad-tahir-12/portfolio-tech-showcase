import React from 'react';
import { useSkills } from '@/hooks/usePortfolioData';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

// Skill level badge component
const SkillBadge = ({ skill }: { skill: any }) => {
  const getSkillLevel = (proficiency: number) => {
    if (proficiency >= 90) return { label: 'Expert', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400' };
    if (proficiency >= 75) return { label: 'Advanced', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' };
    if (proficiency >= 60) return { label: 'Intermediate', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400' };
    return { label: 'Beginner', color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400' };
  };

  const level = getSkillLevel(skill.proficiency_level);

  return (
    <div className="group relative">
      <div className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 bg-white dark:bg-gray-800/50">
        <span className="font-medium text-gray-900 dark:text-gray-100 flex-1">
          {skill.name}
        </span>
        <Badge className={`text-xs font-medium ${level.color} border-0`}>
          {level.label}
        </Badge>
      </div>
    </div>
  );
};

// Loading skeleton
const SkillsSkeleton = () => (
  <div className="space-y-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="space-y-4">
        <Skeleton className="h-6 w-32" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6].map((j) => (
            <div key={j} className="flex items-center gap-2 p-3 rounded-lg border">
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default function Skills() {
  const { data: skillsData, isLoading, isError } = useSkills();

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              My expertise across different technologies and tools
            </p>
          </div>
          
          <SkillsSkeleton />
        </div>
      </section>
    );
  }

  if (isError || !skillsData) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load skills data
          </p>
        </div>
      </section>
    );
  }

  // Group skills by category
  const groupedSkills = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Sort skills within each category by proficiency level
  Object.keys(groupedSkills).forEach(category => {
    groupedSkills[category].sort((a: any, b: any) => b.proficiency_level - a.proficiency_level);
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My expertise across different technologies and tools, organized by proficiency level
          </p>
        </div>

        {/* Skills by category */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, skills]: [string, any]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skills.map((skill: any) => (
                  <SkillBadge key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {skillsData.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Skills
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                {skillsData.filter((skill: any) => skill.proficiency_level >= 90).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Expert Level
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {skillsData.filter((skill: any) => skill.proficiency_level >= 75).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Advanced+
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-1">
                {Object.keys(groupedSkills).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Categories
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
