import React from 'react';
import styled from 'styled-components';
import CodeExample from './CodeExample';

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

const HeroContent: React.FC = () => {
  return (
    <>
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
      
      <CodeExample />
    </>
  );
};

export default HeroContent; 