# TypeScript UserScript Template 官方网站

这是 [TypeScript UserScript Template](https://github.com/JSREI/typescript-userscript-template) 项目的官方介绍网站源代码，使用React和TypeScript构建。

## 当前状态

- [x] 项目初始化
- [x] 基础页面结构搭建
- [ ] 组件开发 (进行中)
- [ ] 完整页面内容
- [ ] 性能优化
- [ ] 网站上线

目前网站处于开发初期阶段，提供了基础的项目介绍页面。完整网站将包含项目特性、安装指南、使用文档等内容。

## 功能特点

- 使用React和TypeScript构建的现代化网站
- 响应式设计，适配各种设备尺寸
- 美观的用户界面，展示项目特点
- 集成ReactFlow可视化项目开发流程
- 语法高亮展示代码示例

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
office-website/
├── public/                # 静态资源
├── src/                   # 源代码
│   ├── components/        # React组件
│   │   ├── Header.tsx     # 导航头部
│   │   ├── Hero.tsx       # 首屏展示
│   │   ├── Features.tsx   # 特性介绍
│   │   ├── WorkflowDemo.tsx # 工作流程演示
│   │   ├── Installation.tsx # 安装指南
│   │   ├── Configuration.tsx # 配置说明
│   │   ├── TypeScriptSupport.tsx # TS支持介绍
│   │   └── Footer.tsx     # 网站底部
│   ├── styles/            # 样式文件
│   │   ├── GlobalStyles.ts # 全局样式
│   │   └── Theme.ts       # 主题配置
│   ├── App.tsx            # 应用主组件
│   └── index.tsx          # 应用入口
└── package.json           # 项目配置
```

## 技术栈

- React 18
- TypeScript
- styled-components
- ReactFlow
- react-syntax-highlighter

## 许可证

MIT 