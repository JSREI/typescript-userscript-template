import React from 'react';
import { Logo } from '../../styles/components/Header.styles';

const LogoComponent: React.FC = () => {
  return (
    <Logo href="/">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3B82F6" />
        <path d="M2 17L12 22L22 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Typescript Userscript Template</span>
    </Logo>
  );
};

export default LogoComponent; 