import React from 'react';
import { Logo } from '../../styles/components/Header.styles';
import styled from 'styled-components';

const LogoSvgWrapper = styled.div`
  padding: 16px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}60;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}60;
    transform: translateY(-1px);
  }
`;

const LogoComponent: React.FC = () => {
  return (
    <Logo href="/">
      <LogoSvgWrapper>
        <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 简化版JSREI标志 */}
          <rect x="20" y="20" width="60" height="60" rx="12" fill="#3B82F6" />
          <path d="M35 40H65M35 50H55M35 60H60" stroke="white" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </LogoSvgWrapper>
      <span>Typescript Userscript Template</span>
    </Logo>
  );
};

export default LogoComponent; 