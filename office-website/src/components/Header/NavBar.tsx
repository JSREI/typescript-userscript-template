import React from 'react';
import { NavLinks, NavLink, GitHubButton } from '../../styles/components/Header.styles';

interface NavBarProps {
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection }) => {
  return (
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
  );
};

export default NavBar; 