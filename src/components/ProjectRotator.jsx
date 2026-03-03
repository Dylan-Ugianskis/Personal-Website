import React, { useState, useRef } from 'react';
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

const MAX_ICONS = 4;

// Shared card body — used in both desktop and mobile views
const CardContent = ({ project, color, status, icons, extraCount }) => (
    <div className="rotator-card-content">
        <div className="rotator-icon">{project.icon}</div>
        <span className="rotator-category" style={{ color: `rgb(${color})` }}>
            {project.category}
        </span>
        <h3 className="rotator-title">{project.title}</h3>
        <p className="rotator-subtitle">{project.subtitle}</p>
        <span
            className="rotator-status"
            style={{ background: status.bg, color: status.text }}
        >
            {status.label}
        </span>
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
                    <span className="rotator-stack-more">+{extraCount}</span>
                )}
            </div>
        )}
    </div>
);

const ProjectRotator = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleScroll = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, clientWidth } = sliderRef.current;
        const cardWidth = clientWidth * 0.8 + 12; // 80vw + gap
        setActiveIndex(Math.round(scrollLeft / cardWidth));
    };

    return (
        <>
            {/* ── DESKTOP: 3D rotating carousel (hidden on mobile) ── */}
            <div className="rotator-wrapper rotator-desktop">
                <div className="rotator-inner" style={{ "--quantity": myProjects.length }}>
                    {myProjects.map((project, index) => {
                        const color = categoryColors[project.category] || "142, 249, 252";
                        const status = statusColors[project.status] || statusColors.built;
                        const icons = project.stack.filter(t => stackIcons[t]).slice(0, MAX_ICONS);
                        const extraCount = project.stack.length - icons.length;

                        return (
                            <div
                                key={project.id}
                                className="rotator-card"
                                style={{ "--index": index, "--color-card": color }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <CardContent
                                    project={project}
                                    color={color}
                                    status={status}
                                    icons={icons}
                                    extraCount={extraCount}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── MOBILE: horizontal snap-scroll card list (hidden on desktop) ── */}
            <div className="rotator-mobile">
                <div
                    className="mobile-slider"
                    ref={sliderRef}
                    onScroll={handleScroll}
                >
                    {myProjects.map((project, index) => {
                        const color = categoryColors[project.category] || "142, 249, 252";
                        const status = statusColors[project.status] || statusColors.built;
                        const icons = project.stack.filter(t => stackIcons[t]).slice(0, MAX_ICONS);
                        const extraCount = project.stack.length - icons.length;

                        return (
                            <div
                                key={project.id}
                                className="mobile-card"
                                style={{ "--color-card": color }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <CardContent
                                    project={project}
                                    color={color}
                                    status={status}
                                    icons={icons}
                                    extraCount={extraCount}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Dot indicators */}
                <div className="mobile-dots">
                    {myProjects.map((_, i) => (
                        <div
                            key={i}
                            className={`mobile-dot ${i === activeIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>

                {/* Card counter */}
                <p className="mobile-counter">
                    {activeIndex + 1} / {myProjects.length}
                </p>
            </div>

            {selectedProject && (
                <ProjectDetails
                    {...selectedProject}
                    closeModal={() => setSelectedProject(null)}
                />
            )}
        </>
    );
};

export default ProjectRotator;
