// PROJECTS
export const myProjects = [
  // ── VEXXENT DEMO SYSTEM ──────────────────────────────────
  {
    id: 1,
    category: "Vexxent Demo System",
    title: "AI Demo Chatbot",
    subtitle: "30-node n8n workflow",
    description:
      "Customer-facing demo with 8-second message buffering, RESTART node, Claude Sonnet 4.5 primary + Gemini fallback, SSE real-time streaming. Deployed on DO droplet.",
    stack: ["n8n", "Claude Sonnet 4.5", "Gemini", "SSE", "PostgreSQL"],
    status: "live",
    icon: "🤖",
    link: "https://claude.ai/chat/71868b3e-0bfd-446e-a6dc-c82ee334773f",
  },
  {
    id: 2,
    category: "Vexxent Demo System",
    title: "Magic Demo Link Generator",
    subtitle: "Prospect onboarding automation",
    description:
      "Prospect fills intake form → n8n scrapes their site → builds vertical-specific AI chatbot → texts them a magic demo link. Full zero-touch pipeline.",
    stack: ["n8n", "Webhooks", "Twilio", "Firecrawl", "PostgreSQL"],
    status: "live",
    icon: "🔗",
    link: "https://claude.ai/chat/71868b3e-0bfd-446e-a6dc-c82ee334773f",
  },
  {
    id: 3,
    category: "Vexxent Demo System",
    title: "Prospect Research Agent",
    subtitle: "Pre-call intel automation",
    description:
      "Triggers on form submission or calendar booking. Crawls prospect website + LinkedIn, cross-references against prior vertical builds, generates strategic automation brainstorm for sales call.",
    stack: ["n8n", "Firecrawl", "Proxycurl", "Claude", "Notion"],
    status: "designed",
    icon: "🔍",
    link: "https://claude.ai/chat/a1fde1e5-9f31-4444-90de-79d7d7b98709",
  },

  // ── VEXXENT BACKEND INFRA ───────────────────────────────
  {
    id: 4,
    category: "Vexxent Backend",
    title: "Custom CRM & REST API",
    subtitle: "PostgreSQL + Express",
    description:
      "Full self-hosted backend: PostgreSQL with contacts, message_buffer, conversation_history tables. Express API at api.vexxent.com, Digital Ocean Spaces, systemd service, CORS for Firebase.",
    stack: ["PostgreSQL", "Express.js", "Digital Ocean", "Firebase", "systemd"],
    status: "live",
    icon: "🗄️",
    link: "https://claude.ai/chat/214c1090-aed8-47ef-b5e1-732c70c05283",
  },
  {
    id: 5,
    category: "Vexxent Backend",
    title: "n8n Docker Stack",
    subtitle: "Self-hosted automation core",
    description:
      "n8n at n8n.vexxent.com on Digital Ocean. Docker + Caddy reverse proxy. Redis for workflow state/caching. Separate instances: Vexxent ops on DO, Rupert internal on Hostinger.",
    stack: ["Docker", "Caddy", "Redis", "Digital Ocean", "Hostinger"],
    status: "live",
    icon: "⚙️",
    link: "https://claude.ai/chat/a12838de-aae1-4c04-97c4-eca682ad5f7d",
  },
  {
    id: 6,
    category: "Vexxent Backend",
    title: "Tailscale Zero-Trust Network",
    subtitle: "Secure private mesh across all VMs",
    description:
      "Tailscale mesh connecting DO + Hostinger VMs. OpenClaw gateway on loopback with Tailscale Serve HTTPS proxy. CRM, n8n, and agent Control UI all Tailscale-only — no public exposure.",
    stack: ["Tailscale", "OpenClaw", "VPN Mesh", "HTTPS Proxy"],
    status: "live",
    icon: "🔒",
    link: "https://claude.ai/chat/1c250089-7297-45bd-b24b-c05b730e1229",
  },

  // ── RUPERT / OPENCLAW AGENT ─────────────────────────────
  {
    id: 7,
    category: "Rupert Agent",
    title: "Rupert Executive Agent",
    subtitle: "OpenClaw + Kimi K2.5 on Hostinger",
    description:
      "AI chief of staff on Hostinger VPS. OpenClaw native install, Kimi K2.5 via OpenRouter, WhatsApp as primary interface. Orchestrates Docker containers, CRM writes, and daily briefings.",
    stack: ["OpenClaw", "Kimi K2.5", "OpenRouter", "WhatsApp", "Tailscale"],
    status: "in-progress",
    icon: "🦾",
    link: "https://claude.ai/chat/1c250089-7297-45bd-b24b-c05b730e1229",
  },
  {
    id: 8,
    category: "Rupert Agent",
    title: "Daily Lead Research Cron",
    subtitle: "5am autonomous prospect briefing",
    description:
      "Cron triggers at 5am: Rupert spins up parallel Docker sandbox containers to research Portland prospects, writes results to CRM, sends a prioritized 6am WhatsApp briefing.",
    stack: ["Docker", "Cron", "FastAPI", "SQLite", "WhatsApp"],
    status: "built",
    icon: "📋",
    link: "https://claude.ai/chat/1c250089-7297-45bd-b24b-c05b730e1229",
  },
  {
    id: 9,
    category: "Rupert Agent",
    title: "FastAPI CRM Dashboard",
    subtitle: "Dark-theme internal CRM",
    description:
      "Custom CRM built autonomously by Rupert using Kimi K2.5. FastAPI backend on port 8000, dark-theme dashboard on port 8080, SQLite storage. Includes lead status, briefing history, and contact timeline.",
    stack: ["FastAPI", "SQLite", "Python", "Docker", "Tailscale"],
    status: "built",
    icon: "📊",
    link: "https://claude.ai/chat/1c250089-7297-45bd-b24b-c05b730e1229",
  },

  // ── CLAWBOT / EMAIL AUTOMATION ──────────────────────────
  {
    id: 10,
    category: "Clawbot Email",
    title: "AI Email Classifier",
    subtitle: "Intelligent inbox triage",
    description:
      "Replaces keyword rules with Kimi K2.5. Classifies into 4 tiers (marketing / low / action_required / high). Outputs summary, proposed response, key entities, and action items per email.",
    stack: ["n8n", "Kimi K2.5", "Outlook", "SQLite", "WhatsApp"],
    status: "built",
    icon: "📧",
    link: "https://claude.ai/chat/056a9fdb-4d66-4c16-bdd3-0c14a898d56f",
  },
  {
    id: 11,
    category: "Clawbot Email",
    title: "Email Queue Collector",
    subtitle: "15-min Outlook polling pipeline",
    description:
      "Scheduled n8n workflow polling unread Outlook emails every 15 minutes into SQLite queue. Null-safe field handling, proper SQL escaping, cleanup of 72hr+ processed records.",
    stack: ["n8n", "Outlook", "SQLite", "Cron"],
    status: "built",
    icon: "📬",
    link: "https://claude.ai/chat/83fad78e-a64f-43f4-aed6-ce37342a51da",
  },
  {
    id: 12,
    category: "Clawbot Email",
    title: "Job Opportunity Filter Agent",
    subtitle: "AI quality gate for recruiting emails",
    description:
      "GPT-4o-mini screens out D2D sales, MLM, commission-only, and recruiting spam before expensive analysis runs. ~$0.00015/email. Routes filtered mail to dedicated Outlook folders.",
    stack: ["n8n", "GPT-4o-mini", "Outlook", "OpenRouter"],
    status: "built",
    icon: "🎯",
    link: "https://claude.ai/chat/6e40338c-3a95-4911-aa6f-9af7992d9fb3",
  },
  {
    id: 13,
    category: "Clawbot Email",
    title: "Personal Inbox Zero Agent",
    subtitle: "11-category lifestyle email sorter",
    description:
      "Full inbox zero pipeline: Food & Dining Deals, Shopping Deals, Travel & Entertainment, Financial & Bills, Job Hunting, and more. Claude 3.5 Sonnet handles phishing analysis.",
    stack: ["n8n", "Outlook", "Claude 3.5", "GPT-4.1-mini", "OpenRouter"],
    status: "built",
    icon: "✉️",
    link: "https://claude.ai/chat/fbe825d6-d4e0-45a2-bb2a-f2163df077b5",
  },

  // ── EXECUTIVE ASSISTANT WORKFLOWS ──────────────────────
  {
    id: 14,
    category: "Executive Assistant",
    title: "WhatsApp Executive Assistant",
    subtitle: "5-workflow AI chief of staff",
    description:
      "n8n system controlled via WhatsApp: email classification (Dan Martell playbook), calendar management, Perplexity research, and 2x daily email processing at 9am & 4pm. Gmail + Outlook.",
    stack: ["n8n", "WhatsApp", "Claude", "Perplexity", "Outlook", "Gmail"],
    status: "built",
    icon: "📱",
    link: "https://claude.ai/chat/b1c6d201-d720-4498-bcc4-c08289b002b7",
  },
  {
    id: 15,
    category: "Executive Assistant",
    title: "AI Workflow Builder Agent",
    subtitle: "LLM that writes n8n workflows",
    description:
      "Chat with a Claude agent that creates, edits, debugs, and deploys n8n workflows via the n8n API. Redis caching for docs. Evolved through 8 iterations to a streamlined 5-tool chat interface.",
    stack: ["n8n", "Claude", "Redis", "LangChain", "n8n API"],
    status: "built",
    icon: "🏗️",
    link: "https://claude.ai/chat/c3d887ea-6f2e-49a3-afe2-9d8a06d15bca",
  },
  {
    id: 16,
    category: "Executive Assistant",
    title: "n8n Workflow Generator (Claude Project)",
    subtitle: "Spec-to-JSON workflow architect",
    description:
      "Claude Project instructions that turn natural language into valid n8n workflow JSON. Generates inline node docs, Mermaid diagrams, section breakdowns, test cases, and troubleshooting guides.",
    stack: ["Claude Project", "n8n", "JSON", "Mermaid"],
    status: "built",
    icon: "📐",
    link: "https://claude.ai/chat/683063f4-bf31-4038-bb6c-4c95a9c43260",
  },

  // ── CONTENT / INSTAGRAM ─────────────────────────────────
  {
    id: 17,
    category: "Content Pipeline",
    title: "Instagram Content Pipeline",
    subtitle: "Slack-based creative assistant",
    description:
      "Chat with a Slack bot to generate, iterate, and approve Instagram posts. Gemini 2.0 Flash for image generation (0.89 prompt adherence vs DALL-E 0.76), Firebase Storage, Firestore logging.",
    stack: ["n8n", "Gemini 2.0", "Slack", "Firebase", "Firestore"],
    status: "built",
    icon: "📸",
    link: "https://claude.ai/chat/d65fbba7-a1f5-4a03-a974-e1f4889f133e",
  },
  {
    id: 18,
    category: "Content Pipeline",
    title: "Avatar Transformation Content",
    subtitle: "AI split-screen ad generation",
    description:
      "Automated marketing content: HeyGen avatar + Gemini/NanoBanana generate split-screen before/after transformation images showing AI-powered vs manual offices. JSON output feeds n8n posting.",
    stack: ["HeyGen", "Gemini", "NanoBanana", "n8n", "JSON"],
    status: "built",
    icon: "🎭",
    link: "https://claude.ai/chat/5e3f5bd0-51fc-4c6d-9f66-1f476e78cd7a",
  },
  {
    id: 19,
    category: "Content Pipeline",
    title: "UGC Telegram Ad Bot",
    subtitle: "Multi-model video ad generator",
    description:
      "Telegram bot: user sends prompt → selects pipeline (Veo / Sora / Nano+Veo) → generates UGC ad. Loop protection (30 max iterations), 401 auth detection, GCS storage, error feedback to user.",
    stack: ["Telegram", "Google Veo", "Sora", "Fal.ai", "GCS"],
    status: "built",
    icon: "🎬",
    link: "https://claude.ai/chat/c8bc03f4-3a5d-48ce-9d6e-9eabce0c0fbf",
  },
  {
    id: 20,
    category: "Content Pipeline",
    title: "YouTube Shorts Automation Bot",
    subtitle: "3x daily autonomous posting",
    description:
      "Autonomous Shorts pipeline: AI generates topics → Runway ML creates video → auto-uploads 3x/day. Async polling pattern for Runway API, proper n8n trigger separation per workflow.",
    stack: ["n8n", "Runway ML", "YouTube API", "Claude"],
    status: "designed",
    icon: "▶️",
    link: "https://claude.ai/chat/e1263ca7-b90c-41a4-a491-a066306b31ab",
  },

  // ── B2B / HIGHLAND LABS ─────────────────────────────────
  {
    id: 21,
    category: "B2B & Sales",
    title: "B2B Procurement Automation",
    subtitle: "Supplier research to inbox highlight",
    description:
      "Firecrawl scrapes supplier emails → Claude drafts outreach sent from MS365 account → purchasing manager approves → Claude analyzes responses, highlights top picks in inbox. Built for $10-15k client engagement.",
    stack: ["Firecrawl", "Claude", "MS365", "n8n", "Python"],
    status: "designed",
    icon: "🏭",
    link: "https://claude.ai/chat/574a3b06-67dc-4ab5-b01c-fb4d959da258",
  },
  {
    id: 22,
    category: "B2B & Sales",
    title: "Highland Labs Demo Coordinator",
    subtitle: "Retail in-store demo outreach",
    description:
      "Automated email templates for scheduling in-store product demos at independent retailers. Handles multi-contact stores, travel logistics, and equipment needs per location.",
    stack: ["Email Templates", "CRM", "Outlook"],
    status: "active",
    icon: "🏪",
    link: "https://claude.ai/chat/dc79c94a-0fd7-4da8-8d04-b00b8a9d0f1d",
  },
  {
    id: 23,
    category: "B2B & Sales",
    title: "AI Receptionist Sales Script",
    subtitle: "Insurance agency vertical outreach",
    description:
      "Full insurance-focused sales script package: cold email, LinkedIn, phone scripts, objection handling, closing sequences, and follow-up templates. ROI calc based on avg commission per policy.",
    stack: ["Sales Scripts", "Vexxent", "ulio.ai", "Insurance"],
    status: "active",
    icon: "📞",
    link: "https://claude.ai/chat/c9eb7ae5-b6e5-49d7-adee-d677f2a13c86",
  },

  // ── LUV MIX / SHOPIFY ───────────────────────────────────
  {
    id: 24,
    category: "Luv Mix / Shopify",
    title: "Luv Mix Homepage Redesign",
    subtitle: "Shopify theme for protein baking mix",
    description:
      "Full homepage redesign competing with Kodiak Cakes. Hero, stats bar, featured product with subscription pricing, horizontal product carousel, recipe grid, founder story. 27g bioavailable protein positioning.",
    stack: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    status: "built",
    icon: "🥞",
    link: "https://claude.ai/chat/92eea1f8-12f0-4da3-a709-4ce38ebf88d4",
  },

  // ── VEXXENT MARKETING ───────────────────────────────────
  {
    id: 25,
    category: "Vexxent Marketing",
    title: "Vexxent Promo Video",
    subtitle: "AI receptionist product demo animation",
    description:
      "Replit animation showing AI receptionist handling a live restaurant reservation. Story-driven scenes with chat interface UI, typing indicators, dynamic soundwaves. Restaurant booking scenario.",
    stack: ["Replit", "Animation", "Brand Design"],
    status: "built",
    icon: "🎥",
    link: "https://claude.ai/chat/b6952691-74ff-4ec6-a351-aa5bcca08eff",
  },
  {
    id: 26,
    category: "Vexxent Marketing",
    title: "Multi-Tenant AI Agency Architecture",
    subtitle: "Scalability blueprint for Vexxent",
    description:
      "Architecture design for managing multiple clients in n8n without per-client copy-paste. Dynamic credential switching, sub-workflow routing, and external credential storage pattern for 20+ client scale.",
    stack: ["n8n", "Architecture", "Multi-tenant", "PostgreSQL"],
    status: "designed",
    icon: "🏢",
    link: "https://claude.ai/chat/e4ecee7f-dfeb-4e15-b539-3648e5fe7616",
  },
];

