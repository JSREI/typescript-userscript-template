import React from 'react';
import { 
  FeatureItem, 
  FeatureIcon, 
  FeatureText, 
  FeatureTitle, 
  FeatureDescription 
} from '../../styles/components/TypescriptSupport.styles';

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