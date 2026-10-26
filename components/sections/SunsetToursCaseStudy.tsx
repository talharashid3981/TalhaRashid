import CaseStudyTitle from "./CaseStudyTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, ExternalLink, Globe2, Home, LockKeyhole, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const challenges = [
  "Presenting rental services, vehicle categories, route details, and quote requirements in one easy-to-scan experience.",
  "Collecting service type, pickup city, drop-off city, phone number, vehicle preference, and date in a structured request.",
  "Delivering booking notifications to WhatsApp without exposing the Whapi credential in browser code.",
  "Communicating uncertain availability and variable pricing honestly instead of promising an instant reservation.",
];

const highlights = [
  "Next.js Route Handlers keep booking validation, rate limiting, idempotency checks, and Whapi communication behind the server boundary.",
  "Booking input is normalized and validated against known services and vehicles, with phone, email, and date checks before delivery.",
  "The webhook uses a configurable shared secret, normalized event parsing, fast acknowledgements, and duplicate-event protection.",
  "Server-only credentials, bounded request limits, retry states, and explicit quote-required messaging keep the workflow safer and more honest.",
];

const features = [
  [Globe2, "Service and Fleet Discovery", "Visitors can explore self-drive rental, chauffeur service, airport transfers, wedding cars, tours, vehicle imagery, and quote-required pricing states."],
  [MessageCircle, "Structured Booking Requests", "Homepage and vehicle-context forms collect route, date, service, vehicle, and contact details through one consistent workflow."],
  [ShieldCheck, "Protected WhatsApp Delivery", "Validated booking requests are formatted into actionable messages and delivered through Whapi Cloud without exposing credentials."],
  [Sparkles, "Contact, Policy, and Trust Content", "Dedicated contact, privacy, terms, cancellation, and data-retention experiences help visitors understand the service before submitting details."],
] as const;

const insights = [
  "Separate general contact enquiries from booking requests so each workflow can validate and communicate its own business intent.",
  "Keep external messaging credentials and provider-specific error handling behind a server-only integration boundary.",
  "Use allow-listed business data and explicit uncertainty states when inventory, availability, or pricing cannot be guaranteed.",
  "Treat idempotency and rate limiting as workflow requirements while documenting the limitations of in-memory fallbacks before production deployment.",
];

export default function SunsetToursCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">Sunset Tours</span></nav>
        <span className="case-study-period"><Clock3 size={13} /> 1 Month</span>
      </div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10">
        <div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">Travel Services</span><span className="case-study-badge">Car Rental &amp; Booking</span></div>
        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo"><Image src="/sunset.svg" alt="Sunset Tours logo" width={72} height={72} /></div><div className="min-w-0 flex-1"><CaseStudyTitle slug="sunset-tours" /><p>A responsive car-rental and travel enquiry platform with server-side booking notifications.</p></div></div>
        <div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Full-Stack Developer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Travel &amp; Transportation</strong></div><a className="case-study-primary-button" href="https://sunsettours.pk/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div>
        <div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["Next.js 16", "React 19", "TypeScript", "Route Handlers", "Framer Motion", "React Toastify", "Whapi Cloud", "next/image", "JSON-LD"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div>
      </header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>The Problem &amp; Market Challenge</span></div><h2>Turning Fragmented Travel Enquiries Into a Clear Booking Workflow</h2><p>Travel customers need to compare vehicle options, understand available services, and submit route-specific requests without relying entirely on unstructured phone or messaging conversations. Sunset Tours brings service discovery, fleet browsing, contact details, and validated booking enquiries into one responsive experience while keeping availability and pricing expectations accurate.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><LockKeyhole size={16} /><span>The Engineering Solution</span></div><h2>A Content-Led Frontend Connected to Validated Server Workflows</h2><p>The project uses Next.js App Router architecture. Server-rendered pages provide public marketing, service, fleet, rate, contact, and policy experiences, while focused client components handle fleet filters, booking forms, contact forms, modal requests, and toast feedback. Booking requests are submitted to a server-side API, normalized, validated, rate-limited, assigned a reference, and delivered through the protected Whapi Cloud integration.</p><div className="case-study-highlight"><h3><CheckCircle2 size={17} /> Verified Architectural Decisions &amp; Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Sparkles size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Clear Travel Discovery and Reliable Enquiries</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><ArrowRight size={16} /><span>Measurable Impact &amp; Results</span></div><h2>A More Consistent Booking Enquiry Experience</h2><p>No verified numeric business, revenue, traffic, conversion, performance, user, or production metrics are available. These outcomes describe capabilities supported by the implementation.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>Validated</strong><b>Booking Workflow</b><span>One API contract normalizes requests and returns a reference after WhatsApp delivery succeeds.</span></div><div className="case-study-outcome"><strong>Filtered</strong><b>Fleet Discovery</b><span>Visitors can filter the displayed fleet and request details from vehicle context.</span></div><div className="case-study-outcome"><strong>Quote</strong><b>Clear Expectations</b><span>Availability and final rates are presented as confirmation-dependent rather than guaranteed.</span></div><div className="case-study-outcome"><strong>Protected</strong><b>Communication</b><span>Provider credentials remain server-side and webhook callbacks can reject duplicate events.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the travel services, fleet discovery, and booking enquiry experience</p></div><div className="case-study-live-links"><a href="https://sunsettours.pk/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Website</a><span className="case-study-tech">Private Repository</span></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
