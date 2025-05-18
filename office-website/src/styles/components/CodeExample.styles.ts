import styled from 'styled-components';

export const CodeBox = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.large};
  font-family: 'Fira Code', monospace;
`;

export const CodeHeader = styled.div`
  background-color: #1e1e1e;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
`;

export const CodeDots = styled.div`
  display: flex;
  gap: 0.5rem;
  
  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    
    &:nth-child(1) {
      background-color: #ff5f56;
    }
    
    &:nth-child(2) {
      background-color: #ffbd2e;
    }
    
    &:nth-child(3) {
      background-color: #27c93f;
    }
  }
`; 