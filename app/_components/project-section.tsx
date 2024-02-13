"use client";

import React from "react";
import Laptop from "./laptop";
import { projectTypes } from "@/types/types ";



interface ProjectProps {
  project:  projectTypes;
  className: string;
}; 

const ProjectSection: React.FC<ProjectProps> = (props) => {


  return (
    <section className={props.className}>
        <div className="product-hero">
           <div className="product-header">
                <p className="">
                  {props.project.content}
                </p>
           </div>
           <div className="products">
              <div className="product-title">
                  <h1>{props.project.title}</h1>
                  <br />by <span>Justin</span>
              </div>
              <div className="product-look">
                   <Laptop Link={props.project?.link} />
              </div>
           </div>
        </div>
        <div className="overlay">
            overlay
        </div>
    </section>
  )
}

export default ProjectSection;
