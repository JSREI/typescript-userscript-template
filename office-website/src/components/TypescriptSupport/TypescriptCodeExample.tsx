import React from 'react';
import styled from 'styled-components';
import CustomCodeBlock from '../CustomCodeBlock';

// 将样式移入组件文件中
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

const TypescriptCodeExample: React.FC = () => {
  return (
    <CodeContainer>
      <CustomCodeBlock 
        code={tsCode} 
        language="typescript" 
        showLineNumbers={true} 
      />
    </CodeContainer>
  );
};

export default TypescriptCodeExample; 