import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkflowDemo from './components/WorkflowDemo';
import Installation from './components/Installation';
import TypescriptSupport from './components/TypescriptSupport';
import Community from './components/Community';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Features />
        <WorkflowDemo />
        <Installation />
        <TypescriptSupport />
        <Community />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App; 