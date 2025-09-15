import ProjectSection from "@/app/_components/project-section ";
import { projectData } from "@/lib/data ";
import React from "react";
import { notFound } from "next/navigation";


export const dynamic = "error"
export const dynamicParams = false
export const revalidate = false


// Pre-generate all /projects/[id] paths at build time
// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return projectData.map((p) => ({ id: String(p.tag) }))
}





export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = projectData.find((p) => String(p.tag) === id)
  if (!project) return notFound()

  return (
    <div className="flex-1 pb-16 md:pb-20 lg:pb-24">
      <ProjectSection
        className="content mt-12 md:mt-16 lg:mt-20"
        project={project}
      />
    </div>
  );
}
