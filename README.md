# TypeScript UserScript Template

简体中文 | [English](./README_en.md)

## 一、这是什么

使用 `Node.js` + `Webpack` 模块化开发油猴脚本的方案，用于提升油猴开发体验，降低开发时的心智负担，让油猴脚本也能当做一个普通的模块化的前端项目来开发，要不然一个 `JavaScript` 文件几千行来回改本人真的有点顶不住......

**📦 NPM 包**: [typescript-userscript-template-jsrei](https://www.npmjs.com/package/typescript-userscript-template-jsrei)

---

## 二、优势

- **模块化开发** - 开发体验与效率都能够得到大幅提升，再也不需要头疼怎么在单个 `JavaScript` 文件中组织代码了（油猴商店上架的脚本得是单文件无混淆无压缩，模块化开发打包出来的JS也是符合上架要求的）
  
- **开发时热加载** - 采用推荐的开发模式，油猴中指向打包结果本地文件地址，`JavaScript` 代码有变化时自动编译打包加载，开发时修改代码测试更高效（写过油猴脚本的应该都有过这种糟糕的体验，来来回回修改代码测试非常花费时间简直要了老命）
  
- **生产环境单文件输出** - 发布时打包后的为高可读性的单 `JavaScript` 文件，符合油猴商店的上架政策，打包出来就能上架不再需要什么手工处理的工作，简单方便不麻烦

---

## 三、快速开始

### 方式一：使用 npm 包（推荐）

直接使用我们发布的 npm 包来创建新项目：

```bash
# 创建新项目目录
mkdir my-userscript
cd my-userscript

# 使用 npm 初始化项目
npm init -y

# 安装模板包
npm install typescript-userscript-template-jsrei

# 复制模板文件到当前目录
cp -r node_modules/typescript-userscript-template-jsrei/* .
cp -r node_modules/typescript-userscript-template-jsrei/.* . 2>/dev/null || true

# 安装依赖
npm install

# 清理不需要的文件
rm -rf node_modules/typescript-userscript-template-jsrei
```

或者使用 npx 一键创建（如果支持）：

```bash
npx typescript-userscript-template-jsrei create my-userscript
```

### 方式二：使用 GitHub 模板

在当前仓库（https://github.com/JSREI/typescript-userscript-template）选择 "`Use this template`" --> "`Create a new repository`"，从这个模板仓库创建一个新的仓库：

![创建新仓库](README.assets/image-20230816233501101.png)

选择新仓库存放的位置以及设置仓库名字等等，通常把新仓库挂在自己的账号下边即可：

![设置新仓库](README.assets/image-20230816235634094.png)

### 安装依赖

新仓库创建好了克隆到本地，然后在克隆到的项目根目录下执行命令安装项目所需依赖：

```bash
npm install
```

安装依赖可能会花点时间，稍微耐心等待一会儿： 

![安装依赖](README.assets/image-20230817003339266.png)

> 如果依赖安装过慢或者下载不下来，可以为 `npm` 配置国内镜像源或者使用 `cnpm`（自行谷歌）。

### 配置项目

然后修改 `package.json` 文件，把相关字段替换为你自己的，比如名字、作者、仓库地址等等：

```js
{
  "name": "userscript-foo",
  "version": "0.0.1",
  "main": "index.ts",
  "repository": "https://github.com/JSREI/userscript-template.git",
  "scripts": {
      // ... 
  },
  "author": "CC11001100 <CC11001100@qq.com>",
  "license": "MIT",
  "devDependencies": {
      //...
  }
}
```

在项目根目录下的 `userscript-headers.js` 文件中存放的是默认的油猴头文件，在 `webpack` 编译的时候会把这个文件放到编译后的文件的头部作为油猴的插件声明：

```js
// ==UserScript==
// @name         ${name}
// @namespace    ${repository}
// @version      ${version}
// @description  ${description}
// @document     ${document}
// @author       ${author}
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==
```

`${name}`、`${version}` 这种是本油猴脚手架支持的一些变量，原理就是在编译的时候会从 `package.json` 中获取对应的值把变量替换掉（这就是所谓的变量渲染），这样对于这些可能会重复或者一直变的内容我们就可以从一个源引用使用而不用重复设置或者反复修改了。

如果默认的配置不能满足你的要求，你可以直接修改这个头文件，比如为其增加权限：

```js
// ==UserScript==
// @name         ${name}
// @namespace    ${repository}
// @version      ${version}
// @description  ${description}
// @document     ${document}
// @author       ${author}
// @match        *://*/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM.getValue
// @grant        GM.setValuex
// @grant        GM.registerMenuCommand
// ==/UserScript==
```

除了变量替换其他内容都会被原样保留，这是编译后的样子：

![编译后的文件](README.assets/image-20230817004653299.png)

### 开发流程

然后就可以开心的写代码了，在编写代码的时候你可以使用 `npm` 命令为项目添加依赖，对于一个稍微复杂点的脚本而言很可能会引用外部的依赖：

```bash
npm add xxx
```

> **注意**：这些依赖最终会被打包进 `./dist/index.ts`，而这个文件是不适合太大的，所以尽可能不要引用太多的第三方库。

同时你现在可以在 `src` 目录下以模块化的方式组织你的代码，而不必像之前那样来回上下拉扯一个几千行的 `JavaScript` 文件（单文件开发那简直是一种对脑力的摧残...）：

![模块化开发](README.assets/image-20230817003923075.png)

### 测试与调试

当你需要测试的时候，执行：

```bash
npm run watch
```

然后把 `./dist/index.ts` 中的文件头复制到你的油猴中：

![油猴脚本头](README.assets/image-20230817000716664.png)

并在最后添加一行引入编译后的文件，注意这个 `file://` 后面的地址是指向你的编译后的 `./dist/index.ts` 的绝对路径：

```js
// @require    file://D:/workspace/userscript-template/dist/index.ts
```

比如下面是一个开发时使用的油猴脚本的实际例子，油猴中没有实际代码，而是使用 `require` 指向我们 `build` 后的文件，这样当修改完代码 `webpack` 自动热编译的时候浏览器中引用的 `./dist/index.ts` 也是最新的：

```js
// ==UserScript==
// @name         userscript-foo
// @namespace    https://github.com/JSREI/userscript-template.git
// @version      0.0.1
// @description  
// @document     
// @author       CC11001100 <CC11001100@qq.com>
// @match        *://*/*
// @run-at       document-start
// @require    file://D:/workspace/userscript-template/dist/index.ts
// ==/UserScript==
(() => {})();
```

> **重要提示**：当你使用 `// @require file://D:/workspace/userscript-template/dist/index.ts` 这种方式来调试的时候，你的油猴插件应该配置了允许访问文件网址（默认情况下是不允许的），在浏览器插件图标上右键，选择"管理扩展程序"：
>
> ![管理扩展程序](./README.assets/image-20240723005213833.png)
>
> 确保这个"允许访问文件网址"开关是打开的，否则的话 `@require` 将无法引用本地文件：
>
> ![允许访问文件网址](./README.assets/image-20240723005321887.png)

也许你会注意到，当你使用 `npm run watch` 运行的时候，命令执行时编译完代码了也并没有退出而是进入了等待状态，是的，就像它的名字一样，它是启动了一个 `watch` 模式，当你改动源代码文件的时候 `webpack` 都会帮你重新编译你的代码，而你需要做的就是直接修改你的源代码文件，修改完然后切换到浏览器刷新页面即可生效！（这里没有引入浏览器自动刷新，是否有这个必要呢？说实话有必要我也不大会弄凑活着用吧....）

### 发布

当你需要发布的时候：

```bash
npm run build
```

然后把 `./dist/index.ts` 文件拿去发布即可。

---

## 四、TypeScript支持

本项目已经集成了TypeScript支持，包括油猴API的类型定义。这使得在开发过程中可以获得完整的类型检查和智能提示。

### 油猴API类型定义

项目使用 `@types/tampermonkey` 包提供油猴API的类型定义，并在 `src/types` 目录下提供了额外的类型扩展。

#### 如何使用

1. 直接在代码中使用油猴API，TypeScript将自动识别这些API的类型：

```typescript
// 存储数据
GM_setValue('key', 'value');

// 读取数据
const value = GM_getValue('key', 'default');
```

2. 查看 `src/gm_api_example/gm_api_usage.ts` 文件，了解更多油猴API的使用示例。

3. 详细的使用说明请参考 `src/types/README.md` 文件。

#### 注意事项

确保在 `userscript-headers.js` 文件中添加了所需的 `@grant` 声明，否则相应的API将不可用。例如：

```js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
```







