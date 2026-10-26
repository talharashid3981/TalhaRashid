import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DigiHomeoCaseStudy from "@/components/sections/DigiHomeoCaseStudy";
import StreamlyCaseStudy from "@/components/sections/StreamlyCaseStudy";
import SpotifyCaseStudy from "@/components/sections/SpotifyCaseStudy";
import FickleFlightCaseStudy from "@/components/sections/FickleFlightCaseStudy";
import AIHCaseStudy from "@/components/sections/AIHCaseStudy";
import RiyadhRepairCaseStudy from "@/components/sections/RiyadhRepairCaseStudy";
import AIVirtualAssistantCaseStudy from "@/components/sections/AIVirtualAssistantCaseStudy";
import BuildlyCaseStudy from "@/components/sections/BuildlyCaseStudy";
import FlowCodifyCaseStudy from "@/components/sections/FlowCodifyCaseStudy";
import SunsetToursCaseStudy from "@/components/sections/SunsetToursCaseStudy";
import FamzooCaseStudy from "@/components/sections/FamzooCaseStudy";
import { projects } from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return {
    title: `${project.name} Case Study: ${project.category}`,
    description: project.seoDescription,
    alternates: {
      canonical: `/project/${slug}`,
    },
    openGraph: {
      type: "article",
      siteName: "Talha Rashid",
      title: `${project.name} Case Study: ${project.category}`,
      description: project.seoDescription,
      url: `/project/${slug}`,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.name} case study by Talha Rashid`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study: ${project.category}`,
      description: project.seoDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (slug === "digihomeo") return <DigiHomeoCaseStudy />;
  if (slug === "streamly") return <StreamlyCaseStudy />;
  if (slug === "spotify-clone") return <SpotifyCaseStudy />;
  if (slug === "fickleflight") return <FickleFlightCaseStudy />;
  if (slug === "aih") return <AIHCaseStudy />;
  if (slug === "riyadh-repairing-service") return <RiyadhRepairCaseStudy />;
  if (slug === "ai-virtual-assistant") return <AIVirtualAssistantCaseStudy />;
  if (slug === "buildly") return <BuildlyCaseStudy />;
  if (slug === "flowcodify") return <FlowCodifyCaseStudy />;
  if (slug === "sunset-tours") return <SunsetToursCaseStudy />;
  if (slug === "famzoo") return <FamzooCaseStudy />;
  notFound();
}
