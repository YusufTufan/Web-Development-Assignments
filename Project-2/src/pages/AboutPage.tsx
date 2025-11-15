import Skills from '../flowbiteComponents/Skills';
import ProfileCard from '../flowbiteComponents/ProfileCard';
import { usePortfolioData } from '../hooks/usePortfolio';

const AboutPage = () => {
    const { data } = usePortfolioData();
    const yetenekVerisi = data.yetenekler;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6">Hakkımda ve Yeteneklerim</h1>
      
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Kişisel Bilgiler</h2>
        <p>Merhaba! Ben Mehmet Varak, 7 yılı aşkın süredir yazılım geliştirmeyle uğraşıyorum. 
          Özellikle React, TypeScript ve modern Front-end mimarileri üzerine uzmanlaştım. 
          Büyük ölçekli SaaS uygulamalarının sıfırdan tasarlanması ve performans optimizasyonu 
          alanlarında geniş tecrübe sahibiyim. Amacım, her zaman temiz kod ve kullanıcı dostu arayüzler sunmaktır.</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Teknik Yetenekler</h2>
        <Skills skillsData={yetenekVerisi}/>
      </section>
    </div>
  );
};

export default AboutPage;