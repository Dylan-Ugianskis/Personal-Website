import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-width: 480px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Dylan Ugianskis.</h2>
      <h3 className="big-heading">I translate code into revenue.</h3>
      <p>
        Most salespeople sell the "what." I sell the "how" and the "why." With a background in full-stack development, I help innovative tech companies drive growth by having deeper, more credible conversations with prospects.
      </p>
      <a href="mailto:Dylanugi@outlook.com" className="email-link">
        Get In Touch
      </a>
    </StyledHeroSection>
  );
};

export default Hero;
