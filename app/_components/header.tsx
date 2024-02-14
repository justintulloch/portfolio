import React, { ComponentProps } from "react";
import clsx from "clsx";
import Image from "next/image";
import { MagneticTab } from "./magnetic-tab";




export default function Header({className, ...props}: ComponentProps<"header">) {
  const tabs = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Projects", link: "/projects" },
  ];




  return (
   <header {...props} className={clsx(className, "pt-6 lg:pt-8 w-full")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2 cursor-pointer">
                <div className="relative flex space-x-3 cursor-pointer hover:scale-105 transition">
                <div className="bg-emerald-500 absolute bottom-0 left-12   rounded-full border-2 border-white h-4 w-4" /> 
                  <div className="rounded-full overflow-hidden w-12 h-12">
                      <Image src="/assets/favicon.png" alt="logo"  width={100} height={100} />
                  </div>
                  
                  <div className="flex flex-col items-start justify-center">
                      <h4 className="text-sm font-semibold leading-none text-white">TullochStudio</h4>
                       <h5 className="text-sm tracking-tight text-zinc-500">@Platform Engineer</h5> 
                  </div>
                </div>
              </div>
               <div className="flex flex-row">
                {tabs.map((item) => (
                  <MagneticTab key={item.id} item={item} />
                ))}
               </div>
            </div>
   </header>
  )
}
