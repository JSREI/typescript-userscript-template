import 'styled-components';

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
      error: string;
      success: string;
      warning: string;
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
  }
} 