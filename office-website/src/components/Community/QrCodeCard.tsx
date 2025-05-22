import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';

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
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.03);
  }
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

interface QrCodeCardProps {
  imageUrl: string;
  imageAlt: string;
  text: string;
  linkUrl?: string;
  linkText?: string;
  onClick?: () => void;
}

const QrCodeCard: React.FC<QrCodeCardProps> = ({ 
  imageUrl, 
  imageAlt, 
  text,
  linkUrl,
  linkText,
  onClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <QrCodeItem>
        <QrCodeImage 
          src={imageUrl} 
          alt={imageAlt} 
          onClick={handleImageClick}
          title="点击查看大图"
        />
        <QrCodeText>
          {linkUrl && linkText ? (
            <>
              <StyledLink href={linkUrl} target="_blank">{linkText}</StyledLink>
              {" "}或{text}
            </>
          ) : (
            text
          )}
        </QrCodeText>
      </QrCodeItem>

      {!onClick && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: imageUrl, alt: imageAlt }]}
          plugins={[Zoom, Counter]}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 1.5,
          }}
          carousel={{
            finite: true,
          }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
        />
      )}
    </>
  );
};

export default QrCodeCard; 