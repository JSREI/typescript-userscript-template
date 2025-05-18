import React from 'react';
import styled from 'styled-components';
import CustomCodeBlock from './CustomCodeBlock';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 6rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundAlt} 100%
  );
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  margin-right: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 500px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.darkGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(59, 130, 246, 0.05);
    transform: translateY(-2px);
  }
`;

const VisualContainer = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const CodeBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.large};
  font-family: 'Fira Code', monospace;
`;

const CodeHeader = styled.div`
  background-color: #1e1e1e;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
`;

const CodeDots = styled.div`
  display: flex;
  gap: 0.5rem;
  
  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    
    &:nth-child(1) {
      background-color: #ff5f56;
    }
    
    &:nth-child(2) {
      background-color: #ffbd2e;
    }
    
    &:nth-child(3) {
      background-color: #27c93f;
    }
  }
`;

const codeExample = `// ==UserScript==
// @name         My Typescript UserScript
// @version      1.0.0
// @description  A UserScript built with TypeScript
// @author       Your Name
// @match        https://example.com/*
// ==/UserScript==

class MyUserScript {
  private config = {
    enableLogging: true,
    theme: 'dark',
  };

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    console.log('UserScript initialized!');
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener('click', this.handleClick);
  }

  private handleClick = (e: MouseEvent): void => {
    if (this.config.enableLogging) {
      console.log('Clicked:', e.target);
    }
  };
}

// Start the script
new MyUserScript();`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <ContentLeft>
          <Title>Typescript Userscript 模板</Title>
          <Subtitle>
            现代化的油猴脚本开发模板，集成TypeScript、Rollup和自动化工具，让你的UserScript开发更加高效和愉快。
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton href="https://github.com/JSREI/typescript-userscript-template" target="_blank">
              获取模板
            </PrimaryButton>
            <SecondaryButton href="https://github.com/JSREI/typescript-userscript-template#readme" target="_blank">
              查看文档
            </SecondaryButton>
          </ButtonGroup>
        </ContentLeft>
        
        <VisualContainer>
          <CodeBox>
            <CodeHeader>
              <CodeDots>
                <span></span>
                <span></span>
                <span></span>
              </CodeDots>
            </CodeHeader>
            <CustomCodeBlock 
              code={codeExample} 
              language="typescript" 
              showLineNumbers={true} 
            />
          </CodeBox>
        </VisualContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 