import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as monaco from 'monaco-editor';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.4), 0 5px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 550px;
  background-color: #1e1e1e;
  
  @media (max-width: 1400px) {
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const MonacoContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 10px;
  background-color: #252526;
  color: #cccccc;
  font-size: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #1e1e1e;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 12px;
`;

const WindowButton = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  opacity: 0.8;
`;

const TabsBar = styled.div`
  display: flex;
  height: 36px;
  background-color: #252526;
  border-bottom: 1px solid #1e1e1e;
  padding-left: 0px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Tab = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  min-width: 120px;
  max-width: 200px;
  background-color: ${props => props.active ? '#1e1e1e' : '#2d2d2d'};
  color: ${props => props.active ? '#ffffff' : '#969696'};
  border-right: 1px solid #1e1e1e;
  cursor: pointer;
  position: relative;
  font-size: 13px;
  user-select: none;
  
  &:hover {
    background-color: ${props => props.active ? '#1e1e1e' : '#303030'};
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${props => props.active ? '#007acc' : 'transparent'};
  }
`;

const TabIcon = styled.div`
  margin-right: 6px;
  display: flex;
  align-items: center;
`;

const TypeScriptIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8V15H1V1H15V8Z" fill="#3178C6"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.76874 9.89461C10.0687 9.59461 10.4687 9.39461 10.9687 9.29461C11.4687 9.19461 11.9687 9.19461 12.4687 9.29461V10.4946C12.2687 10.3946 12.0687 10.3446 11.8687 10.3446C11.6687 10.3446 11.4687 10.3946 11.3687 10.4946C11.1687 10.5946 11.0687 10.7946 11.0687 10.9946C11.0687 11.1946 11.0687 11.5946 11.0687 12.0946V12.9946H12.4687V14.1946H8.96874V12.9946H9.86874V10.1946H8.96874V9.39461H9.76874V9.89461ZM7.96874 9.29461C8.36874 9.29461 8.76874 9.39461 8.96874 9.49461V10.7946C8.86874 10.6946 8.66874 10.5946 8.56874 10.5946C8.46874 10.4946 8.26874 10.4946 8.16874 10.4946C7.76874 10.4946 7.46874 10.6946 7.26874 10.9946C7.06874 11.2946 6.96874 11.6946 6.96874 12.1946C6.96874 12.6946 7.06874 13.0946 7.26874 13.3946C7.46874 13.6946 7.76874 13.8946 8.16874 13.8946C8.26874 13.8946 8.46874 13.8946 8.56874 13.7946C8.76874 13.6946 8.86874 13.5946 8.96874 13.4946V14.7946C8.86874 14.8946 8.66874 14.8946 8.56874 14.9946C8.36874 14.9946 8.26874 14.9946 8.16874 14.9946C7.86874 14.9946 7.46874 14.8946 7.16874 14.7946C6.86874 14.6946 6.56874 14.4946 6.36874 14.1946C6.16874 13.9946 5.96874 13.6946 5.86874 13.2946C5.76874 12.8946 5.66874 12.5946 5.66874 12.0946C5.66874 11.6946 5.76874 11.2946 5.86874 10.9946C5.96874 10.6946 6.16874 10.3946 6.36874 10.1946C6.56874 9.99461 6.86874 9.79461 7.16874 9.69461C7.46874 9.39461 7.76874 9.29461 7.96874 9.29461Z" fill="white"/>
  </svg>
);

const StatusBar = styled.div`
  height: 22px;
  background-color: #007acc;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const LeftItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  height: 100%;
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  height: 100%;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
  height: 100%;
  gap: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 2px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #1e1e1e;
  color: #cccccc;
  flex-direction: column;
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid #007acc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const FallbackEditor = styled.div`
  width: 100%;
  height: 100%;
  color: #abb2bf;
  background-color: #282c34;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 16px;
  overflow: auto;
  white-space: pre;
  tab-size: 2;
