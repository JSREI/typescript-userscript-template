import styled from 'styled-components';

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: ${({ isScrolled }) => (isScrolled ? '0.75rem 0' : '1.25rem 0')};
  background-color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.background : 'transparent'};
  box-shadow: ${({ isScrolled, theme }) =>
    isScrolled ? theme.boxShadow.medium : 'none'};
  transition: all 0.3s ease;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.5rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export interface NavLinkProps {
  active: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  margin: 0 1rem;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

export const GitHubButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  padding: 0.5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  transition: all 0.2s;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`; 