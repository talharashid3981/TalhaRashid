import CaseStudyTitle from "./CaseStudyTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, ExternalLink, GitBranch, Home, Mic, ShieldCheck, Sparkles, UserRound, Zap } from "lucide-react";

const challenges = [
  "Users needed a simple way to interact with the assistant through spoken commands as well as application-driven requests.",
  "Search, media requests, date and time questions, and general conversation needed predictable intent classification.",
  "The assistant needed a user-defined name and avatar so the experience could be configured for an individual user.",
  "User accounts, assistant settings, and command history needed to persist across sessions without exposing passwords or client-managed tokens.",
];

const highlights = [
  "Gemini returns a constrained JSON shape with intent type, cleaned input, and response text so the backend can route commands consistently.",
  "Gemini credentials and prompt construction remain on the server behind the protected /api/user/asktoassistant endpoint.",
  "JWT verification is centralized in authentication middleware while protected endpoints retrieve the authenticated user through req.userId.",
  "MongoDB stores identity, assistant name, avatar URL, timestamps, and command history while Cloudinary handles image storage.",
];

const features = [
  [UserRound, "Personalized Assistant Profile", "Users can select or upload an avatar and assign a custom assistant name that persists with their account."],
  [Mic, "Voice-First Interaction", "Browser speech recognition captures commands and SpeechSynthesis reads responses aloud."],
  [Zap, "Intent-Based Command Execution", "Supported intents can open Google Search, YouTube, Instagram, Facebook, calculator, and weather destinations."],
  [ShieldCheck, "Authenticated History and Accounts", "Sign up, sign in, profile retrieval, command history, and logout are handled through protected API routes."],
] as const;

const insights = [
  "Structured model output makes AI features easier to integrate by creating a stable contract between probabilistic output and deterministic UI behavior.",
  "Authentication belongs at the API boundary, where cookie parsing and JWT verification can protect route operations centrally.",
  "Browser voice APIs require lifecycle coordination for listening, recognition restarts, speech playback, and cleanup.",
  "External media storage keeps profile data lightweight by separating image delivery from user record persistence.",
];

export default function AIVirtualAssistantCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">AI Virtual Assistant</span></nav><span className="case-study-period"><Clock3 size={13} /> AI Application</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">AI Application</span><span className="case-study-badge">Full-Stack Web Application</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo"><Image src="/openai.svg" alt="AI Virtual Assistant logo" width={64} height={64} className="h-full w-full object-contain p-2" /></div><div className="min-w-0 flex-1"><CaseStudyTitle slug="ai-virtual-assistant" /><p>A personalized, voice-enabled AI assistant that converts natural-language commands into conversational responses and browser actions.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Full-Stack Software Engineer &amp; Project Author</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Personal Productivity &amp; AI Software</strong></div><a className="case-study-primary-button" href="https://virtualassistant-wvps.onrender.com/signin" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["React 19", "Vite", "React Router", "Axios", "Tailwind CSS", "Node.js", "Express 5", "MongoDB", "Mongoose", "JWT", "Gemini AI", "Cloudinary", "Web Speech API"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Mic size={16} /><span>Making AI Assistance Personal and Actionable</span></div><h2>Connecting Conversation with Browser Actions</h2><p>Many AI interfaces can return text, but they often leave users to translate that response into the next action. This project combines conversational AI with voice input, spoken output, assistant personalization, and browser-based actions in one authenticated experience.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>The Engineering Solution</span></div><h2>A Focused Full-Stack Workflow for Personalized AI Commands</h2><p>The React and Vite client connects to an Express REST API. The backend authenticates users, stores account and assistant profile data in MongoDB through Mongoose, and brokers requests to Gemini. Browser speech recognition captures commands while speech synthesis reads responses aloud. Gemini returns structured JSON containing an intent type, cleaned input, and response text, which the backend validates before supported intents open services such as search, media, social, calculator, or weather destinations.</p><div className="case-study-highlight"><h3><Sparkles size={17} /> Verified Architectural Decisions &amp; Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Zap size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Voice, Personalization and Action</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><Zap size={16} /><span>Verified Project Outcomes</span></div><h2>A Protected and Personalized AI Workflow</h2><p>No user, revenue, performance, or production-usage metrics are available. These outcomes describe implemented product behavior without inventing numerical claims.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>Profile</strong><b>Configurable Identity</b><span>Users can save an assistant name and avatar to their account.</span></div><div className="case-study-outcome"><strong>Voice</strong><b>Hands-Free Interaction</b><span>Speech input and output connect browser voice APIs to the assistant.</span></div><div className="case-study-outcome"><strong>API</strong><b>Protected Gemini Integration</b><span>User commands pass through authenticated server-side orchestration.</span></div><div className="case-study-outcome"><strong>Actions</strong><b>Intent Routing</b><span>Supported intents can open search, media, calculator, social, and weather destinations.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the voice-enabled AI assistant experience</p></div><div className="case-study-live-links"><a href="https://virtualassistant-wvps.onrender.com/signin" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><a href="https://github.com/talharashid3981/virtualAssistant" target="_blank" rel="noreferrer"><GitBranch size={14} /> GitHub <ExternalLink size={12} /></a></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
