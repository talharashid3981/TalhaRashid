import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Clock3, ExternalLink, Home, Package, ShieldCheck, ShoppingBag, Sparkles, TrendingUp, Users } from "lucide-react";

const challenges = [
  "Managing footwear variants across colors, sizes, SKUs, and stock quantities.",
  "Supporting authenticated customers and guest shoppers throughout cart and checkout workflows.",
  "Preventing inventory inconsistencies when multiple orders involve the same product variant.",
  "Giving administrators centralized visibility into orders, products, inventory, users, reviews, subscribers, and sales activity.",
];

const highlights = [
  "Atomic MongoDB inventory updates with array filters for color and size variants reduce overselling risk.",
  "HTTP-only JWT cookies use production-specific secure and sameSite settings for authentication.",
  "Guest carts use a guest identifier cookie, with cart merging when a guest user signs in.",
  "Scheduled backend jobs handle abandoned-cart reminders and cleanup of stale guest carts, wishlists, and recently viewed data.",
];

const features = [
  [Package, "Product Discovery and Variant Selection", "Customers can browse products, collections, categories, promotional banners, and footwear variants by color and size."],
  [ShoppingBag, "Cart, Wishlist, and Recently Viewed", "Authenticated and guest carts, coupon application, wishlists, and recently viewed products preserve shopping intent."],
  [ShieldCheck, "Guest and Registered Checkout", "Checkout validates customer details, shipping, coupons, tax, shipping costs, stock, and Cash on Delivery orders."],
  [Users, "Administrative Commerce Operations", "Administrators can manage products, categories, collections, banners, coupons, users, reviews, orders, inventory, and reports."],
] as const;

const insights = [
  "Inventory should be updated at the database level with conditional atomic operations rather than relying only on frontend availability checks.",
  "Guest commerce requires its own identity and persistence strategy for carts, order lookup, and cleanup.",
  "Authentication flows must account for email verification, password recovery, OAuth accounts, session restoration, and secure cookies.",
  "Administrative tools should expose stock levels, pending orders, order status, reviews, subscribers, and sales summaries alongside customer workflows.",
];

export default function AIHCaseStudy() {
  return (
    <main className="case-study-page relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-8 sm:pt-36 md:pb-24">
      <div className="case-study-breadcrumb flex items-center justify-between gap-3 border-b pb-4"><nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-sm"><Link aria-label="Home" className="rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10" href="/"><Home size={14} /></Link><ChevronRight size={14} className="opacity-40" /><Link className="whitespace-nowrap transition hover:text-purple-600" href="/#projects">Projects</Link><ChevronRight size={14} className="opacity-40" /><span className="whitespace-nowrap font-medium">AIH</span></nav><span className="case-study-period"><Clock3 size={13} /> E-commerce Platform</span></div>

      <header className="case-study-header border-b pb-7 pt-8 sm:pt-10"><div className="flex flex-wrap items-center gap-2"><span className="case-study-badge case-study-badge-primary">E-commerce</span><span className="case-study-badge">Fashion &amp; Footwear</span></div><div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"><div className="case-study-project-logo"><Image src="/aih.svg" alt="AIH logo" fill sizes="72px" className="object-contain p-2" /></div><div className="min-w-0 flex-1"><h1>AIH E-Commerce Platform</h1><p>Full-stack footwear commerce platform with customer shopping, order management, and administrative operations.</p></div></div><div className="case-study-meta mt-7 grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"><div><span>My Role:</span><strong>Full-Stack Software Engineer</strong></div><div className="sm:border-l sm:pl-4"><span>Industry:</span><strong>Fashion &amp; Footwear E-commerce</strong></div><a className="case-study-primary-button" href="https://aih-eight.vercel.app/" target="_blank" rel="noreferrer">See Project in Action <ExternalLink size={14} /></a></div><div className="case-study-tech-row"><span className="case-study-tech-label">Technologies:</span>{["React 18", "Vite", "Redux Toolkit", "React Router", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Brevo", "PDFKit", "Node Cron"].map((technology) => <span className="case-study-tech" key={technology}>{technology}</span>)}</div></header>

      <div className="case-study-content">
        <section className="case-study-section"><div className="case-study-eyebrow"><ShoppingBag size={16} /><span>Building a Complete Digital Commerce Workflow</span></div><h2>Connecting Customer Shopping with Store Operations</h2><p>AIH required an online commerce platform that could support product discovery, variant-level inventory, customer accounts, guest purchasing, order processing, and internal administration in one connected system. The platform needed to handle customer-facing shopping workflows alongside stock control, order visibility, coupon management, product administration, and customer communication.</p><div className="case-study-challenge-grid">{challenges.map((challenge, index) => <div className="case-study-challenge" key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></div>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow"><Sparkles size={16} /><span>The Engineering Solution</span></div><h2>A Connected Storefront and Operations Platform</h2><p>AIH was engineered as a React storefront connected to a modular Node.js and Express REST API. Redux Toolkit manages shared application state and React Router handles customer and administrative navigation. MongoDB and Mongoose models support users, products, variants, carts, orders, coupons, reviews, wishlists, recently viewed products, newsletters, subscribers, and inventory adjustments.</p><div className="case-study-highlight"><h3><Sparkles size={17} /> Verified Architectural Decisions &amp; Highlights</h3><ul>{highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}</ul></div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-purple"><ShoppingBag size={16} /><span>Core Features &amp; Capabilities</span></div><h2>Designed for Commerce and Operations</h2><div className="case-study-feature-grid">{features.map(([Icon, title, description]) => <article className="case-study-feature" key={title}><div className="case-study-feature-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

        <section className="case-study-section"><div className="case-study-eyebrow case-study-green"><TrendingUp size={16} /><span>Verified Project Outcomes</span></div><h2>A Controlled Full-Stack Commerce Workflow</h2><p>No verified business metrics, user counts, revenue figures, or performance percentages are currently available. These outcomes describe implemented product behavior without inventing numerical claims.</p><div className="case-study-outcome-grid"><div className="case-study-outcome"><strong>Discovery</strong><b>Faster Product Browsing</b><span>Products, categories, collections, filters, variants, and recently viewed items guide evaluation.</span></div><div className="case-study-outcome"><strong>Orders</strong><b>Centralized Management</b><span>Administrators can inspect, update, export, and generate invoices for orders.</span></div><div className="case-study-outcome"><strong>Stock</strong><b>Variant-Level Control</b><span>Inventory is tracked by product, color, size, SKU, and stock status.</span></div><div className="case-study-outcome"><strong>COD</strong><b>Secure Checkout Workflow</b><span>Customer and guest checkout validates pricing, stock, coupons, tax, and shipping.</span></div></div><div className="case-study-insights"><h3>Engineering Insights &amp; Key Takeaways</h3><ul>{insights.map((insight) => <li key={insight}>• <span>{insight}</span></li>)}</ul></div></section>

        <section className="case-study-live"><div><h3>Experience the Project Live</h3><p>Explore the public AIH commerce deployment</p></div><div className="case-study-live-links"><a href="https://aih-eight.vercel.app/" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Live Demo</a><span className="case-study-tech">Private Client Project</span></div></section>
        <section className="case-study-cta"><div><h2>Have a project or system you would like to build?</h2><p>Let&apos;s collaborate on designing high-performance applications, AI architectures, and scalable web solutions.</p></div><Link href="/#appointment">Schedule a Consultation <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
