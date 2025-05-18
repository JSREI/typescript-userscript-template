import React from 'react';
import { 
  FooterBottom,
  Copyright
} from '../../styles/components/Footer.styles';

const FooterBottomSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterBottom>
      <Copyright>© {currentYear} Typescript Userscript Template. 保留所有权利。</Copyright>
    </FooterBottom>
  );
};

export default FooterBottomSection; 