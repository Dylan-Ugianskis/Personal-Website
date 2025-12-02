import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconGitHub, IconInstagram, IconLinkedin, IconEmail } from './icons';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--green);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = ({ isHome }) => (
  <StyledSideElement>
    <StyledSocialList>
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
    </StyledSocialList>
  </StyledSideElement>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
