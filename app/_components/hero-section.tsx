"use client";

import { motion } from 'framer-motion';
import React, { ComponentProps, Suspense } from 'react'
import { SwipeCarousel } from './carousel';
import localFont from 'next/font/local'
import LeetScore from './code-score';


const myFont = localFont({ src: '../../fonts/NeueMontreal-Regular.otf'});



  
export default function HeroSection(props: ComponentProps<"section">){

  return (
    <section {...props}>
      <div className={myFont.className}>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="grid grid-cols-1 mx-auto max-w-screen-xl relative w-full  md:grid-cols-2 gap-2 md:gap-20">
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border text-xs">
                <Suspense fallback={<div>loading...</div>}>
                  <LeetScore />
                </Suspense>
              </div>
              <h1 className="">
                  <span className="">Software Engineer</span>
                  <br />
                  based in the west coast.
                  <br className="max-lg-gutters" />
                   focused on 
                  <span className=""> interactive design-</span>exploring{" "}
                  <span className="">immersive interfaces.</span>
              </h1>
              <p className="">
                  feel free to star it on github, iterate with confidence.
              </p>
              <div className="flex gap-5 flex-col md:flex-row">
                  <button>hello</button>
                  <button>hello</button>
              </div>
            </div>
                <div>
                  <SwipeCarousel />
                </div>
          </motion.div>
      </div>
    </section>
  )
}

