# 油猴API的TypeScript类型定义

本项目已集成了油猴API的TypeScript类型定义，使您能够在开发过程中获得完整的类型检查和智能提示支持。

## 类型定义来源

类型定义通过以下方式提供：

1. `@types/tampermonkey` npm包 - 提供了官方的油猴API类型定义
2. 本地类型扩展 - 在`src/types/tampermonkey.d.ts`文件中

## 如何使用

### 1. 在代码中使用油猴API

您可以直接在代码中使用油猴API，TypeScript将自动识别这些API的类型：

```typescript
// 存储数据
GM_setValue('key', 'value');

// 读取数据
const value = GM_getValue('key', 'default');

// 注册菜单
GM_registerMenuCommand('菜单项', () => {
  console.log('点击了菜单项');
});

// 发送XHR请求
GM_xmlhttpRequest({
  method: 'GET',
  url: 'https://example.com',
  onload: (response) => {
    console.log(response.responseText);
  }
});
```

### 2. 使用Promise风格的API (GM.*)

如果您更喜欢使用Promise风格的API，可以这样使用：

```typescript
// 存储数据
await GM.setValue('key', 'value');

// 读取数据
const value = await GM.getValue('key', 'default');

// 注册菜单
GM.registerMenuCommand('菜单项', () => {
  console.log('点击了菜单项');
});
```

### 3. 检查API可用性

由于油猴脚本可能在不同的环境中运行，建议在使用API前检查其可用性：

```typescript
if (typeof GM_setValue !== 'undefined') {
  GM_setValue('key', 'value');
} else if (typeof GM !== 'undefined' && GM.setValue) {
  await GM.setValue('key', 'value');
} else {
  console.warn('GM存储API不可用');
}
```

## 示例代码

请查看 `src/gm_api_example/gm_api_usage.ts` 文件，其中包含了各种油猴API的使用示例。

## 注意事项

1. 确保在`userscript-headers.js`文件中添加了所需的`@grant`声明，否则相应的API将不可用。
2. 如果您需要使用未在`@types/tampermonkey`中定义的API或自定义扩展，可以在`src/types/tampermonkey.d.ts`文件中添加自定义类型定义。 