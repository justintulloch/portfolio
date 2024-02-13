"use client";

import { Html, PresentationControls, Environment, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';


function Sketch({Link}: {Link: string}){
    const laptop = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");


    return (
        <>
            <Environment preset="warehouse" />
            <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
                <primitive object={laptop.scene} position-y={-1.2}>
                    <Html 
                    wrapperClass='laptop'
                    position={[0, 1.57, -1.5]}
                    transform
                    distanceFactor={1.16}
                    rotation-x={-0.25}
                    >
                        <iframe src={Link}  />
                    </Html>
                </primitive>
            </PresentationControls>
        </>
    )
}


export default function Laptop({Link}: {Link: string}) {
    return (
        <Canvas camera={{fov: 45, near: 0.1, far: 2000, position: [-3, 1.5, 4], }}>
            <Suspense fallback={null}>
                <Sketch Link={Link}/>
            </Suspense>
        </Canvas> 
    )
}