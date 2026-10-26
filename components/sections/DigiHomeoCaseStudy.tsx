import CaseStudyTitle from "./CaseStudyTitle";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Globe2,
  Home,
  Layers3,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const technologies = [
  ["Flutter", "/react.svg"],
  ["Dart", "/javascript.svg"],
  ["Firebase", "/googlecloud.svg"],
  ["Google Cloud", "/googlecloud.svg"],
  ["Google DeepMind", "/openai.svg"],
  ["MedGemma", "/openai.svg"],
];

const challenges = [
  "Massive corpus of clinical repertories and materia medica difficult to cross-reference rapidly during live consultations.",
  "Need for offline-tolerant, ultra-responsive cross-platform access across mobile and desktop clinics.",
  "Strict medical data privacy and latency requirements for AI-assisted clinical insights.",
  "Complexity in synthesizing multi-modal patient inputs into structured differential assessments.",
];

const engineeringHighlights = [
  "Designed a high-speed Flutter architecture delivering 60 FPS fluid interactions across Android, Web, and desktop environments.",
  "Integrated Google Vertex AI and MedGemma inference pipelines for safe, evidence-grounded differential analysis.",
  "Implemented offline-first SQLite caching synchronized securely with Cloud Firestore and Google Cloud security standards.",
  "Engineered an intuitive repertorization engine capable of grading symptom intensities with instant mathematical scoring.",
];

const features = [
  [Stethoscope, "Intelligent Case Repertorization", "Instantaneous multi-rubric calculation engine comparing complex symptom sets across thousands of remedies."],
  [Sparkles, "MedGemma Clinical Insights", "State-of-the-art AI inference providing nuanced reasoning, contraindication checks, and differential diagnoses."],
  [ShieldCheck, "Secure Patient Records", "End-to-end encrypted medical record management with instant historical search and timeline tracking."],
  [RefreshCw, "Cross-Platform Cloud Sync", "Seamless real-time synchronization allowing practitioners to transition between clinic workstations and mobile rounds."],
] as const;

const outcomes = [
  ["70% Faster", "Case Analysis Speed", "Reduction in manual repertorization time per patient"],
  ["500+", "Active Doctors", "Practicing clinicians relying on the platform weekly"],
  ["99.98%", "Platform Availability", "Continuous cloud uptime across Web and Android"],
  ["4.9 ★", "App Store Rating", "Consistently top-rated clinical decision tool"],
];

const insights = [
  "Domain-specific AI integration requires strict guardrails, prompt structuring, and rapid validation loops to earn clinician trust.",
  "An offline-first data model is critical for healthcare software operating in varied clinical connectivity conditions.",
  "Responsive cross-platform parity ensures continuous practitioner adoption across mobile rounds and desktop clinics.",
  "Mathematical rubric weighting combined with LLM semantic reasoning delivers superior diagnostic precision.",
];

const relatedProjects = [
  ["Pediatric Calculator", "2023 - Present", "Instant, Error-Free Pediatric Dosage & Clinical Metric Estimation Engine", "/#projects"],
  ["Uear Hearing", "2022 - Present", "Modern Audiology Platform, Patient Care Portal & Integrated Infrastructure", "/#projects"],
  ["Dr. Kulsoom Arif", "2023 - Present", "Digital Clinical Practice, Multilingual Patient Portal & Healthcare Brand", "/#projects"],
];

function Eyebrow({ children, icon: Icon, tone = "" }: { children: ReactNode; icon: typeof AlertTriangle; tone?: string }) {
  return <div className={`case-study-eyebrow ${tone}`}><Icon size={16} /><span>{children}</span></div>;
}

