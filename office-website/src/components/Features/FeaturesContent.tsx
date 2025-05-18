import React from 'react';
import { 
  SectionHeading, 
  Title, 
  Subtitle, 
  FeaturesGrid 
} from '../../styles/components/Features.styles';
import FeatureCard from './FeatureCard';
import { 
  ModuleIcon, 
  HotReloadIcon, 
  SingleFileIcon, 
  TypescriptIcon, 
  SimpleIcon, 
  ApiIcon 
} from './FeatureIcons';

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