import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import { 
  ModuleIcon, 
  HotReloadIcon, 
  SingleFileIcon, 
  TypescriptIcon, 
  SimpleIcon, 
  ApiIcon 
} from './FeatureIcons';

// 将样式移入组件文件中
const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
`;

const SectionTag = styled.div`
  display: inline-block;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1rem;
  background-color: rgba(79, 70, 229, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
`;

const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  margin-bottom: 1.25rem;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.gradientStart} 0%,
    ${({ theme }) => theme.colors.gradientEnd} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  letter-spacing: -0.02em;
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.7;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.2s forwards;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AnimatedDots = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: radial-gradient(${({ theme }) => theme.colors.primary} 1px, transparent 1px);
  background-size: 16px 16px;
  opacity: 0.1;
  z-index: 0;
  border-radius: 50%;
  
  &.dots-1 {
    top: 10%;
    left: 5%;
    width: 250px;
    height: 250px;
  }
  
  &.dots-2 {
    bottom: 10%;
    right: 5%;
    width: 200px;
    height: 200px;
  }
`;

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const FeaturesContent: React.FC = () => {
  return (
    <SectionContainer>
      <AnimatedDots className="dots-1" />
      <AnimatedDots className="dots-2" />
      
      <SectionHeading>
        <SectionTag>特性</SectionTag>
        <Title>强大的功能特性</Title>
        <Subtitle>
          使用Typescript Userscript Template，享受现代化前端开发体验的同时，轻松构建高质量的用户脚本
        </Subtitle>
      </SectionHeading>
      
      <FeaturesGrid>
        <FeatureCard
          title="模块化开发"
          description="支持使用ES模块和TypeScript类型系统，让你的代码更具可维护性和可扩展性。"
          icon={<ModuleIcon />}
        />
        
        <FeatureCard
          title="热重载开发"
          description="支持开发环境热重载，修改代码后自动重新加载脚本，提高开发效率。"
          icon={<HotReloadIcon />}
        />
        
        <FeatureCard
          title="单文件输出"
          description="使用Rollup打包，将多文件项目打包成单一的JS文件，符合油猴脚本规范。"
          icon={<SingleFileIcon />}
        />
        
        <FeatureCard
          title="Typescript支持"
          description="内置TypeScript配置，享受类型检查和智能提示的好处，避免常见错误。"
          icon={<TypescriptIcon />}
        />
        
        <FeatureCard
          title="简单易用"
          description="提供简洁的开发流程和清晰的项目结构，让新手也能快速上手开发。"
          icon={<SimpleIcon />}
        />
        
        <FeatureCard
          title="API类型定义"
          description="包含常用油猴API的TypeScript定义，智能提示让你写代码更高效。"
          icon={<ApiIcon />}
        />
      </FeaturesGrid>
    </SectionContainer>
  );
};

export default FeaturesContent; 