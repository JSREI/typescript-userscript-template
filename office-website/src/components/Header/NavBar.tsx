import React from 'react';
import { NavLinks, NavLink } from '../../styles/components/Header.styles';
import GitHubStarButton from './GitHubStarButton';

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
      <GitHubStarButton repoOwner="JSREI" repoName="typescript-userscript-template" />
    </NavLinks>
  );
};

export default NavBar; 