import React from 'react';
import { Navbar,NavbarBrand,NavbarToggle,NavbarCollapse,NavbarLink } from 'flowbite-react';
import { KisiBilgileri } from '../types/PortfolioData'; 

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
        <NavbarLink href="#personal" active>Hakkımda</NavbarLink>
        <NavbarLink href="#education">Eğitim</NavbarLink>
        <NavbarLink href="#experience">Tecrübe</NavbarLink>
        <NavbarLink href="#skills">Yetenekler</NavbarLink>
        <NavbarLink href="#projects">Projeler</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default HeaderNav;