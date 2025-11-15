import Experience from '../flowbiteComponents/Experience';
import Education from '../flowbiteComponents/Education';
import { usePortfolioData } from '../hooks/usePortfolio';

const ExperiencePage = () => {
    const { data } = usePortfolioData();
    const deneyimVerisi = data.tecrubeler; // data.tecrubeler'i çek
    const egitimVerisi = data.egitimler;   // data.egitimler'i çek
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6">Deneyim ve Kariyer Özeti</h1>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">İş Deneyimi</h2>
        <Experience experienceData={data.tecrubeler} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Eğitim</h2>
        <Education educationData={data.egitimler} />
      </section>
    </div>
  );
};

export default ExperiencePage;