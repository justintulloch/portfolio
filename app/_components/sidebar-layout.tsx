'use client'
import { useState } from "react"
import Link from "next/link"


interface SidebarLayoutProps {
    children: React.ReactNode
}

  const navItems = [
    ['Research', '/research/index/'],
    ['Safety', '/safety/'],
    ['For Business', '/business/'],
    ['ChatGPT', '/chatgbt/'],
    ['Sora', '/platform'],
    ['API Platform', '/platform'],
    ['Stories', '/sora/'],
    ['Company', '/sora/'],
    ['News', '/sora/'],
  ]


export default function SidebarLayout({ children }: SidebarLayoutProps) {
    return (
    <div className="duration-sidebar ease-curve-sidebar grid transition-[grid-template-columns] grid-cols-[0_1fr] md:grid-cols-[0_theme(spacing.nav-width)_1fr]">
        
        <div>
                header 
        </div>
        <div className="relative overflow-x-hidden" id="sidebar-drawer">
            <nav id="navigation-sidebar-desktop" className="px-xs w-nav-width absolute right-0 top-0 mt-[187px] hidden md:block"> 
                <div className="fixed max-h-[calc(100svh-192px)] overflow-y-auto overflow-x-hidden pb-[46px]">
                    <div className="animate-sidebarSlideInLeft w-[calc(var(--spacing-nav-width)-2*var(--spacing-xs))]">
                        <ul className="text-nav-mobile space-y-0.5 font-bold md:text-nav-desktop">
                            {navItems.map(([label, href], idx) => (
                                   <li key={`desktop-${idx}-${href}`} className="group relative">
                                      <div className="rounded-md justify-between items-center w-full relative">
                                        <Link href={href} className="transition ease-curve-a duration-250 px-3xs py-4xs block h-full w-full leading-[1.375rem] focus-visible:rounded-sm">
                                             {label}     
                                        </Link>
                                        <span className="right-2xs md:right-3xs duration-fast pointer-events-none absolute top-1/2 -translate-y-1/2 transition-opacity group-hover:opacity-100 md:translate-x-[0.125rem] md:opacity-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-primary-44"
                                                width="10"
                                                viewBox="0 0 10 16"
                                                fill="none"
                                                aria-hidden="true"
                                                focusable="false"
                                                style={{ transform: "rotate(270deg)" }}
                                            >
                                                <path
                                                    d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                      </div>
                                   </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


        <div className="pt-header-h relative">
            <div> 
                <main id="main" className="@container relative z-[1] outline-none">
                    {children}
                </main>
            </div>
        </div>
    </div>
    )
}
