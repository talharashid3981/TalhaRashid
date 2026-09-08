import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, Code2, ExternalLink, GitBranch, Home, Lightbulb, Play, Search, Sparkles, TrendingUp } from "lucide-react";

const challenges = [
  "Need for an intuitive browsing experience that mirrors familiar video platform behavior without overcomplicating the implementation.",
  "Need to support both live YouTube content and demo fallback data when an API key is unavailable or the request fails.",
  "Need for responsive interaction patterns across the home page, sidebar navigation, category buttons, and watch-view experience.",
  "Need to keep the project lightweight and deployable as a static front-end while still enabling real content retrieval through public APIs.",
];

const highlights = [
  "Client-side rendering keeps the app lightweight, easy to run, and suitable for a static hosting environment.",
  "A graceful fallback pattern displays sample video data when no API key is present instead of failing entirely.",
  "Search, recommendations, and watch-page rendering are driven from a shared data model for a consistent user flow.",
  "The YouTube embed player and public API demonstrate a realistic video workflow without custom video infrastructure.",
];

const features = [
  [Search, "Search-Driven Discovery", "Users can search for videos and surface relevant results directly from the interface."],
  [Play, "Interactive Video Feed", "The home screen presents dynamic videos with thumbnails, metadata, and recommendation-style cards."],
  [Code2, "Watch Page Experience", "Individual video pages render selected media in a dedicated watch layout with related suggestions."],
  [Sparkles, "Shorts-style Content Section", "A vertical video preview section adds short-form browsing behavior to the media experience."],
] as const;

const insights = [
  "Lightweight front-end architecture works well for media browsing interfaces when rapid iteration and simple deployment are priorities.",
  "API-driven content improves realism, but a reliable fallback path is essential when the API is unavailable or a key is missing.",
  "A well-structured state model reduces complexity when search, filtering, recommendations, and watch pages share one flow.",
  "Browser-side persistence is useful for prototyping, but it is not a substitute for secure production authentication or persistent user data management.",
];

export default function StreamlyCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">Streamly</span></nav>
        <span className="case-study-period"><Clock3 size={13} /> Frontend Project</span>
      </div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10">
        <div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">Entertainment</span><span className="case-study-badge">Frontend Web Application</span></div>
        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo streamly-logo"><span>▶</span></div><div className="min-w-0 flex-1"><h1>YouTube Clone</h1><p>A browser-based video discovery and watch experience modeled on YouTube, built with a front-end-first architecture and API-driven content loading.</p></div></div>
        <div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Frontend Developer &amp; UI Engineer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Digital Media &amp; Content Discovery</strong></div><a className="case-study-primary-button" href="https://talharashid3981.github.io/youtube-clone/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div>
        <div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["HTML5", "CSS3", "JavaScript", "YouTube Data API v3", "Fetch API", "LocalStorage", "Lucide Icons", "YouTube iframe"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div>
      </header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Lightbulb size={16} /><span>The Problem &amp; Market Challenge</span></div><h2>Building a Familiar, Lightweight Video Discovery Experience</h2><p>The core challenge was building a YouTube-inspired discovery experience that feels familiar while remaining lightweight, easy to navigate, and flexible enough to support both static demo content and live API-driven data. The application was designed to emulate a realistic flow across search, curated categories, recommendations, and a dedicated watch page without requiring a complex multi-service backend.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Code2 size={16} /><span>The Engineering Solution</span></div><h2>A Client-Side Architecture for Dynamic Media Browsing</h2><p>The project was engineered as a client-side web application with a clear separation between presentation and data fetching. JavaScript manages application state, dynamic rendering, search, category filtering, recommendation browsing, and the watch-view experience. The YouTube Data API provides live metadata when configured, while curated demo data keeps the interface usable when an API key is unavailable.</p><div className="case-study-highlight"><h3><Code2 size={17} /> Architecture &amp; Engineering Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Sparkles size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Fast Content Discovery</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><TrendingUp size={16} /><span>Verified Project Outcomes</span></div><h2>A Practical Frontend Media Platform</h2><p>This project demonstrates practical UI engineering, state-driven rendering, API integration, and graceful fallback handling while maintaining a simple, portable architecture suitable for static deployment.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>API</strong><b>Live Content Retrieval</b><span>YouTube Data API v3 integration for video metadata.</span></div><div className="case-study-outcome"><strong>SPA</strong><b>Client-Side Experience</b><span>Search, browsing, and watch views managed in the browser.</span></div><div className="case-study-outcome"><strong>Fallback</strong><b>Reliable Demo Mode</b><span>Curated content remains available without an API key.</span></div><div className="case-study-outcome"><strong>Static</strong><b>Portable Deployment</b><span>Designed for lightweight static hosting.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the deployed video discovery and watch experience</p></div><div className="case-study-live-links"><a href="https://talharashid3981.github.io/youtube-clone/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><a href="https://github.com/talharashid3981/youtube-clone" target="_blank" rel="noreferrer"><GitBranch size={14} /> GitHub <ExternalLink size={12} /></a></div></section>

        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Contact Us <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
