#!/usr/bin/env node

/**
 * 此脚本用于将样式从styles/components目录移动到各个组件文件中
 * 执行：node office-website/scripts/moveStylesIntoComponents.js
 */

const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const stylesDir = path.join(baseDir, 'src/styles/components');
const componentsDir = path.join(baseDir, 'src/components');

// 确保目录存在
if (!fs.existsSync(stylesDir)) {
  console.error(`样式目录不存在: ${stylesDir}`);
  process.exit(1);
}

if (!fs.existsSync(componentsDir)) {
  console.error(`组件目录不存在: ${componentsDir}`);
  process.exit(1);
}

// 获取所有样式文件
const styleFiles = fs.readdirSync(stylesDir).filter(file => file.endsWith('.styles.ts'));

// 处理每个样式文件
styleFiles.forEach(styleFile => {
  const componentName = styleFile.replace('.styles.ts', '');
  const styleFilePath = path.join(stylesDir, styleFile);
  const componentDir = path.join(componentsDir, componentName);

  // 确保组件目录存在
  if (!fs.existsSync(componentDir) || !fs.statSync(componentDir).isDirectory()) {
    console.warn(`组件目录不存在，跳过: ${componentDir}`);
    return;
  }

  // 读取样式文件
  const styleContent = fs.readFileSync(styleFilePath, 'utf8');
  
  // 提取样式定义
  const exportedStyles = extractExportedStyles(styleContent);
  if (Object.keys(exportedStyles).length === 0) {
    console.warn(`未在样式文件中找到导出的样式: ${styleFilePath}`);
    return;
  }

  // 处理组件目录中的每个文件
  processComponentDirectory(componentDir, exportedStyles);
  
  console.log(`已处理组件: ${componentName}`);
});

console.log('样式迁移完成!');

/**
 * 从样式文件中提取导出的样式定义
 */
function extractExportedStyles(styleContent) {
  const exportedStyles = {};
  const exportRegex = /export\s+const\s+(\w+)\s*=/g;
  let match;
  
  while ((match = exportRegex.exec(styleContent)) !== null) {
    const styleName = match[1];
    const startIndex = match.index;
    
    // 找到样式定义的结束位置
    let braceCount = 0;
    let endIndex = startIndex;
    let foundOpeningBrace = false;
    
    for (let i = startIndex; i < styleContent.length; i++) {
      if (styleContent[i] === '`' && !foundOpeningBrace) {
        foundOpeningBrace = true;
      }
      
      if (styleContent[i] === '{' && foundOpeningBrace) {
        braceCount++;
      } else if (styleContent[i] === '}' && foundOpeningBrace) {
        braceCount--;
        if (braceCount === 0 && styleContent[i+1] === '`' && styleContent[i+2] === ';') {
          endIndex = i + 3;
          break;
        }
      }
    }
    
    if (endIndex > startIndex) {
      exportedStyles[styleName] = styleContent.substring(startIndex, endIndex);
    }
  }
  
  return exportedStyles;
}

/**
 * 处理组件目录中的文件
 */
function processComponentDirectory(componentDir, exportedStyles) {
  const files = fs.readdirSync(componentDir);
  
  files.forEach(file => {
    const filePath = path.join(componentDir, file);
    
    // 检查是否为目录
    if (fs.statSync(filePath).isDirectory()) {
      // 递归处理子目录
      processComponentDirectory(filePath, exportedStyles);
      return;
    }
    
    // 只处理TSX文件
    if (!file.endsWith('.tsx')) {
      return;
    }
    
    // 读取组件文件
    let componentContent = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否从样式文件导入
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]\.\.\/\.\.\/styles\/components\/[^'"]+['"]/;
    const importMatch = componentContent.match(importRegex);
    
    if (importMatch) {
      // 获取导入的样式名称
      const importedStyles = importMatch[1].split(',').map(s => s.trim());
      
      // 替换导入语句
      componentContent = componentContent.replace(importRegex, 'import styled from \'styled-components\'');
      
      // 添加样式定义
      let stylesCode = '\n';
      importedStyles.forEach(styleName => {
        if (exportedStyles[styleName]) {
          stylesCode += exportedStyles[styleName] + '\n\n';
        }
      });
      
      // 在导入语句后插入样式代码
      const importEndIndex = componentContent.indexOf(';', componentContent.indexOf('import styled'));
      if (importEndIndex !== -1) {
        componentContent = 
          componentContent.substring(0, importEndIndex + 1) + 
          stylesCode + 
          componentContent.substring(importEndIndex + 1);
      }
      
      // 保存修改后的组件文件
      fs.writeFileSync(filePath, componentContent, 'utf8');
      console.log(`  更新了文件: ${filePath}`);
    }
  });
} 