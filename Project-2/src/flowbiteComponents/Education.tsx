import React from 'react';
import { Card } from 'flowbite-react';
import { Egitim } from '../types/PortfolioData'; 

interface EducationSectionProps {
    educationData: Egitim[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educationData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {educationData.map((item) => (
        <Card key={item.id} className="dark:bg-gray-800 border-t-4 border-t-cyan-500 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-2">{item.donem}</p>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.derece}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.okul}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
            {item.aciklama}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default EducationSection;