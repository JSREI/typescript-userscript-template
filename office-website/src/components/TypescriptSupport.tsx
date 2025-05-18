import React from 'react';
import styled from 'styled-components';
import CustomCodeBlock from './CustomCodeBlock';

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

const FeatureItem = styled.li`
  display: flex;
  margin-bottom: 1.5rem;
`;

const FeatureIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
  flex-shrink: 0;
`;

const FeatureText = styled.div``;

const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const CodeContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

const tsCode = `// 类型定义
interface UserScriptOptions {
  name: string;
  version: string;
  match: string[];
  namespace?: string;
  description?: string;
}

// 类型安全的 API 调用
GM_addStyle('.my-style { color: #3B82F6; }');

// 泛型支持
function getData<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: 'GET',
      url,
      onload: (response) => {
        try {
          const data = JSON.parse(response.responseText) as T;
          resolve(data);
        } catch (error) {
          reject(error);
        }
      },
      onerror: (error) => reject(error)
    });
  });
}

// 使用示例
interface User {
  id: number;
  name: string;
  email: string;
}

// 类型安全的异步请求
async function fetchUser(id: number): Promise<User> {
  return await getData<User>(\`https://api.example.com/users/\${id}\`);
}`;

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
              <FeatureItem>
                <FeatureIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>类型安全</FeatureTitle>
                  <FeatureDescription>
                    使用 TypeScript 的静态类型系统，在编译时捕获潜在错误，避免运行时出现意外问题。
                  </FeatureDescription>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19.15V4.85C9 4.85 15 1.12 15 12C15 22.88 9 19.15 9 19.15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.28 9.32C5.28 9.32 7.89 7.5 7.89 12C7.89 16.5 5.28 14.68 5.28 14.68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.42 9.32C18.42 9.32 15.81 7.5 15.81 12C15.81 16.5 18.42 14.68 18.42 14.68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>智能提示</FeatureTitle>
                  <FeatureDescription>
                    获得优秀的代码补全和API提示，减少查阅文档的时间，提高开发效率。
                  </FeatureDescription>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 17L17 12L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 12L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>代码重构</FeatureTitle>
                  <FeatureDescription>
                    类型系统让重构变得更加安全和简单，轻松维护和更新脚本代码。
                  </FeatureDescription>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem>
                <FeatureIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 16.8V20.4C6 20.8418 6.12643 21.2627 6.36001 21.6C6.59358 21.9373 6.92161 22.1767 7.29912 22.2836C7.67664 22.3905 8.08474 22.359 8.44016 22.1937C8.79558 22.0284 9.07848 21.7483 9.24 21.4L15.24 10.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 14L21 17L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8L9 5L12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 5H13.24C13.8214 5.00014 14.394 5.11665 14.9237 5.34223C15.4535 5.56782 15.9279 5.89725 16.32 6.31C16.7121 6.72276 17.0144 7.21343 17.2103 7.74792C17.4062 8.28242 17.492 8.84889 17.462 9.41718C17.4319 9.98546 17.2868 10.5397 17.0359 11.0486C16.785 11.5574 16.4335 12.0093 16 12.38L9.24 21.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>现代语法</FeatureTitle>
                  <FeatureDescription>
                    使用最新的 TypeScript 和 ECMAScript 功能，如可选链、空值合并和箭头函数等。
                  </FeatureDescription>
                </FeatureText>
              </FeatureItem>
            </FeatureList>
          </TextContent>
          
          <CodeContainer>
            <CustomCodeBlock 
              code={tsCode} 
              language="typescript" 
              showLineNumbers={true} 
            />
          </CodeContainer>
        </ContentGrid>
      </TypescriptContent>
    </TypescriptContainer>
  );
};

export default TypescriptSupport; 