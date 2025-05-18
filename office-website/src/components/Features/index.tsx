import React from 'react';
import styled from 'styled-components';
import FeaturesContent from './FeaturesContent';

// 将样式移入组件文件中
const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

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