import React from 'react';
import styled from 'styled-components';
import CustomCodeBlock from '../CustomCodeBlock';

const StepItem = styled.div`
  position: relative;
  padding-left: 3.5rem;
`;

const StepNumber = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.25rem;
`;

const CodeBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`;

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