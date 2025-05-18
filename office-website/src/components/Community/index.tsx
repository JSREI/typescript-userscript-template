import React from 'react';
import { 
  CommunityContainer, 
  CommunityContent, 
  CommunityTitle, 
  QrCodesContainer 
} from '../../styles/components/Community.styles';
import QrCodeCard from './QrCodeCard';
import { qrCodes } from './QrCodeData';

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