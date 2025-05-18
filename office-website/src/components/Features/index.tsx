import React from 'react';
import { SectionContainer, SectionInner } from '../../styles/components/Features.styles';
import FeaturesContent from './FeaturesContent';

const Features: React.FC = () => {
  return (
    <SectionContainer id="features">
      <SectionInner>
        <FeaturesContent />
      </SectionInner>
    </SectionContainer>
  );
};

export default Features; 