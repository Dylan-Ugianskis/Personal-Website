import React, { useRef } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../../hooks';
import headshot from '../../assets/Headshot.jpg';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  useScrollReveal(revealContainer);

  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'SQL', 'AWS'];

  return (
    <StyledAboutSection id="about" ref={revealContainer} className="fadeup">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I’m a software sales professional who speaks "engineer."
            </p>

            <p>
              My journey began in development, where I built complex platforms like Vexxent from the ground up. This technical foundation gives me a distinct edge: I don’t just memorize feature lists; I understand the architecture, the development challenges, and the true value of the solutions I sell.
            </p>

            <p>
              Today, I leverage this dual expertise to bridge the gap between technical capabilities and business outcomes. Whether I'm prospecting or closing, I bring a builder's mindset to every deal—ensuring clients feel understood and confident.
            </p>

            <p>Core Competencies:</p>
          </div>

          <ul className="skills-list">
            {[
              'Technical Sales & Consulting',
              'Full-Cycle B2B Sales',
              'CRM Management',
              'Strategic Planning',
              'SaaS Architecture',
            ].map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src={headshot}
              alt="Headshot"
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
