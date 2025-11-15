import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import { usePortfolioData } from '../hooks/usePortfolio';

const Layout = () => {
    const { data } = usePortfolioData(); 
    const kisiBilgileri = data.kisi;

  return (
    <div className="main-layout flex flex-col min-h-screen">
      <HeaderNav personalInfo={kisiBilgileri}/> 
      
      <main className="page-content flex-grow container mx-auto p-4">

        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;