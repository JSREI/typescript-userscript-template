// TypeScript 用户脚本示例代码
export const TYPESCRIPT_USERSCRIPT_SAMPLE = `// ==UserScript==
// @name        TypeScript UserScript Template
// @namespace   http://github.com/JSREI/typescript-userscript-template
// @version     1.0.0
// @description 使用TypeScript开发油猴脚本的模板
// @author      JSREI
// @match       *://*/*
// @grant       none
// ==/UserScript==

/**
 * TypeScript UserScript 示例
 */
class TypeScriptUserScript {
  private initialized: boolean = false;

  constructor() {
    console.log('TypeScript UserScript 初始化...');
  }

  /**
   * 初始化函数
   */
  public init(): void {
    if (this.initialized) {
      return;
    }
    
    this.initialized = true;
    console.log('TypeScript UserScript 已启动!');
    
    // 在这里实现您的功能
    this.showMessage('Hello from TypeScript UserScript!');
  }
  
  /**
   * 显示消息到页面
   */
  private showMessage(message: string): void {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.right = '10px';
    container.style.backgroundColor = '#4f46e5';
    container.style.color = 'white';
    container.style.padding = '10px';
    container.style.borderRadius = '5px';
    container.style.zIndex = '9999';
    container.textContent = message;
    
    document.body.appendChild(container);
    
    // 3秒后移除消息
    setTimeout(() => {
      container.remove();
    }, 3000);
  }
}

// 实例化并启动脚本
const script = new TypeScriptUserScript();
script.init();
`;

// 编译后的 JavaScript 示例代码
export const JAVASCRIPT_BUILT_SAMPLE = `// ==UserScript==
// @name        TypeScript UserScript Template
// @namespace   http://github.com/JSREI/typescript-userscript-template
// @version     1.0.0
// @description 使用TypeScript开发油猴脚本的模板
// @author      JSREI
// @match       *://*/*
// @grant       none
// ==/UserScript==

"use strict";
/**
 * TypeScript UserScript 示例
 */
class TypeScriptUserScript {
    constructor() {
        this.initialized = false;
        console.log('TypeScript UserScript 初始化...');
    }
    /**
     * 初始化函数
     */
    init() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        console.log('TypeScript UserScript 已启动!');
        // 在这里实现您的功能
        this.showMessage('Hello from TypeScript UserScript!');
    }
    /**
     * 显示消息到页面
     */
    showMessage(message) {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '10px';
        container.style.right = '10px';
        container.style.backgroundColor = '#4f46e5';
        container.style.color = 'white';
        container.style.padding = '10px';
        container.style.borderRadius = '5px';
        container.style.zIndex = '9999';
        container.textContent = message;
        document.body.appendChild(container);
        // 3秒后移除消息
        setTimeout(() => {
            container.remove();
        }, 3000);
    }
}
// 实例化并启动脚本
const script = new TypeScriptUserScript();
script.init();
`; 