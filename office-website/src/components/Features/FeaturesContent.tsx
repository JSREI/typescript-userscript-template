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
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesContent: React.FC = () => {
  return (
    <>
      <SectionHeading>
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
    </>
  );
};

export default FeaturesContent; 