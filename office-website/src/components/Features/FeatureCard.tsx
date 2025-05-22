import React from 'react';
import styled from 'styled-components';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2.5rem 2rem;
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  height: 100%;
  z-index: 1;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    border-color: ${({ theme }) => theme.colors.primaryLight};
    
    .icon-wrapper {
      background-color: rgba(79, 70, 229, 0.1);
      transform: scale(1.05);
    }
    
    &::before {
      transform: translateX(0);
      opacity: 0.03;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    opacity: 0;
    z-index: -1;
    transform: translateX(-100%);
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgba(79, 70, 229, 0.08);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transitions.normal};
  
  svg {
    width: 28px;
    height: 28px;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.heading};
  transition: ${({ theme }) => theme.transitions.fast};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 0;
`;

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper className="icon-wrapper">
        {icon}
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;