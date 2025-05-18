import React from 'react';
import { 
  TypescriptContainer, 
  TypescriptContent, 
  Title, 
  Subtitle, 
  ContentGrid, 
  TextContent, 
  FeatureList 
} from '../../styles/components/TypescriptSupport.styles';
import TypescriptFeature from './TypescriptFeature';
import TypescriptCodeExample from './TypescriptCodeExample';
import { 
  TypeSafetyIcon, 
  SmartSuggestionIcon, 
  RefactoringIcon, 
  ModernSyntaxIcon 
} from './FeatureIcons';

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