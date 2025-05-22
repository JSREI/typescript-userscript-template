import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  background-color: #1e1e1e;
  height: 35px;
  flex-shrink: 0;
  border-bottom: 1px solid #1e1e1e;
  width: 100%;
  z-index: 10;
  min-height: 35px;
  position: relative;
`;

const TabContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
`;

const Tab = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: ${props => props.active ? '#1e1e1e' : '#1e1e1e'};
  border-right: 1px solid #1e1e1e;
  font-size: 12px;
  height: 100%;
  color: ${props => props.active ? '#ffffff' : '#cccccc'};
  position: relative;
  max-width: 150px;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: ${props => props.active ? '2px' : '0'};
    background-color: #007acc;
  }
  
  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
`;

const InactiveTab = styled(Tab)`
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 12px;
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 8px;
  
  &:nth-child(1) {
    background-color: #ff5f57;
  }
  
  &:nth-child(2) {
    background-color: #febc2e;
  }
  
  &:nth-child(3) {
    background-color: #28c840;
  }
`;

const TypeScriptIcon = () => (
  <svg width="14" height="14" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 200V0H400V400H0" fill="#3178C6"/>
    <path d="M87.538 200.6V217.8H144.6V387H184V217.8H241.1V200.8C241.1 191.4 241 183.5 240.9 183.3C240.8 183 217.8 182.8 189.8 182.8L139 182.9V200.6H87.538Z" fill="white"/>
    <path d="M283.9 182.6C295.8 185.7 304.4 190.7 312.8 199C317.2 203.5 323.4 211.2 324.3 213.6C324.4 214.1 307.8 225.2 297.8 231.3C297.4 231.5 295.7 229.4 293.9 226.3C288.9 217.9 283.8 214.4 275.2 213.2C261.7 211.4 252.4 218.2 252.5 230.3C252.5 234.4 253 236.6 254.8 239.8C258.2 245.6 264 249.4 279.9 256C307.8 267.8 321.9 276.4 331.2 288.5C341.7 302.1 344.6 323.7 338.4 341.5C331.6 360.6 311.9 374.1 286.8 377.9C275.9 379.6 257.3 378.9 246.5 376.4C225.8 371.5 208.1 359.5 197.5 343.2C194.1 337.5 187.8 325.5 188.3 324.4C188.5 324 190.3 323 192.4 321.9C196.2 320 217.1 308.5 217.7 308.5C218 308.5 219.6 311.6 221.3 315.5C227.3 328.3 237.5 337.2 252.2 341.4C259.3 343.4 273.3 343.1 280.5 340.8C294.3 336.3 302.1 325.2 299.8 312.2C298.1 303.3 292.7 297.3 278.9 289.8C273.1 286.8 260.4 281 252.5 277.4C233.3 268.8 223.3 261.6 215.6 251.1C210.3 244 207.8 237.5 206.8 228C205.9 220 206.3 206.7 207.8 200.3C212.6 178.5 231.1 163 256.8 159.3C264.8 158.1 276.5 158.5 283.9 182.6Z" fill="white"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg width="14" height="14" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#F7DF1E"/>
    <path d="M105.947 348.071L136.575 329.438C143.669 341.745 150.128 352.009 165.064 352.009C179.363 352.009 188.304 346.749 188.304 325.5V191.723H226.319V326.167C226.319 366.308 203.081 384.304 167.005 384.304C134.634 384.304 115.914 368.26 105.947 348.071Z" fill="black"/>
    <path d="M248.166 344.132L278.792 326.833C288.769 342.401 301.458 353.342 323.02 353.342C341.02 353.342 352.668 344.132 352.668 331.435C352.668 316.166 340.362 310.239 320.41 300.653L309.419 295.393C278.134 280.79 258.133 262.459 258.133 227.252C258.133 194.895 283.043 170 321.735 170C349.405 170 369.405 180.261 384.362 207.062L355.067 225.25C347.276 211.655 338.421 205.729 321.735 205.729C304.709 205.729 294.061 216.322 294.061 230.251C294.061 247.845 304.709 253.772 323.02 262.459L334.011 267.719C370.598 284.968 390.599 302.654 390.599 338.527C390.599 377.667 359.637 400 324.346 400C289.79 400 262.453 379.01 248.166 344.132Z" fill="black"/>
  </svg>
);

// JSON文件图标
const JsonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 1L2 2V14L3 15H13L14 14V2L13 1H3Z" fill="#D6B074" />
    <path d="M4.3 6.2C3.65 6.2 3 6.47 3 7.4C3 8.07 3.4 8.4 4.1 8.4C5.1 8.4 5.1 9 4.1 9C3.5 9 3.35 8.8 3.32 8.4H3C3 9.1 3.5 9.3 4.1 9.3C5.1 9.3 5.45 8.5 5.45 7.9C5.45 7.4 5.18 7.1 4.45 7.1C3.3 7.1 3.6 6.5 4.3 6.5C4.65 6.5 4.92 6.6 5 7H5.3C5.22 6.5 4.75 6.2 4.3 6.2Z" fill="white"/>
    <path d="M6.5 6.2C5.5 6.2 5.3 7 5.3 7.75C5.3 8.5 5.5 9.3 6.5 9.3C7.5 9.3 7.7 8.5 7.7 7.75C7.7 7 7.5 6.2 6.5 6.2ZM6.5 9C5.9 9 5.6 8.5 5.6 7.75C5.6 7 5.9 6.5 6.5 6.5C7.1 6.5 7.4 7 7.4 7.75C7.4 8.5 7.1 9 6.5 9Z" fill="white"/>
    <path d="M9.9 8.6C10.9 8.6 10.9 7.9 9.9 7.9C8.9 7.9 8.9 8.6 9.9 8.6Z" fill="white"/>
  </svg>
);

const MarkdownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 1L2 2V14L3 15H13L14 14V2L13 1H3Z" fill="#498BA7" />
    <path d="M3 7V9H4V8H5V9H6V7H5V8H4V7H3Z" fill="white"/>
    <path d="M7 7V9H8L9 8V9H10V7H9V8L8 9V7H7Z" fill="white"/>
    <path d="M11 7V8H12V9H13V8H12V7H11Z" fill="white"/>
  </svg>
);

interface VSCodeHeaderProps {
  fileName: string;
  language: string;
}

const VSCodeHeader: React.FC<VSCodeHeaderProps> = ({ fileName, language }) => {
  return (
    <HeaderContainer>
      <TabContainer>
        <Tab active={true}>
          {language === 'typescript' ? <TypeScriptIcon /> : <JavaScriptIcon />}
          {fileName}
        </Tab>
        <InactiveTab>
          <TypeScriptIcon />
          index.ts
        </InactiveTab>
        <InactiveTab>
          <JsonIcon />
          package.json
        </InactiveTab>
      </TabContainer>
      <ActionContainer>
        <ActionButton />
        <ActionButton />
        <ActionButton />
      </ActionContainer>
    </HeaderContainer>
  );
};

export default VSCodeHeader; 