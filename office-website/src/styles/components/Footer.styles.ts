import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.heading};
  color: white;
  padding: 4rem 0 2rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.5rem;
  }
`;

export const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export const FooterHeading = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLinkItem = styled.li`
  margin-bottom: 0.75rem;
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
`; 