// 包含示例代码的常量文件，用于在VSCode编辑器示例中展示

export const INDEX_JS_CONTENT = `// ==UserScript==
// @name         Typescript Userscript Template
// @namespace    https://github.com/JSREI/typescript-userscript-template
// @version      1.0.0
// @description  A typescript template with webpack for creating userscripts
// @author       JSREI
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

/** 用户脚本类 */
class UserScript {
  /** 标记脚本是否初始化完成 */
  private initialized: boolean = false;

  /**
   * 初始化方法
   */
  public initialize(): void {
    if (this.initialized) return;
    
    console.log('[Typescript Userscript] 脚本已初始化!');
    
    // 这里可以编写初始化逻辑
    this.setupEventListeners();
    
    // 这里演示从GM存储中获取数据
    this.loadDataFromGM();
    
    this.initialized = true;
  }
  
  /**
   * 设置事件监听器
   */
  private setupEventListeners(): void {
    document.addEventListener('click', this.handleClick.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  
  /**
   * 点击事件处理
   */
  private handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    console.log('[Typescript Userscript] 点击元素:', target);
    
    // 这里可以添加针对特定元素的点击处理逻辑
    if (target.matches('button, a')) {
      console.log('用户点击了按钮或链接元素');
    }
  }
  
  /**
   * 滚动事件处理
   */
  private handleScroll(event: Event): void {
    // 节流处理，避免频繁触发
    if (!this.scrollTimeout) {
      this.scrollTimeout = setTimeout(() => {
        console.log('[Typescript Userscript] 页面滚动事件');
        this.scrollTimeout = null;
      }, 200);
    }
  }
  
  private scrollTimeout: number | null = null;
  
  /**
   * 从GM存储加载数据
   */
  private loadDataFromGM(): void {
    try {
      const savedData = GM_getValue('userSettings', null);
      
      if (savedData) {
        console.log('[Typescript Userscript] 已加载用户设置:', savedData);
      } else {
        console.log('[Typescript Userscript] 未找到保存的设置，使用默认设置');
        this.saveDataToGM({
          enabled: true,
          theme: 'auto',
          lastUsed: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('[Typescript Userscript] 加载设置时出错:', error);
    }
  }
  
  /**
   * 保存数据到GM存储
   */
  private saveDataToGM(data: any): void {
    try {
      GM_setValue('userSettings', data);
      console.log('[Typescript Userscript] 设置已保存');
    } catch (error) {
      console.error('[Typescript Userscript] 保存设置时出错:', error);
    }
  }
}

// 创建实例并初始化
const userScript = new UserScript();
userScript.initialize();
`;

export const PACKAGE_JSON_CONTENT = `{
  "name": "typescript-userscript-template",
  "version": "1.0.0",
  "description": "A template for creating userscripts with TypeScript",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development --watch",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JSREI/typescript-userscript-template.git"
  },
  "keywords": [
    "userscript",
    "typescript",
    "tampermonkey",
    "webpack"
  ],
  "author": "JSREI",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/JSREI/typescript-userscript-template/issues"
  },
  "homepage": "https://github.com/JSREI/typescript-userscript-template#readme",
  "dependencies": {
    "webpack": "^5.88.2",
    "webpack-cli": "^5.1.4",
    "ts-loader": "^9.4.4",
    "typescript": "^5.1.6"
  }
}`;

export const TSCONFIG_JSON_CONTENT = `{
  "compilerOptions": {
    "target": "es6",
    "module": "esnext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "sourceMap": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}`;

export const WEBPACK_CONFIG_CONTENT = `const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /==\\/UserScript==|^!/i,
          },
        },
        extractComments: false,
      }),
    ],
  },
};`;

export const README_MD_CONTENT = `# TypeScript UserScript Template

一个使用 TypeScript 和 Webpack 开发油猴脚本的模板项目。

## 特点

- 使用 TypeScript 开发，获得完整的类型支持
- 使用 Webpack 构建，支持模块化开发
- 自动注入脚本头信息
- 支持热重载开发
- 代码格式检查和格式化

## 安装

1. 克隆仓库
\`\`\`bash
git clone https://github.com/JSREI/typescript-userscript-template.git
cd typescript-userscript-template
\`\`\`

2. 安装依赖
\`\`\`bash
npm install
\`\`\`

## 使用方法

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

## 目录结构

\`\`\`
typescript-userscript-template/
├── dist/                   # 编译后的文件
├── src/                    # 源代码
│   ├── index.ts            # 入口文件
│   └── utils/              # 工具函数
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json           # TypeScript 配置
└── webpack.config.js       # Webpack 配置
\`\`\`

## 许可证

MIT
`;

