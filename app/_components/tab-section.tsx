"use client"

import type React from "react"

import { useState } from "react"

interface Tab {
  id: string
  title: string
  content: React.ReactNode
}

interface TabSectionProps {
  title: string
  tabs: Tab[]
}


export default function TabSection({ tabs }: TabSectionProps){
    const [activeTab, setActiveTab ] = useState(tabs[0]?.id || "")




    return (
        <section className="@container group-component-group"> 
            <div className="@container grid w-full grid-cols-12">
                <div className="col-span-12 grid w-full grid-cols-1 items-stretch gap-lg @md:gap-xl">
                    <div className="@container multi-columns:px-0 grid w-full grid-cols-12 max-w-container">
                        <div className="col-span-12 @md:col-span-10 @md:col-start-2 @lg:col-span-8 @lg:col-start-3">
                            <div className="relative flex flex-col items-center text-center">
                                <h3 className="text-h3 max-w-[62.5rem] text-primary-100 text-balance scroll-mt-[calc(var(--header-h)+var(--toc-button-h))]">Samples</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gap-md flex flex-col">
                        <nav className="scrollable px-sm mx-auto max-w-full py-[4px]">
                            <div className="relative w-max">
                                <div className="w-max">
                                    <div className="relative flex min-w-max gap-2">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                role="tab"
                                                aria-selected={activeTab === tab.id}
                                                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                                                activeTab === tab.id ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-100"
                                                }`}
                                                onClick={() => setActiveTab(tab.id)}
                                                >
                                                    {tab.title}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Tab Content */}
                        <div>
                            {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`overflow-hidden transition-opacity duration-300 ${activeTab === tab.id ? "block" : "hidden"}`}
                            >
                                <div className="@container max-w-container grid w-full grid-cols-12">
                                    <div className="gap-3xs @md:col-start-4 @md:col-span-6 text-p2 col-span-12 flex flex-col">{tab.content}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}