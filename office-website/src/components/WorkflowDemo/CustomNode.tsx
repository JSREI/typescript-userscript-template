import React from 'react';
import { 
  CustomNodeWrapper, 
  NodeLabel, 
  NodeDescription 
} from '../../styles/components/WorkflowDemo.styles';

export interface CustomNodeData {
  label: string;
  description: string;
}

const CustomNode: React.FC<{ data: CustomNodeData }> = ({ data }) => {
  return (
    <CustomNodeWrapper>
      <NodeLabel>{data.label}</NodeLabel>
      <NodeDescription>{data.description}</NodeDescription>
    </CustomNodeWrapper>
  );
};

export default CustomNode; 