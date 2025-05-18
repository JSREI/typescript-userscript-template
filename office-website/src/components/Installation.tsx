import React from 'react';
import styled from 'styled-components';
import CustomCodeBlock from './CustomCodeBlock';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

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
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const InstallationContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StepItem = styled.div`
  position: relative;
  padding-left: 3.5rem;
`;

const StepNumber = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.25rem;
`;

const CodeBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`;

const Installation: React.FC = () => {
  return (
    <SectionContainer id="installation">
      <SectionInner>
        <SectionHeading>
          <Title>安装指南</Title>
          <Subtitle>
            通过几个简单的步骤，开始使用Typescript Userscript Template开发你的用户脚本
          </Subtitle>
        </SectionHeading>
        
        <InstallationContent>
          <StepsList>
            <StepItem>
              <StepNumber>1</StepNumber>
              <StepTitle>获取模板</StepTitle>
              <StepDescription>
                首先，从GitHub克隆Typescript Userscript Template仓库到你的本地开发环境。
              </StepDescription>
              <CodeBlock>
                <CustomCodeBlock
                  code="git clone https://github.com/JSREI/typescript-userscript-template.git my-userscript"
                  language="bash"
                />
              </CodeBlock>
            </StepItem>
            
            <StepItem>
              <StepNumber>2</StepNumber>
              <StepTitle>安装依赖</StepTitle>
              <StepDescription>
                进入项目目录并安装所需的开发依赖包。
              </StepDescription>
              <CodeBlock>
                <CustomCodeBlock
                  code={`cd my-userscript\nnpm install`}
                  language="bash"
                />
              </CodeBlock>
            </StepItem>
            
            <StepItem>
              <StepNumber>3</StepNumber>
              <StepTitle>修改配置</StepTitle>
              <StepDescription>
                根据你的需求修改package.json中的脚本信息和配置。
              </StepDescription>
              <CodeBlock>
                <CustomCodeBlock
                  code={`{
  "name": "my-awesome-userscript",
  "version": "1.0.0",
  "description": "我的用户脚本",
  "author": "你的名字",
  "license": "MIT"
}`}
                  language="json"
                />
              </CodeBlock>
            </StepItem>
          </StepsList>
          
          <StepsList>
            <StepItem>
              <StepNumber>4</StepNumber>
              <StepTitle>开发模式</StepTitle>
              <StepDescription>
                启动开发模式，享受实时重载和TypeScript类型检查。
              </StepDescription>
              <CodeBlock>
                <CustomCodeBlock
                  code="npm run dev"
                  language="bash"
                />
              </CodeBlock>
            </StepItem>
            
            <StepItem>
              <StepNumber>5</StepNumber>
              <StepTitle>创建脚本逻辑</StepTitle>
              <StepDescription>
                在src/index.ts中编写你的用户脚本逻辑，利用TypeScript的类型系统和模块化特性。
              </StepDescription>
              <CodeBlock>
                <CustomCodeBlock
                  code={`// src/index.ts
import { fetchData } from './utils';

class MyUserScript {
  constructor() {
    console.log('脚本已初始化!');
    this.init();
  }
  
  private async init(): Promise<void> {
    const data = await fetchData('https://api.example.com/data');
    this.render(data);
  }
  
  private render(data: any): void {
    // 处理DOM操作和UI渲染
  }
}

new MyUserScript();`}
                  language="typescript"
                />
              </CodeBlock>
            </StepItem>
            
            <StepItem>
              <StepNumber>6</StepNumber>
              <StepTitle>构建发布版本</StepTitle>
              <StepDescription>
                完成开发后，构建生产版本的用户脚本。
              </StepDescription>
              <CodeBlock>
                <CustomCodeBlock
                  code="npm run build"
                  language="bash"
                />
              </CodeBlock>
            </StepItem>
          </StepsList>
        </InstallationContent>
      </SectionInner>
    </SectionContainer>
  );
};

export default Installation; 