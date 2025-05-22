import { DefaultTheme } from 'styled-components';

// 声明styled-components的主题类型
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      primaryHover: string;
      secondary: string;
      secondaryLight: string;
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
      gradientStart: string;
      gradientEnd: string;
      cardBackground: string;
      cardBorder: string;
      cardAlt: string;
      border: string;
      textSecondary: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
      code: number;
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      round: string;
    };
    boxShadow: {
      small: string;
      medium: string;
      large: string;
      button: string;
      card: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      pill: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
  }
}

// 亮色主题配置
export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#4f46e5',
    primaryLight: '#6366f1',
    primaryDark: '#4338ca',
    primaryHover: '#4338ca',
    secondary: '#10b981',
    secondaryLight: '#34d399',
    secondaryDark: '#059669',
    text: '#334155',
    heading: '#1e293b',
    background: '#ffffff',
    backgroundAlt: '#f8fafc',
    codeBackground: '#f1f5f9',
    lightGray: '#e2e8f0',
    darkGray: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradientStart: '#4f46e5',
    gradientEnd: '#10b981',
    cardBackground: '#ffffff',
    cardBorder: '#e2e8f0',
    cardAlt: '#f8fafc',
    border: '#e2e8f0',
    textSecondary: '#64748b',
  },
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
    monospace: "'JetBrains Mono', 'Fira Code', 'Menlo', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
    code: 1.6,
  },
  space: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    round: '9999px',
  },
  boxShadow: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    button: '0 4px 14px rgba(79, 70, 229, 0.25)',
    card: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem',
    pill: '9999px',
  },
  transitions: {
    fast: 'all 0.2s ease',
    normal: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

// 暗色主题配置
export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#6366f1',
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    primaryHover: '#818cf8',
    secondary: '#10b981',
    secondaryLight: '#34d399',
    secondaryDark: '#059669',
    text: '#e2e8f0',
    heading: '#f8fafc',
    background: '#0f172a',
    backgroundAlt: '#1e293b',
    codeBackground: '#1e293b',
    lightGray: '#334155',
    darkGray: '#94a3b8',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gradientStart: '#6366f1',
    gradientEnd: '#10b981',
    cardBackground: '#1e293b',
    cardBorder: '#334155',
    cardAlt: '#0f172a',
    border: '#334155',
    textSecondary: '#94a3b8',
  },
  // 其他配置与亮色主题相同
  breakpoints: lightTheme.breakpoints,
  fonts: lightTheme.fonts,
  fontSizes: lightTheme.fontSizes,
  fontWeights: lightTheme.fontWeights,
  lineHeights: lightTheme.lineHeights,
  space: lightTheme.space,
  shadows: lightTheme.shadows,
  radii: lightTheme.radii,
  boxShadow: lightTheme.boxShadow,
  borderRadius: lightTheme.borderRadius,
  transitions: lightTheme.transitions,
  fontWeight: lightTheme.fontWeight,
};

// 向后兼容，保持原来的导出
export const theme = lightTheme; 