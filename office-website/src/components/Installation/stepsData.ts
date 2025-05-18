export interface StepData {
  title: string;
  description: string;
  code: string;
  language: string;
}

export const leftColumnSteps: StepData[] = [
  {
    title: "获取模板",
    description: "首先，从GitHub克隆Typescript Userscript Template仓库到你的本地开发环境。",
    code: "git clone https://github.com/JSREI/typescript-userscript-template.git my-userscript",
    language: "bash"
  },
  {
    title: "安装依赖",
    description: "进入项目目录并安装所需的开发依赖包。",
    code: `cd my-userscript\nnpm install`,
    language: "bash"
  },
  {
    title: "修改配置",
    description: "根据你的需求修改package.json中的脚本信息和配置。",
    code: `{
  "name": "my-awesome-userscript",
  "version": "1.0.0",
  "description": "我的用户脚本",
  "author": "你的名字",
  "license": "MIT"
}`,
    language: "json"
  }
];

export const rightColumnSteps: StepData[] = [
  {
    title: "开发模式",
    description: "启动开发模式，享受实时重载和TypeScript类型检查。",
    code: "npm run dev",
    language: "bash"
  },
  {
    title: "创建脚本逻辑",
    description: "在src/index.ts中编写你的用户脚本逻辑，利用TypeScript的类型系统和模块化特性。",
    code: `// src/index.ts
import { fetchData } from './utils';

class MyUserScript {
  constructor() {
    console.log('脚本已初始化!');
    this.init();
  }
  
  private async init(): Promise<void> {
    const data = await fetchData('https://api.example.com/data');
    this.render(data);
  }
  
  private render(data: any): void {
    // 处理DOM操作和UI渲染
  }
}

new MyUserScript();`,
    language: "typescript"
  },
  {
    title: "构建发布版本",
    description: "完成开发后，构建生产版本的用户脚本。",
    code: "npm run build",
    language: "bash"
  }
]; 