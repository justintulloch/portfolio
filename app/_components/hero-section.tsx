"use client";

import { motion } from 'framer-motion';
import React, { ComponentProps, Suspense, useEffect, useState } from 'react'
import { SwipeCarousel } from './carousel';
import localFont from 'next/font/local'
import LeetScore from './code-score';
import { ButtonGooey } from './button';
import Link from 'next/link';
import { PiDownloadSimpleLight } from "react-icons/pi";


const myFont = localFont({ src: '../../fonts/NeueMontreal-Regular.otf'});



  
export default function HeroSection(props: ComponentProps<"section">){


  return (
    <section {...props}>
      <div className={myFont.className}>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="grid grid-cols-1 mx-auto max-w-screen-xl relative w-full  md:grid-cols-2 gap-2 md:gap-20">
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border text-xs cursor-pointer bg-orange-200 transition-colors duration-300 hover:bg-red-100 text-red-300">
                 <div className="flex items-center gap-2 py-1 pl-4 pr-5">
           
                      {"check out my leetcode score"}
                 </div>
              </div>
              <h1 className="text-[31px] text-white leading-[1.29] tracking-[-0.022rem] space-y-2 mb-6 mt-2 select-text ">
                  <span className="relative top-[3px] md:top-0 ">Software Engineer</span>
                  <br />
                  based in the west coast{" "}
                  <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" width={40} height={40} className="inline size-7">
  <g id="color">
    <circle cx="36" cy="36" r="28" fill="#92D3F5" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="#B1CC33" stroke="none" d="M9,34c0.5363,0.13,2.3029,0.3956,3,1c0.8804,0.7633-0.0786,1.4353,1,3c0.8754,1.2699,1.4379,3.0859,2,3 c0.7427-0.1134,0.5561-2.6591,2-4c0.4647-0.4316,1.2271-2.1396,2-2c1.4918,0.2695,1.2206,3.3712,3,4 c1.0358,0.366,2.3338,0.7411,3,0c0.8521-0.9479,0.3369-1.7146,1-3c0.8275-1.6039,2.0751-1.2738,4-3 c2.0099-1.8025-0.7353-2.7141,1-4c2.0988-1.5552,4.5219-0.4686,6-2c1.3787-1.4284-0.4493-2.7987,1-4 c0.6379-0.5287,3.0773-0.4945,6-1c1.2827-0.2218,3.239-0.5602,5-1c1.4183-0.3542,2.0643-1.2649,2-2 c-0.0632-0.7224-0.6832-0.9777-1-1c-2.0169-0.1422-2.2701,0.1908-4,0c-1.9902-0.2195-1.9509-0.6928-4-1 c-0.9448-0.1416-1.0863-0.061-5,0c-2.2653,0.0353-3.4099,0.0519-4,0c-2.562-0.2253-4.642-0.8844-5-1 c-2.0319-0.6559-2.0007-0.9771-3-1c-1.5103-0.0345-2.1089,0.6871-4,1c-1.2519,0.2071-2.313,0.1098-3,0l-1.004-0.5618 l-2.8295,3.0328l-2.2612,3.2599l-1.5459,3.005l-1.199,3.265l-0.8482,3.8116l-0.2314,2.0592L9,34z"/>
    <path fill="#B1CC33" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M32,47c-1.5469,0.1652-2.6099,0.7611-3,1c-0.7033,0.4307-1.5549,0.9523-2,2c-0.4653,1.0953-0.2139,2.1245,0,3 c0.2472,1.012,0.4286,1.7547,1,2c0.7282,0.3127,1.2331,0.4499,3,0c0.7713-0.1964,1.9404-0.4941,3,0c0.9949,0.464,0.8162,0.1239,2,1 c0.4182,0.3095,1.5387,1.1387,3,1c1.2722-0.1208,2.4038-0.9373,3-2c0.7448-1.3275,0.5882-2.9215,0-4 c-0.8341-1.5294-2.0909-1.2053-3-3c-0.4124-0.8142-0.3632-1.2944-1-2c-0.6519-0.7223-1.6523-1.2702-2-1 c-0.4014,0.312,0.4546,1.413,0,2C35.5139,47.6277,34.2306,46.7618,32,47z"/>
    <path fill="#B1CC33" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27,41c-1.0128,0.5427-1.9557,1.547-2,2c-0.0252,0.2579,0.3162,0.5088,1,1c1.0589,0.7607,1.0884,1.8078,1.5,1.6667 c0.5548-0.1901,1.3464-1.7906,2.0426-2.8333c0.814-1.2191,3.0778-1.1972,3.2908-2.0833C33.0298,39.9323,30.613,38.0735,30,38 C29.1395,37.8969,29.0017,39.9274,27,41z"/>
    <path fill="#B1CC33" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M9,34c0.5363,0.13,2.3029,0.3956,3,1c0.8804,0.7633-0.0786,1.4353,1,3c0.8754,1.2699,1.4379,3.0859,2,3 c0.7427-0.1134,0.5561-2.6591,2-4c0.4647-0.4316,1.2271-2.1396,2-2c1.4918,0.2695,1.2206,3.3712,3,4 c1.0358,0.366,2.3338,0.7411,3,0c0.8521-0.9479,0.3369-1.7146,1-3c0.8275-1.6039,2.0751-1.2738,4-3 c2.0099-1.8025-0.7353-2.7141,1-4c2.0988-1.5552,4.5219-0.4686,6-2c1.3787-1.4284-0.4493-2.7987,1-4 c0.6379-0.5287,3.0773-0.4945,6-1c1.2827-0.2218,2.239,0.4398,4,0c1.4183-0.3542,4.0643-2.2649,4-3 c-0.0632-0.7224-1.6832-0.9777-2-1c-2.0169-0.1422-2.2701,0.1908-4,0c-1.9902-0.2195-1.9509-0.6928-4-1 c-0.9448-0.1416-1.0863-0.061-5,0c-2.2653,0.0353-3.4099,0.0519-4,0c-2.562-0.2253-4.642-0.8844-5-1 c-2.0319-0.6559-2.0007-0.9771-3-1c-1.5103-0.0345-2.1089,0.6871-4,1c-1.2519,0.2071-2.313,0.1098-3,0"/>
  </g>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M32,47c-1.5469,0.1652-2.6099,0.7611-3,1c-0.7033,0.4307-1.5549,0.9523-2,2c-0.4653,1.0953-0.2139,2.1245,0,3 c0.2472,1.012,0.4286,1.7547,1,2c0.7282,0.3127,1.2331,0.4499,3,0c0.7713-0.1964,1.9404-0.4941,3,0c0.9949,0.464,0.8162,0.1239,2,1 c0.4182,0.3095,1.5387,1.1387,3,1c1.2722-0.1208,2.4038-0.9373,3-2c0.7448-1.3275,0.5882-2.9215,0-4 c-0.8341-1.5294-2.0909-1.2053-3-3c-0.4124-0.8142-0.3632-1.2944-1-2c-0.6519-0.7223-1.6523-1.2702-2-1 c-0.4014,0.312,0.4546,1.413,0,2C35.5139,47.6277,34.2306,46.7618,32,47z"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M27,41c-1.0128,0.5427-1.9557,1.547-2,2c-0.0252,0.2579,0.3162,0.5088,1,1c1.0589,0.7607,1.0884,1.8078,1.5,1.6667 c0.5548-0.1901,1.3464-1.7906,2.0426-2.8333c0.814-1.2191,3.0778-1.1972,3.2908-2.0833C33.0298,39.9323,30.613,38.0735,30,38 C29.1395,37.8969,29.0017,39.9274,27,41z"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M9,34c0.5363,0.13,2.3029,0.3956,3,1c0.8804,0.7633-0.0786,1.4353,1,3c0.8754,1.2699,1.4379,3.0859,2,3 c0.7427-0.1134,0.5561-2.6591,2-4c0.4647-0.4316,1.2271-2.1396,2-2c1.4918,0.2695,1.2206,3.3712,3,4 c1.0358,0.366,2.3338,0.7411,3,0c0.8521-0.9479,0.3369-1.7146,1-3c0.8275-1.6039,2.0751-1.2738,4-3 c2.0099-1.8025-0.7353-2.7141,1-4c2.0988-1.5552,4.5219-0.4686,6-2c1.3787-1.4284-0.4493-2.7987,1-4 c0.6379-0.5287,3.0773-0.4945,6-1c1.2827-0.2218,2.239,0.4398,4,0c1.4183-0.3542,4.0643-2.2649,4-3 c-0.0632-0.7224-1.6832-0.9777-2-1c-2.0169-0.1422-2.2701,0.1908-4,0c-1.9902-0.2195-1.9509-0.6928-4-1 c-0.9448-0.1416-1.0863-0.061-5,0c-2.2653,0.0353-3.4099,0.0519-4,0c-2.562-0.2253-4.642-0.8844-5-1 c-2.0319-0.6559-2.0007-0.9771-3-1c-1.5103-0.0345-2.1089,0.6871-4,1c-1.2519,0.2071-2.313,0.1098-3,0"/>
    <circle cx="36" cy="36" r="28" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
  </g>
                  </svg>

                  <br className="max-lg-gutters" />
                   focused on 
                  <span className="inline-block pb-1.5 px-2 rounded-md bg-symbolist-400 text-symbolist-500"> 
                    <svg id="emoji" viewBox="0 0 72 72" version="1.1" xmlns="http://www.w3.org/2000/svg" width={30} height={30} className="inline size-7">
  <g id="color">
    <circle cx="33" cy="12" r="4" fill="#92D3F5"/>
  </g>
  <g id="hair"/>
  <g id="skin">
    <path fill="#FCEA2B" d="M55,36.6959H37V20h-0.1837C36.928,19.6858,37,19.3525,37,19c0-1.6569-1.3431-3-3-3s-3,1.3431-3,3 c0,0.3525,0.072,0.6858,0.1837,1H31v20.354l-0.2188-0.9969l-2.4511-2.6396l-5.2392-0.7568L21,38l2.0471,3.25L27,47.4352v4.9335 l-0.1849,0.007L27,53.411V55h0.2838l0.0646,0.3616L28,56l2.0676,4.0537l5.7051,3.7324l6.2917,0.9064l6.8249-2.346l5.0653-6.1851 L54.1971,55H55V36.6959z"/>
  </g>
  <g id="skin-shadow"/>
  <g id="line">
    <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M26.1481,11.5949c0,0-7.2102,0-14.4203,4.8068"/>
    <line x1="12.343" x2="11.0363" y1="10" y2="17.2389" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="18.2752" x2="11.0363" y1="18.5457" y2="17.2389" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M55.0207,50.5465c0,7.8067-6.3285,14.1352-14.1352,14.1352s-14.1352-6.3285-14.1352-14.1352"/>
    <line x1="55.0207" x2="55.0207" y1="49.7962" y2="39.4884" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M49.0145,39.2364c0.0696-1.659,1.4708-2.9474,3.1298-2.8778c1.6589,0.0696,2.9474,1.4708,2.8778,3.1298"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M43.0043,39.0363c0.0696-1.6589,1.4708-2.9474,3.1298-2.8778c1.6589,0.0696,2.9474,1.4708,2.8778,3.1298"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M43.0077,38.9213c0.1331-1.6551,1.5828-2.8888,3.2378-2.7557c1.6551,0.1331,2.8888,1.5828,2.7557,3.2378"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36.9591,38.6255c0.1063-1.657,1.5357-2.9141,3.1927-2.8079c1.657,0.1063,2.9141,1.5357,2.8079,3.1927"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M22.3961,40.5355c-1.1535-1.1943-1.1205-3.0976,0.0738-4.2511s3.0976-1.1205,4.2511,0.0738"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30.9463,19.4081c0-1.6604,1.346-3.0064,3.0064-3.0064s3.0064,1.346,3.0064,3.0064"/>
    <line x1="36.9591" x2="36.9591" y1="38.5936" y2="19.4081" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="30.9463" x2="30.9463" y1="19.4081" y2="43.2797" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <line x1="28.403" x2="26.7211" y1="38.2598" y2="36.3582" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M23.9146,42.5281c1.6773,1.8416,2.8977,4.4389,2.8358,8.1791"/>
    <line x1="22.3961" x2="23.9607" y1="40.5355" y2="42.58" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M35.5266,13.6182C35.8262,13.1514,36,12.596,36,12c0-1.6569-1.3431-3-3-3c-1.6569,0-3,1.3431-3,3 c0,0.8284,0.3358,1.5784,0.8787,2.1213"/>
  </g>
          </svg>
                  interactive design</span>-exploring{" "}
                  <span className="inline-block pb-1.5 px-2 rounded-md bg-twitter-400 text-twitter-500">
                    <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" width={30} height={30} className="inline size-7">
  <g id="color">
    <rect x="32.2075" y="30.1598" width="9.4061" height="9.831" fill="#fff"/>
    <rect x="11" y="36.3229" width="24.6979" height="24.6979" fill="#9b9b9a"/>
  </g>
  <g id="line">
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="56 38.2187 56 40.7187 53.5 40.7187"/>
    <line x1="49.5604" x2="35.7719" y1="40.7187" y2="40.7187" fill="none" stroke="#000" stroke-dasharray="0 0 3.9396 3.9396" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line x1="31.3021" x2="31.3021" y1="34.2791" y2="20.4906" fill="none" stroke="#000" stroke-dasharray="0 0 3.9396 3.9396" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="31.3021 18.5208 31.3021 16.0208 33.8021 16.0208"/>
    <line x1="37.7417" x2="51.5302" y1="16.0208" y2="16.0208" fill="none" stroke="#000" stroke-dasharray="0 0 3.9396 3.9396" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="53.5 16.0208 56 16.0208 56 18.5208"/>
    <line x1="56" x2="56" y1="22.4604" y2="36.2489" fill="none" stroke="#000" stroke-dasharray="0 0 3.9396 3.9396" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <rect x="11" y="36.3229" width="24.6979" height="24.6979" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" points="35.6013 36.4195 42.6337 29.3871 42.6337 36"/>
    <line x1="42.6337" x2="36.0625" y1="29.3871" y2="29.3871" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>
                    immersive interfaces
                   </span>
              </h1>
              <p className="text-[16px] leading-[1.625] tracking-[-0.011rem] text-slate-500 mb-14 select-text lg:mr-0 md:mb-10 max-w-[540px]">
                  feel free to star it on github, iterate with confidence.
              </p>
              <div className="flex gap-5 flex-col md:flex-row absolute">
                <Link href="/">
                    <div className="h-full w-full flex justify-center items-center">
                        <button style={{
                          filter: 'url("#gooey")',
                          color: '#eee'
                      }} className=" bg-black font-bold inline-flex text-xl  leading-5 h-16 items-center px-6 py-0 rounded-xl focusable cursor-pointer">
                           Resume{" "}
                          <PiDownloadSimpleLight className='h-5 w-5  text-white '/> 
                         
                        </button>
                    </div>
                </Link>
                <Link href="/" className="">
                   <ButtonGooey text={'View more'} />
                </Link>
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

