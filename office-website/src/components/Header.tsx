import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LogoIcon, GitHubIcon } from '../icons';
import { ThemeToggle } from './ThemeToggle';
import axios from 'axios';

// 从Header.styles.ts中移植的样式
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
  text-decoration: none;
  
  span {
    margin-left: 0.5rem;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    text-decoration: none;
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
  text-decoration: none;
  white-space: nowrap; /* 防止文字换行 */
  
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
  text-decoration: none;
  white-space: nowrap; /* 防止文字换行 */
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const StarCount = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
  
  svg {
    margin-right: 0.25rem;
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// 集成了之前的Header组件结构与滚动效果
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [starCount, setStarCount] = useState<number | null>(null);
  
  // 获取GitHub Star数量
  useEffect(() => {
    const fetchStarCount = async () => {
      const STAR_COUNT_CACHE_KEY = 'github_star_count_cache';
      const CACHE_EXPIRY_KEY = 'github_star_count_cache_expiry';
      const CACHE_DURATION = 30 * 60 * 1000; // 30分钟缓存
      
      const cachedCount = localStorage.getItem(STAR_COUNT_CACHE_KEY);
      const cachedExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);
      const now = new Date().getTime();
      
      // 如果缓存存在且未过期，则使用缓存的值
      if (cachedCount && cachedExpiry && now < parseInt(cachedExpiry)) {
        setStarCount(parseInt(cachedCount));
        return;
      }
      
      try {
        // 发送请求获取仓库信息
        const response = await axios.get('https://api.github.com/repos/JSREI/typescript-userscript-template');
        const count = response.data.stargazers_count;
        
        // 更新缓存
        localStorage.setItem(STAR_COUNT_CACHE_KEY, count.toString());
        localStorage.setItem(CACHE_EXPIRY_KEY, (now + CACHE_DURATION).toString());
        
        setStarCount(count);
      } catch (error) {
        console.error('获取仓库star数量失败:', error);
        
        // 如果请求失败但缓存存在，则返回缓存的值（即使已过期）
        if (cachedCount) {
          setStarCount(parseInt(cachedCount));
        }
      }
    };

    fetchStarCount();
  }, []);
  
  // 格式化星星数量，超过1000用k表示
  const formatStarCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };
  
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
          <LogoIcon />
          <span>Typescript Userscript Template</span>
        </Logo>
        
        <NavLinks>
          <NavLink href="#features" active={activeSection === 'features'}>特性</NavLink>
          <NavLink href="#workflow" active={activeSection === 'workflow'}>工作流程</NavLink>
          <NavLink href="#installation" active={activeSection === 'installation'}>安装指南</NavLink>
          <NavLink href="#typescript" active={activeSection === 'typescript'}>Typescript支持</NavLink>
          <NavLink href="#community" active={activeSection === 'community'}>加入社区</NavLink>
        </NavLinks>
        
        <RightSection>
          <ThemeToggle />
          <GitHubButton href="https://github.com/JSREI/typescript-userscript-template" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            <span>GitHub</span>
            {starCount !== null && (
              <StarCount>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
                {formatStarCount(starCount)}
              </StarCount>
            )}
          </GitHubButton>
          
          <MobileMenuButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MobileMenuButton>
        </RightSection>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 