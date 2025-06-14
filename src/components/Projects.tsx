import React, { useState, useMemo, useCallback } from 'react';
import { Github, ExternalLink, Calendar, Star, ArrowUpRight, Sparkles, Zap, Layers, Eye, Code2, TrendingUp } from 'lucide-react';
import { useProjects } from '@/hooks/usePortfolioData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

// Ultra-modern project card with 3D effects and sophisticated animations
const ProjectCard = React.memo(({ project, index }: { project: any; index: number }) => (
  <div className="relative group perspective-1000">
    {/* 3D Card Container */}
    <Card 
      className="relative overflow-hidden border-0 bg-gradient-to-br from-white via-white to-gray-50/80 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-700 transform-gpu hover:scale-[1.02] hover:-translate-y-4 hover:rotate-x-2 hover:rotate-y-1"
      style={{ 
        animationDelay: `${index * 120}ms`,
        animation: 'fadeInUp 0.9s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      {/* Premium overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.02] dark:to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Status indicators */}
      <div className="absolute top-3 left-3 flex gap-2 z-20">
        {index < 2 && (
          <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0 shadow-lg gap-1.5 animate-pulse">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </Badge>
        )}
        {index === 0 && (
          <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-0 shadow-lg gap-1.5">
            <TrendingUp className="w-3 h-3" />
            Latest
          </Badge>
        )}
      </div>

      {/* Main content container */}
      <div className="relative z-10">
        <CardHeader className="p-0 relative">
          {/* Enhanced image section */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/20 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 filter group-hover:brightness-110 group-hover:contrast-110"
              loading="lazy"
              decoding="async"
            />
            
            {/* Sophisticated overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            {/* Floating action buttons with better positioning */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
              <Button 
                size="sm" 
                className="h-9 w-9 p-0 bg-white/95 hover:bg-white text-gray-700 hover:text-blue-600 shadow-lg hover:shadow-xl backdrop-blur-sm border-0 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                size="sm" 
                className="h-9 w-9 p-0 bg-white/95 hover:bg-white text-gray-700 hover:text-purple-600 shadow-lg hover:shadow-xl backdrop-blur-sm border-0 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Code2 className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Enhanced category badge */}
            <div className="absolute bottom-4 left-4">
              <Badge className="bg-white/95 dark:bg-gray-900/95 text-gray-700 dark:text-gray-300 border-white/30 dark:border-gray-700/30 backdrop-blur-md shadow-lg">
                <Layers className="w-3 h-3 mr-1" />
                {project.category}
              </Badge>
            </div>

            {/* Project stats overlay */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex gap-2">
                <Badge className="bg-black/20 text-white border-0 backdrop-blur-sm">
                  <Zap className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-8 space-y-6">
          {/* Enhanced title and description */}
          <div className="space-y-3">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed text-base line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {project.description}
            </CardDescription>
          </div>
          
          {/* Enhanced technology stack */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <Star className="w-4 h-4" />
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech: string, techIndex: number) => (
                <Badge
                  key={tech}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 dark:from-blue-950 dark:to-blue-900 dark:hover:from-blue-900 dark:hover:to-blue-800 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${(index * 120) + (techIndex * 60)}ms` }}
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 5 && (
                <Badge variant="outline" className="text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  +{project.technologies.length - 5} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-8 pt-0 flex gap-4">
          {/* Enhanced action buttons */}
          <Button 
            asChild
            className="flex-1 h-12 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 hover:from-blue-700 hover:via-purple-700 hover:to-purple-800 text-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group/btn"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-3 text-base font-medium"
            >
              <Eye className="w-5 h-5" />
              View Live
              <ArrowUpRight className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="h-12 px-6 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 group/btn"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-3 text-base font-medium"
            >
              <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              Source
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

// Enhanced loading skeleton with modern animations
const ProjectSkeleton = ({ index }: { index: number }) => (
  <Card className="overflow-hidden border-0 shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
    <div className="h-56 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5 animate-shimmer" />
    </div>
    <CardContent className="p-8 space-y-6">
      <div className="space-y-3">
        <Skeleton className="h-7 w-4/5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-24" />
        <div className="flex gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-16 rounded-full" />
        </div>
      </div>
    </CardContent>
    <CardFooter className="p-8 pt-0 flex gap-4">
      <Skeleton className="h-12 flex-1" />
      <Skeleton className="h-12 w-28" />
    </CardFooter>
  </Card>
);

const Projects = React.memo(() => {
  const { data: projectsData, isLoading, isError } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Transform Supabase data to match component expectations
  const projects = useMemo(() => 
    projectsData?.map(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image_url,
      technologies: project.technologies,
      category: project.category,
      liveUrl: project.live_url,
      githubUrl: project.github_url
    })) || [], 
    [projectsData]
  );

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(p => p.category).filter(Boolean)));
    return ['All', ...uniqueCategories];
  }, [projects]);
  
  const filteredProjects = useMemo(() => 
    selectedCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory),
    [projects, selectedCategory]
  );

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  // Ultra-modern loading state
  if (isLoading) {
    return (
      <section id="projects" className="py-32 relative overflow-hidden">
        {/* Advanced background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.03] dark:bg-grid-white/[0.01]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Portfolio Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover my latest work showcasing cutting-edge technologies and innovative solutions
            </p>
          </div>
          
          {/* Category filter skeleton */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-12 w-32 rounded-full" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProjectSkeleton key={i} index={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Enhanced error state
  if (isError) {
    return (
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-gray-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800/50">
              <Sparkles className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-red-600 dark:text-red-400 font-medium">Portfolio Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-red-500 dark:text-red-400 text-xl">Unable to load projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Ultra-modern background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />
      <div className="absolute inset-0 bg-grid-gray-900/[0.03] dark:bg-grid-white/[0.01]" />
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">Portfolio Showcase</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Discover my latest work showcasing cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Enhanced category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in-up animation-delay-600">
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                relative px-8 py-3 rounded-full font-medium text-base transition-all duration-300 transform hover:scale-105 group
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-2xl border-0 hover:from-blue-700 hover:to-purple-700'
                  : 'bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm hover:shadow-lg'
                }
              `}
              style={{ animationDelay: `${600 + (index * 100)}ms` }}
            >
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              )}
              <span className="relative flex items-center gap-2">
                {category === 'All' && <Layers className="w-4 h-4" />}
                {category}
              </span>
            </Button>
          ))}
        </div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Enhanced empty state */}
        {filteredProjects.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center shadow-lg">
              <Sparkles className="w-12 h-12 text-gray-400 dark:text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Try selecting a different category to discover more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
