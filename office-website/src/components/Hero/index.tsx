import React from 'react';
import { HeroSection, HeroContent as StyledHeroContent } from '../../styles/components/Hero.styles';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <StyledHeroContent>
        <HeroContent />
      </StyledHeroContent>
    </HeroSection>
  );
};

export default Hero; 