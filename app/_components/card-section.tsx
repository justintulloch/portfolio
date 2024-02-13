
"use client";

import clsx from 'clsx';
import { formatDistanceToNow, isYesterday } from "date-fns"
import { AnimatePresence, Transition, Variants } from 'framer-motion'
import Link from 'next/link'
import React, { ComponentProps, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Skeleton } from './skeleton';
import { projectData } from '@/lib/data ';


const variants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const fade: Transition = {
  ease: "easeInOut",
  duration: 0.6
}


const ProjectCards: React.FC<{ title: string, description: string }> = ({ title, description}) => {

  const id = projectData.find((project) => project.description === description)?.id;
 

   
  return (
    <>
        <div>
      <h2 className="font-serif text-3xl">{title}</h2>
      <div className="flex flex-row gap-2">
          <Link href={`/projects/${id}`} className="font-mono font-extralight text-xs underline decoration-2 decoration-dotted decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-zinc-500 dark:hover:decoration-zinc-400 underline-offset-2 mt-1">
              {"Source"}
          </Link>
      </div>
    </div>
    <p className="italic pt-2">
      {title}
    </p>
    <p className="italic pt-2">
      {description}
    </p>
    <div className="relative mb-5 flex flex-col rounded-lg bg-dribble-500 shadow-xl shadow-dribble-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-red-400/60 before:to-red-400/0   sm:mb-8 sm:flex-row lg:mb-10">
        &nbsp;
    </div>
    </>
  )
}

const  Sidebar: React.FC<{ onHover: (description: string) => void}> = ({
  onHover
}) => {
  return (
    <>

    {projectData.map((project) => (
      <button 
      key={project.id} 
      onMouseEnter={() => onHover(project.description)}
      className="group hover:bg-slate-200 hover:cursor-crosshair text-sm sm:text-md  max-w-fit  transition-colors duration-100 ease-in-out">
          <span className="text-zinc-400 group-hover:text-[#ffd800]">*&nbsp;</span>
           {project.title}
        </button>
        ))}
    </>
  )
}



export default function CardSection(props: ComponentProps<"section">){
  const [localDate, setLocalDate] = React.useState(new Date());
    const [hoverDesc, setHoverDesc] = React.useState<string | null>(null);

    useMemo(() => {
      const intervalId = setInterval(() => {
        setLocalDate(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    const relativeDate = useMemo(() => {
      if(!localDate) return;
      return isYesterday(localDate) ? "Yesterday" : formatDistanceToNow(localDate, { addSuffix: true });
    }, [localDate]);
    
    



  return (
    <section {...props}>
      <div>
      <h2 className="mb-2 text-xl font-bold text-white">
       Recent Projects
      </h2>
      <p className="max-w-[46ch] leading-relaxed text-white">
        I <del className="text-zinc-500">occasionally</del>{" "}
        <a
          className="link text-white"
          href="/"
          rel="noreferrer"
          target="_blank"
        >
          listen to music
        </a>{" "}
        while{" "}
        <a
          className="link text-white"
          href="/"
          rel="noreferrer"
          target="_blank"
        >
          coding rad projects
        </a>
        .
      </p>   
          <div className="mt-8 flex flex-col gap-8">
            <Link href="/projects" className={clsx("min-w-0 max-w-full",
            "focusable flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40")}>
                <div className="highlight relative aspect-square h-20 flex-none overflow-hidden rounded bg-zinc-100 ">
                  <AnimatePresence>
                      <motion.img 
                        alt={"by-drake"}
                        animate="visible"
                        className=""
                        exit="hidden"
                        initial="hidden"
                        src={"/assets/artworks.jpg"}
                        transition={fade}
                        variants={variants}
                      />  
                  </AnimatePresence>

                </div>
                <div className="flex min-w-0 flex-col justify-center">
                    <small className="flex items-center text-xs font-semibold uppercase leading-tight tracking-widest text-rose-500">
                  <svg
            className="mr-1 -ml-px flex-none will-change-transform"
            fill="currentColor"
            height="20"
            role="presentation"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
              <>
                <rect height="8" rx="1" width="2" x="3" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;2;6;4;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;9;7;8;6"
                  />
                </rect>
                <rect height="12" rx="1" width="2" x="7" y="4">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="12;8;10;8;14;12"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="4;6;5;6;3;4"
                  />
                </rect>
                <rect height="6" rx="1" width="2" x="11" y="7">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;6;10;8;6"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="7;6;7;5;6;7"
                  />
                </rect>
                <rect height="8" rx="1" width="2" x="15" y="6">
                  <animate
                    attributeName="height"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="8;4;6;4;2;8"
                  />
                  <animate
                    attributeName="y"
                    calcMode="linear"
                    dur="1s"
                    repeatCount="indefinite"
                    values="6;8;7;8;9;6"
                  />
                </rect>
              <path
                clipRule="evenodd"
                d="M16 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM8 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1ZM4 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
                fillRule="evenodd"
              />
              </>
          </svg>  
                {localDate ?  (
                  <time className="truncate" dateTime={localDate.toISOString()}>
                    {relativeDate}
                  </time>
                ) : (
                  <span className="truncate">
                        {"Currently playing"}
                  </span>
                )}
                    </small>
                    <p className="my-1 flex items-center">
                      <span className="truncate font-semibold text-zinc-500" title={"Red Button"}>
                        {"Red Button" ?? <Skeleton className="w-40" />}
                      </span>{" "}
                      {"2024" && (
                        <time className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500"
                        dateTime={String(new Date("2024"))}>
                        {"2024"}
                        </time>
                      )}
                    </p>
                    <p className="truncate text-zinc-500" title={"Drake"}>
                        {"Drake"}
                    </p>
                </div>
            </Link>
          </div>
          <div className="pt-7 w-10/12 ml-8 h-fit">
              <div className="lg:w-3/4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <section className="lg:sticky gap-2 lg:top-36 grid gap-x-2 text-xs grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 content-start">
                            <Sidebar onHover={(description) => setHoverDesc(description)} />
                          </section>
                          <section className="h-fit  my-7 mx-0 lg:my-0">
                              {hoverDesc && <ProjectCards title="hoverCard" description={hoverDesc}  />}
                          </section>
                        </div>
                </div>          
          </div>
      </div>
    </section>
  )   
};