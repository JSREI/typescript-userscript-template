import React from 'react';
import styled from 'styled-components';

const FeatureItem = styled.li`
  display: flex;
  margin-bottom: 1.5rem;
`;

const FeatureIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
  flex-shrink: 0;
`;

const FeatureText = styled.div``;

const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

interface TypescriptFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TypescriptFeature: React.FC<TypescriptFeatureProps> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <FeatureItem>
      <FeatureIcon>{icon}</FeatureIcon>
      <FeatureText>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </FeatureText>
    </FeatureItem>
  );
};

export default TypescriptFeature; 