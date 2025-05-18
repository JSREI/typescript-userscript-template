import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  section {
    padding: 6rem 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 4rem 0;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 3rem 0;
    }
  }

  code {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.codeBackground};
  }

  /* 防止全局样式干扰语法高亮组件 */
  pre, pre code, .syntax-highlighter code {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
    background: transparent;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .text-gradient {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: all 0.2s;
    cursor: pointer;
    font-size: 1rem;
    
    &.btn-primary {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
      }
    }
    
    &.btn-secondary {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text};
      border: 1px solid ${({ theme }) => theme.colors.lightGray};
      
      &:hover {
        border-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

export default GlobalStyles; 