import React, { useRef } from 'react';
import styled from 'styled-components';
import { IconGitHub, IconExternal } from '../icons';
import { useScrollReveal } from '../../hooks';
import vexxentImg from '../../assets/Vexxent.jpg';
import codeImg from '../../assets/code.jpg';
import capstoneImg from '../../assets/Capstone.jpg';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: left;
      padding-left: 20px;

      @media (max-width: 1080px) {
        grid-column: 6 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-start;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 20px 5px 0;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-start;
      margin-left: -10px;
      margin-right: 0;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 7;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    padding-right: 20px;

    @media (max-width: 1080px) {
      grid-column: 1 / 8;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        color: var(--lightest-slate);
        margin: 0 10px 5px 0;
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 7 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

const Featured = () => {
  const revealContainer = useRef(null);
  useScrollReveal(revealContainer);

  const featuredProjects = [
    {
      title: 'eGrape Capstone Project',
      external: 'https://egrape-landing-page.hashnode.space/default-guide/egrape',
      github: '#',
      tech: ['.NET Blazor', 'C#', 'PostgreSQL', 'Google Picker API', 'Clerk Auth'],
      html: `An AI-powered multi-vendor e-commerce platform designed to simplify complex pricing models for industries like construction and landscaping. Features an Excel file upload service that allows vendors to develop pricing logic in spreadsheets, which the system then dynamically converts into user-friendly web forms. I served as a Backend Developer, focusing on e-commerce APIs, theme deployment, and integrating the vendor-facing web app with the shared PostgreSQL database.`,
      cover: capstoneImg,
    },
    {
      title: 'Vexxent Email AI',
      external: 'https://vexxent.com',
      github: '#',
      tech: ['React', 'Firebase', 'Stripe', 'OpenAI', 'Gmail API'],
      html: `An AI-powered email assistant that transforms Gmail into an intelligent productivity hub. Built to solve the overwhelming inbox problem by automatically categorizing emails (Urgent/Can Wait/FYI), generating context-aware AI replies using GPT-4, and providing a unified control center for cross-platform communication. Overcame significant challenges including proper HTML email rendering for marketing content, implementing comprehensive payment enforcement across all security layers to prevent unauthorized API usage, and building a scalable subscription system with Stripe integration. The architecture emphasizes a hub-first approach where users review and approve AI actions rather than full automation.`,
      cover: codeImg,
    },
    {
      title: 'Vexxent Automation Platform',
      external: 'https://vexxent.com',
      github: '#',
      tech: ['Node.js', 'n8n', 'Firebase', 'DigitalOcean', 'React'],
      html: `A self-hosted automation engine designed to bridge the gap between technical workflow automation and user-friendly product delivery. Built on a custom n8n instance running on DigitalOcean, integrated with Firebase Cloud Functions for serverless business logic and Firestore for real-time data synchronization. The key challenge was transforming complex behind-the-scenes automations into polished, production-ready features while maintaining clean separation between the automation layer and the customer-facing React application. This foundation enables rapid feature development and serves as the backbone for intelligent, event-driven workflows.`,
      cover: vexxentImg,
    },
  ];

  return (
    <section id="projects" ref={revealContainer} className="fadeup">
      <h2 className="numbered-heading">Technical Expertise &amp; Projects</h2>

      <StyledProjectsGrid>
        {featuredProjects.map((project, i) => {
          const { title, external, github, tech, html, cover } = project;

          return (
            <StyledProject key={i}>
              <div className="project-content">
                <div>
                  <p className="project-overline">Featured Project</p>

                  <h3 className="project-title">
                    <a href={external} target="_blank" rel="noopener noreferrer">{title}</a>
                  </h3>

                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />

                  {tech.length > 0 && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {github && (
                      <a href={github} aria-label="GitHub Link">
                        <IconGitHub />
                      </a>
                    )}
                    {external && (
                      <a href={external} aria-label="External Link" className="external">
                        <IconExternal />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-image">
                <a href={external ? external : github ? github : '#'} target="_blank" rel="noopener noreferrer">
                  <img src={cover} alt={title} className="img" width="100%" />
                </a>
              </div>
            </StyledProject>
          );
        })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