`;

interface MonacoEditorProps {
  code: string;
  language: string;
  fileName: string;
}

const RealMonacoEditor: React.FC<MonacoEditorProps> = ({ code, language, fileName }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeoutError, setTimeoutError] = useState(false);

  useEffect(() => {
    // 设置10秒加载超时
    const timeoutId = setTimeout(() => {
      setTimeoutError(true);
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!editorRef.current) return;
    
    let isMounted = true;
    
    // Monaco环境设置
    const setupMonacoEnv = async () => {
      try {
        // 如果已经被卸载或发生超时，不继续执行
        if (!isMounted || timeoutError) return;

        // 简单模式 - 只设置基本属性
        const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
          value: code,
          language: language,
          theme: 'vs-dark',
          automaticLayout: true,
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          fontSize: 14,
          lineNumbers: 'on',
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        };

        // 创建编辑器实例
        const newEditor = monaco.editor.create(editorRef.current!, editorOptions);
        
        if (isMounted) {
          setEditor(newEditor);
          setLoading(false);
        }
      } catch (err) {
        console.error("Monaco编辑器初始化失败", err);
        if (isMounted) {
          setError(`无法加载Monaco编辑器: ${err instanceof Error ? err.message : String(err)}`);
          setLoading(false);
        }
      }
    };

    setupMonacoEnv();

    return () => {
      isMounted = false;
      if (editor) {
        editor.dispose();
      }
    };
  }, [code, language, timeoutError, editor]);

  // 如果超时，提供一个静态的备用编辑器
  if (timeoutError) {
    return (
      <EditorContainer>
        <Header>
          <WindowControls>
            <WindowButton color="#ff5f56" />
            <WindowButton color="#ffbd2e" />
            <WindowButton color="#27c93f" />
          </WindowControls>
          <Title>{fileName} — Visual Studio Code</Title>
        </Header>
        <FallbackEditor>
          {code}
        </FallbackEditor>
        <StatusBar>
          <LeftItems>
            <StatusItem>
              静态模式
            </StatusItem>
          </LeftItems>
          <RightItems>
            <StatusItem>
              {language === 'typescript' ? 'TypeScript' : language.charAt(0).toUpperCase() + language.slice(1)}
            </StatusItem>
          </RightItems>
        </StatusBar>
      </EditorContainer>
    );
  }

  if (loading) {
    return (
      <EditorContainer>
        <Header>
          <WindowControls>
            <WindowButton color="#ff5f56" />
            <WindowButton color="#ffbd2e" />
            <WindowButton color="#27c93f" />
          </WindowControls>
          <Title>{fileName} — Visual Studio Code</Title>
        </Header>
        <LoadingContainer>
          <Spinner />
          <div>正在加载Monaco编辑器...</div>
          <div style={{ fontSize: "11px", marginTop: "10px", opacity: 0.7 }}>
            (如果长时间未加载，将自动切换到静态模式)
          </div>
        </LoadingContainer>
      </EditorContainer>
    );
  }

  if (error) {
    return (
      <EditorContainer>
        <Header>
          <WindowControls>
            <WindowButton color="#ff5f56" />
            <WindowButton color="#ffbd2e" />
            <WindowButton color="#27c93f" />
          </WindowControls>
          <Title>{fileName} — Visual Studio Code</Title>
        </Header>
        <LoadingContainer>
          <div style={{ color: '#f44336', marginBottom: '8px' }}>⚠️ 错误</div>
          <div>{error}</div>
          <FallbackEditor>
            {code}
          </FallbackEditor>
        </LoadingContainer>
      </EditorContainer>
    );
  }

  return (
    <EditorContainer>
      <Header>
        <WindowControls>
          <WindowButton color="#ff5f56" />
          <WindowButton color="#ffbd2e" />
          <WindowButton color="#27c93f" />
        </WindowControls>
        <Title>{fileName} — Visual Studio Code</Title>
      </Header>
      <TabsBar>
        <Tab active={true}>
          <TabIcon>
            <TypeScriptIcon />
          </TabIcon>
          {fileName}
        </Tab>
      </TabsBar>
      <MonacoContainer ref={editorRef} />
      <StatusBar>
        <LeftItems>
          <StatusItem>
            main
          </StatusItem>
        </LeftItems>
        <RightItems>
          <StatusItem>
            Ln 5, Col 15
          </StatusItem>
          <Divider />
          <StatusItem>
            空格：2
          </StatusItem>
          <Divider />
          <StatusItem>
            UTF-8
          </StatusItem>
          <Divider />
          <StatusItem>
            LF
          </StatusItem>
          <Divider />
          <StatusItem>
            {language === 'typescript' ? 'TypeScript' : language.charAt(0).toUpperCase() + language.slice(1)}
          </StatusItem>
        </RightItems>
      </StatusBar>
    </EditorContainer>
  );
};

export default RealMonacoEditor; 