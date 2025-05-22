import React from 'react';
import { 
  FooterBottom,
  Copyright,
  FooterLink
} from '../../styles/components/Footer.styles';

const FooterBottomSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterBottom>
      <Copyright>
        © {currentYear} <FooterLink href="https://github.com/JSREI/typescript-userscript-template" target="_blank">Typescript Userscript Template</FooterLink>. 保留所有权利。
      </Copyright>
    </FooterBottom>
  );
};

export default FooterBottomSection; 