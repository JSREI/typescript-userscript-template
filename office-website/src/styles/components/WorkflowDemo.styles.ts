import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 7rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  overflow: hidden;
`;

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 1.5rem;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
`;

export const SectionTag = styled.div`
  display: inline-block;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1rem;
  background-color: rgba(79, 70, 229, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  margin-bottom: 1.25rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.gradientStart} 0%,
    ${({ theme }) => theme.colors.gradientEnd} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: -0.02em;
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.7;
`;

export const FlowContainer = styled.div`
  height: 650px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: ${({ theme }) => theme.colors.background};
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.2s forwards;
  
  .react-flow__node {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .react-flow__edge {
    transition: all 0.3s ease;
    
    &:hover .react-flow__edge-path {
      stroke-width: 3;
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
  
  .react-flow__edge-path {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-width: 2;
  }
  
  .react-flow__controls {
    box-shadow: ${({ theme }) => theme.boxShadow.small};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    overflow: hidden;
    
    button {
      background-color: ${({ theme }) => theme.colors.background};
      border-color: ${({ theme }) => theme.colors.cardBorder};
      color: ${({ theme }) => theme.colors.text};
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundAlt};
      }
    }
  }
  
  .react-flow__attribution {
    background: transparent;
    color: ${({ theme }) => theme.colors.darkGray};
    
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CustomNodeWrapper = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  width: 240px;
  font-size: 14px;
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.gradientStart},
      ${({ theme }) => theme.colors.gradientEnd}
    );
  }
  
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.card};
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const NodeLabel = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1rem;
`;

export const NodeDescription = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const NodeIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.6;
`;

export const NodeNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 0.75rem;
  margin-right: 0.5rem;
`; 