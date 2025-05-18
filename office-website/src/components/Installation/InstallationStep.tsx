import React from 'react';
import { 
  StepItem, 
  StepNumber, 
  StepTitle, 
  StepDescription, 
  CodeBlock 
} from '../../styles/components/Installation.styles';
import CustomCodeBlock from '../CustomCodeBlock';

interface InstallationStepProps {
  number: number;
  title: string;
  description: string;
  code: string;
  language: string;
}

const InstallationStep: React.FC<InstallationStepProps> = ({ 
  number, 
  title, 
  description, 
  code, 
  language 
}) => {
  return (
    <StepItem>
      <StepNumber>{number}</StepNumber>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
      <CodeBlock>
        <CustomCodeBlock
          code={code}
          language={language}
        />
      </CodeBlock>
    </StepItem>
  );
};

export default InstallationStep; 