"use client";

import { projectData } from "@/lib/data "
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion"
import { useEffect, useState } from "react";


   const DRAG_BUFFER = 50;
   
   const SPRING_OPTIONS = {
         type: "spring",
         mass: 3,
         damping: 50,
         stiffness: 400,
   }

    const ONE_SECOND = 1000;
    const AUTO_DELAY = ONE_SECOND * 10;

export const SwipeCarousel = () => {
    const [dragging, setDragging] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    const dragX = useMotionValue(0);

    const dragXProgress = useMotionValue(0);

    useMotionValueEvent(dragX, "change", (latest) =>  {
        if(typeof latest === "number" && dragging) {
            dragXProgress.set(latest);
        } else {
            dragXProgress.set(0);
        }
    });

        useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragXProgress.get();

            if(x === 0 ) {
                setActiveIndex((pv) => {
                    if(pv === projectData.length - 1) {
                        return 0;
                    } 
                    return pv + 1;
                })
            }

        }, AUTO_DELAY)

        return () => {
            clearInterval(intervalRef);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const onDragStart = () => {
        setDragging(true);
    }

    const onDragEnd = () => {
        setDragging(false);

        const x = dragX.get();

        if(x <= -DRAG_BUFFER && activeIndex < projectData.length - 1){
            setActiveIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && activeIndex > 0){
            setActiveIndex((pv) => pv - 1);
        }
    }


    return (
        <div className="relative min-h-[500px] overflow-hidden py-8 max-lg-gutters">
            <motion.div 
            style={{ x: dragX, }}
            drag="x"
            dragConstraints={{ 
                left: 0, 
                right:0,
            }}
            animate={{ translateX: `-${activeIndex * 100}%` }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            transition={SPRING_OPTIONS}
            className="flex items-center cursor-grab active:cursor-grab">
                <CarouselCard  activeIndex={activeIndex}  />
            </motion.div>
            <Dots activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
    )
}

const Dots = ({ activeIndex, setActiveIndex }: { 
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {projectData.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === activeIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};



const CarouselCard = ({activeIndex}: {activeIndex: number}) => {
    return (
        <>
        {projectData.map((project, idx) => {
            return (
                <motion.div 
                key={idx}
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} 
                animate={{
                    scale: activeIndex === idx ? 0.95 : 0.85,
                }}
                transition={SPRING_OPTIONS}
                className="aspect-video w-full max-w-[440px] h-[460px] shrink-0 rounded-xl object-cover ">
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-center text-neutral-50">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <p className="text-lg">{project.description}</p>
                    </div>
                </motion.div>
            )
        })}
        </>
    )
}