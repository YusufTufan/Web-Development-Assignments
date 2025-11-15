import React from "react";
import { usePortfolioData } from "./hooks/usePortfolio";

import HeaderNav from './flowbiteComponents/HeaderNav';
import Footer from './flowbiteComponents/Footer';
import ProfileCard from './flowbiteComponents/ProfileCard';
import EducationSection from './flowbiteComponents/Education';
import ExperienceSection from './flowbiteComponents/Experience';
import SkillsSection from './flowbiteComponents/Skills';
import ProjectsSection from './flowbiteComponents/Projects';

function App() {
  const { data } = usePortfolioData(); 

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-slate-900 dark:text-white">
      
      <HeaderNav personalInfo={data.kisi} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">

         <section id="personal" className="mb-16 pt-12">
            <ProfileCard personalInfo={data.kisi} />
         </section>

         <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
        
         <section id="education" className="my-8 pt-6">
           <h2 className="text-3xl font-bold border-b pb-2 mb-8 text-gray-800 dark:text-gray-100">Eğitim Durumları</h2>
           <EducationSection educationData={data.egitimler} />
         </section>

         <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />

         <section id="experience" className="my-8 pt-6">
           <h2 className="text-3xl font-bold border-b pb-2 mb-8 text-gray-800 dark:text-gray-100">Geçmiş Tecrübeler</h2>
            <ExperienceSection experienceData={data.tecrubeler} />
         </section>

         <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
        
         <section id="skills" className="my-16 pt-12">
           <h2 className="text-3xl font-bold border-b pb-2 mb-8 text-gray-800 dark:text-gray-100">Kazanılan Yetenekler</h2>
           <SkillsSection skillsData={data.yetenekler} />
         </section>

         <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
        
         <section id="projects" className="my-16 pt-12">
            <h2 className="text-3xl font-bold border-b pb-2 mb-8 text-gray-800 dark:text-gray-100">Yapılan Projeler</h2>
            <ProjectsSection projectsData={data.projeler} />
         </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App; 