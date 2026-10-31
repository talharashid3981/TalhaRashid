import { projects } from "@/lib/projects";

export default function CaseStudyTitle({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Missing project data for case study "${slug}".`);
  }

  return (
    <h1>{project.name}</h1>
  );
}
