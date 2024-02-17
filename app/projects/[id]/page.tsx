import ProjectSection from "@/app/_components/project-section ";
import { projectData } from "@/lib/data ";
import React from "react";

export default function ProjectPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = projectData.find((project) => project.tag === id)!;
  console.log(project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex-1 pb-16 md:pb-20 lg:pb-24">
      <ProjectSection
        className="content mt-12 md:mt-16 lg:mt-20"
        project={project}
      />
    </div>
  );
}
