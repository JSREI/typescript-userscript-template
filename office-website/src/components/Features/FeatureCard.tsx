import React from 'react';
import styled from 'styled-components';

// 将样式移入组件文件中
const StyledFeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: rgba(59, 130, 246, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;

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