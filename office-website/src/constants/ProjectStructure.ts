// 项目目录结构的常量文件，用于VSCodeSidebar组件中展示

// 文件类型枚举
export enum FileType {
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript'
}

// 文件项接口
export interface FileItem {
  name: string;
  type: 'file' | 'folder';
  active?: boolean;
  expanded?: boolean;
  badge?: string;
  children?: FileItem[];
}

// 项目结构
export const PROJECT_STRUCTURE: FileItem[] = [
  {
    name: 'typescript-userscript-template',
    type: 'folder',
    expanded: true,
    children: [
      {
        name: 'dist',
        type: 'folder',
        expanded: false,
        children: [
          {
            name: 'index.js',
            type: 'file',
            active: true
          }
        ]
      },
      {
        name: 'src',
        type: 'folder',
        expanded: true,
        children: [
          {
            name: 'index.ts',
            type: 'file'
          },
          {
            name: 'userscript.ts',
            type: 'file'
          },
          {
            name: 'gm_api_utils.ts',
            type: 'file'
          }
        ]
      },
      {
        name: '.gitignore',
        type: 'file'
      },
      {
        name: 'package.json',
        type: 'file',
        badge: 'npm'
      },
      {
        name: 'README.md',
        type: 'file'
      },
      {
        name: 'tsconfig.json',
        type: 'file'
      },
      {
        name: 'webpack.config.js',
        type: 'file'
      }
    ]
  }
]; 