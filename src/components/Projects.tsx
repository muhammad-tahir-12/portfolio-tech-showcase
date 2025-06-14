import React, { useState, useMemo, useCallback } from 'react';
import { Github, Link } from 'lucide-react';

// Memoized project card component
const ProjectCard = React.memo(({ project, index }: { project: any; index: number }) => (
  <div
    className="bg-white dark:bg-gray-800 light:bg-white rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 light:shadow-gray-200/50 transition-all duration-300 overflow-hidden group"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-white/90 dark:bg-gray-800/90 light:bg-white/90 text-gray-700 dark:text-gray-300 light:text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white light:text-gray-800">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 light:text-gray-600 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="bg-blue-50 dark:bg-blue-900/30 light:bg-blue-50 text-blue-700 dark:text-blue-300 light:text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          aria-label={`View live demo of ${project.title}`}
        >
          <Link size={16} />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 light:border-gray-300 text-gray-700 dark:text-gray-300 light:text-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 light:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 light:hover:bg-gray-50 transition-all duration-300"
          aria-label={`View source code of ${project.title}`}
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

const Projects = React.memo(() => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Memoize projects data to prevent unnecessary re-renders
  const projects = useMemo(() => [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full Stack",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A responsive weather application with real-time data visualization, location-based forecasts, and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API", "CSS Grid"],
      category: "Frontend",
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/username/weather-app"
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for task management with authentication, real-time updates, and comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
      category: "Backend",
      liveUrl: "https://api-docs.example.com",
      githubUrl: "https://github.com/username/task-api"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and featuring smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      liveUrl: "https://example-portfolio.com",
      githubUrl: "https://github.com/username/portfolio"
    }
  ], []);

  const categories = useMemo(() => ['All', 'Full Stack', 'Frontend', 'Backend'], []);
  
  // Memoize filtered projects to prevent unnecessary re-computation
  const filteredProjects = useMemo(() => 
    selectedCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory),
    [projects, selectedCategory]
  );

  // Memoize category handler
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 light:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development,
            from frontend interfaces to full-stack applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 light:bg-gray-100 text-gray-700 dark:text-gray-300 light:text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 light:hover:bg-gray-200'
              }`}
              aria-label={`Filter projects by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
