import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
`;

// Logo图标 - 使用logo.png图片
export const LogoIcon: React.FC = () => (
  <IconWrapper>
    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </IconWrapper>
);

// GitHub图标
export const GitHubIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.494C9.34 21.591 9.52 21.275 9.52 21.008C9.52 20.742 9.512 20.077 9.512 19.307C7 19.821 6.35 18.821 6.15 18.234C6.037 17.958 5.55 17.158 5.125 16.892C4.775 16.684 4.275 16.17 5.112 16.158C5.9 16.145 6.462 16.808 6.65 17.096C7.55 18.496 8.997 18.272 9.56 18.005C9.657 17.422 9.95 17.033 10.275 16.806C8.12 16.579 5.87 15.745 5.87 11.975C5.87 10.932 6.25 10.082 6.675 9.407C6.567 9.152 6.225 8.152 6.775 6.717C6.775 6.717 7.612 6.45 9.525 7.8C10.325 7.582 11.175 7.473 12.025 7.473C12.875 7.473 13.725 7.582 14.525 7.8C16.437 6.437 17.275 6.717 17.275 6.717C17.825 8.152 17.482 9.152 17.375 9.407C17.8 10.082 18.18 10.92 18.18 11.975C18.18 15.757 15.917 16.579 13.762 16.806C14.162 17.092 14.512 17.644 14.512 18.508C14.512 19.762 14.5 20.646 14.5 21.008C14.5 21.275 14.675 21.603 15.187 21.494C19.259 20.156 22 16.395 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
    </svg>
  </IconWrapper>
);

// 月亮图标 (暗色主题)
export const MoonIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconWrapper>
);

// 太阳图标 (亮色主题)
export const SunIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconWrapper>
);

// VSCode图标
export const VSCodeIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.1578 4.58719L4.58719 18.1578" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.0645 2.24484L5.76756 13.5417" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.76756 10.4583L17.0645 21.7552" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.9512 5.09575L5.09575 18.9512" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconWrapper>
);

// TypeScript图标
export const TypeScriptIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3H21V21H3V3Z" fill="#3178C6" />
      <path d="M13.3333 11.6667V13.6667H10.6667V17.6667H8.33333V13.6667H5.66667V11.6667H13.3333Z" fill="white" />
      <path d="M18.6667 13.6667C18.6667 12.7462 17.9205 12 17 12C16.0795 12 15.3333 12.7462 15.3333 13.6667C15.3333 14.4043 15.8384 15.0319 16.5343 15.1914V17.6667H18.1343V15.1914C18.8302 15.0319 19.3333 14.4043 19.3333 13.6667H18.6667Z" fill="white" />
    </svg>
  </IconWrapper>
);

// 代码图标
export const CodeIcon: React.FC = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconWrapper>
); 