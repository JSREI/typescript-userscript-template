import React from 'react';
import styled from 'styled-components';
import QrCodeCard from './QrCodeCard';
import { qrCodes } from './QrCodeData';

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

const Community: React.FC = () => {
  return (
    <CommunityContainer id="community">
      <CommunityContent>
        <CommunityTitle>逆向技术交流群</CommunityTitle>
        
        <QrCodesContainer>
          {qrCodes.map((qrCode, index) => (
            <QrCodeCard
              key={`qr-code-${index}`}
              imageUrl={qrCode.imageUrl}
              imageAlt={qrCode.imageAlt}
              text={qrCode.text}
              linkUrl={qrCode.linkUrl}
              linkText={qrCode.linkText}
            />
          ))}
        </QrCodesContainer>
      </CommunityContent>
    </CommunityContainer>
  );
};

export default Community; 