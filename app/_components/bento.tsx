"use client"

import React from 'react';
import {MotionProps, motion} from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

import { SiGithub, SiLinkedin, SiGmail, SiLeetcode  } from 'react-icons/si';
import Link from 'next/link';


export const Bento = () => {
    return (
        <div className=' mx-auto max-w-screen-xl relative w-full  px-4 py-12 text-zinc-50'>
            <motion.div 
            initial="initial"
            animate="animate"
            transition={{
                staggerChildren: 0.05,
            }}
            className='mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4'>
                <HeaderBlock />
                <SocialsBlock />
                <AboutBlock />
                <LocationBlock />
                <TopChart />
            </motion.div>
        </div>
    )
}

type Props = {
    className?: string;
} & MotionProps; 

const Block = ({ className, ...rest }: Props) => {
    return (
        <motion.div 
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0.
                }, 
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                }
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
        className={twMerge('col-span-4 rounded-lg border border-zinc-300 backdrop-opacity-5 backdrop-invert bg-white/30 p-6', 
            className
        )}
        {...rest}
        />
    )
}


const HeaderBlock = () => {
    return (
        <Block className='col-span-12  row-span-2 md:col-span-6'>
        <h1 className='mb-12 text-4xl font-medium leading-tight'>
            Hi, I&apos;m Justin. {" "}
            <span className='text-zinc-700'>
                I build cool websites like this one.
            </span>
        </h1>
        <a href='mailto:tkljustin@outlook.com' className='flex items-center gap-1 text-red-300 hover:underline'>
            Contact me <FiArrowRight />
        </a>
    </Block>
    )
}


const SocialsBlock = () => (
   <>
   <Block whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
   }} 
   className='col-span-6 bg-red-500 md:col-span-3'>
    <a href='#' className='grid h-full place-content-center text-3xl text-white'>
        <SiGmail/>
    </a>
   </Block>
   <Block whileHover={{
     rotate: "-2.5deg",
     scale: 1.1,
   }}
   className='col-span-6 bg-green-500 md:col-span-3'>
    <a  href='https://leetcode.com/u/lizardkingnardo/' className='grid h-full place-content-center text-3xl text-white'>
        <SiLeetcode /> 
    </a> 
   </Block>
      <Block whileHover={{
     rotate: "-2.5deg",
     scale: 1.1,
   }}
   className='col-span-6 bg-zinc-50 md:col-span-3'>
     <a href='https://github.com/QuadNard' className='grid h-full place-content-center text-3xl text-black'>
          <SiGithub />
     </a>
   </Block>
      <Block whileHover={{
     rotate: "-2.5deg",
     scale: 1.1,
   }}
   className='col-span-6 bg-blue-500 md:col-span-3'>
     <a  href='https://www.linkedin.com/in/justin-tulloch-010502262/' className='grid h-full place-content-center text-3xl text-white'>
        <SiLinkedin />
     </a>
   </Block>
   </> 
)


const AboutBlock = () => {
return (
        <Block className='col-span-12 text-3xl leading-snug'>
        <p>
            My passion is building cool stuff.{" "}
            <span className='text-zinc-700'>
               I have a proven track record of being actively involved in strategic direction and product decisions, as well as iterating rapidly on features and processes to meet user needs effectively.
            </span>
        </p>        
    </Block>
)
}


const LocationBlock = () => {
    return (
        <Block className='col-span-12 flex flex-col items-center gap-4 md:col-span-3'>
        <FiMapPin className='text-3xl' />
               <p className='text-center text-lg text-zinc-700'>pennsylvaina</p>
        </Block>
    );
}



const TopChart = () => {
    return (
        <Block className='col-span-12 md:col-span-9'>
            <div className='flex items-center gap-2'>
                <div className='w-full rounded border border-zinc-300 backdrop-opacity-5 backdrop-invert bg-white/30 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0'>
                <Link href='https://github.com/QuadNard/MaadSounds' className='flex flex-col items-center gap-4'>
                            <Image src="/music.webp" alt='music' width={50} height={50} className='m-2' />
                            <p className='text-center text-lg text-zinc-800'>MAADSOUNDS</p>
                            <p className='text-center text-xs text-zinc-800'>Most Recent Project</p>
                </Link>
                </div>
                <div className='w-full rounded border border-zinc-300 backdrop-opacity-5 backdrop-invert bg-white/30 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0'>
                <Link href='http://localhost:3000/projects/2' className='flex flex-col items-center gap-4'>
                            <Image src="/cam.gif" alt='music' width={50} height={50} className='' />
                            <p className='text-center text-lg text-zinc-800'>Giphy App</p>
                            <p className='text-center text-xs text-zinc-800'>JavaScript Project</p>
                </Link>
                </div>
                <div className='w-full rounded border border-zinc-300 backdrop-opacity-5 backdrop-invert bg-white/30 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0'>
                <Link href='http://localhost:3000/projects/1' className='flex flex-col items-center gap-4'>
                            <Image src="/dice.gif" alt='music' width={50} height={50} className='' />
                            <p className='text-center text-lg text-zinc-800'>Devscoreboard</p>
                            <p className='text-center text-xs text-zinc-800'>Full Stack Project</p>
                </Link>
                </div>
            </div>
        </Block>
    )
}
    