const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Talha Rashid",
  url: "https://www.talharashid.cv",
  image: "https://www.talharashid.cv/Talharashid.png",
  jobTitle: "Full-Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  alumniOf: "University of the Punjab",
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "AI integration",
  ],
  sameAs: [
    "https://github.com/talharashid3981",
    "https://www.linkedin.com/in/talharashid3981/",
    "https://x.com/talharashid3981",
  ],
};

export default function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
