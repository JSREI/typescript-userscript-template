import { DefaultTheme } from 'styled-components';

// 声明styled-components的主题类型
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      text: string;
      heading: string;
      background: string;
      backgroundAlt: string;
      codeBackground: string;
      lightGray: string;
      darkGray: string;
      success: string;
      warning: string;
      error: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    boxShadow: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

// 主题配置
export const theme: DefaultTheme = {
  colors: {
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    secondary: '#10b981',
    secondaryDark: '#059669',
    text: '#374151',
    heading: '#1f2937',
    background: '#ffffff',
    backgroundAlt: '#f9fafb',
    codeBackground: '#f3f4f6',
    lightGray: '#e5e7eb',
    darkGray: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  boxShadow: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem',
  },
}; 