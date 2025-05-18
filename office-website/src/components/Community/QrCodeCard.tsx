import React from 'react';
import { 
  QrCodeItem, 
  QrCodeImage, 
  QrCodeText, 
  StyledLink 
} from '../../styles/components/Community.styles';

interface QrCodeCardProps {
  imageUrl: string;
  imageAlt: string;
  text: string;
  linkUrl?: string;
  linkText?: string;
}

const QrCodeCard: React.FC<QrCodeCardProps> = ({ 
  imageUrl, 
  imageAlt, 
  text,
  linkUrl,
  linkText
}) => {
  return (
    <QrCodeItem>
      <QrCodeImage src={imageUrl} alt={imageAlt} />
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
  );
};

export default QrCodeCard; 