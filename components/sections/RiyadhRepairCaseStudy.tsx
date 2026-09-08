import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, ExternalLink, Globe2, Home, Mail, Search, Sparkles, Wrench } from "lucide-react";

const challenges = [
  "Customers need to quickly find relevant services for refrigerators and washing machines.",
  "Service information must be organized for residential, commercial, and industrial audiences.",
  "Customers need direct contact options through phone, email, WhatsApp, maps, and an enquiry form.",
  "The website needs to support English- and Arabic-speaking visitors while remaining discoverable through search engines.",
];

const highlights = [
  "React Router separates service, informational, contact, blog, and fallback experiences into dedicated URLs.",
  "Reusable navbar, footer, contact form, sliders, SEO utilities, and schema components keep the experience consistent.",
  "English and Arabic content is stored in translation resources and accessed through react-i18next with language persistence.",
  "Page-level metadata, canonical URLs, alternate language links, Open Graph tags, Twitter cards, and JSON-LD support search visibility.",
  "EmailJS connects the contact form to an email delivery workflow without requiring a custom server in the frontend repository.",
];

const features = [
  [Wrench, "Appliance Service Discovery", "Dedicated refrigerator and washing machine repair pages explain service categories, common problems, maintenance, and packages."],
  [Globe2, "Bilingual User Experience", "English and Arabic support is powered by i18next, with language selection persisted in browser storage."],
  [Mail, "Direct Contact and Quote Requests", "Phone, email, map, WhatsApp, business hours, and an EmailJS enquiry form provide multiple contact paths."],
  [Search, "Content and Local SEO Structure", "Service and blog routes include canonical links, language alternates, Open Graph metadata, and Schema.org markup."],
] as const;

const insights = [
  "Service websites should organize content around immediate customer intent, such as appliance type, problem, location, or contact method.",
  "Separating translations from components makes bilingual content easier to maintain and reduces duplicated UI logic.",
  "Reusable components help maintain consistent navigation, enquiry flows, sliders, and metadata across routes.",
  "SEO implementation requires page titles, canonical URLs, structured data, language alternatives, and social metadata working together.",
];

export default function RiyadhRepairCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">Riyadh Repairing Service</span></nav><span className="case-study-period"><Clock3 size={13} /> Business Website</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">Business Website</span><span className="case-study-badge">Service Marketplace Frontend</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo repair-logo"><Image src="/riyadreparingservice.svg" alt="Riyadh Repairing Service logo" width={64} height={64} className="h-full w-full object-contain p-2" /></div><div className="min-w-0 flex-1"><h1>Riyadh Repairing Service</h1><p>Bilingual service website for appliance repair discovery, customer enquiries, and local business visibility.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Full-Stack Software Engineer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Home Appliance Repair &amp; Maintenance</strong></div><a className="case-study-primary-button" href="https://riyadhrepairingservice.com/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["React 19", "Tailwind CSS", "React i18next", "Framer Motion", "Swiper", "EmailJS", "React Helmet Async", "Schema.org"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Wrench size={16} /><span>Making Local Appliance Repair Easier to Discover</span></div><h2>A Clear Bilingual Service and Enquiry Experience</h2><p>Appliance repair customers often need quick access to service information, clear communication channels, and confidence that a provider supports their specific appliance type. The website presents Riyadh Repairing Service as an accessible digital service channel for washing machine and refrigerator repairs.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>The Engineering Solution</span></div><h2>A Content-Driven React Website with Direct Enquiry Handling</h2><p>The project was engineered as a client-side React application built with Vite. React Router provides dedicated routes for the homepage, services, About, Contact, Blog, Blog Detail, Privacy, Terms, and fallback pages. Reusable components handle navigation, service sliders, image galleries, pricing plans, contact forms, floating social actions, SEO metadata, and schema markup. EmailJS submits enquiries directly from the browser.</p><div className="case-study-highlight"><h3><Sparkles size={17} /> Verified Architectural Decisions</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><Globe2 size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Local Discovery and Customer Contact</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><Search size={16} /><span>Verified Project Outcomes</span></div><h2>A Structured Local Business Website</h2><p>No analytics, conversion data, traffic reports, revenue figures, or performance measurements are available. These outcomes describe verified product behavior without inventing numerical claims.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>2</strong><b>Bilingual Service Content</b><span>English and Arabic content is organized through translation resources.</span></div><div className="case-study-outcome"><strong>Routes</strong><b>Centralized Navigation</b><span>Service, contact, blog, and company information have dedicated entry points.</span></div><div className="case-study-outcome"><strong>Email</strong><b>Direct Enquiry Workflow</b><span>Customer requests are sent through the configured EmailJS integration.</span></div><div className="case-study-outcome"><strong>SEO</strong><b>Search-Ready Structure</b><span>Metadata, canonical URLs, language alternates, and schema support discovery.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the public appliance repair service website</p></div><div className="case-study-live-links"><a href="https://riyadhrepairingservice.com/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><span className="case-study-tech">Private Client Project</span></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
