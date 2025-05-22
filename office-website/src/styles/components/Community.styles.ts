import styled from 'styled-components';

export const CommunityContainer = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const CommunityContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const CommunityTitle = styled.h2`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const QrCodesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 3rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const QrCodeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.large};
  }
`;

export const QrCodeImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

export const QrCodeText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    text-decoration: underline;
  }
`; 