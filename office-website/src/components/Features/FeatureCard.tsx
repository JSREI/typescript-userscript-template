import React from 'react';
import { 
  FeatureCard as StyledFeatureCard, 
  IconWrapper, 
  CardTitle, 
  CardDescription 
} from '../../styles/components/Features.styles';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <StyledFeatureCard>
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledFeatureCard>
  );
};

export default FeatureCard; 