import React from 'react';
import { Footer as FlowbiteFooter, FooterCopyright   } from 'flowbite-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FlowbiteFooter container className="mt-12">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterCopyright 
            href="#" 
            by="CENG 307 Portfolyo Ödevi | Rastgele Bilgilerle Hazırlanmıştır." 
            year={currentYear} 
          />
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;