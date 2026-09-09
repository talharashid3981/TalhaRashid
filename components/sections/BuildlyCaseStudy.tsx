import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, Code2, ExternalLink, GitBranch, Home, Pencil, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const challenges = [
  "Converting an open-ended natural-language request into valid responsive HTML with layout, navigation, forms, animations, and visible initial content.",
  "Preserving an existing generated website while applying follow-up changes instead of replacing the editing workflow with isolated generations.",
  "Managing authenticated user projects, conversation history, ownership checks, and generation credits across the client and API.",
  "Making generated output easy to inspect, preview, share, and access through a public route without separate project setup for every website.",
];

const highlights = [
  "Separated the Vite/React client and Express API so AI orchestration, persistence, authentication, and ownership checks remain server-side.",
  "MongoDB document models store users and websites, including timestamped prompt/AI messages alongside the latest generated code.",
  "Server-side ownership checks ensure users can retrieve, update, list, and publish only their own projects.",
  "Structured JSON responses are parsed and validated before generated or updated HTML is persisted.",
];

const features = [
  [Sparkles, "Natural-Language Website Generation", "Users submit a website brief and receive a complete HTML document through the backend OpenRouter integration."],
  [Pencil, "Conversational Website Editing", "Follow-up requests update the current HTML while preserving the project conversation history."],
  [Code2, "Preview and Source Inspection", "Generated output renders in an iframe and can be inspected or manually adjusted in Monaco Editor."],
  [Rocket, "Project Dashboard and Publishing", "Authenticated users manage saved websites, publish projects, copy links, and load public slug routes."],
] as const;

const insights = [
  "AI-generated code needs a strict response contract; validating JSON and generated code makes the pipeline easier to reason about.",
  "Iterative editing is a state-management problem as much as a prompt-design problem; latest HTML and conversation context should stay together.",
  "Generated content should be treated as an owned resource through JWT authentication and user-scoped MongoDB queries.",
  "Preview and publish should be explicit product states, separating private editor drafts from public shareable routes.",
];

export default function BuildlyCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">Buildly</span></nav><span className="case-study-period"><Clock3 size={13} /> Generative AI</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">Generative AI</span><span className="case-study-badge">Developer Tools</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo"><Image src="/openai.svg" alt="Buildly logo" width={64} height={64} className="h-full w-full object-contain p-2" /></div><div className="min-w-0 flex-1"><h1>Buildly</h1><p>AI-powered website generation, editing, and publishing platform.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Full-Stack Software Engineer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Software Development Tools &amp; Generative AI</strong></div><a className="case-study-primary-button" href="https://buildly-peach.vercel.app" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["React 19", "Vite", "Tailwind CSS", "React Router", "Redux Toolkit", "Express 5", "MongoDB", "Firebase Auth", "JWT", "OpenRouter API", "Monaco Editor"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>Turning a Website Idea into a Usable First Version</span></div><h2>From Natural-Language Brief to Editable Website</h2><p>People with a clear website idea still face a gap between describing what they want and producing a responsive, editable implementation. Buildly addresses that workflow by letting authenticated users describe a website in natural language, receive generated HTML, refine it through follow-up prompts, inspect the source, and publish a public preview from one workspace.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Code2 size={16} /><span>The Engineering Solution</span></div><h2>A Prompt-to-Publish Web Application</h2><p>Buildly uses a React/Vite single-page client with protected routes for the dashboard, generation flow, and website editor. The Express backend exposes authentication, user state, website generation, updates, retrieval, and publishing endpoints. MongoDB stores users and generated websites, while Firebase handles Google sign-in and the backend issues seven-day JWTs in HTTP-only cookies. OpenRouter generates structured HTML responses, Monaco Editor provides source inspection, and public slugs serve published websites.</p><div className="case-study-highlight"><h3><ShieldCheck size={17} /> Verified Architectural Decisions &amp; Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Pencil size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Generation, Editing and Publishing</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><Rocket size={16} /><span>Verified Project Outcomes</span></div><h2>A Complete AI Website Workflow</h2><p>No production analytics, user counts, revenue figures, performance measurements, or business outcomes are available. These outcomes describe only capabilities verified in the implementation.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>AI</strong><b>Prompt-to-HTML</b><span>Natural-language briefs produce saved website documents through the generation workflow.</span></div><div className="case-study-outcome"><strong>Edit</strong><b>Prompt-Based Iteration</b><span>Follow-up requests update current HTML while retaining conversation context.</span></div><div className="case-study-outcome"><strong>Owned</strong><b>Project Workspace</b><span>Authenticated users manage their own generated website records.</span></div><div className="case-study-outcome"><strong>Live</strong><b>Public Publishing</b><span>Saved websites can be exposed through shareable slug-based routes.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the AI website generation and publishing workflow</p></div><div className="case-study-live-links"><a href="https://buildly-peach.vercel.app" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><a href="https://github.com/talharashid3981/Buildly" target="_blank" rel="noreferrer"><GitBranch size={14} /> GitHub <ExternalLink size={12} /></a></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
