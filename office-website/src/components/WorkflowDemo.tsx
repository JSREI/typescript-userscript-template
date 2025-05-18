import React from 'react';
import styled from 'styled-components';
import ReactFlow, { 
  Node, 
  Edge, 
  NodeTypes, 
  MarkerType, 
  Controls, 
  Background 
} from 'reactflow';
import 'reactflow/dist/style.css';

const SectionContainer = styled.section`
  padding: 6rem 0;
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const FlowContainer = styled.div`
  height: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

interface CustomNodeData {
  label: string;
  description: string;
}

const CustomNodeWrapper = styled.div`
  padding: 1rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  width: 220px;
  font-size: 14px;
`;

const NodeLabel = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const NodeDescription = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
`;

const CustomNode: React.FC<{ data: CustomNodeData }> = ({ data }) => {
  return (
    <CustomNodeWrapper>
      <NodeLabel>{data.label}</NodeLabel>
      <NodeDescription>{data.description}</NodeDescription>
    </CustomNodeWrapper>
  );
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
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

const initialEdges: Edge[] = [
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

const WorkflowDemo: React.FC = () => {
  return (
    <SectionContainer id="workflow">
      <SectionInner>
        <SectionHeading>
          <Title>开发工作流程</Title>
          <Subtitle>
            使用Typescript Userscript Template可以遵循以下简单的开发流程，让你的用户脚本开发更加流畅和高效
          </Subtitle>
        </SectionHeading>
        
        <FlowContainer>
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            fitView
            minZoom={0.5}
            maxZoom={1.5}
            defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
            attributionPosition="bottom-right"
          >
            <Controls />
            <Background color="#f0f0f0" gap={16} />
          </ReactFlow>
        </FlowContainer>
      </SectionInner>
    </SectionContainer>
  );
};

export default WorkflowDemo; 