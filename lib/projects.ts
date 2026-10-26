export type Technology = { name: string; icon: string };

export type Project = {
  name: string;
  slug: string;
  category: string;
  description: string;
  seoDescription: string;
  mainStack: string;
  logo: string;
  logoImage?: string;
  logoClass: string;
  technologies: Technology[];
  website: string;
  repository: string;
  isPrivate?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "YouTube Clone",
    slug: "streamly",
    category: "Entertainment",
    description:
      "A browser-based video discovery and watch experience with search, categories, recommendations, and YouTube API integration.",
    seoDescription:
      "Explore YouTube Clone, a browser-based video discovery and watch experience with search, categories, recommendations, and YouTube API integration.",
    mainStack: "HTML, CSS, JavaScript, and YouTube API",
    logo: "▶",
    logoClass: "text-[#ff0033]",
    technologies: [
      { name: "HTML5", icon: "/html5.svg" },
      { name: "CSS3", icon: "/css3.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "YouTube API", icon: "/google.svg" },
      { name: "Lucide Icons", icon: "/lucid-icon-logo.svg" },
    ],
    website: "https://talharashid3981.github.io/youtube-clone/",
    repository: "https://github.com/talharashid3981/youtube-clone",
  },
  {
    name: "Spotify Clone",
    slug: "spotify-clone",
    category: "Music",
    description:
      "A responsive music discovery interface with live track search and browser-based audio preview playback.",
    seoDescription:
      "Explore Spotify Clone, a responsive music discovery interface with live track search and browser-based audio preview playback for listeners.",
    mainStack: "HTML, CSS, JavaScript, and the iTunes Search API",
    logo: "S",
    logoImage: "/spotify.svg",
    logoClass: "text-[#1ed760]",
    technologies: [
      { name: "HTML5", icon: "/html5.svg" },
      { name: "CSS3", icon: "/css3.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "iTunes Search API", icon: "/google.svg" },
      { name: "HTML5 Audio API", icon: "/file.svg" },
    ],
    website: "https://talharashid3981.github.io/Spotify-Clone/",
    repository: "https://github.com/talharashid3981/Spotify-Clone",
  },
  {
    name: "FickleFlight",
    slug: "fickleflight",
    category: "Travel Services",
    description:
      "A responsive travel discovery interface for finding flights, hotels, destinations, holidays, and travel offers.",
    seoDescription:
      "Explore FickleFlight, a responsive travel discovery interface for finding flights, hotels, destinations, holidays, and travel offers in one place.",
    mainStack: "React, JavaScript, Vite, and React Router",
    logo: "F",
    logoImage: "/flight.svg",
    logoClass: "text-[#5d8cff]",
    technologies: [
      { name: "React 19", icon: "/react.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "Vite", icon: "/file.svg" },
      { name: "React Router", icon: "/react.svg" },
      { name: "CSS3", icon: "/css3.svg" },
    ],
    website: "https://fickle-flight-project-fkq5-omega.vercel.app/",
    repository: "https://github.com/talharashid3981/FickleFlight-Project",
  },
  {
    name: "AIH E-Commerce Platform",
    slug: "aih",
    category: "E-commerce",
    description:
      "A full-stack footwear commerce platform with customer shopping, order management, inventory, and administrative operations.",
    seoDescription:
      "Explore AIH, a full-stack footwear commerce platform with customer shopping, order management, inventory, and administrative operations for the business.",
    mainStack: "React, Node.js, Express, and MongoDB",
    logo: "A",
    logoImage: "/aih.svg",
    logoClass: "text-[#eb5b32]",
    technologies: [
      { name: "React", icon: "/react.svg" },
      { name: "Vite", icon: "/file.svg" },
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "Express.js", icon: "/javascript.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "Cloudinary", icon: "/googlecloud.svg" },
    ],
    website: "https://aih-eight.vercel.app/",
    repository: "",
    isPrivate: true,
  },
  {
    name: "Riyadh Repairing Service",
    slug: "riyadh-repairing-service",
    category: "Business Website",
    description:
      "A bilingual service website for appliance repair discovery, customer enquiries, and local business visibility.",
    seoDescription:
      "Explore Riyadh Repairing Service, a bilingual appliance repair website for service discovery, customer enquiries, and local business visibility.",
    mainStack: "React, i18n, and EmailJS",
    logo: "R",
    logoImage: "/riyadreparingservice.svg",
    logoClass: "text-[#e7a62f]",
    technologies: [
      { name: "React 19", icon: "/react.svg" },
      { name: "i18n", icon: "/i18n.svg" },
      { name: "EmailJS", icon: "/google.svg" },
      { name: "SEO", icon: "/globe.svg" },
    ],
    website: "https://riyadhrepairingservice.com/",
    repository: "",
    isPrivate: true,
  },
  {
    name: "AI Virtual Assistant",
    slug: "ai-virtual-assistant",
    category: "AI Application",
    description:
      "A personalized, voice-enabled AI assistant that converts natural-language commands into conversational responses and browser actions.",
    seoDescription:
      "Explore AI Virtual Assistant, a voice-enabled tool that converts natural-language commands into conversational responses and browser actions.",
    mainStack: "React, Express, MongoDB, and Gemini AI",
    logo: "AI",
    logoImage: "/openai.svg",
    logoClass: "text-[#8b5cf6]",
    technologies: [
      { name: "React 19", icon: "/react.svg" },
      { name: "Vite", icon: "/file.svg" },
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "Express.js", icon: "/javascript.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "Gemini AI", icon: "/gemini-icon.svg" },
    ],
    website: "https://virtualassistant-wvps.onrender.com/signin",
    repository: "https://github.com/talharashid3981/virtualAssistant",
  },
  {
    name: "Buildly",
    slug: "buildly",
    category: "Generative AI",
    description:
      "An AI-powered website generation, editing, and publishing platform for turning natural-language ideas into responsive web experiences.",
    seoDescription:
      "Explore Buildly, an AI-powered website platform for generating, editing, and publishing responsive web experiences from natural-language ideas.",
    mainStack: "React, Express, MongoDB, and OpenRouter AI",
    logo: "B",
    logoImage: "/openai.svg",
    logoClass: "text-[#8b5cf6]",
    technologies: [
      { name: "React 19", icon: "/react.svg" },
      { name: "Vite", icon: "/file.svg" },
      { name: "Express 5", icon: "/javascript.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "Firebase Auth", icon: "/google.svg" },
      { name: "OpenRouter AI", icon: "/openai.svg" },
    ],
    website: "https://buildly-peach.vercel.app",
    repository: "https://github.com/talharashid3981/Buildly",
  },
  {
    name: "FlowCodify",
    slug: "flowcodify",
    category: "Visual-to-Code",
    description:
      "A visual-to-code workspace for turning prompts, wireframes, and flowcharts into editable, previewable code.",
    seoDescription:
      "Explore FlowCodify, a visual-to-code workspace for turning prompts, wireframes, and flowcharts into editable, previewable code in one workspace.",
    mainStack: "React, React Konva, Node.js, MongoDB, and OpenAI API",
    logo: "F",
    logoImage: "/flowcodify.svg",
    logoClass: "text-[#22c55e]",
    technologies: [
      { name: "React 19", icon: "/react.svg" },
      { name: "Vite", icon: "/file.svg" },
      { name: "React Konva", icon: "/konvajs-logo.svg" },
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "OpenAI API", icon: "/openai.svg" },
    ],
    website: "https://flowcodify.app/",
    repository: "",
    isPrivate: true,
  },
  {
    name: "Sunset Tours & Cab Service",
    slug: "sunset-tours",
    category: "Travel Services",
    description:
      "A responsive car-rental and travel enquiry platform with server-side booking notifications.",
    seoDescription:
      "Explore Sunset Tours, a responsive car-rental and travel enquiry platform with server-side booking notifications for travel booking requests.",
    mainStack: "Next.js, React, and TypeScript",
    logo: "S",
    logoImage: "/sunset.svg",
    logoClass: "text-[#f59e0b]",
    technologies: [
      { name: "Next.js 16", icon: "/next.svg" },
      { name: "React 19", icon: "/react.svg" },
      { name: "TypeScript", icon: "/typescript-logo.svg" },
      { name: "Framer Motion", icon: "/framer-motion.svg" },
      { name: "Whapi Cloud", icon: "/cloud-logo.svg" },
      { name: "JSON-LD", icon: "/json-ld.svg" },
    ],
    website: "https://sunsettours.pk/",
    repository: "",
    isPrivate: true,
  },
  {
    name: "Famzoo",
    slug: "famzoo",
    category: "E-commerce",
    description:
      "A full-stack family-focused e-commerce platform with catalog management, customer ordering, and protected operations workflows.",
    seoDescription:
      "Explore Famzoo, a family-focused e-commerce platform bringing catalog management, customer ordering, and protected operations workflows together.",
    mainStack: "Next.js, TypeScript, and MongoDB",
    logo: "F",
    logoImage: "/famzoo.svg",
    logoClass: "text-[#f97316]",
    technologies: [
      { name: "Next.js 16", icon: "/next.svg" },
      { name: "TypeScript", icon: "/typescript-logo.svg" },
      { name: "Tailwind CSS", icon: "/tailwind-logo.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "Cloudinary", icon: "/googlecloud.svg" },
    ],
    website: "https://famzoo.pk/",
    repository: "",
    isPrivate: true,
  },
  {
    name: "DigiHomeo",
    slug: "digihomeo",
    category: "Healthcare",
    description:
      "AI-Powered Clinical Decision Support & Medical Intelligence for Homeopathic Practitioners",
    seoDescription:
      "Explore DigiHomeo, AI-powered clinical decision support and medical intelligence designed to support clinical decisions for homeopathic practitioners.",
    mainStack: "Flutter, Dart, Firebase, Google Cloud, and MedGemma",
    logo: "D",
    logoClass: "text-[#65bf48]",
    technologies: [
      { name: "Flutter", icon: "/react.svg" },
      { name: "Dart", icon: "/javascript.svg" },
      { name: "Firebase", icon: "/googlecloud.svg" },
      { name: "Google Cloud", icon: "/googlecloud.svg" },
      { name: "Google DeepMind", icon: "/openai.svg" },
      { name: "MedGemma", icon: "/openai.svg" },
    ],
    website: "https://digihomeo.com",
    repository: "",
    isPrivate: true,
    featured: false,
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured !== false)
  .slice()
  .reverse();
