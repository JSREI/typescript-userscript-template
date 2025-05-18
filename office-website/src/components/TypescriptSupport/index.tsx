import React from 'react';
import styled from 'styled-components';
import TypescriptFeature from './TypescriptFeature';
import TypescriptCodeExample from './TypescriptCodeExample';
import { 
  TypeSafetyIcon, 
  SmartSuggestionIcon, 
  RefactoringIcon, 
  ModernSyntaxIcon 
} from './FeatureIcons';

// 将样式移入组件文件中
const TypescriptContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const TypescriptContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TypescriptSupport: React.FC = () => {
  return (
    <TypescriptContainer id="typescript">
      <TypescriptContent>
        <Title>Typescript 支持</Title>
        <Subtitle>
          使用 TypeScript 开发油猴脚本，获得类型安全和智能提示，提高代码质量
        </Subtitle>
        
        <ContentGrid>
          <TextContent>
            <FeatureList>
              <TypescriptFeature 
                title="类型安全"
                description="使用 TypeScript 的静态类型系统，在编译时捕获潜在错误，避免运行时出现意外问题。"
                icon={<TypeSafetyIcon />}
              />
              
              <TypescriptFeature 
                title="智能提示"
                description="获得优秀的代码补全和API提示，减少查阅文档的时间，提高开发效率。"
                icon={<SmartSuggestionIcon />}
              />
              
              <TypescriptFeature 
                title="代码重构"
                description="类型系统让重构变得更加安全和简单，轻松维护和更新脚本代码。"
                icon={<RefactoringIcon />}
              />
              
              <TypescriptFeature 
                title="现代语法"
                description="使用最新的 TypeScript 和 ECMAScript 功能，如可选链、空值合并和箭头函数等。"
                icon={<ModernSyntaxIcon />}
              />
            </FeatureList>
          </TextContent>
          
          <TypescriptCodeExample />
        </ContentGrid>
      </TypescriptContent>
    </TypescriptContainer>
  );
};

export default TypescriptSupport; 