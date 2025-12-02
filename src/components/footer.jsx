import React from 'react';
import styled from 'styled-components';
import { IconGitHub, IconInstagram, IconLinkedin, IconEmail } from './icons';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledSocialLinks>
      <ul>
        <li>
          <a href="https://github.com/Dylan-Ugianskis" target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGitHub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dylanugianskis/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <IconInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dylan-ugianskis" target="_blank" rel="noreferrer" aria-label="Linkedin">
            <IconLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:Dylanugi@outlook.com" aria-label="Email">
            <IconEmail />
          </a>
        </li>
      </ul>
    </StyledSocialLinks>

    <StyledCredit tabIndex="-1">
      <a href="https://github.com/bchiang7/v4" target="_blank" rel="noreferrer">
        <div>Designed inspired by Brittany Chiang &amp; Built by Dylan Ugianskis</div>
      </a>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
