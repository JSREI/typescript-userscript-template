import React, { useState } from 'react';
import styled from 'styled-components';
import { PROJECT_STRUCTURE, FileItem } from '../../constants/ProjectStructure';

const SidebarContainer = styled.div`
  width: 220px;
  background-color: #1e1e1e;
  color: #cccccc;
  font-size: 13px;
  overflow: auto;
  border-right: 1px solid #1e1e1e;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    width: 200px;
  }
  
  @media (max-width: 768px) {
    width: 48px;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1e1e1e;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border-radius: 4px;
    border: 2px solid #1e1e1e;
  }
`;

const ActivityBar = styled.div`
  width: 48px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-right: 1px solid #1e1e1e;
  z-index: 10;
`;

const ActivityBarIcon = styled.div<{ active?: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.active ? '#ffffff' : '#858585'};
  }
  
  &:hover svg {
    color: #ffffff;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background-color: ${props => props.active ? '#007acc' : 'transparent'};
  }
`;

const ActivityBarTooltip = styled.div`
  position: absolute;
  left: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${ActivityBarIcon}:hover & {
    opacity: 1;
  }
`;

const SidebarContent = styled.div`
  padding-left: 48px;
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
`;

const SidebarHeader = styled.div`
  padding: 8px 12px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 4px;
`;

const HeaderActionButton = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const FileTree = styled.div`
  margin-left: 0;
`;

const FileTreeItem = styled.div<{ level: number, active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 1px 8px 1px ${props => 8 + props.level * 8}px;
  cursor: pointer;
  font-size: 13px;
  background-color: ${props => props.active ? '#04395e' : '#1e1e1e'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
  
  &:hover {
    background-color: ${props => props.active ? '#04395e' : '#2a2d2e'};
  }
`;

const FolderTreeItem = styled(FileTreeItem)<{ expanded?: boolean }>`
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 6px;
    border-color: transparent transparent transparent ${props => props.active ? '#ffffff' : '#858585'};
    display: inline-block;
    margin-right: 4px;
    transform: ${props => props.expanded ? 'rotate(90deg)' : 'rotate(0)'};
    transition: transform 0.1s;
  }
`;

const FolderIcon = styled.div<{ expanded?: boolean }>`
  margin-right: 6px;
  display: flex;
  color: ${({ theme, expanded }) => expanded ? theme.colors.secondary : theme.colors.warning};
`;

const FileIcon = styled.div`
  margin-right: 6px;
  display: flex;
`;

const TypeScriptFileIcon = styled(FileIcon)`
  color: #3178c6;
`;

const JsonFileIcon = styled(FileIcon)`
  color: #f5c205;
`;

const JsFileIcon = styled(FileIcon)`
  color: #cbcb41;
`;

const HtmlFileIcon = styled(FileIcon)`
  color: #e44d26;
`;

const CssFileIcon = styled(FileIcon)`
  color: #264de4;
`;

const GitIgnoreFileIcon = styled(FileIcon)`
  color: #6c707c;
`;

const YarnLockFileIcon = styled(FileIcon)`
  color: #2c8ebb;
`;

const LicenseFileIcon = styled(FileIcon)`
  color: #6c707c;
`;

const ReadmeFileIcon = styled(FileIcon)`
  color: #6c707c;
`;

const FolderOpenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 14H13.5C13.7761 14 14 13.7761 14 13.5V4.5C14 4.22386 13.7761 4 13.5 4H7.70711L5.85355 2.14645C5.75979 2.05268 5.63261 2 5.5 2H1.5C1.22386 2 1 2.22386 1 2.5V13.5C1 13.7761 1.22386 14 1.5 14Z" fill="#C5C5C5"/>
    <path d="M1 13.5V9L2.86564 5H13.1344L11 9V13H2H1.5C1.22386 13 1 13.2239 1 13.5Z" fill="#C09553"/>
  </svg>
);

const FolderClosedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 14H13.5C13.7761 14 14 13.7761 14 13.5V4.5C14 4.22386 13.7761 4 13.5 4H7.70711L5.85355 2.14645C5.75979 2.05268 5.63261 2 5.5 2H1.5C1.22386 2 1 2.22386 1 2.5V13.5C1 13.7761 1.22386 14 1.5 14Z" fill="#C09553"/>
  </svg>
);

const FileDocIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.71 4.29l-3-3A1 1 0 0 0 10 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-.29-.71zM12 13H4V2h5v3h3v8z" fill="currentColor"/>
  </svg>
);

const TsFileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4v2h-4V2H3v12h11v-1h1V4" fill="currentColor"/>
    <path d="M9 6v10H2V5h7v1zm.2 3.6v-.8H5.7v.8h1.2v3.6h.9V9.6h1.4zM12.4 8.8c-.1 0-.2 0-.3.1l-.2.1-.3.1v.9l.5-.5.6.5v-1c0-.1-.1-.1-.1-.2h-.2z" fill="currentColor"/>
    <path d="M14.5 15h-12V5.5H8V1.5h6.5V15zM3 14h11V2H9v4H3v8z" fill="currentColor"/>
    <path d="M14.5 8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5S15.3 8 14.5 8zm0 2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" fill="currentColor"/>
  </svg>
);

const JsonFileIconComponent = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5h12v6H2z" fill="currentColor"/>
    <path d="M6.5 10.8c0-1.54-1.03-2.8-2.3-2.8-1.27 0-2.2 1.26-2.2 2.8 0 1.54.93 2.7 2.2 2.7 1.27 0 2.3-1.16 2.3-2.7zm-1.25 0c0 .81-.41 1.5-1.05 1.5-.64 0-1.05-.69-1.05-1.5 0-.81.41-1.6 1.05-1.6.64 0 1.05.79 1.05 1.6zM7.5 13.36v-.56s.61.2 1 .2c.39 0 .5-.2.5-.4 0-.21-.13-.29-.5-.4-.37-.11-1-.25-1-1.1 0-.85.59-1.1 1-1.1.41 0 1 .2 1 .2v.6s-.42-.2-.8-.2c-.38 0-.5.2-.5.4 0 .2.13.3.5.4.37.1 1 .3 1 1.1 0 .8-.59 1.1-1 1.1-.41 0-1.2-.24-1.2-.24zM10.5 8v5.38h1V8h-1zM12.5 8v5.38h1V8h-1z" fill="currentColor"/>
  </svg>
);

const JsFileIconComponent = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11.5c0 1.5.8 2.5 2.2 2.5.7 0 1.3-.3 1.7-.8l.6.7c-.5.6-1.3 1.1-2.3 1.1-1.9 0-3.2-1.3-3.2-3.5 0-1.9 1.1-3.5 3-3.5 1.9 0 2.8 1.5 2.8 3.3 0 .3 0 .5-.1.7H9zm3.5-1c0-1.1-.5-1.9-1.6-1.9-.9 0-1.6.7-1.8 1.9h3.4zM8 12V8.5H6V7.7c1.1 0 1.7-.7 1.8-1.7h1C8.8 6 9 8 6 8v4c0 1.1-.2 1.9-1.5 1.9-.3 0-.7-.1-.9-.2l.2-.9c.2.1.4.2.6.2.4 0 .6-.2.6-.9V8.3H3.6V7h2.2V3h.7v4h1.5z" fill="currentColor"/>
  </svg>
);

const HtmlFileIconComponent = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.38 8l1.32-6h7l-.44 2H5.5l-.37 2h5.5l-.85 4.54L7.26 12l-2.3-1.48L5.21 9H3.16l.22-1z" fill="currentColor"/>
  </svg>
);

const CssFileIconComponent = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.3 13c-.2 0-.4-.1-.6-.1l-.6-.6c-.2-.4-.1-.9.2-1.2l.6-.6c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-.6.6c-.5.5-.6 1.1-.5 1.7v.1c.1.5.4 1 .8 1.3l.7.6c.8.5 1.8.5 2.6 0l.7-.6c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-.7.6c-.3.1-.7.1-1.2 0zm2-3.3l-1.2 1.2c-.1.1-.1.1 0 .2l.6.6c.1.1.1.1.2 0l1.3-1.2c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8l-1.3 1.2c-.9.9-2.3.9-3.2 0l-.5-.6c-.1-.1-.1-.1 0-.1l.7-.8c0-.1.1-.2.1-.1s.1 0 .1.1l.5.5c.3.3.7.3 1 0l1.2-1.2c.3-.3.3-.7 0-1-.3-.3-.7-.3-1 0L6.3 12c-.2.2-.5.2-.7 0-.1-.2-.1-.5.1-.7l1-1c.3-.3.3-.7 0 1 .3.3.7.3 1 0l.6-.6c.1-.1.1-.1.1 0 .1.1.1.1 0 .1l-.6.6c-.5.5-1.3.5-1.8 0-.5-.5-.5-1.2-.1-1.7z" fill="currentColor"/>
  </svg>
);

const ExplorerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38H3v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" fill="currentColor"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z" fill="currentColor"/>
  </svg>
);

const SourceControlIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z" fill="currentColor"/>
  </svg>
);

const DebuggingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const ExtensionsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const AddIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z" fill="currentColor"/>
  </svg>
);

const RefreshIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.56253 2.51577C3.46348 3.4501 2 5.55414 2 8.00001C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8.00001C14 5.32537 12.2543 3.05792 9.83199 2.28482L9.52968 3.23832C11.5429 3.88454 13 5.7721 13 8.00001C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8.00001C3 6.31087 3.83742 4.8177 5.11745 3.91248L5.56253 2.51577Z" fill="currentColor"/>
    <path d="M5 3H2V2H5C5.55228 2 6 2.44772 6 3V6H5V3Z" fill="currentColor"/>
  </svg>
);

const CollapseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9H4v1h5V9z" fill="currentColor"/>
    <path d="M7 12c0 .6.4 1 1 1h5.5c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.5H8c-.6 0-1 .4-1 1v6zm1-6h5v6H8V6z" fill="currentColor"/>
    <path d="M7 3.5v3l-4 4L2.5 10 6 6.5V3.5h1z" fill="currentColor"/>
  </svg>
);

// 根据文件扩展名获取适当的图标组件
const getFileIconByExtension = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'ts':
      return (
        <TypeScriptFileIcon>
          <TsFileIcon />
        </TypeScriptFileIcon>
      );
    case 'js':
      return (
        <JsFileIcon>
          <JsFileIconComponent />
        </JsFileIcon>
      );
    case 'json':
      return (
        <JsonFileIcon>
          <JsonFileIconComponent />
        </JsonFileIcon>
      );
    case 'html':
      return (
        <HtmlFileIcon>
          <HtmlFileIconComponent />
        </HtmlFileIcon>
      );
    case 'css':
      return (
        <CssFileIcon>
          <CssFileIconComponent />
        </CssFileIcon>
      );
    case 'md':
      return (
        <FileIcon>
          <FileDocIcon />
        </FileIcon>
      );
    default:
      return (
        <FileIcon>
          <FileDocIcon />
        </FileIcon>
      );
  }
};

interface VSCodeSidebarProps {
  activeFile?: string; // activeFile 不再需要，因为我们在项目结构中已经标记了活动文件
}

// 修改文件夹树结构,匹配真实的项目结构
const TYPESCRIPT_USERSCRIPT_STRUCTURE = [
  { name: "typescript-userscript-template", type: "folder", expanded: true, children: [
    { name: "src", type: "folder", expanded: true, children: [
      { name: "bar_module", type: "folder", expanded: true, children: [
        { name: "bar.ts", type: "file" }
      ]},
      { name: "foo_module", type: "folder", expanded: true, children: [
        { name: "foo.ts", type: "file" }
      ]},
      { name: "gm_api_example", type: "folder", expanded: true, children: [
        { name: "gm_api_usage.ts", type: "file" }
      ]},
      { name: "types", type: "folder", expanded: false, children: [
        { name: "README.md", type: "file" },
        { name: "tampermonkey.d.ts", type: "file" }
      ]},
      { name: "index.ts", type: "file", active: true }
    ]},
    { name: ".github", type: "folder", expanded: false },
    { name: "dist", type: "folder", expanded: false },
    { name: "node_modules", type: "folder", expanded: false },
    { name: "README.assets", type: "folder", expanded: false },
    { name: ".git", type: "folder", expanded: false },
    { name: ".gitignore", type: "file" },
    { name: "banner.txt", type: "file" },
    { name: "fuck-hot-compile.sh", type: "file" },
    { name: "LICENSE", type: "file" },
    { name: "package-lock.json", type: "file" },
    { name: "package.json", type: "file" },
    { name: "README.md", type: "file" },
    { name: "README_en.md", type: "file" },
    { name: "tsconfig.json", type: "file" },
    { name: "userscript-headers.js", type: "file" },
    { name: "webpack.common.js", type: "file" },
    { name: "webpack.dev.js", type: "file" },
    { name: "webpack.prod.js", type: "file" },
    { name: "yarn.lock", type: "file" }
  ]}
];

