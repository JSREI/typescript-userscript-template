import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const InstallationContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StepItem = styled.div`
  position: relative;
  padding-left: 3.5rem;
`;

export const StepNumber = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.25rem;
`;

export const CodeBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`; 