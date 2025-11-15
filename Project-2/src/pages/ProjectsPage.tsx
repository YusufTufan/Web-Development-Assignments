import Projects from '../flowbiteComponents/Projects';
import { usePortfolioData } from '../hooks/usePortfolio';
const ProjectsPage = () => {
    const { data } = usePortfolioData();
    const projectsData = data.projeler;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6">Projelerim</h1>
      <Projects projectsData={data.projeler}/>
    </div>
  );
};

export default ProjectsPage;