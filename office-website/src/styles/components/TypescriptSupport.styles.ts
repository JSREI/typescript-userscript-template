import styled from 'styled-components';

export const TypescriptContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TypescriptContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const TextContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FeatureItem = styled.li`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const FeatureIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
  flex-shrink: 0;
`;

export const FeatureText = styled.div``;

export const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

export const CodeContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`; 