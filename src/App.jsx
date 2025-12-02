import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Layout } from './components/layout';
import { Hero, About, Jobs, Featured, Contact, ValueProposition, Education } from './components/sections';
import TechMarquee from './components/tech-marquee';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  const location = useLocation();

  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <TechMarquee />
        <ValueProposition />
        <Jobs />
        <Education />
        <Featured />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}

export default App;
