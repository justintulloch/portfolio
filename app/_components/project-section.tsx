"use client";

import React from "react";
import Laptop from "./laptop";
import { projectTypes } from "@/types/types ";

interface ProjectProps {
  project: projectTypes;
  className: string;
}

const ProjectSection: React.FC<ProjectProps> = (props) => {
  const languages = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Express",
    "MongoDB",
  ];

  return (
    <section className={props.className}>
      <div className="mx-auto px-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:col-span-4 lg:row-end-1 max-lg-gutters">
            <Laptop Link={props.project.link} />
          </div>
          <div className="flex">
            <h2 className="sr-only">// languages</h2>
            <ul className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <li
                  key={index}
                  className="text-xs font-bold text-white bg-zinc-400 px-2 py-1 rounded-md"
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {props.project.title}
                </h1>
                <h2 className="sr-only">// languages</h2>
              </div>
            </div>
            <div className="mt-6 text-white">
              <p className="mb-4">{props.project.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
