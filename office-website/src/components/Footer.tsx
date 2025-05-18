import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.heading};
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.5rem;
  }
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterHeading = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.75rem;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterColumn>
            <FooterLogo href="https://github.com/JSREI/typescript-userscript-template" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3B82F6" />
                <path d="M2 17L12 22L22 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Typescript Userscript Template</span>
            </FooterLogo>
            <FooterDescription>
              Typescript Userscript Template是一个用于开发油猴脚本的现代化模板，帮助开发者轻松创建高质量的用户脚本。
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="https://github.com/JSREI/typescript-userscript-template" target="_blank" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.27 9.5 21.006V19.505C6.735 20.126 6.151 18.141 6.151 18.141C5.681 17.021 5.031 16.711 5.031 16.711C4.151 16.105 5.101 16.117 5.101 16.117C6.101 16.19 6.651 17.141 6.651 17.141C7.551 18.542 9.101 18.19 9.541 17.939C9.631 17.293 9.901 16.839 10.201 16.591C7.975 16.339 5.651 15.486 5.651 11.677C5.651 10.55 6.051 9.631 6.676 8.901C6.576 8.651 6.226 7.626 6.776 6.227C6.776 6.227 7.626 5.961 9.501 7.281C10.301 7.061 11.151 6.951 12.001 6.949C12.851 6.949 13.701 7.061 14.501 7.281C16.376 5.959 17.226 6.227 17.226 6.227C17.776 7.626 17.426 8.651 17.326 8.901C17.952 9.631 18.347 10.55 18.347 11.677C18.347 15.496 16.018 16.335 13.786 16.581C14.151 16.886 14.486 17.491 14.486 18.421V21.006C14.486 21.271 14.646 21.586 15.156 21.486C19.135 20.162 21.996 16.417 21.996 12C21.996 6.477 17.52 2 12 2Z" fill="currentColor" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>项目</FooterHeading>
            <FooterLinkList>
              <FooterLinkItem>
                <FooterLink href="#features">特性</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="#workflow">工作流程</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="#installation">安装指南</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="#typescript">Typescript支持</FooterLink>
              </FooterLinkItem>
            </FooterLinkList>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>资源</FooterHeading>
            <FooterLinkList>
              <FooterLinkItem>
                <FooterLink href="https://github.com/JSREI/typescript-userscript-template" target="_blank">GitHub</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="https://github.com/JSREI/typescript-userscript-template#readme" target="_blank">文档</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="https://github.com/JSREI/typescript-userscript-template/issues" target="_blank">问题反馈</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="https://github.com/JSREI/typescript-userscript-template/releases" target="_blank">版本发布</FooterLink>
              </FooterLinkItem>
            </FooterLinkList>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>相关链接</FooterHeading>
            <FooterLinkList>
              <FooterLinkItem>
                <FooterLink href="https://www.typescriptlang.org/" target="_blank">TypeScript</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="https://www.tampermonkey.net/" target="_blank">Tampermonkey</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="https://greasyfork.org/" target="_blank">Greasy Fork</FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink href="https://github.com/JSREI/" target="_blank">JSREI</FooterLink>
              </FooterLinkItem>
            </FooterLinkList>
          </FooterColumn>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>© {currentYear} Typescript Userscript Template. 保留所有权利。</Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 