// SOCIALS
export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/VERIDIITE", // Assuming same github
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/dylan-ugianskis/", // Updated based on name, but best guess or from provided text if available. User didn't provide specific URL, but icon is there.
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Email",
    href: "mailto:Dylanugi@outlook.com",
    icon: "/assets/socials/email.svg", // Need to ensure this icon exists or use a generic one
  },
];

// WORK EXPERIENCE

export const experiences = [
  {
    title: "Territory Sales Associate",
    job: "Highland Laboratories",
    date: "Oct 2024 — Present",
    contents: [
      "Spearheading a sales campaign through outbound cold calling and cold emailing to open new retail doors with independent stores and local practitioners.",
      "Handling full store/client onboarding including stock management, delivery coordination, and ensuring new accounts are set up for success.",
      "Executing a New Store Success Plan for each new door: staff training, shelf placement audits, merchandising resources, and follow-up support.",
      "Documenting all demos, trainings, and store visits in CRM within 48 hours with structured weekly summaries of activity, wins, and next steps.",
      "Targeting 3x opening order in reorders within 6 months and 6x within 12 months per new door, while driving improved time-to-first-reorder.",
    ],
  },
  {
    title: "Account Manager",
    job: "Highland Laboratories",
    date: "Jun 2024 — Sep 2024",
    contents: [
      "Developed and maintained B2B relationships with independent retailers across the US.",
      "Spearheaded outbound prospecting and cold-call campaigns to identify and convert new wholesale accounts.",
      "Leveraged digital tools to track sales activities.",
    ],
  },
  {
    title: "Retail Sales Specialist",
    job: "Advantage Solutions",
    date: "Jun 2023 — Sep 2023",
    contents: [
      "Coordinated with managers to address stock issues, improving availability and reducing shortages.",
      "Traveled extensively ensuring products were correctly faced, enhancing customer satisfaction by 30%.",
    ],
  },
  {
    title: "Merchandise",
    job: "Costco Wholesale",
    date: "Jun 2021 — Aug 2021",
    contents: [
      "Enhanced store presentation and maintained a clean work environment.",
      "Ensured timely store opening procedures and optimized product availability to support sales goals.",
    ],
  },
];

// EDUCATION
export const education = [
  {
    title: "B.S. Computer Science",
    job: "Oregon State University",
    date: "2024",
    contents: [
      "Focus: Cyber Security — specializing in secure software development, network architecture, and defensive security practices.",
      "Capstone: eGrape — AI-powered multi-vendor e-commerce platform simplifying complex pricing models for construction and landscaping.",
      "Relevant coursework: Network Security, Cryptography, Operating Systems, Data Structures & Algorithms, Software Engineering, Database Systems.",
    ],
  },
];
