import clsx from 'clsx'
import React, { ComponentProps } from 'react'

export default function Footer({className, ...props}: ComponentProps<"footer">) {
  return (
   <footer className={clsx("flex flex-col font-medium ", className)} {...props}>
        footer 
   </footer>
  )
}
