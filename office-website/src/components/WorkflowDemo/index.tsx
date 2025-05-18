import React from 'react';
import ReactFlow, { 
  NodeTypes, 
  Controls, 
  Background 
} from 'reactflow';
import 'reactflow/dist/style.css';
import { 
  SectionContainer, 
  SectionInner, 
  SectionHeading, 
  Title, 
  Subtitle, 
  FlowContainer 
} from '../../styles/components/WorkflowDemo.styles';
import CustomNode from './CustomNode';
import { initialNodes, initialEdges } from './flowData';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

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