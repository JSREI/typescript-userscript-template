import React from 'react';
import { 
  FooterContainer, 
  FooterContent 
} from '../../styles/components/Footer.styles';
import FooterTopSection from './FooterTopSection';
import FooterBottomSection from './FooterBottomSection';

const Footer: React.FC = () => {  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTopSection />
        <FooterBottomSection />
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 