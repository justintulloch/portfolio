"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { NowPlaying } from "./track-animation"
import { useNowPlaying } from "@/hooks/use-now-playing "
import TabSection from "./tab-section"

import { ResumeSection } from "./resume-section"
import RealtimeDate from "./real-time"
import FrontPageFooter from "./front-footer"



interface ArticleProps {
    samples?: {
        id: string
        title: string
        content: React.ReactNode
    }[]
    citations?: {
    id: string
    text: string
    url?: string
    }[]
}


export default function ArticlePreview({
     samples = [],
    citations = [],
}: ArticleProps) {
    const { track, loading, error } = useNowPlaying({
        refreshInterval: 1000 * 60 * 5,  // Refresh every 5 minutes
        apiEndpoint: "/api/now-playing",
    })

    const isFetching = error ?? loading;
    const safeTrack = isFetching ? null : track;

        const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null // Or a skeleton/placeholder
    }


    return (
      <article style={{
        boxSizing: "border-box",
        border: "0 solid #e5e7eb",
      }} className="flex flex-col mt-10 gap-2xl @md:gap-3xl">
            <div className="@container w-full max-w-container"> 
                    <div className="inner-wrapper">
                        <div className="grid-container">
                            <div className="main-content">
                                <div className="content-wrapper">
                                    <div className="meta-info">
                                        <RealtimeDate />
                                        <Link href={"/"} className="meta-category text-meta transition ease-curve-a duration-250 hover:text-primary-100">
                                            Portfolio
                                        </Link>
                                    </div>
                                    <h1 className="main-title  text-balance scroll-mt-[calc(var(--header-h)+var(--toc-button-h))]">Deployable Systems, Engineered for Real-Time Performance</h1>
                                
                                    <div className="cta-buttons">
                                        <Link href={"https://chatgpt.com/"} className="btn btn-primary">
                                                                            Try ChatGPT
                                <svg width="11" style={{
                                    transform: "translate(1px, -1px)",
                                }} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                        
                                        </Link>
                                        <Link href={
                                            "/"
                                        } className="btn btn-secondary">
                                                                            Try ChatGPT for Work
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 10 16" 
                                fill="none" style={{
                                    transform: "rotate(270deg)",
                                }}>
                                    <path d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z" fill="currentColor"></path>
                                </svg>
                                        </Link>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div  className="bottom-section">
                         <div className="@md:col-span-6 @md:col-start-4 pt-3xs border-t-primary-4 col-span-12 flex w-full items-center justify-between border-t-[1px]">
                            <div className="flex flex-col gap-2">
                                <div className="flex-col item-center gap-4 p-3">
                                <p className="max-w-[46ch] leading-relaxed text-black">
                                    I {" "}<del className="text-zinc-500">occasionally</del>{" "}
                                    <a
                                        className="link text-black"
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        listen to music
                                    </a>{" "}
                                    while{" "}
                                    <a
                                        className="link text-black"
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        >
                                        coding rad projects
                                    </a>
                                    .
                                </p>  
                            </div>
                            <div className="space-y-2">
                                <div className="rounded-xl p-4">
                                    <NowPlaying tracks={safeTrack} loading={loading} href={track?.url} size="md" />
                                </div>
                            </div>
                            </div>
                         </div>
                    </div>
                </div> 
                <div className="w-full grid grid-cols-12 @container max-w-container multi-columns:px-0 multi-columns:flex">
                    <div className="col-span-12 @md:col-span-6 @md:col-start-4 max-w-none prose">
                        <p className="mb-sm last:mb-0">
                            <span className="block mb-4">
                                I engineer intelligent systems designed for speed, reliability, and production-grade deployment.
                            </span>
                            <span className="block">
                                From quantized PyTorch inference pipelines to latency-resilient netcode, I build infrastructure that performs under pressure and scales cleanly.
                            </span>
                        </p>
                        <p className="mb-sm last:mb-0">
                            <span> My work spans from automated anomaly detection in satellite telemetry to simulation-driven ML models, all shipped with test-first discipline and operational awareness.</span>
                            <Link href={"/"} className="transition ease-curve-a duration-250 underline-offset-[0.25rem] underline decoration-1 hover:text-primary-60 text-primary-100">
                                <span></span>
                            </Link>
                            <span></span>
                        </p>
                        <p className="mb-sm last:mb-0">
                            <Link href={"/"} className="transition ease-curve-a duration-250 underline-offset-[0.25rem] underline decoration-1 hover:text-primary-60 text-primary-100">
                                <span></span>
                            </Link>
                            <span>Explore my projects and see how I design for execution.</span>
                        </p>
                    </div>
                </div>
                {/* Samples Section */}
                {samples.length > 0 && <TabSection title="Samples" tabs={samples} />}

                <section id="research"  className="@container group/component-group">
                        <div className="md-xs @md:mb-sm">
                            <div className="@container max-w-container grid w-full grid-cols-12 toc-content-heading scroll-mt-[calc(var(--header-h)+var(--toc-button-h))]">
                                <div className="@md:col-span-6 @md:col-start-4 col-span-12 max-w-none">
                                    <h2 className="text-h3 scroll-mt-[calc(var(--header-h)+var(--toc-button-h))]">
                                        Methodology
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="@container grid w-full grid-cols-12">
                            <div className="col-span-12 grid w-full grid-cols-1 items-stretch gap-lg @md:gap-xl">
                                <div className="w-full grid grid-cols-12 @container max-w-container multi-columns:px-0 multi-columns:flex">
                                    <div className="col-span-12 @md:col-span-6 @md:col-start-4 max-w-none prose">
                                        <ul className="mb-md marker:text-inherit last:mb-0 list-disc pl-2xs mx-3xs">
                                            <li className="mb-4xs last:mb-0">
                                                <span>{`
                                                My architecture starts with what’s missing: failure cases, performance cliffs, deployment bottlenecks. I simulate those first.
                                                    From there, I design systems that are modular, test-first, and driven by constraints. Every layer—from data ingestion to inference—must be observable, debuggable, and built to deploy.
                                                    I enjoy working across diverse coding styles—from tight, test-driven loops to exploratory prototyping—but my favorite is to code what’s not written—using "Negative Space Programming" to eliminate fragility, enforce defaults, and define behavior through absence, not exception.
                                                    The result: backend systems and ML pipelines that survive scale, drift, and latency—not just pass CI.
                                                `}&nbsp;</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                {/* Citations */}
                {citations.length > 0 && <ResumeSection citations={citations} />}

                <FrontPageFooter />
      </article>
    )
}
