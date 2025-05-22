import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRepositoryStarCount } from '../../services/github';

const StarButtonContainer = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  padding: 0.5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  transition: all 0.2s;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

const StarCount = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
  
  svg {
    margin-right: 0.25rem;
  }
`;

interface GitHubStarButtonProps {
  repoOwner: string;
  repoName: string;
}

const GitHubStarButton: React.FC<GitHubStarButtonProps> = ({ repoOwner, repoName }) => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const repoUrl = `https://github.com/${repoOwner}/${repoName}`;

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const count = await getRepositoryStarCount(repoOwner, repoName);
        setStarCount(count);
      } catch (error) {
        console.error('获取Star数量失败:', error);
      }
    };

    fetchStarCount();
  }, [repoOwner, repoName]);

  // 格式化星星数量，超过1000用k表示
  const formatStarCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <StarButtonContainer href={repoUrl} target="_blank">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.27 9.5 21.006V19.505C6.735 20.126 6.151 18.141 6.151 18.141C5.681 17.021 5.031 16.711 5.031 16.711C4.151 16.105 5.101 16.117 5.101 16.117C6.101 16.19 6.651 17.141 6.651 17.141C7.551 18.542 9.101 18.19 9.541 17.939C9.631 17.293 9.901 16.839 10.201 16.591C7.975 16.339 5.651 15.486 5.651 11.677C5.651 10.55 6.051 9.631 6.676 8.901C6.576 8.651 6.226 7.626 6.776 6.227C6.776 6.227 7.626 5.961 9.501 7.281C10.301 7.061 11.151 6.951 12.001 6.949C12.851 6.949 13.701 7.061 14.501 7.281C16.376 5.959 17.226 6.227 17.226 6.227C17.776 7.626 17.426 8.651 17.326 8.901C17.952 9.631 18.347 10.55 18.347 11.677C18.347 15.496 16.018 16.335 13.786 16.581C14.151 16.886 14.486 17.491 14.486 18.421V21.006C14.486 21.271 14.646 21.586 15.156 21.486C19.135 20.162 21.996 16.417 21.996 12C21.996 6.477 17.52 2 12 2Z" fill="currentColor" />
      </svg>
      GitHub
      {starCount !== null && (
        <StarCount>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
          {formatStarCount(starCount)}
        </StarCount>
      )}
    </StarButtonContainer>
  );
};

export default GitHubStarButton; 