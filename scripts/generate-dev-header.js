const fs = require('fs');
const path = require('path');

// 读取 package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

// 读取原始的油猴头
const originalHeader = fs.readFileSync('userscript-headers.js', 'utf-8');

// 替换变量，添加默认值处理
let devHeader = originalHeader
    .replace(/\${name}/g, packageJson.name || '')
    .replace(/\${repository}/g, packageJson.repository || '')
    .replace(/\${version}/g, packageJson.version || '')
    .replace(/\${description}/g, packageJson.description || '')
    .replace(/\${document}/g, packageJson.document || '')
    .replace(/\${author}/g, packageJson.author || '');

// 在最后一行前添加 @require
devHeader = devHeader.replace(
    '// ==/UserScript==',
    `// @require      file://${process.cwd()}/dist/index.js\n// ==/UserScript==`
);

// 确保 dist 目录存在
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// 写入开发版本的油猴头
fs.writeFileSync('dist/userscript-headers.dev.js', devHeader);
console.log('Development userscript header generated successfully!'); 