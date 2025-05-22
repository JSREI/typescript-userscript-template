import React from 'react';
import styled from 'styled-components';
import VSCodeViewer from '../VSCodeViewer';

const VisualContainer = styled.div`
  position: relative;
  padding: 40px 0;
  perspective: 1000px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(230, 235, 245, 0.4) 0%,
    rgba(240, 245, 250, 0.2) 100%
  );
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(5px);
    z-index: -1;
  }
`;

const CodeBox = styled.div`
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08),
              0 5px 15px rgba(0, 0, 0, 0.05);
  transform: perspective(1000px) rotateX(2deg);
  transform-style: preserve-3d;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  
  &:hover {
    transform: perspective(1000px) rotateX(0deg) translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1),
                0 5px 15px rgba(0, 0, 0, 0.07);
  }
`;

// 示例TypeScript用户脚本代码
const codeExample = `// ==UserScript==
// @name        TypeScript Userscript Template
// @namespace   https://github.com/JSREI/typescript-userscript-template
// @version     1.0.0
// @description TypeScript Userscript Template with webpack
// @author      JSREI
// @match       *://*/*
// @grant       GM_setValue
// @grant       GM_getValue
// ==/UserScript==

import { setValue, getValue } from './gm_api_utils';

/**
 * 用户脚本主类
 */
class UserScript {
  private initialized: boolean = false;
  
  constructor() {
    this.initialize();
  }
  
  /**
   * 初始化函数
   */
  private async initialize(): Promise<void> {
    if (this.initialized) return;
    
    try {
      // 从GM存储获取数据
      const storedData = await getValue('userSettings');
      console.log('Loaded settings:', storedData);
      
      // 设置事件监听
      this.setupEventListeners();
      
      this.initialized = true;
      console.log('TypeScript UserScript initialized!');
    } catch (error) {
      console.error('Initialization error:', error);
    }
  }
  
  /**
   * 设置事件监听器
   */
  private setupEventListeners(): void {
    document.addEventListener('click', this.handleClick.bind(this));
    // 可添加更多事件监听器
  }
  
  /**
   * 处理点击事件
   */
  private async handleClick(event: MouseEvent): Promise<void> {
    // 示例：点击时保存数据
    if ((event.target as HTMLElement).matches('.save-data')) {
      const data = { timestamp: Date.now() };
      await setValue('clickData', data);
      console.log('Data saved on click!');
    }
  }
}

// 实例化并启动用户脚本
new UserScript();
`;

const CodeExample: React.FC = () => {
  return (
    <VisualContainer>
      <CodeBox>
        <VSCodeViewer
          fileName="userscript.ts"
          showIntellisense={true}
        />
      </CodeBox>
    </VisualContainer>
  );
};

export default CodeExample; 