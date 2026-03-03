import React, { useState } from 'react';
import './ProjectRotator.css';
import { myProjects } from '../constants';
import ProjectDetails from './ProjectDetails';

const statusColors = {
    live: { bg: 'rgba(34, 197, 94, 0.2)', text: '#22c55e', label: 'Live' },
    built: { bg: 'rgba(59, 130, 246, 0.2)', text: '#3b82f6', label: 'Built' },
    'in-progress': { bg: 'rgba(251, 191, 36, 0.2)', text: '#fbbf24', label: 'In Progress' },
    designed: { bg: 'rgba(168, 85, 247, 0.2)', text: '#a855f7', label: 'Designed' },
    active: { bg: 'rgba(20, 184, 166, 0.2)', text: '#14b8a6', label: 'Active' },
};

const categoryColors = {
    "Vexxent Demo System": "142, 249, 252",
    "Vexxent Backend": "52, 211, 153",
    "Rupert Agent": "251, 191, 36",
    "Clawbot Email": "248, 113, 113",
    "Executive Assistant": "167, 139, 250",
    "Content Pipeline": "251, 146, 60",
    "B2B & Sales": "96, 165, 250",
    "Luv Mix / Shopify": "244, 114, 182",
    "Vexxent Marketing": "45, 212, 191",
};

// Map tech stack names to available SVG/PNG logos
const stackIcons = {
    "n8n": "/assets/logos/NPM.svg",
    "PostgreSQL": "/assets/logos/PostgresSQL.svg",
    "Express.js": "/assets/logos/Node.js.svg",
    "Digital Ocean": "/assets/logos/Digital Ocean.svg",
    "Firebase": "/assets/logos/Google Cloud.svg",
    "Docker": "/assets/logos/git.svg",
    "Redis": "/assets/logos/Node.js.svg",
    "Node.js": "/assets/logos/Node.js.svg",
    "React": "/assets/logos/react.svg",
    "Python": "/assets/logos/javascript.svg",
    "FastAPI": "/assets/logos/Node.js.svg",
    "SQLite": "/assets/logos/sqlite.svg",
    "Outlook": "/assets/logos/ms-outlook-svgrepo-com.svg",
    "Gmail": "/assets/logos/gmail-svgrepo-com.svg",
    "Claude": "/assets/logos/openai-svgrepo-com.svg",
    "Claude Sonnet 4.5": "/assets/logos/openai-svgrepo-com.svg",
    "Claude 3.5": "/assets/logos/openai-svgrepo-com.svg",
    "Claude Project": "/assets/logos/openai-svgrepo-com.svg",
    "GPT-4o-mini": "/assets/logos/openai-svgrepo-com.svg",
    "GPT-4.1-mini": "/assets/logos/openai-svgrepo-com.svg",
    "Gemini": "/assets/logos/Google Cloud.svg",
    "Gemini 2.0": "/assets/logos/Google Cloud.svg",
    "Kimi K2.5": "/assets/logos/openai-svgrepo-com.svg",
    "Slack": "/assets/logos/Slack.svg",
    "JSON": "/assets/logos/JSON.svg",
    "JavaScript": "/assets/logos/javascript.svg",
    "HTML/CSS": "/assets/logos/html5.svg",
    "Shopify": "/assets/logos/Salesforce.svg",
    "Stripe": "/assets/logos/stripe.svg",
    "MS365": "/assets/logos/microsoft.svg",
    "Tailscale": "/assets/logos/azure.svg",
    "GitHub": "/assets/logos/GitHub.svg",
    "OpenRouter": "/assets/logos/openai-svgrepo-com.svg",
    "LangChain": "/assets/logos/Node.js.svg",
    "Firecrawl": "/assets/logos/Google Cloud.svg",
    "Google Veo": "/assets/logos/Google Cloud.svg",
};

const MAX_ICONS = 4; // Show at most 4 icons per card

const ProjectRotator = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="rotator-wrapper min-h-[500px]">
            <div className="rotator-inner" style={{ "--quantity": myProjects.length }}>
                {myProjects.map((project, index) => {
                    const color = categoryColors[project.category] || "142, 249, 252";
                    const status = statusColors[project.status] || statusColors.built;

                    // Get icons for this project's stack (only ones we have SVGs for)
                    const icons = project.stack
                        .filter(tech => stackIcons[tech])
                        .slice(0, MAX_ICONS);
                    const extraCount = project.stack.length - icons.length;

                    return (
                        <div
                            key={project.id}
                            className="rotator-card"
                            style={{
                                "--index": index,
                                "--color-card": color
                            }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="rotator-card-content">
                                {/* Glowing emoji icon */}
                                <div className="rotator-icon">{project.icon}</div>

                                {/* Category label */}
                                <span
                                    className="rotator-category"
                                    style={{ color: `rgb(${color})` }}
                                >
                                    {project.category}
                                </span>

                                {/* Title */}
                                <h3 className="rotator-title">{project.title}</h3>

                                {/* Subtitle */}
                                <p className="rotator-subtitle">{project.subtitle}</p>

                                {/* Status badge */}
                                <span
                                    className="rotator-status"
                                    style={{
                                        background: status.bg,
                                        color: status.text,
                                    }}
                                >
                                    {status.label}
                                </span>

                                {/* Tech stack icons */}
                                {icons.length > 0 && (
                                    <div className="rotator-stack">
                                        {icons.map((tech, i) => (
                                            <img
                                                key={i}
                                                src={stackIcons[tech]}
                                                alt={tech}
                                                title={tech}
                                                className="rotator-stack-icon"
                                            />
                                        ))}
                                        {extraCount > 0 && (
                                            <span className="rotator-stack-more">
                                                +{extraCount}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedProject && (
                <ProjectDetails
                    {...selectedProject}
                    closeModal={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default ProjectRotator;

