import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">Hand-Drawn <span className="text-orange-600 italic">Adventures</span></h2>
        <p className="text-slate-600 text-lg max-w-2xl">
          A collection of 2D games and projects focusing on mechanics, atmosphere, and artistic animation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
