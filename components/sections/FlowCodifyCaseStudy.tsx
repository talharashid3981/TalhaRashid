import CaseStudyTitle from "./CaseStudyTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, Code2, ExternalLink, Home, Layers3, LockKeyhole, Pencil, Rocket, Sparkles } from "lucide-react";

const challenges = [
  "Supporting natural-language prompts, visual wireframes, and logic flowcharts as different starting points for one product workflow.",
  "Keeping generated code editable through preview, download, version selection, rollback, and export instead of treating generation as a one-off result.",
  "Managing authenticated projects, conversation history, ownership checks, and generation credits across the client and API.",
  "Making generated output easy to inspect, preview, share, execute, and publish without exposing the compiler service directly to the public internet.",
];

const highlights = [
  "React/Vite owns the interactive workspace while Express centralizes authentication, persistence, generation, billing, sharing, and operational middleware.",
  "Generated output is persisted as versioned records with active-version selection, rollback, prompts, language/framework metadata, and assistant history.",
  "Generation requests use queueing, cancellation, timeouts, retries, rate limits, streaming prompt output, and provider-failure fallbacks.",
  "Code execution is delegated to a Docker-managed private Piston-compatible service with language validation, size limits, timeouts, and authorization.",
];

const features = [
  [Sparkles, "Prompt-to-Code Workspace", "Users can describe websites or applications and request HTML, React, or Vue output that remains editable and previewable."],
  [Layers3, "Wireframe-to-Code Studio", "Visual page structures and interface elements can be saved as project data and converted into editable HTML or React output."],
  [Code2, "Flowchart-to-Code Studio", "Start, process, decision, input/output, and end nodes can be connected into logic paths and converted into language-specific code."],
  [Rocket, "Canvas, Execution, and Sharing", "The shared canvas combines preview, terminal-style execution, version history, rollback, shareable workspaces, and GitHub export."],
] as const;

const insights = [
  "Generated artifacts should stay structured with prompts, versions, language, framework metadata, and assistant messages rather than only the latest code string.",
  "AI generation is an asynchronous system that needs queueing, cancellation, timeout handling, retries, rate limits, and fallback output.",
  "Ownership checks should be part of route design so project reads, edits, generation, rollback, sharing, and execution remain user-scoped.",
  "Execution should remain separate from the application API so the backend can validate languages, code size, input size, timeouts, and authorization first.",
];

export default function FlowCodifyCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">FlowCodify</span></nav><span className="case-study-period"><Clock3 size={13} /> Visual-to-Code Platform</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">Visual-to-Code</span><span className="case-study-badge">Developer Tools</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo flowcodify-logo"><Image src="/flowcodify.svg" alt="FlowCodify logo" width={72} height={72} /></div><div className="min-w-0 flex-1"><CaseStudyTitle slug="flowcodify" /><p>A visual-to-code workspace for turning prompts, wireframes, and flowcharts into editable, previewable code.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Full-Stack Developer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Software Development Tools &amp; Web Applications</strong></div><a className="case-study-primary-button" href="https://flowcodify.app/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["React 19", "Vite", "React Router", "Redux Toolkit", "Tailwind CSS", "React Konva", "XYFlow React", "Express 5", "MongoDB", "JWT", "OAuth", "Stripe", "Docker"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>Turning Product Ideas Into Working Code</span></div><h2>One Workspace for Prompts, Diagrams and Prototypes</h2><p>Early product work often moves through disconnected tools: a written idea becomes a diagram, the diagram is recreated in a design tool, and implementation starts again in an editor. FlowCodify brings prompt-based generation, flowchart modeling, wireframe design, code editing, preview, execution, sharing, and export into one authenticated workspace.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Code2 size={16} /><span>The Engineering Solution</span></div><h2>A Full-Stack Visual-to-Code Development Platform</h2><p>FlowCodify uses a React/Vite single-page client backed by an Express API. Dedicated experiences cover Prompt, Wireframe, Flowchart, Code Canvas, profile, billing, documentation, and administration. MongoDB stores users, flowcharts, wireframes, prompt workspaces, generated code, pages, and share records. Authentication supports JWT authorization alongside Google and GitHub OAuth, while OpenAI-compatible chat completions power generation and updates.</p><div className="case-study-highlight"><h3><LockKeyhole size={17} /> Verified Architectural Decisions &amp; Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Pencil size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Visual Planning and Runnable Output</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><Rocket size={16} /><span>Verified Project Outcomes</span></div><h2>A Connected Product Development Workflow</h2><p>No production analytics, customer counts, revenue figures, performance percentages, or adoption metrics are available. These outcomes describe capabilities verified in the implementation.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>3</strong><b>Creation Paths</b><span>Prompt, wireframe, and flowchart workflows support different product inputs.</span></div><div className="case-study-outcome"><strong>Versions</strong><b>Safer Iteration</b><span>Active versions, history, and rollback preserve earlier generated states.</span></div><div className="case-study-outcome"><strong>Private</strong><b>Controlled Execution</b><span>Authenticated code execution stays behind a private runner boundary.</span></div><div className="case-study-outcome"><strong>Share</strong><b>Connected Delivery</b><span>Publishing, GitHub export, billing credits, and sharing connect output to next steps.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the visual-to-code workspace and development workflow</p></div><div className="case-study-live-links"><a href="https://flowcodify.app/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><span className="case-study-tech">Private Repository</span></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