export const USER_SCRIPT_TS_CONTENT = `// 用户脚本主文件
import { saveData, loadData } from './utils/gm_api_utils';

/** 用户脚本类 */
class UserScript {
  /** 标记脚本是否初始化完成 */
  private initialized: boolean = false;

  /**
   * 初始化方法
   */
  public initialize(): void {
    if (this.initialized) return;
    
    console.log('[Typescript Userscript] 脚本已初始化!');
    
    // 这里可以编写初始化逻辑
    this.setupEventListeners();
    
    // 这里演示从GM存储中获取数据
    this.loadDataFromGM();
    
    this.initialized = true;
  }
  
  /**
   * 设置事件监听器
   */
  private setupEventListeners(): void {
    document.addEventListener('click', this.handleClick.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  
  /**
   * 点击事件处理
   */
  private handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    console.log('[Typescript Userscript] 点击元素:', target);
    
    // 这里可以添加针对特定元素的点击处理逻辑
    if (target.matches('button, a')) {
      console.log('用户点击了按钮或链接元素');
    }
  }
  
  /**
   * 滚动事件处理
   */
  private handleScroll(event: Event): void {
    // 节流处理，避免频繁触发
    if (!this.scrollTimeout) {
      this.scrollTimeout = setTimeout(() => {
        console.log('[Typescript Userscript] 页面滚动事件');
        this.scrollTimeout = null;
      }, 200);
    }
  }
  
  private scrollTimeout: number | null = null;
  
  /**
   * 从GM存储加载数据
   */
  private loadDataFromGM(): void {
    try {
      const savedData = loadData('userSettings', null);
      
      if (savedData) {
        console.log('[Typescript Userscript] 已加载用户设置:', savedData);
      } else {
        console.log('[Typescript Userscript] 未找到保存的设置，使用默认设置');
        this.saveDataToGM({
          enabled: true,
          theme: 'auto',
          lastUsed: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('[Typescript Userscript] 加载设置时出错:', error);
    }
  }
  
  /**
   * 保存数据到GM存储
   */
  private saveDataToGM(data: any): void {
    try {
      saveData('userSettings', data);
      console.log('[Typescript Userscript] 设置已保存');
    } catch (error) {
      console.error('[Typescript Userscript] 保存设置时出错:', error);
    }
  }
}

// 导出实例供入口文件使用
export const userScript = new UserScript();
`;

export const GM_API_UTILS_TS_CONTENT = `/**
 * GM API工具函数
 * 对油猴API进行封装，使其更易于使用，并提供类型支持
 */

/**
 * 保存数据到GM存储
 * @param key 键名
 * @param value 要保存的值
 */
export function saveData(key: string, value: any): void {
  if (typeof GM_setValue !== 'undefined') {
    GM_setValue(key, value);
  } else {
    console.warn('GM_setValue not available, falling back to localStorage');
    localStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * 从GM存储中加载数据
 * @param key 键名
 * @param defaultValue 默认值（如果未找到数据）
 * @returns 存储的值或默认值
 */
export function loadData<T>(key: string, defaultValue: T): T {
  if (typeof GM_getValue !== 'undefined') {
    return GM_getValue(key, defaultValue);
  } else {
    console.warn('GM_getValue not available, falling back to localStorage');
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  }
}

/**
 * 删除GM存储中的数据
 * @param key 键名
 */
export function deleteData(key: string): void {
  if (typeof GM_deleteValue !== 'undefined') {
    GM_deleteValue(key);
  } else {
    console.warn('GM_deleteValue not available, falling back to localStorage');
    localStorage.removeItem(key);
  }
}
`;

export const INDEX_TS_CONTENT = `// ==UserScript==
// @name         Typescript Userscript Template
// @namespace    https://github.com/JSREI/typescript-userscript-template
// @version      1.0.0
// @description  A typescript template with webpack for creating userscripts
// @author       JSREI
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

import { userScript } from './userscript';

// 初始化用户脚本
userScript.initialize();
`; 