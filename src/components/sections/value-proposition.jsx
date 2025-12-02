import React, { useRef } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../../hooks';

const StyledValueSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 100px;
  
  .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;



    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  background-color: var(--light-navy);
  padding: 2rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }

  h3 {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
    &:before {
      content: '▹';
      color: var(--green);
      font-size: var(--fz-md);
      margin-right: 10px;
    }
  }

  p {
    color: var(--slate);
    font-size: var(--fz-lg);
    line-height: 1.5;
  }
`;

const ValueProposition = () => {
  const revealContainer = useRef(null);
  useScrollReveal(revealContainer);

  const values = [
    {
      title: 'Technical Fluency',
      description: "I don't just sell software; I build it. I can bridge the gap between engineering and clients, ensuring technical requirements are clearly understood and communicated."
    },
    {
      title: 'Diagnosis Before Prescription',
      description: "I don't force features; I diagnose problems. I invest heavily in understanding the customer's reality first, ensuring we solve the actual issue rather than putting a bandaid on a bullet wound."
    },
    {
      title: 'Relentless Drive',
      description: "Always learning, always building. Whether it's mastering a new tech stack or closing a complex deal, I bring the same energy and persistence to everything I do."
    }
  ];

  return (
    <StyledValueSection id="approach" ref={revealContainer}>
      <h2 className="section-title">My Approach</h2>
      <StyledGrid>
        {values.map((value, i) => (
          <StyledCard key={i}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </StyledCard>
        ))}
      </StyledGrid>
    </StyledValueSection>
  );
};

export default ValueProposition;
