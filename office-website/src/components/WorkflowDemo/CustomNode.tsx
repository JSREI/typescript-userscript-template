import React from 'react';
import { 
  CustomNodeWrapper, 
  NodeLabel, 
  NodeDescription,
  NodeNumber
} from '../../styles/components/WorkflowDemo.styles';
import { Handle, Position } from 'reactflow';

export interface CustomNodeData {
  label: string;
  description: string;
}

const CustomNode: React.FC<{ data: CustomNodeData }> = ({ data }) => {
  // 从标签中提取数字，例如 "1. 克隆模板" 提取出 "1"
  const stepNumber = data.label.split('.')[0];
  // 从标签中提取标题部分，例如 "1. 克隆模板" 提取出 "克隆模板"
  const title = data.label.split('. ')[1];

  return (
    <CustomNodeWrapper>
      <Handle type="target" position={Position.Top} style={{ background: '#4f46e5', width: 10, height: 10 }} />
      
      <NodeLabel>
        <NodeNumber>{stepNumber}</NodeNumber>
        {title}
      </NodeLabel>
      <NodeDescription>{data.description}</NodeDescription>
      
      <Handle type="source" position={Position.Bottom} style={{ background: '#4f46e5', width: 10, height: 10 }} />
    </CustomNodeWrapper>
  );
};

export default CustomNode; 