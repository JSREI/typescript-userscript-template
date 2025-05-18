import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
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

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled.a<NavLinkProps>`
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

const GitHubButton = styled.a`
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

const MobileMenuButton = styled.button`
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

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // 监听滚动事件，更新导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // 获取所有锚点对应的部分
      const sections = ['features', 'workflow', 'installation', 'community', 'typescript'];
      let currentActive = '';
      
      // 找出当前可见的最顶部部分
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentActive = section;
            break;
          }
        }
      }
      
      // 如果没有找到可见部分，但页面已经滚动，则激活第一个部分
      if (!currentActive && window.scrollY > 100) {
        currentActive = sections[0];
      }
      
      setActiveSection(currentActive);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <HeaderContainer isScrolled={isScrolled}>
      <NavContainer>
        <Logo href="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3B82F6" />
            <path d="M2 17L12 22L22 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Typescript Userscript Template</span>
        </Logo>
        
        <NavLinks>
          <NavLink href="#features" active={activeSection === 'features'}>特性</NavLink>
          <NavLink href="#workflow" active={activeSection === 'workflow'}>工作流程</NavLink>
          <NavLink href="#installation" active={activeSection === 'installation'}>安装指南</NavLink>
          <NavLink href="#typescript" active={activeSection === 'typescript'}>Typescript支持</NavLink>
          <NavLink href="#community" active={activeSection === 'community'}>加入社区</NavLink>
          <GitHubButton href="https://github.com/JSREI/typescript-userscript-template" target="_blank">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.27 9.5 21.006V19.505C6.735 20.126 6.151 18.141 6.151 18.141C5.681 17.021 5.031 16.711 5.031 16.711C4.151 16.105 5.101 16.117 5.101 16.117C6.101 16.19 6.651 17.141 6.651 17.141C7.551 18.542 9.101 18.19 9.541 17.939C9.631 17.293 9.901 16.839 10.201 16.591C7.975 16.339 5.651 15.486 5.651 11.677C5.651 10.55 6.051 9.631 6.676 8.901C6.576 8.651 6.226 7.626 6.776 6.227C6.776 6.227 7.626 5.961 9.501 7.281C10.301 7.061 11.151 6.951 12.001 6.949C12.851 6.949 13.701 7.061 14.501 7.281C16.376 5.959 17.226 6.227 17.226 6.227C17.776 7.626 17.426 8.651 17.326 8.901C17.952 9.631 18.347 10.55 18.347 11.677C18.347 15.496 16.018 16.335 13.786 16.581C14.151 16.886 14.486 17.491 14.486 18.421V21.006C14.486 21.271 14.646 21.586 15.156 21.486C19.135 20.162 21.996 16.417 21.996 12C21.996 6.477 17.52 2 12 2Z" fill="currentColor" />
            </svg>
            GitHub
          </GitHubButton>
        </NavLinks>
        
        <MobileMenuButton>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 