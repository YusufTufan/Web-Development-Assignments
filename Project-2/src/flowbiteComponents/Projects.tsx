import React from 'react';
import { Card, Button, Badge } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Proje } from '../types/PortfolioData'; 

interface ProjectsSectionProps {
    projectsData: Proje[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {projectsData.map((project) => (
        <Card key={project.id} className="dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
          
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.baslik}
          </h5>
          
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {project.aciklama}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.teknolojiler.map((tech, index) => (
              <Badge key={index} color="indigo" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
          
          <Button  as="a" href={project.projeUrl} target="_blank" rel="noopener noreferrer" color="cyan">
            Proje Detaylarını Gör
            <HiOutlineArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      ))}
      
    </div>
  );
};

export default ProjectsSection;