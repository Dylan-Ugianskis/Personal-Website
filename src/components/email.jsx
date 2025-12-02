import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 40px;
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    right: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: var(--green);
    }
  }
`;

const Email = ({ isHome }) => (
  <StyledSideElement>
    <StyledLinkWrapper>
      <a href="mailto:Dylanugi@outlook.com">Dylanugi@outlook.com</a>
    </StyledLinkWrapper>
  </StyledSideElement>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
