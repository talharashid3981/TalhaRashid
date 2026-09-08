import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, ExternalLink, GitBranch, Home, Map, Search, Sparkles, TrendingUp } from "lucide-react";

const challenges = [
  "Flight search, hotel discovery, popular stays, holiday packages, destinations, and offers needed to coexist without making the interface feel fragmented.",
  "Prices, locations, ratings, dates, and calls to action needed clear visual priority so users could compare options quickly.",
  "Search forms, navigation, cards, hotel results, and the map view needed to adapt to smaller screens without fixed-width overflow.",
  "Independent page sections and reusable cards needed shared spacing, typography, colors, controls, and interaction states.",
];

const highlights = [
  "React Router DOM separates Home, Hotels, Search, and Offers into distinct user journeys with shared application chrome.",
  "Reusable travel patterns are implemented as focused components for search forms, destinations, stays, hotels, and offers.",
  "CSS grid, flex layouts, fluid typography, constrained content widths, and mobile breakpoints adapt the interface across viewports.",
  "Global typography, colors, spacing, button treatment, and page-level styling create a consistent experience across routes.",
];

const features = [
  [Search, "Flight Search Workspace", "A focused form for return or one-way flight intent, departure and arrival locations, and travel date selection."],
  [Map, "Hotel Discovery Results", "A Los Angeles hotel results view with sorting, filters, hotel cards, pricing, ratings, and map presentation."],
  [Sparkles, "Destination and Stay Discovery", "Popular destinations, recommended holidays, and popular stays are supported by reusable image-led cards."],
  [TrendingUp, "Offers and Travel Inspiration", "A dedicated Offers route presents campaign highlights, destination offers, and navigation back into search."],
] as const;

const insights = [
  "Component boundaries should follow repeated user patterns so search forms, destination cards, stay cards, and hotel results remain reusable.",
  "Responsive behavior needs to be designed at the component level rather than relying only on a page-level grid.",
  "Travel interfaces benefit from comparison-first hierarchy for prices, ratings, destinations, dates, and calls to action.",
  "A prototype should distinguish implemented frontend behavior from future backend, travel data, authentication, payments, analytics, and deployment layers.",
];

export default function FickleFlightCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">FickleFlight</span></nav><span className="case-study-period"><Clock3 size={13} /> Travel Project</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">Travel</span><span className="case-study-badge">React Frontend</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo fickle-logo"><Image src="/flight.svg" alt="FickleFlight logo" fill sizes="72px" className="object-contain p-2" /></div><div className="min-w-0 flex-1"><h1>FickleFlight</h1><p>A responsive travel discovery interface for finding flights, hotels, destinations, holidays, and travel offers.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Frontend Engineer &amp; UI Developer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Travel &amp; Hospitality</strong></div><a className="case-study-primary-button" href="https://fickle-flight-project-fkq5-omega.vercel.app/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["React 19", "JavaScript", "JSX", "Vite", "React Router DOM", "CSS3", "DM Sans", "Manrope"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Search size={16} /><span>Designing a Clear Travel Discovery Experience</span></div><h2>Bringing Multiple Travel Journeys into One Interface</h2><p>Travel products bring several decisions into one journey: users need to discover destinations, compare accommodation options, search flights, and understand available offers without losing context. FickleFlight focuses on making those categories easy to scan while remaining usable across desktop and mobile screen sizes.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>The Engineering Solution</span></div><h2>A Route-Based React Travel Experience</h2><p>FickleFlight was engineered as a component-based React frontend powered by Vite. React Router DOM separates Home, Hotels, Search, and Offers routes, while reusable components handle shared patterns such as the header, footer, flight search form, destination cards, holiday cards, popular stays, recent searches, and hotel result cards.</p><div className="case-study-highlight"><h3><Sparkles size={17} /> Verified Architectural Decisions &amp; Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Sparkles size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed Around Real Travel Planning Journeys</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><TrendingUp size={16} /><span>Verified Project Outcomes</span></div><h2>A Responsive Frontend Travel Workflow</h2><p>No analytics, production usage data, conversion data, customer feedback, or business metrics are included in the repository. These outcomes describe only the verified interface behavior.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>Routes</strong><b>Centralized Discovery</b><span>Flight, hotel, stay, holiday, destination, and offer surfaces in one experience.</span></div><div className="case-study-outcome"><strong>Cards</strong><b>Clear Comparison</b><span>Pricing, ratings, location context, titles, and actions follow repeatable patterns.</span></div><div className="case-study-outcome"><strong>Responsive</strong><b>Mobile-Ready UI</b><span>Search, results, cards, and footer adapt to smaller screens.</span></div><div className="case-study-outcome"><strong>Routes</strong><b>Predictable Navigation</b><span>Connected calls to action lead users to relevant page surfaces.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the deployed travel discovery interface</p></div><div className="case-study-live-links"><a href="https://fickle-flight-project-fkq5-omega.vercel.app/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><a href="https://github.com/talharashid3981/FickleFlight-Project" target="_blank" rel="noreferrer"><GitBranch size={14} /> GitHub <ExternalLink size={12} /></a></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
