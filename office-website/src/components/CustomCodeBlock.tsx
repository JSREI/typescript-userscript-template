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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  background-color: #1a1a1a;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }
  
  /* 自定义行号样式 */
  .line-numbers .line-numbers-rows {
    border-right: none;
    padding-left: 10px;
  }
  
  .line-numbers-rows > span:before {
    color: #666 !important;
    font-size: 13px;
  }
  
  /* 确保代码和行号对齐 */
  pre.line-numbers {
    padding-left: 3.8em !important;
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
`;

const Pre = styled.pre`
  margin: 0;
  padding: 1.5rem !important;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  background-color: #1a1a1a !important;
  
  /* 自定义滚动条 */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #2a2a2a;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  /* 解决可能的样式冲突 */
  span, code {
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
    font-size: 14px !important;
    line-height: 1.6 !important;
  }
  
  /* 确保代码正确换行 */
  code {
    white-space: pre-wrap !important;
    word-break: break-word !important;
    background: none !important;
  }
  
  /* 增强语法高亮 */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a9955;
  }
  
  .token.punctuation {
    color: #d4d4d4;
  }
  
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #b5cea8;
  }
  
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #ce9178;
  }
  
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #d4d4d4;
  }
  
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #569cd6;
  }
  
  .token.function,
  .token.class-name {
    color: #dcdcaa;
  }
  
  .token.regex,
  .token.important,
  .token.variable {
    color: #d16969;
  }
`;

const Code = styled.code`
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: inherit;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(80, 80, 80, 0.4);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  &:hover {
    background-color: rgba(100, 100, 100, 0.6);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
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

// 添加语言标签
const LanguageTag = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(80, 80, 80, 0.4);
  color: #d4d4d4;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(4px);
  z-index: 10;
`;

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

  // 显示友好的语言名称
  const getLanguageDisplayName = (lang: string) => {
    switch (lang) {
      case 'typescript':
        return 'TypeScript';
      case 'javascript':
        return 'JavaScript';
      case 'bash':
        return 'Bash';
      case 'json':
        return 'JSON';
      default:
        return lang.charAt(0).toUpperCase() + lang.slice(1);
    }
  };

  return (
    <CodeBlockWrapper>
      <LanguageTag>{getLanguageDisplayName(language)}</LanguageTag>
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