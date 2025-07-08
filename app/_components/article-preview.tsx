import React from "react"
import Link from "next/link"





export default function ArticlePreview() {
    return (
      <article className="flex flex-col mt-10 gap-2xl md:gap-3xl">
            <div className="@container w-full max-w-container">
                <div className="relative w-full">
                    <div className="@container [container-type:inline-size] multi-columns:px-0 grid w-full grid-cols-12">
                        <div className="col-span-12 @[44rem]:col-span-10 @[44rem]:col-start-2 @[60rem]:col-span-8 @[60rem]:col-start-3">
                            <div className="relative flex flex-col flex-wrap justify-center">
                                <div className="mb-md gap-2xs flex flex-wrap justify-center">
                                    <p className="text-meta text-primary-100">
                                        November 30, 2022
                                    </p>
                                    <Link href={'/link'} className="transition ease-curve-a duration-250 text-meta text-primary-44 hover:text-primary-100">
                                        Product 
                                    </Link>
                                </div>


                                <h1 className="text-h1 max-w-[62.5rem] text-primary-100 text-balance scroll-mt-[calc(var(--header-h)+var(--toc-button-h))]">
                                    Introducing ChatGPT
                                </h1>
                                <div className="mt-md min-h-sm flex justify-between">
                                    boring
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </article>
    )
}
