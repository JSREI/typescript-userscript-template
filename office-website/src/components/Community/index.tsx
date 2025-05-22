import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
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
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // 为Lightbox准备图片数据
  const slides = qrCodes.map(qrCode => ({
    src: qrCode.imageUrl,
    alt: qrCode.imageAlt,
    title: qrCode.text
  }));

  // 处理打开Lightbox并设置初始图片
  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

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
              onClick={() => openLightbox(index)}
            />
          ))}
        </QrCodesContainer>

        {/* 全局图片查看器 */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
          plugins={[Zoom, Counter, Thumbnails]}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 1.5,
          }}
          thumbnails={{
            position: 'bottom',
            width: 120,
            height: 80,
          }}
        />
      </CommunityContent>
    </CommunityContainer>
  );
};

export default Community; 