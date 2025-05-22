import React from 'react';
import ReactFlow, { 
  NodeTypes, 
  Controls, 
  Background,
  BackgroundVariant,
  MiniMap,
  Panel
} from 'reactflow';
import 'reactflow/dist/style.css';
import { 
  SectionContainer, 
  SectionInner, 
  SectionHeading, 
  Title, 
  Subtitle, 
  FlowContainer,
  SectionTag
} from '../../styles/components/WorkflowDemo.styles';
import CustomNode from './CustomNode';
import { initialNodes, initialEdges } from './flowData';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

// 自定义mini map风格
const minimapStyle = {
  height: 120,
  width: 180,
  borderRadius: 8,
  backgroundColor: '#f8fafc'
};

const WorkflowDemo: React.FC = () => {
  return (
    <SectionContainer id="workflow">
      <SectionInner>
        <SectionHeading>
          <SectionTag>工作流程</SectionTag>
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
            snapToGrid={true}
            snapGrid={[15, 15]}
          >
            <Controls showInteractive={false} />
            <MiniMap 
              nodeStrokeWidth={3}
              style={minimapStyle}
              nodeColor={(node) => {
                switch (node.id) {
                  case '1':
                  case '2':
                  case '3':
                    return '#4f46e5';
                  case '4':
                    return '#6366f1';
                  case '5':
                  case '6':
                    return '#10b981';
                  case '7':
                  case '8':
                    return '#34d399';
                  default:
                    return '#4f46e5';
                }
              }}
            />
            <Background color="#f0f0f0" gap={16} variant={BackgroundVariant.Dots} />
            <Panel position="top-right" className="custom-panel">
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#64748b', 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <strong>提示:</strong> 拖动以平移，滚轮缩放，点击节点查看详情
              </p>
            </Panel>
          </ReactFlow>
        </FlowContainer>
      </SectionInner>
    </SectionContainer>
  );
};

export default WorkflowDemo; 