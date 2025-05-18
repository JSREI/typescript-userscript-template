import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 6rem 0;
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

export const FlowContainer = styled.div`
  height: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const CustomNodeWrapper = styled.div`
  padding: 1rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  width: 220px;
  font-size: 14px;
`;

export const NodeLabel = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const NodeDescription = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
`; 