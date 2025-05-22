import React from 'react';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StatusBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e1e1e;
  height: 22px;
  border-top: 1px solid #1e1e1e;
  color: #8a8a8a;
  font-size: 12px;
  padding: 0 10px;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  flex-shrink: 0;
  width: 100%;
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
  
  &:hover {
    background-color: rgba(90, 93, 94, 0.31);
  }
  
  svg {
    margin-right: 3px;
    width: 14px;
    height: 14px;
  }
`;

const StatusSpacer = styled.div`
  flex: 1;
`;

const SyncingItem = styled(StatusItem)`
  svg {
    animation: ${rotateAnimation} 1.5s linear infinite;
  }
`;

const ErrorItem = styled(StatusItem)`
  color: #ffffff;
  animation: ${blinkAnimation} 2s ease-in-out infinite;
`;

const Divider = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 2px;
`;

const ProblemsCount = styled.div`
  min-width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #f14c4c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-left: 4px;
`;

// 图标组件
const GitBranchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5,8c-0.6,0-1.1,0.2-1.5,0.6c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.8,0.4,1.5,1.1,1.8V12c0,0.5-0.5,1-1,1c-1.1,0-2-0.9-2-2V8.1c0.7-0.3,1.1-1,1.1-1.8c0-1.1-0.9-2-2-2S4.5,5.2,4.5,6.3c0,0.8,0.4,1.5,1.1,1.8V11c0,1.7,1.3,3,3,3c1.3,0,2.4-0.8,2.8-2h0.1c1.1,0,2-0.9,2-2v-0.1c0.7-0.3,1.1-1,1.1-1.8C13.5,8.9,12.6,8,11.5,8z M6.5,6.3c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S6.5,6.9,6.5,6.3z M11.5,11c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.1,11,11.5,11z" fill="currentColor"/>
  </svg>
);

const WarningIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.56 1.04c-.3-.52-.84-.52-1.13 0L.34 13.2c-.28.52-.05.95.52.95h14.24c.57 0 .8-.43.52-.95L8.56 1.04zm-.5 3.85c.3 0 .5.2.5.5v4.15c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5.4c0-.3.2-.5.5-.5zm0 7a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="currentColor" />
  </svg>
);

const LineColumnIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1h14v14H1z" stroke="currentColor" />
    <path d="M8 2v12M2 8h12" stroke="currentColor" />
  </svg>
);

const SyncIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 10h-1.256a4.5 4.5 0 11.127-5h1.11a5.5 5.5 0 100 5z" fill="currentColor" />
    <path d="M9 5h4V1z" fill="currentColor" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0-1A6 6 0 108 2a6 6 0 000 12z" fill="currentColor" />
    <path d="M12.5 8.5H7.5l5-5z" fill="currentColor" />
    <path d="M8.5 7.5v5l-5-5z" fill="currentColor" />
  </svg>
);

const BellIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 9h-1v4.5a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 014 13.5V9H3V8l1-1V5.5a4 4 0 118 0V7l1 1v1zM8 15a2 2 0 01-2-2h4a2 2 0 01-2 2zm3-7.5V5.5a3 3 0 00-6 0V7.5h6z" fill="currentColor" />
  </svg>
);

const ServerIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM5 3h6v2H5V3zm0 3h6v2H5V6zm0 3h6v2H5V9z" fill="currentColor" />
  </svg>
);

interface VSCodeStatusBarProps {
  language: string;
  lineCount: number;
}

const VSCodeStatusBar: React.FC<VSCodeStatusBarProps> = ({ language, lineCount }) => {
  return (
    <StatusBarContainer>
      <LeftItems>
        <StatusItem>
          <GitBranchIcon />
          <span>main</span>
        </StatusItem>
        <SyncingItem title="同步更改">
          <SyncIcon />
        </SyncingItem>
        <ErrorItem title="1 个错误">
          <ErrorIcon />
          <span>1</span>
        </ErrorItem>
        <StatusItem title="0 个警告">
          <WarningIcon />
          <span>0</span>
        </StatusItem>
        <StatusItem title="TypeScript 服务已启动">
          <ServerIcon />
        </StatusItem>
      </LeftItems>
      <RightItems>
        <StatusItem title="通知">
          <BellIcon />
          <ProblemsCount>3</ProblemsCount>
        </StatusItem>
        <StatusItem title="在第 5 行，第 13 列">
          <LineColumnIcon />
          <span>Ln {lineCount > 0 ? 5 : 1}, Col 13</span>
        </StatusItem>
        <Divider />
        <StatusItem title="选择空格大小">
          <span>空格：2</span>
        </StatusItem>
        <Divider />
        <StatusItem title="选择编码">
          <span>UTF-8</span>
        </StatusItem>
        <Divider />
        <StatusItem title="选择行尾序列">
          <span>LF</span>
        </StatusItem>
        <Divider />
        <StatusItem title="选择语言模式">
          <span>{language}</span>
        </StatusItem>
      </RightItems>
    </StatusBarContainer>
  );
};

export default VSCodeStatusBar; 