import CaseStudyTitle from "./CaseStudyTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, Code2, ExternalLink, GitBranch, Home, Music2, Search, Sparkles, TrendingUp, Volume2 } from "lucide-react";

const challenges = [
  "Converting a static Spotify-inspired layout into an interactive application.",
  "Loading live track data from an external music API.",
  "Connecting selected tracks to browser-based audio playback.",
  "Maintaining a responsive interface without changing the core visual structure.",
];

const highlights = [
  "Reusable JavaScript rendering functions generate music cards dynamically.",
  "The iTunes Search API provides live track metadata and preview URLs.",
  "The HTML5 Audio API handles play, pause, seeking, volume, and playback events.",
  "Client-side queue management supports next, previous, shuffle, repeat, and recently played behavior.",
];

const features = [
  [Music2, "Live Music Discovery", "Loads track metadata, artwork, artist names, and preview URLs from the iTunes Search API."],
  [Search, "Search-Based Track Discovery", "Users can search for music through the top navigation search field without leaving the application."],
  [Volume2, "Browser Audio Player", "Selected tracks play directly in the browser through the HTML5 Audio API with progress and volume controls."],
  [Sparkles, "Queue and Playback State", "Next, previous, shuffle, repeat, and recently played functionality create a complete streaming-style interaction model."],
] as const;

const insights = [
  "A static interface becomes significantly more useful when rendering, interaction, and state management are separated into reusable JavaScript functions.",
  "External APIs require graceful fallback behavior because network availability and response data cannot always be guaranteed.",
  "The HTML5 Audio API provides enough functionality for a lightweight music preview experience without a custom streaming backend.",
  "Preserving an existing visual structure while improving functionality requires carefully adding behavioral hooks instead of rebuilding the interface unnecessarily.",
];

export default function SpotifyCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">Spotify Clone</span></nav><span className="case-study-period"><Clock3 size={13} /> Frontend Project</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">Music</span><span className="case-study-badge">Frontend Web Application</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo spotify-logo"><Image src="/spotify.svg" alt="Spotify logo" fill sizes="72px" className="object-contain p-2" /></div><div className="min-w-0 flex-1"><CaseStudyTitle slug="spotify-clone" /><p>A responsive music discovery interface with live track search and browser-based audio preview playback.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Solo Developer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Music &amp; Entertainment Technology</strong></div><a className="case-study-primary-button" href="https://talharashid3981.github.io/Spotify-Clone/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["HTML5", "CSS3", "JavaScript", "HTML5 Audio API", "iTunes Search API", "Font Awesome", "Google Fonts"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Music2 size={16} /><span>Building a Familiar Music Discovery Experience</span></div><h2>Turning a Static Music Layout into an Interactive Product</h2><p>Music streaming platforms need to help users quickly discover content, search for tracks, and interact with media through a clear and responsive interface. This project explored how a Spotify-inspired web experience could be implemented with client-side technologies and publicly available music preview data.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Code2 size={16} /><span>The Engineering Solution</span></div><h2>A Client-Side Music Discovery and Playback System</h2><p>The project was engineered as a static frontend application using HTML, CSS, and vanilla JavaScript. The interface loads music preview data from the iTunes Search API and dynamically renders track cards across multiple sections. When a user selects a track, JavaScript updates the player metadata, artwork, audio source, queue state, and playback controls through the HTML5 Audio API.</p><div className="case-study-highlight"><h3><Code2 size={17} /> Verified Engineering Decisions</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Sparkles size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Search, Playback &amp; Discovery</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><TrendingUp size={16} /><span>Verified Project Outcomes</span></div><h2>An Interactive Browser-Based Music Experience</h2><p>No production analytics or user research data is available for this project. The outcomes below describe verified product behavior without inventing numerical metrics.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>API</strong><b>Live Music Content</b><span>Track content dynamically loaded from iTunes Search API.</span></div><div className="case-study-outcome"><strong>Audio</strong><b>Interactive Playback</b><span>Preview tracks play directly inside the browser.</span></div><div className="case-study-outcome"><strong>Queue</strong><b>Unified Music Player</b><span>Playback and queue controls are managed in one interface.</span></div><div className="case-study-outcome"><strong>History</strong><b>Recently Played</b><span>Selected tracks are saved for access during the session.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the deployed music discovery and browser playback experience</p></div><div className="case-study-live-links"><a href="https://talharashid3981.github.io/Spotify-Clone/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><a href="https://github.com/talharashid3981/Spotify-Clone" target="_blank" rel="noreferrer"><GitBranch size={14} /> GitHub <ExternalLink size={12} /></a></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
