import React from 'react';
import { 
  SectionContainer, 
  SectionInner, 
  SectionHeading, 
  Title, 
  Subtitle, 
  InstallationContent, 
  StepsList 
} from '../../styles/components/Installation.styles';
import InstallationStep from './InstallationStep';
import { leftColumnSteps, rightColumnSteps } from './stepsData';

const Installation: React.FC = () => {
  return (
    <SectionContainer id="installation">
      <SectionInner>
        <SectionHeading>
          <Title>安装指南</Title>
          <Subtitle>
            通过几个简单的步骤，开始使用Typescript Userscript Template开发你的用户脚本
          </Subtitle>
        </SectionHeading>
        
        <InstallationContent>
          <StepsList>
            {leftColumnSteps.map((step, index) => (
              <InstallationStep
                key={`left-step-${index + 1}`}
                number={index + 1}
                title={step.title}
                description={step.description}
                code={step.code}
                language={step.language}
              />
            ))}
          </StepsList>
          
          <StepsList>
            {rightColumnSteps.map((step, index) => (
              <InstallationStep
                key={`right-step-${index + 4}`}
                number={index + 4}
                title={step.title}
                description={step.description}
                code={step.code}
                language={step.language}
              />
            ))}
          </StepsList>
        </InstallationContent>
      </SectionInner>
    </SectionContainer>
  );
};

export default Installation; 