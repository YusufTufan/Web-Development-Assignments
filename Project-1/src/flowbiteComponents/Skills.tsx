import React from 'react';
import { Badge } from 'flowbite-react';
import { HiCheckCircle } from 'react-icons/hi'; 

interface SkillsSectionProps {
    skillsData: string[]; 
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsData }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      
      {skillsData.map((skill, index) => (
        <Badge 
          key={index} 
          icon={HiCheckCircle} 
          color="cyan"         
          className="py-2 px-4 text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {skill}
        </Badge>
      ))}
      
    </div>
  );
};

export default SkillsSection;