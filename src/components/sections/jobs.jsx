import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useScrollReveal } from '../../hooks';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const revealContainer = useRef(null);
  useScrollReveal(revealContainer);

  const jobsData = [
    {
      company: 'Highland Laboratories',
      title: 'Account Manager',
      range: 'Jun 2024 — Sep 2024',
      url: 'https://www.highlandvitamins.com/',
      duties: [
        'Developed and maintained B2B relationships with independent retailers across the US.',
        'Spearheaded outbound prospecting and cold-call campaigns to identify and convert new wholesale accounts.',
        'Leveraged digital tools to track sales activities.',
      ],
    },
    {
      company: 'Advantage Solutions',
      title: 'Retail Sales Specialist',
      range: 'Jun 2023 — Sep 2023',
      url: 'https://youradv.com/',
      duties: [
        'Coordinated with managers to address stock issues, improving availability and reducing shortages.',
        'Traveled extensively ensuring products were correctly faced, enhancing customer satisfaction by 30%.',
      ],
    },
    {
      company: 'Costco Wholesale',
      title: 'Merchandise',
      range: 'Jun 2021 — Aug 2021',
      url: 'https://www.costco.com/',
      duties: [
        'Enhanced store presentation and maintained a clean work environment.',
        'Ensured timely store opening procedures and optimized product availability to support sales goals.',
      ],
    },
  ];

  return (
    <StyledJobsSection id="experience" ref={revealContainer} className="fadeup">
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs">
          {jobsData.map((job, i) => (
            <StyledTabButton
              key={i}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
              id={`tab-${i}`}
              role="tab"
              aria-selected={activeTabId === i ? true : false}
              aria-controls={`panel-${i}`}
              tabIndex={activeTabId === i ? '0' : '-1'}>
              <span>{job.company}</span>
            </StyledTabButton>
          ))}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        {jobsData.map((job, i) => {
          return (
            <StyledTabContent
              key={i}
              id={`panel-${i}`}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`tab-${i}`}
              hidden={activeTabId !== i}>
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={job.url} className="inline-link" target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                </span>
              </h3>
              <p className="range">{job.range}</p>
              <ul>
                {job.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </StyledTabContent>
          );
        })}
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
