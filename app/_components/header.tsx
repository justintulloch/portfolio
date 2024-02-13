import React, { ComponentProps } from "react";
import clsx from "clsx";
import Image from "next/image";




export default function Header({className, ...props}: ComponentProps<"header">) {
  return (
   <header {...props} className={clsx(className, "pt-6 lg:pt-8 w-full")}>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2 cursor-pointer">
                <div className="relative cursor-pointer hover:scale-105 transition">
                  <div className="bg-emerald-500 absolute bottom-0 right-0 rounded-full border-2 border-white h-4 w-4" />
                  <div className="rounded-full overflow-hidden w-12 h-12">
                      <Image src="/assets/favicon.png" alt="logo"  width={100} height={100} />
                  </div>
                </div>
              </div>
               <div>projects</div>
            </div>
   </header>
  )
}
