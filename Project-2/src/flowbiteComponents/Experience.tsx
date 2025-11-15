import React from 'react';
import { Card } from 'flowbite-react';
import { Tecrube } from '../types/PortfolioData'; 

interface ExperienceSectionProps {
    experienceData: Tecrube[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experienceData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {experienceData.map((item) => (
        <Card key={item.id} className="dark:bg-gray-800 border-t-4 border-t-cyan-500 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-2">{item.donem}</p>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.pozisyon}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.sirket}
          </p>
          <h6 className="mt-4 font-semibold text-gray-800 dark:text-gray-200">Ana Sorumluluklar:</h6>
          <ul className="list-disc ml-4 mt-2 space-y-1 text-gray-700 dark:text-gray-400">
            {item.sorumluluklar.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default ExperienceSection;