import React from 'react';
import styled from 'styled-components';

const CommunityContainer = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

const CommunityContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CommunityTitle = styled.h2`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const QrCodesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 3rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const QrCodeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.large};
  }
`;

const QrCodeImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const QrCodeText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: underline;
  }
`;

const Community: React.FC = () => {
  return (
    <CommunityContainer id="community">
      <CommunityContent>
        <CommunityTitle>逆向技术交流群</CommunityTitle>
        
        <QrCodesContainer>
          <QrCodeItem>
            <QrCodeImage 
              src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016230653669.png" 
              alt="微信交流群二维码" 
            />
            <QrCodeText>扫码加入逆向技术微信交流群</QrCodeText>
          </QrCodeItem>
          
          <QrCodeItem>
            <QrCodeImage 
              src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20231030132026541-7614065.png" 
              alt="个人微信二维码" 
            />
            <QrCodeText>如群二维码过期，可以加我个人微信，发送【逆向群】拉你进群</QrCodeText>
          </QrCodeItem>
          
          <QrCodeItem>
            <QrCodeImage 
              src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016231143315.png" 
              alt="TG交流群二维码" 
            />
            <QrCodeText>
              <StyledLink href="https://t.me/jsreijsrei" target="_blank">点此</StyledLink>
              或扫码加入TG交流群
            </QrCodeText>
          </QrCodeItem>
        </QrCodesContainer>
      </CommunityContent>
    </CommunityContainer>
  );
};

export default Community; 