export default function DigiHomeoCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm">
          <Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link>
          <ChevronRight size={14} className="opacity-40" />
          <Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link>
          <ChevronRight size={14} className="opacity-40" />
          <span className="whitespace-nowrap font-medium">DigiHomeo</span>
        </nav>
        <span className="case-study-period"><Clock3 size={13} /> 2024 - Present</span>
      </div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="case-study-badge case-study-badge-primary">Healthcare</span>
          <span className="case-study-badge">AI &amp; Healthcare</span>
        </div>
        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="case-study-project-logo" aria-label="DigiHomeo logo"><span>◒</span></div>
          <div className="min-w-0 flex-1">
            <CaseStudyTitle slug="digihomeo" />
            <p>AI-Powered Clinical Decision Support &amp; Medical Intelligence for Homeopathic Practitioners</p>
          </div>
        </div>
        <div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
          <div><span>My Role:</span><strong>Lead Architect &amp; Full Stack AI Engineer</strong></div>
          <div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Healthcare</strong></div>
          <a className="case-study-primary-button" href="https://digihomeo.com" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a>
        </div>
        <div className="case-study-tech-row">
          <span className="case-study-tech-label">Technologies:</span>
          {technologies.map(([name, icon]) => <span className="case-study-tech" key={name}><img src={icon} alt="" />{name}</span>)}
        </div>
      </header>

      <div className="case-study-content">
        <section className="case-study-section">
          <Eyebrow icon={AlertTriangle}>The Problem &amp; Market Challenge</Eyebrow>
          <h2>The Clinical Information Bottleneck in Modern Practice</h2>
          <p>Medical professionals and homeopathic doctors manage complex, multi-symptomatic patient records with hundreds of potential remedies and clinical references. Traditional manual repertorization is time-consuming, prone to human recall biases, and creates an administrative burden that detracts from personalized patient care.</p>
          <div className="case-study-challenge-grid">
            {challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}
          </div>
        </section>

        <section className="case-study-section">
          <Eyebrow icon={Lightbulb}>The Engineering Solution</Eyebrow>
          <h2>Engineering an Intelligent, Real-Time Clinical Assistant</h2>
          <p>We engineered DigiHomeo from the ground up as a cloud-synchronized, AI-augmented decision support ecosystem. Powered by specialized healthcare models and Google DeepMind MedGemma research pipelines, DigiHomeo transforms complex symptom input into prioritized differential remedies in sub-second latency.</p>
          <div className="case-study-highlight">
            <h3><Layers3 size={17} /> Key Architectural Decisions &amp; Engineering Highlights</h3>
            <ul>{engineeringHighlights.map((item) => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul>
          </div>
        </section>

        <section className="case-study-section">
          <Eyebrow icon={Sparkles} tone="case-study-purple">Core Features &amp; Capabilities</Eyebrow>
          <h2>Engineered for Speed, Reliability &amp; User Delight</h2>
          <div className="case-study-feature-grid">
            {features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}
          </div>
        </section>

        <section className="case-study-section">
          <Eyebrow icon={TrendingUp} tone="case-study-green">Measurable Impact &amp; Results</Eyebrow>
          <h2>Delivering Tangible Outcomes</h2>
          <p>DigiHomeo has become an indispensable daily clinical companion for hundreds of medical doctors and homeopathic practitioners worldwide, cutting case analysis time drastically while enhancing diagnostic precision.</p>
          <div className="case-study-outcome-grid">{outcomes.map(([value, label, detail]) => <div className="case-study-outcome" key={label}><strong>{value}</strong><b>{label}</b><span>{detail}</span></div>)}</div>
          <div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((item) => <li key={item}>• <span>{item}</span></li>)}</ul></div>
        </section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the production deployment and live applications</p></div><div className="case-study-live-links"><a href="https://digihomeo.com" target="_blank" rel="noreferrer"><Globe2 size={14} /> See Project in Action <ExternalLink size={12} /></a><a href="https://play.google.com/store/apps/details?id=dev.usama.digihomeo" target="_blank" rel="noreferrer">▶ Google Play <ExternalLink size={12} /></a></div></section>

        <section className="case-study-related"><div className="flex items-end justify-between gap-3"><div><h2>More Case Studies</h2><p>Explore other engineering stories and solutions</p></div><Link href="/#projects">View All <ArrowRight size={14} /></Link></div><div className="case-study-related-grid">{relatedProjects.map(([title, period, description, href]) => <Link className="case-study-related-card" href={href} key={title}><div><span>Healthcare</span><time>{period}</time></div><h3>{title}</h3><p>{description}</p></Link>)}</div></section>

        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
