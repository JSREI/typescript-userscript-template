import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WorkflowDemo from '../components/WorkflowDemo';
import Installation from '../components/Installation';
import TypescriptSupport from '../components/TypescriptSupport';
import Community from '../components/Community';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Home; 