const VSCodeSidebar: React.FC<VSCodeSidebarProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('explorer');
  
  const renderFileTree = (items: any[], level: number, parentPath: string = '') => {
    return items.map((item, index) => {
      const path = `${parentPath}/${item.name}`;
      
      if (item.type === 'folder') {
        const Folder = ({ expanded }: { expanded: boolean }) => (
          <FolderTreeItem 
            level={level} 
            expanded={expanded}
            onClick={() => {
              // 实际组件中这里会切换展开状态
            }}
          >
            <FolderIcon expanded={expanded}>
              {expanded ? <FolderOpenIcon /> : <FolderClosedIcon />}
            </FolderIcon>
            {item.name}
          </FolderTreeItem>
        );
        
        return (
          <React.Fragment key={path}>
            <Folder expanded={item.expanded} />
            {item.expanded && item.children && renderFileTree(item.children, level + 1, path)}
          </React.Fragment>
        );
      }
      
      return (
        <FileTreeItem 
          key={path}
          level={level}
          active={item.active}
        >
          {getFileIconByExtension(item.name)}
          {item.name}
        </FileTreeItem>
      );
    });
  };
  
  return (
    <SidebarContainer>
      <ActivityBar>
        <ActivityBarIcon active={activeTab === 'explorer'} onClick={() => setActiveTab('explorer')}>
          <ExplorerIcon />
          <ActivityBarTooltip>资源管理器</ActivityBarTooltip>
        </ActivityBarIcon>
        <ActivityBarIcon active={activeTab === 'search'} onClick={() => setActiveTab('search')}>
          <SearchIcon />
          <ActivityBarTooltip>搜索</ActivityBarTooltip>
        </ActivityBarIcon>
        <ActivityBarIcon active={activeTab === 'git'} onClick={() => setActiveTab('git')}>
          <SourceControlIcon />
          <ActivityBarTooltip>源代码管理</ActivityBarTooltip>
        </ActivityBarIcon>
        <ActivityBarIcon active={activeTab === 'debug'} onClick={() => setActiveTab('debug')}>
          <DebuggingIcon />
          <ActivityBarTooltip>运行和调试</ActivityBarTooltip>
        </ActivityBarIcon>
        <ActivityBarIcon active={activeTab === 'extensions'} onClick={() => setActiveTab('extensions')}>
          <ExtensionsIcon />
          <ActivityBarTooltip>扩展</ActivityBarTooltip>
        </ActivityBarIcon>
      </ActivityBar>
      
      <SidebarContent>
        <SidebarHeader>
          {activeTab === 'explorer' && 'EXPLORER: TYPESCRIPT-USERSCRIPT'}
          {activeTab === 'search' && 'SEARCH'}
          {activeTab === 'git' && 'SOURCE CONTROL'}
          {activeTab === 'debug' && 'RUN AND DEBUG'}
          {activeTab === 'extensions' && 'EXTENSIONS'}
          <HeaderActions>
            {activeTab === 'explorer' && (
              <>
                <HeaderActionButton><AddIcon /></HeaderActionButton>
                <HeaderActionButton><RefreshIcon /></HeaderActionButton>
                <HeaderActionButton><CollapseIcon /></HeaderActionButton>
              </>
            )}
          </HeaderActions>
        </SidebarHeader>
        
        {activeTab === 'explorer' && (
          <FileTree>
            {renderFileTree(TYPESCRIPT_USERSCRIPT_STRUCTURE, 0)}
          </FileTree>
        )}
      </SidebarContent>
    </SidebarContainer>
  );
};

export default VSCodeSidebar; 