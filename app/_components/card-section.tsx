"use client";

import clsx from "clsx";
import { formatDistanceToNow, isYesterday } from "date-fns";
import { AnimatePresence, Transition, Variants } from "framer-motion";
import Link from "next/link";
import React, { ComponentProps, useEffect } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "./skeleton";
import { projectData } from "@/lib/data ";
import Image from "next/image";
import Footer from "./footer";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const fade: Transition = {
  ease: "easeInOut",
  duration: 0.6,
};

const buttonTitle = "Red Button"; 
const year = "2024";



const ProjectCards: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const id = projectData.find(
    (project) => project.description === description,
  )?.id;

  return (
    <>
      <div>
        <h2 className="font-serif text-3xl">{title}</h2>
        <div className="flex flex-row gap-2">
          <Link
            href={`/projects/${id}`}
            className="font-mono font-extralight text-xs underline decoration-2 decoration-dotted decoration-zinc-400 dark:decoration-zinc-500 hover:decoration-zinc-500 dark:hover:decoration-zinc-400 underline-offset-2 mt-1"
          >
            {"Source"}
          </Link>
        </div>
      </div>
      <p className="italic pt-2">{title}</p>
      <p className="italic pt-2">{description}</p>
      <div className="relative mb-5 flex flex-col rounded-lg bg-dribble-500 shadow-xl shadow-dribble-500/10 before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:bg-gradient-to-tl before:from-red-400/60 before:to-red-400/0   sm:mb-8 sm:flex-row lg:mb-10">
        &nbsp;
      </div>
    </>
  );
};

const Sidebar: React.FC<{ onHover: (description: string) => void }> = ({
  onHover,
}) => {
  return (
    <>
      {projectData.map((project) => (
        <button
          key={project.id}
          onMouseEnter={() => onHover(project.description)}
          className="group hover:bg-slate-200 hover:cursor-crosshair text-sm sm:text-md  max-w-fit  transition-colors duration-100 ease-in-out"
        >
          <span className="text-zinc-400 group-hover:text-[#ffd800]">
            *&nbsp;
          </span>
          {project.title}
        </button>
      ))}
    </>
  );
};

export default function CardSection(props: ComponentProps<"section">) {
  const [localDate, setLocalDate] = React.useState(new Date());
  const [hoverDesc, setHoverDesc] = React.useState<string | null>("1");
  const [relativeDate, setRelativeDate] = React.useState<string | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!localDate) return;
    const date = isYesterday(localDate)
      ? "Yesterday"
      : formatDistanceToNow(localDate, { addSuffix: true });
    setRelativeDate(date);
  }, [localDate]);

  return (
    <section {...props}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="grow flex-col"
      >
        <article className="text-md">
          <header className="container grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 lg:mb-20 items-center">
            <div className="col-span-6 flex flex-col pr-12 gap-6">
              <h1 className="mb-2 text-xl font-bold text-white">
                Recent Projects
              </h1>
              <div className="flex items-center gap-4">
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
              </div>
              <div className="flex items-center gap-4">
                <div className="mt-8 flex flex-col gap-8">
                  <Link
                    href="/projects"
                    className={clsx(
                      "min-w-0 max-w-full",
                      "focusable flex w-fit gap-4 rounded pr-2 ring-offset-4 transition hover:opacity-60 focus:ring-red-500/40",
                    )}
                  >
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
                        {localDate ? (
                          <time
                            className="truncate"
                            dateTime={localDate.toISOString()}
                          >
                            {relativeDate}
                          </time>
                        ) : (
                          <span className="truncate">
                            {"Currently playing"}
                          </span>
                        )}
                      </small>
                      <p className="my-1 flex items-center">
                        <span
                          className="truncate font-semibold text-zinc-500"
                          title={buttonTitle}
                        >
                          {buttonTitle ?? <Skeleton className="w-40" />}
                        </span>{" "}
                        {year && (
                          <time
                            className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500"
                            dateTime={String(new Date("2024"))}
                          >
                            {year}
                          </time>
                        )}
                      </p>
                      <p className="truncate text-zinc-500" title={"Drake"}>
                        {"Drake"}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6  relative">
              <div className="rounded-2xl border-2 border-gray-500 overflow-hidden">
                <div className="m-[-1px]">
                  <Image
                    src="/assets/site-6.jpg"
                    alt="hero"
                    className="w-full max-h-[290px]"
                    width={517}
                    height={290}
                  />
                </div>
              </div>
            </div>
          </header>
          <div className="container flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-6 pt-10">
            <div className="lg:col-span-8 lg:max-w-[46rem] pb-12 xl:pl-0 xl:pr-16 order-2 ">
              <div>
                <div className="my-12 first:mt-0 last:mb-0">
                  {hoverDesc && (
                    <ProjectCards title="hoverCard" description={hoverDesc} />
                  )}
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4 order-1">
              <div className="lg:sticky gap-2 lg:top-36 grid gap-x-2 text-xs grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 content-start">
                <Sidebar onHover={(description) => setHoverDesc(description)} />
              </div>
            </aside>
          </div>
        </article>
      </motion.div>
      <Footer />
    </section>
  );
}
