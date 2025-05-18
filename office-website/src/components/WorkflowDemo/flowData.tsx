import { Node, Edge, MarkerType } from 'reactflow';
import { CustomNodeData } from './CustomNode';

export const initialNodes: Node<CustomNodeData>[] = [
  {
    id: '1',
    type: 'custom',
    data: {
      label: '1. 克隆模板',
      description: '从GitHub克隆或下载Typescript Userscript Template',
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    type: 'custom',
    data: {
      label: '2. 安装依赖',
      description: '运行npm install安装所需的开发依赖',
    },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    type: 'custom',
    data: {
      label: '3. 修改配置',
      description: '编辑package.json和webpack.config.js中的配置',
    },
    position: { x: 250, y: 200 },
  },
  {
    id: '4',
    type: 'custom',
    data: {
      label: '4. 开发',
      description: '使用TypeScript编写你的用户脚本逻辑',
    },
    position: { x: 250, y: 300 },
  },
  {
    id: '5',
    type: 'custom',
    data: {
      label: '5. 调试',
      description: '运行npm run dev进行实时开发和调试',
    },
    position: { x: 100, y: 400 },
  },
  {
    id: '6',
    type: 'custom',
    data: {
      label: '6. 测试',
      description: '确保脚本在不同环境下正常运行',
    },
    position: { x: 400, y: 400 },
  },
  {
    id: '7',
    type: 'custom',
    data: {
      label: '7. 构建',
      description: '运行npm run build构建生产版本',
    },
    position: { x: 250, y: 500 },
  },
  {
    id: '8',
    type: 'custom',
    data: {
      label: '8. 发布',
      description: '将生成的脚本提交到Greasy Fork或其他平台',
    },
    position: { x: 250, y: 600 },
  },
];

export const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e7-8',
    source: '7',
    target: '8',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
]; 