import React from 'react';
import { 
  CodeBox, 
  CodeHeader, 
  CodeDots 
} from '../../styles/components/CodeExample.styles';
import { VisualContainer } from '../../styles/components/Hero.styles';
import CustomCodeBlock from '../CustomCodeBlock';

// 示例代码
const codeExample = `// ==UserScript==
// @name         Typescript Userscript Template
// @namespace    https://github.com/JSREI/typescript-userscript-template
// @version      1.0.0
// @description  A modern userscript template using TypeScript
// @author       Your Name
// @match        *://*/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

import { storeData, retrieveData } from "./gm_api_utils";

class MyUserScript {
  private config = {
    enableLogging: true,
    theme: "dark"
  };

  constructor() {
    this.initialize();
  }

  private async initialize(): Promise<void> {
    console.log("UserScript initialized!");
    
    // 存储并获取上次运行时间
    await storeData("lastRun", new Date().toISOString());
    const lastRun = await retrieveData<string>("lastRun", "从未运行");
    
    if (this.config.enableLogging) {
      console.log(\`上次运行时间: \${lastRun}\`);
    }
    
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener("click", this.handleClick);
  }

  private handleClick = (e: MouseEvent): void => {
    if (this.config.enableLogging) {
      console.log("Clicked:", e.target);
    }
  };
}

// 启动脚本
new MyUserScript();`;

const CodeExample: React.FC = () => {
  return (
    <VisualContainer>
      <CodeBox>
        <CodeHeader>
          <CodeDots>
            <span></span>
            <span></span>
            <span></span>
          </CodeDots>
        </CodeHeader>
        <CustomCodeBlock 
          code={codeExample} 
          language="typescript" 
          showLineNumbers={true} 
        />
      </CodeBox>
    </VisualContainer>
  );
};

export default CodeExample; 