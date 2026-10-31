import CaseStudyTitle from "./CaseStudyTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, ExternalLink, Home, LockKeyhole, Search, ShieldCheck, ShoppingCart, Sparkles } from "lucide-react";

const challenges = [
  "Supporting simple products alongside color, size, SKU, image, price, and stock variations.",
  "Keeping inventory accurate when products enter the cart and again when an order is created to reduce overselling.",
  "Separating customer access from protected administrator workflows for catalog, orders, inventory, coupons, and reviews.",
  "Coordinating pricing, shipping fees, coupon discounts, order totals, status history, and notifications through server-side APIs.",
];

const highlights = [
  "Server-authoritative pricing and inventory recalculate cart values, stock, coupon eligibility, delivery fees, and totals during checkout.",
  "Mongoose transactions coordinate coupon usage, inventory decrementing, order creation, order-item snapshots, and cart clearing.",
  "Passwords are hashed with bcrypt, session tokens are stored as hashes, and protected APIs enforce customer or administrator access.",
  "Zod validation and signed Cloudinary upload endpoints create clear boundaries for request data and product or review media.",
];

const features = [
  [Search, "Product Discovery and Catalog Browsing", "Search, category and collection filtering, brand and price filters, rating filters, sorting, pagination, product details, and reviews support the storefront journey."],
  [Sparkles, "Variant-Aware Product Management", "Administrators can manage simple and variable products with categories, collections, tags, images, variants, colors, sizes, SKUs, prices, and stock."],
  [ShoppingCart, "Cart, Checkout, and Order Lifecycle", "Customers can update carts, apply eligible coupons, choose shipping, submit delivery details, place Cash on Delivery orders, and track status."],
  [ShieldCheck, "Customer and Administration Workflows", "Customer accounts, password recovery, wishlists, reviews, and a protected operations area centralize day-to-day commerce management."],
] as const;

const insights = [
  "Client state is useful for interaction, but prices, discounts, stock, payment state, and order ownership must be verified on the server.",
  "Separating product, variant, and inventory records makes color, size, SKU, image, and stock behavior easier to validate and manage.",
  "Checkout touches multiple collections, so inventory, coupon usage, order records, order items, and cart cleanup need coordinated persistence.",
  "Customer and administrator permissions belong close to server-side route and service boundaries, not only in frontend navigation visibility.",
];

export default function FamzooCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">Famzoo</span></nav><span className="case-study-period"><Clock3 size={13} /> E-commerce Platform</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">E-commerce</span><span className="case-study-badge">Retail Platform</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo"><Image src="/famzoo.svg" alt="Famzoo logo" width={72} height={72} /></div><div className="min-w-0 flex-1"><CaseStudyTitle slug="famzoo" /><p>A full-stack family-focused e-commerce platform with catalog management, customer ordering, and protected operations workflows.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Full-Stack Software Engineer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Retail &amp; E-commerce</strong></div><a className="case-study-primary-button" href="https://famzoo.pk/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "MongoDB", "Mongoose", "Zod", "bcrypt", "Cloudinary", "Brevo", "Lucide React"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>The Problem &amp; Market Challenge</span></div><h2>Turning a Family-Focused Catalog Into a Reliable Commerce Workflow</h2><p>Famzoo needed more than a product browsing interface. The platform had to connect product discovery, variant-aware inventory, customer accounts, cart management, checkout, order tracking, reviews, and internal administration while keeping prices, stock, permissions, and order data trustworthy across customer and operations workflows.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><LockKeyhole size={16} /><span>The Engineering Solution</span></div><h2>A Server-Authoritative Commerce System Built Around Next.js</h2><p>Famzoo uses the Next.js App Router with React and Tailwind CSS for the storefront, product discovery, product details, cart, checkout, account, wishlist, order tracking, and administrative screens. Route Handlers and shared server services manage authentication, catalog operations, carts, coupons, inventory, orders, reviews, uploads, email, and errors. MongoDB and Mongoose support the commerce models, while secure sessions use bcrypt and HttpOnly cookies.</p><div className="case-study-highlight"><h3><CheckCircle2 size={17} /> Verified Architectural Decisions &amp; Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><ShoppingCart size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Product Discovery and Controlled Commerce Operations</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><ArrowRight size={16} /><span>Implementation-Based Results</span></div><h2>A More Trustworthy End-to-End Shopping Workflow</h2><p>No production analytics, user counts, revenue figures, conversion data, or performance benchmarks are verified. These outcomes are based on implemented product and operations capabilities.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>Structured</strong><b>Catalog Navigation</b><span>Search, filters, sorting, collections, pagination, and product routes provide multiple discovery paths.</span></div><div className="case-study-outcome"><strong>Centralized</strong><b>Order Management</b><span>Customer history, tracking, status history, cancellations, and admin order views connect the lifecycle.</span></div><div className="case-study-outcome"><strong>Verified</strong><b>Cash on Delivery</b><span>Totals, coupons, stock, snapshots, and cart cleanup are validated and persisted server-side.</span></div><div className="case-study-outcome"><strong>Protected</strong><b>Operations Dashboard</b><span>Admin APIs and screens bring products, customers, inventory, reviews, coupons, and taxonomy together.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the Famzoo storefront and commerce workflow</p></div><div className="case-study-live-links"><a href="https://famzoo.pk/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Website</a><span className="case-study-tech">Private Repository</span></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
