import React from 'react';
import { 
  ContentLeft, 
  Title, 
  Subtitle, 
  ButtonGroup, 
  PrimaryButton, 
  SecondaryButton 
} from '../../styles/components/Hero.styles';
import CodeExample from './CodeExample';

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