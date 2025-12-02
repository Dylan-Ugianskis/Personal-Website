import React, { useRef } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../../hooks';

const StyledEducationSection = styled.section`
  max-width: 800px;
  margin: 0 auto 100px;
  text-align: center;

  .section-title {
    font-size: clamp(26px, 5vw, var(--fz-heading));
    margin-bottom: 40px;
  }
`;

const StyledContent = styled.div`
  background-color: var(--light-navy);
  padding: 30px;
  border-radius: var(--border-radius);
  border: 1px solid var(--lightest-navy);
  display: inline-block;
  text-align: left;
  width: 100%;

  h3 {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    margin-bottom: 10px;
  }

  .degree {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 20px;
    display: block;
  }

  .details {
    margin-top: 20px;
    
    p {
      margin-bottom: 10px;
      color: var(--slate);
      font-size: var(--fz-lg);
      
      strong {
        color: var(--lightest-slate);
      }
    }
  }

  .security-focus {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid var(--lightest-navy);
    font-size: var(--fz-md);
    color: var(--slate);
    display: flex;
    align-items: flex-start;

    .icon {
      margin-right: 15px;
      font-size: 24px;
      line-height: 1;
    }

    strong {
      color: var(--green);
      display: block;
      margin-bottom: 5px;
    }
  }
`;

const Education = () => {
  const revealContainer = useRef(null);
  useScrollReveal(revealContainer);

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="section-title">Education</h2>
      <StyledContent>
        <h3>Oregon State University</h3>
        <span className="degree">B.S. Computer Science | Focus in Cyber Security</span>

        <div className="details">
          <p><strong>Capstone:</strong> eGrape Multi-Vendor E-commerce Platform</p>
          <p><strong>Key Focus:</strong> Secure Software Development, Network Architecture</p>
        </div>

        <div className="security-focus">
          <span className="icon">🛡️</span>
          <div>
            <strong>Security Authority</strong>
            Background in Cyber Security means I don't just sell software; I understand compliance, risk, and secure architecture—answering your CTO's questions before they even ask.
          </div>
        </div>
      </StyledContent>
    </StyledEducationSection>
  );
};

export default Education;
