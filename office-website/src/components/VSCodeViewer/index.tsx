import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import VSCodeHeader from './VSCodeHeader';
import VSCodeSidebar from './VSCodeSidebar';
import VSCodeStatusBar from './VSCodeStatusBar';
import VSCodeEditor from './VSCodeEditor';

// 整个VSCode容器
const VSCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  color: #cccccc;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 8px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  width: 100%;
  height: 550px;
  border: 1px solid #1e1e1e;
  position: relative;
  
  @media (max-width: 768px) {
    height: 450px;
  }
  
  &:hover {
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15),
      0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

// VSCode主内容区域
const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: #1e1e1e;
`;

// VSCode悬浮层（用于点击效果）
const VSCodeOverlay = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isActive ? 0 : 1};
  transition: opacity 0.3s ease;
  pointer-events: ${props => props.isActive ? 'none' : 'auto'};
  z-index: 5;
  cursor: pointer;
`;

// 屏幕反光效果
const ScreenGlare = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(100% - 35px - 22px);
  background: linear-gradient(
    120deg, 
    rgba(255, 255, 255, 0) 30%, 
    rgba(255, 255, 255, 0.01) 50%, 
    rgba(255, 255, 255, 0) 70%
  );
  pointer-events: none;
  z-index: 1;
`;

// 键盘快捷键提示，显示在状态栏上方
const KeyboardShortcut = styled.div`
  position: absolute;
  right: 10px;
  bottom: 35px;
  padding: 6px 10px;
  background-color: #252526;
  border: 1px solid #454545;
  border-radius: 3px;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 12px;
  color: #cccccc;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  user-select: none;
  z-index: 10;
  opacity: 0.95;
  
  span {
    margin: 0 4px;
    color: #9d9d9d;
  }
`;

// 键盘按键样式
const Key = styled.div`
  display: inline-block;
  padding: 0.15em 0.4em;
  margin: 0 0.15em;
  font-size: 0.8em;
  line-height: 1.4;
  color: #cccccc;
  background-color: #1e1e1e;
  border: 1px solid #454545;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
`;

interface VSCodeViewerProps {
  fileName?: string;
  showIntellisense?: boolean;
}

const VSCodeViewer: React.FC<VSCodeViewerProps> = ({ 
  fileName = "index.ts", 
  showIntellisense = true
}) => {
  const [showKeyboardShortcut, setShowKeyboardShortcut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLanguage, setActiveLanguage] = useState<string>('typescript');
  
  // 随机设置一个键盘快捷键组合
  const shortcuts = [
    { keys: ['Ctrl', 'Space'], description: '触发建议' },
    { keys: ['Ctrl', 'K', 'Ctrl', 'I'], description: '显示悬停信息' },
    { keys: ['F12'], description: '转到定义' },
    { keys: ['Alt', 'F12'], description: '查看定义' },
    { keys: ['Ctrl', 'F12'], description: '转到实现' },
    { keys: ['Shift', 'F12'], description: '显示引用' },
    { keys: ['F2'], description: '重命名符号' },
    { keys: ['Ctrl', '.'], description: '快速修复' },
  ];
  
  const [currentShortcut, setCurrentShortcut] = useState(shortcuts[0]);
  
  // 随机切换快捷键显示
  useEffect(() => {
    // 定期显示不同的快捷键提示
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * shortcuts.length);
      setCurrentShortcut(shortcuts[randomIndex]);
      setShowKeyboardShortcut(true);
      
      // 3秒后隐藏
      setTimeout(() => {
        setShowKeyboardShortcut(false);
      }, 3000);
    }, 10000); // 每10秒显示一次
    
    return () => clearInterval(interval);
  }, []);

  // 估算代码行数
  const lineCount = 200;
  
  return (
    <VSCodeContainer ref={containerRef}>
      <VSCodeHeader fileName={"index.ts"} language={activeLanguage} />
      <MainContent>
        <VSCodeSidebar />
        <VSCodeEditor fileName={"index.ts"} showIntellisense={showIntellisense} />
      </MainContent>
      <VSCodeStatusBar language={activeLanguage} lineCount={lineCount} />
      
      {showKeyboardShortcut && (
        <KeyboardShortcut>
          {currentShortcut.keys.map((key, index) => (
            <React.Fragment key={index}>
              <Key>{key}</Key>
              {index < currentShortcut.keys.length - 1 && <span>+</span>}
            </React.Fragment>
          ))}
          <span>|</span>
          {currentShortcut.description}
        </KeyboardShortcut>
      )}
      
      <ScreenGlare />
    </VSCodeContainer>
  );
};

export default VSCodeViewer; 