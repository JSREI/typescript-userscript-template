import React from 'react';
import styled from 'styled-components';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

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
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background-color: rgba(59, 130, 246, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 0;
`;

const FeatureCardComponent: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <FeatureCard>
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </FeatureCard>
  );
};

const Features: React.FC = () => {
  return (
    <SectionContainer id="features">
      <SectionInner>
        <SectionHeading>
          <Title>强大的功能特性</Title>
          <Subtitle>
            使用Typescript Userscript Template，享受现代化前端开发体验的同时，轻松构建高质量的用户脚本
          </Subtitle>
        </SectionHeading>
        
        <FeaturesGrid>
          <FeatureCardComponent
            title="模块化开发"
            description="支持使用ES模块和TypeScript类型系统，让你的代码更具可维护性和可扩展性。"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H9V9H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 3H21V9H15V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 15H9V21H3V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 15H21V21H15V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <FeatureCardComponent
            title="热重载开发"
            description="支持开发环境热重载，修改代码后自动重新加载脚本，提高开发效率。"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6569 16.6569C16.7202 17.5935 15.4891 18.2473 14.1336 18.5323C12.778 18.8173 11.3636 18.7181 10.0759 18.2488C8.78826 17.7795 7.6791 16.9612 6.8791 15.8915C6.0791 14.8219 5.62908 13.5479 5.57703 12.2222C5.52497 10.8966 5.87392 9.58936 6.58156 8.46636C7.28921 7.34336 8.32228 6.45229 9.54452 5.90922C10.7668 5.36615 12.1223 5.19823 13.4433 5.42822C14.7642 5.6582 15.9926 6.27506 16.9497 7.1964" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 8L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 8L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 8L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <FeatureCardComponent
            title="单文件输出"
            description="使用Rollup打包，将多文件项目打包成单一的JS文件，符合油猴脚本规范。"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H12M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <FeatureCardComponent
            title="Typescript支持"
            description="内置TypeScript配置，享受类型检查和智能提示的好处，避免常见错误。"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 9.40001L7.5 4.21001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 16V8.00001C20.9996 7.6493 20.9071 7.30483 20.7315 7.00121C20.556 6.69758 20.3037 6.44539 20 6.27001L13 2.27001C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27001L4 6.27001C3.69626 6.44539 3.44398 6.69758 3.26846 7.00121C3.09294 7.30483 3.00036 7.6493 3 8.00001V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3024 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3024 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.27002 6.95999L12 12.01L20.73 6.95999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <FeatureCardComponent
            title="简单易用"
            description="提供简洁的开发流程和清晰的项目结构，让新手也能快速上手开发。"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
          
          <FeatureCardComponent
            title="API类型定义"
            description="包含常用油猴API的TypeScript定义，智能提示让你写代码更高效。"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3H9C7.89543 3 7 3.89543 7 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 21H15C16.1046 21 17 20.1046 17 19V8C17 6.89543 16.1046 6 15 6H4C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </FeaturesGrid>
      </SectionInner>
    </SectionContainer>
  );
};

export default Features; 