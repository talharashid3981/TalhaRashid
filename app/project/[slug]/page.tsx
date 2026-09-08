import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DigiHomeoCaseStudy from "@/components/sections/DigiHomeoCaseStudy";
import StreamlyCaseStudy from "@/components/sections/StreamlyCaseStudy";
import SpotifyCaseStudy from "@/components/sections/SpotifyCaseStudy";
import FickleFlightCaseStudy from "@/components/sections/FickleFlightCaseStudy";
import AIHCaseStudy from "@/components/sections/AIHCaseStudy";
import RiyadhRepairCaseStudy from "@/components/sections/RiyadhRepairCaseStudy";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateMetadata(): Metadata {
  return {
    title: "DigiHomeo Case Study | Talha Rashid",
    description: "A case study of the DigiHomeo clinical decision support platform engineered by Talha Rashid.",
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
  notFound();
}
