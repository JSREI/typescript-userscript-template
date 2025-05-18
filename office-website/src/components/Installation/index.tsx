import React from 'react';
import styled from 'styled-components';
import InstallationStep from './InstallationStep';
import { leftColumnSteps, rightColumnSteps } from './stepsData';

const SectionContainer = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
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

const InstallationContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

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