import React, { useState, useEffect } from 'react';
import { HeaderContainer, NavContainer } from '../../styles/components/Header.styles';
import LogoComponent from './LogoComponent';
import NavBar from './NavBar';
import MobileMenuComponent from './MobileMenuComponent';

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
        <LogoComponent />
        <NavBar activeSection={activeSection} />
        <MobileMenuComponent />
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 