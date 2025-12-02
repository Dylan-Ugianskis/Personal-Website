import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import SVGs
import cppIcon from '../assets/tech/C++ (CPlusPlus).svg';
import doIcon from '../assets/tech/Digital Ocean.svg';
import gitIcon from '../assets/tech/Git (1).svg';
import githubIcon from '../assets/tech/GitHub.svg';
import gcpIcon from '../assets/tech/Google Cloud.svg';
import homebrewIcon from '../assets/tech/Homebrew.svg';
import jsonIcon from '../assets/tech/JSON.svg';
import jsIcon from '../assets/tech/JavaScript (1).svg';
import linkedinIcon from '../assets/tech/LinkedIn.svg';
import netIcon from '../assets/tech/NET.svg';
import npmIcon from '../assets/tech/NPM.svg';
import nodeIcon from '../assets/tech/Node.js.svg';
import postgresIcon from '../assets/tech/PostgresSQL.svg';
import reactIcon from '../assets/tech/React (1).svg';
import salesforceIcon from '../assets/tech/Salesforce.svg';
import slackIcon from '../assets/tech/Slack.svg';
import tailwindIcon from '../assets/tech/Tailwind CSS.svg';
import tsIcon from '../assets/tech/TypeScript.svg';
import viteIcon from '../assets/tech/Vite.js.svg';
import gmailIcon from '../assets/tech/gmail-svgrepo-com.svg';
import microsoftIcon from '../assets/tech/microsoft-svgrepo-com.svg';
import outlookIcon from '../assets/tech/ms-outlook-svgrepo-com.svg';
import openaiIcon from '../assets/tech/openai-svgrepo-com.svg';
import stripeIcon from '../assets/tech/stripe-svgrepo-com.svg';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: var(--light-navy);
  padding: 25px 0;
  margin-bottom: 50px;
  position: relative;
  border-top: 1px solid var(--lightest-navy);
  border-bottom: 1px solid var(--lightest-navy);
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }

  &:before {
    left: 0;
    background: linear-gradient(to right, var(--navy), transparent);
  }

  &:after {
    right: 0;
    background: linear-gradient(to left, var(--navy), transparent);
  }
`;

const MarqueeContent = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 40s linear infinite;
  align-items: center;
`;

const TechItem = styled.div`
  margin: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  height: 40px;
  width: auto;
  max-width: 100px; /* Prevent massive width if aspect ratio is weird */
  filter: none;
  transition: var(--transition);
  opacity: 1;
  display: block; /* Remove inline spacing */

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const MarqueeWrapper = styled.div`
  margin-bottom: 50px;
`;

const MarqueeHeader = styled.h3`
  font-size: var(--fz-lg);
  color: var(--lightest-slate);
  margin-bottom: 20px;
  text-align: center;
  font-family: var(--font-mono);
  

`;

const TechMarquee = () => {
  const technologies = [
    { name: 'React', src: reactIcon },
    { name: 'Node.js', src: nodeIcon },
    { name: '.NET', src: netIcon },
    { name: 'PostgreSQL', src: postgresIcon },
    { name: 'TypeScript', src: tsIcon },
    { name: 'JavaScript', src: jsIcon },
    { name: 'DigitalOcean', src: doIcon },
    { name: 'Google Cloud', src: gcpIcon },
    { name: 'Stripe', src: stripeIcon },
    { name: 'OpenAI', src: openaiIcon },
    { name: 'Vite', src: viteIcon },
    { name: 'Tailwind CSS', src: tailwindIcon },
    { name: 'Git', src: gitIcon },
    { name: 'GitHub', src: githubIcon },
    { name: 'Salesforce', src: salesforceIcon },
    { name: 'Microsoft', src: microsoftIcon },
    { name: 'Outlook', src: outlookIcon },
    { name: 'Gmail', src: gmailIcon },
    { name: 'Slack', src: slackIcon },
    { name: 'LinkedIn', src: linkedinIcon },
    { name: 'NPM', src: npmIcon },
    { name: 'JSON', src: jsonIcon },
    { name: 'Homebrew', src: homebrewIcon },
    { name: 'C++', src: cppIcon },
  ];

  // Duplicate the list to create seamless loop
  const items = [...technologies, ...technologies];

  return (
    <MarqueeWrapper>
      <MarqueeHeader>Technologies & Platforms</MarqueeHeader>
      <MarqueeContainer>
        <MarqueeContent>
          {items.map((tech, i) => (
            <TechItem key={i}>
              <StyledImage src={tech.src} alt={tech.name} title={tech.name} />
            </TechItem>
          ))}
        </MarqueeContent>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
};

export default TechMarquee;
