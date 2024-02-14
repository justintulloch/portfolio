"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

export const MagneticTab = ({ item }: { item: { id: number; text: string, link: string} }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [hoverPosition, setHoverPosition] = useState({
    x: 0,
    y: 0,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;

    setHoverPosition({ x, y, opacity: 1 });
  };

  const onMouseOut = () => {
    setHoverPosition({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <>
    <Link href={item.link}>  
            <button
        ref={ref}
        className="relative h-9"
        onMouseMove={handleMouseMove}
        onMouseLeave={onMouseOut}
      >
      <span className="relative px-4 py-2 text-sm text-white transition-colors hover:text-zinc-300  ">
          {item.text}
        </span>{" "}
        <div
          className="absolute bottom-0 left-0 -z-10 h-full w-full rounded-[4px] bg-zinc-400/80 transition-opacity "
          aria-hidden="true"
          style={{
            transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)`,
            opacity: hoverPosition.opacity,
          }}
        />
      </button>

    </Link>
    </>
  );
};

