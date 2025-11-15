import React from 'react';
import { Navbar,NavbarBrand,NavbarToggle,NavbarCollapse,NavbarLink } from 'flowbite-react';
import { KisiBilgileri } from '../types/PortfolioData'; 
import { Link } from 'react-router-dom';

interface HeaderNavProps {
    personalInfo: KisiBilgileri;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ personalInfo }) => {
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 shadow-md">
      <NavbarBrand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {personalInfo.ad} {personalInfo.soyad} ({personalInfo.unvan})
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
                <Link 
                    to="/" 
                >
                    Ana Sayfa
                </Link>
                <Link 
                    to="/hakkinda"
                >
                    Hakkımda
                </Link>
                <Link 
                    to="/deneyim"
                >
                    Tecrübe & Eğitim
                </Link>
                <Link 
                    to="/projeler"
                >
                    Projeler
                </Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default HeaderNav;