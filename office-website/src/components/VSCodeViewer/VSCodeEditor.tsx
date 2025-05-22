import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TYPESCRIPT_USERSCRIPT_SAMPLE } from '../../constants/UserScriptContent';

// 示例代码内容
const GM_API_USAGE_SAMPLE = `/**
 * 油猴API使用示例
 */

// 存储数据示例
export function storeData(key: string, value: any): void {
  // 使用GM_setValue存储数据
  GM_setValue(key, value);
  console.log("数据已保存");
}

// 读取数据示例
export function retrieveData(key: string, defaultValue: any): any {
  // 使用GM_getValue读取数据
  return GM_getValue(key, defaultValue);
}

// 注册菜单示例
export function registerMenuCommands(): void {
  // 注册菜单项
  GM_registerMenuCommand('设置', showSettings);
  GM_registerMenuCommand('重置', resetSettings);
}

// 辅助函数
function showSettings(): void {
  console.log('显示设置面板');
}

function resetSettings(): void {
  console.log('重置设置');
}`;

// 编辑器容器
const EditorContainer = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  color: #d4d4d4;
  font-family: 'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.5;
  overflow: auto;
  position: relative;
  display: flex;
  
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1e1e1e;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border-radius: 5px;
    border: 2px solid #1e1e1e;
  }
`;

// 代码行号容器
const CodeGutter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #1e1e1e;
  color: #858585;
  user-select: none;
  text-align: right;
  min-width: 50px;
  border-right: 1px solid #333333;
`;

// 行号
const LineNumber = styled.div`
  padding: 0 8px 0 12px;
  height: 21px;
  font-size: 12px;
  opacity: 0.6;
  color: #858585;
`;

// 代码内容
const CodeContent = styled.div`
  flex: 1;
  padding: 0;
  white-space: pre;
  overflow-x: auto;
  
  & > pre {
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
    font-family: 'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', monospace !important;
  }
  
  code {
    font-family: 'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', monospace !important;
    font-size: 13px !important;
    line-height: 21px !important;
    letter-spacing: 0 !important;
  }
`;

// 编辑器光标
const Cursor = styled.div<{ blinking: boolean }>`
  position: absolute;
  width: 2px;
  height: 21px;
  background-color: ${props => props.blinking ? '#ffffff' : 'transparent'};
`;

// 编辑器选中区域
const Selection = styled.div`
  position: absolute;
  height: 21px;
  background-color: rgba(38, 79, 120, 0.3);
`;

interface VSCodeEditorProps {
  fileName: string;
  showIntellisense?: boolean;
}

const VSCodeEditor: React.FC<VSCodeEditorProps> = ({ fileName, showIntellisense = false }) => {
  const [lineCount, setLineCount] = useState<number>(0);
  const [cursorPosition, setCursorPosition] = useState<{ line: number, col: number }>({ line: 6, col: 18 });
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  
  const editorRef = useRef<HTMLDivElement>(null);
  const codeContentRef = useRef<HTMLDivElement>(null);
  
  // 获取当前文件的代码
  const getCodeForCurrentFile = () => {
    if (fileName === 'gm_api_usage.ts') {
      return GM_API_USAGE_SAMPLE;
    } else if (fileName === 'index.ts') {
      return TYPESCRIPT_USERSCRIPT_SAMPLE;
    }
    return TYPESCRIPT_USERSCRIPT_SAMPLE;
  };

  const code = getCodeForCurrentFile();
  const language = fileName.endsWith('.ts') ? 'typescript' : 'javascript';
  
  // 计算代码行数
  useEffect(() => {
    if (code) {
      setLineCount(code.split('\n').length);
    }
  }, [code]);
  
  // 光标闪烁效果
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530); // 闪烁频率
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // 创建行号
  const renderLineNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= lineCount; i++) {
      numbers.push(<LineNumber key={i}>{i}</LineNumber>);
    }
    return numbers;
  };
  
  // 获取某行某列的位置
  const getPositionForLineAndColumn = (line: number, col: number) => {
    const lineHeight = 21; // 行高
    const charWidth = 7.8; // 估算的字符宽度
    
    return {
      top: line * lineHeight - 4,
      left: col * charWidth + 15
    };
  };
  
  // 渲染光标
  const renderCursor = () => {
    const { top, left } = getPositionForLineAndColumn(cursorPosition.line, cursorPosition.col);
    
    return (
      <Cursor 
        style={{ top: `${top}px`, left: `${left}px` }}
        blinking={cursorVisible}
      />
    );
  };
  
  return (
    <EditorContainer ref={editorRef}>
      <CodeGutter>
        {renderLineNumbers()}
      </CodeGutter>
      <CodeContent ref={codeContentRef}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            background: 'transparent',
            margin: 0,
            padding: '0 15px',
            overflowX: 'visible',
            overflowY: 'visible',
          }}
          wrapLines={true}
          lineProps={() => ({
            style: { 
              display: 'block',
              minHeight: '21px',
              position: 'relative'
            },
          })}
        >
          {code}
        </SyntaxHighlighter>
        {renderCursor()}
      </CodeContent>
    </EditorContainer>
  );
};

export default VSCodeEditor;