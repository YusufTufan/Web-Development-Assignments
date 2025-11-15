import ProfileCard from '../flowbiteComponents/ProfileCard';
import { usePortfolioData } from '../hooks/usePortfolio';

const HomePage = () => {
    const { data } = usePortfolioData();
    const kisiBilgileri = data.kisi;
  return (
    <div className="container mx-auto p-4">
        <ProfileCard personalInfo={kisiBilgileri}/>
      
        <section className="mt-8 text-center">
        <h1 className="text-3xl font-bold">Merhaba, Ben {kisiBilgileri.ad} {kisiBilgileri.soyad}</h1>
        <p className="text-lg mt-2">{kisiBilgileri.unvan}</p>
      </section>
    </div>
  );
};

export default HomePage;