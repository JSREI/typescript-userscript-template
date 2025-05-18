import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

const CodeBlockWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  background-color: #1e1e1e;
  
  /* 自定义行号样式 */
  .line-numbers .line-numbers-rows {
    border-right: none;
    padding-left: 10px;
  }
  
  .line-numbers-rows > span:before {
    color: #606060 !important;
  }
  
  /* 确保代码和行号对齐 */
  pre.line-numbers {
    padding-left: 3.8em !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
`;

const Pre = styled.pre`
  margin: 0;
  padding: 1rem !important;
  overflow-x: auto;
  font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
  background-color: #1e1e1e !important;
  
  /* 解决可能的样式冲突 */
  span, code {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
  }
  
  /* 确保代码正确换行 */
  code {
    white-space: pre-wrap !important;
    word-break: break-word !important;
    background: none !important;
  }
`;

const Code = styled.code`
  font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: inherit;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4H4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8H20V20H8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface CustomCodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

const CustomCodeBlock: React.FC<CustomCodeBlockProps> = ({ code, language, showLineNumbers = false }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (Prism) {
      Prism.highlightAll();
    }
  }, [code, language]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  return (
    <CodeBlockWrapper>
      <CopyButton onClick={handleCopyCode}>
        {isCopied ? (
          <>
            <CheckIcon /> 已复制
          </>
        ) : (
          <>
            <CopyIcon /> 复制
          </>
        )}
      </CopyButton>
      <Pre className={showLineNumbers ? 'line-numbers' : ''}>
        <Code className={`language-${language}`}>{code}</Code>
      </Pre>
    </CodeBlockWrapper>
  );
};

export default CustomCodeBlock; 