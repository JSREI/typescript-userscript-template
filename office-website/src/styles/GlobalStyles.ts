import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 确保主要内容不会被固定的Header覆盖 */
  main {
    padding-top: 80px; /* 为固定的Header留出空间 */
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.heading};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.3;
    margin-bottom: 1.25rem;
    letter-spacing: -0.02em;
  }

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    font-size: 3.5rem;
    line-height: 1.2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2.75rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 2.25rem;
    }
  }
  
  h2 {
    font-size: 2.5rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 1.75rem;
    }
  }
  
  h3 {
    font-size: 1.75rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  section {
    padding: 7rem 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 5rem 0;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 4rem 0;
    }
  }

  code {
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
    padding: 0.2em 0.4em;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.colors.codeBackground};
  }

  /* 防止全局样式干扰语法高亮组件 */
  pre, pre code, .syntax-highlighter code {
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
    font-size: 14px !important;
    line-height: 1.6 !important;
    background: transparent;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 1.5rem;
    }
  }

  .text-gradient {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.gradientStart} 0%,
      ${({ theme }) => theme.colors.gradientEnd} 100%
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
    padding: 0.875rem 1.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    transition: ${({ theme }) => theme.transitions.normal};
    cursor: pointer;
    font-size: 1rem;
    border: none;
    outline: none;
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.5s, height 0.5s;
    }
    
    &:hover:after, &:focus:after {
      width: 250%;
      height: 300%;
    }
    
    &.btn-primary {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      box-shadow: ${({ theme }) => theme.boxShadow.button};
      
      &:hover, &:focus {
        background-color: ${({ theme }) => theme.colors.primaryDark};
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
      }
    }
    
    &.btn-secondary {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.primary};
      
      &:hover, &:focus {
        background-color: rgba(79, 70, 229, 0.05);
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(1px);
      }
    }
    
    &.btn-with-icon {
      display: inline-flex;
      align-items: center;
      
      svg, img {
        margin-right: 0.75rem;
      }
    }
  }
  
  /* 微妙的动画效果 */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
  .delay-5 { animation-delay: 0.5s; }
  
  /* 卡片样式 */
  .card {
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    padding: 2rem;
    transition: ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.boxShadow.card};
      border-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

export default GlobalStyles; 