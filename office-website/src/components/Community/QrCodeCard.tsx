import React from 'react';
import styled from 'styled-components';

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