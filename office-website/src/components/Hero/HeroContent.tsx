import React from 'react';
import styled from 'styled-components';
import CodeExample from './CodeExample';

const ContentLeft = styled.div`
  flex: 0.9;
  margin-right: 4rem;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.heading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const HighlightText = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 540px;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.7;
  animation-delay: 0.2s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto 2.5rem;
  }
`;

const FeatureBadges = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: rgba(79, 70, 229, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: translateY(-2px);
    background-color: rgba(79, 70, 229, 0.12);
  }
  
  svg {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  animation-delay: 0.4s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.boxShadow.button};
  }
  
  svg {
    margin-right: 0.5rem;
  }
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: rgba(79, 70, 229, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: 1px solid rgba(79, 70, 229, 0.2);
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(79, 70, 229, 0.15);
  }
  
  svg {
    margin-right: 0.5rem;
  }
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const CodeExampleWrapper = styled.div`
  flex: 1.1;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
`;

// 简单图标组件
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const DocIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const HeroContent: React.FC = () => {
  return (
    <>
      <ContentLeft>
        <Title>
          TypeScript UserScript <HighlightText>Template</HighlightText>
        </Title>
        <Subtitle>
          使用 TypeScript 开发油猴脚本的现代化模板，提供丰富的开发体验和工具链支持
        </Subtitle>
        <FeatureBadges>
          <Badge>TypeScript 类型支持</Badge>
          <Badge>WebPack 构建</Badge>
          <Badge>热重载开发</Badge>
          <Badge>自动注入头</Badge>
        </FeatureBadges>
        <ButtonsContainer>
          <PrimaryButton href="https://github.com/JSREI/typescript-userscript-template" target="_blank">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.068-.608.068-.608 1.003.07 1.531 1.03 1.531 1.03.891 1.529 2.341 1.088 2.91.833.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.798-.221 1.65-.332 2.5-.336.85.004 1.705.115 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            查看 GitHub
          </PrimaryButton>
          <SecondaryButton href="https://jsrei.org/docs/guide/typescript-userscript" target="_blank">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            查看文档
          </SecondaryButton>
        </ButtonsContainer>
      </ContentLeft>
      
      <CodeExampleWrapper>
        <CodeExample />
      </CodeExampleWrapper>
    </>
  );
};

export default HeroContent; 