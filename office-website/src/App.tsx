import React, { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkflowDemo from './components/WorkflowDemo';
import Installation from './components/Installation';
import TypescriptSupport from './components/TypescriptSupport';
import Community from './components/Community';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';

// 创建主题上下文
export const ThemeContext = React.createContext({
  isDarkMode: true,
  toggleTheme: () => {},
});

// 提供一个钩子函数用于获取主题上下文
export const useTheme = () => useContext(ThemeContext);

const App: React.FC = () => {
  // 主题状态
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // 切换主题函数
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };
  
  // 从本地存储获取主题设置
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === 'true');
    } else {
      // 如果没有保存过设置，则检查系统偏好
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);
  
  useEffect(() => {
    // 更新页面滚动位置
    window.scrollTo(0, 0);
    
    // 监听浏览器历史变化
    const handlePopState = () => {
      // 移除与 currentPage 相关的逻辑
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        
        <div>
          <Header />
          <Hero />
          <Features />
          <WorkflowDemo />
          <Installation />
          <TypescriptSupport />
          <Community />
          <Footer />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App; 