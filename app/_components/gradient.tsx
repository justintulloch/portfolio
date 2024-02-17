"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Fragment from "../../shader/fragment.glsl";
import Vertex from "../../shader/vertex.glsl";

var colors = require("nice-color-palettes");
let ind = Math.floor(Math.random() * colors.length);
ind = 15;
let palette = colors[ind];

palette = palette.map((color: string) => new THREE.Color(color));

function Sketch(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const shaderRef = React.useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useRef({
    time: { value: 0 },
    uColor: { value: palette },
    resolution: { value: new THREE.Vector4() },
  }).current;

  useFrame((state, delta) => {
    if (!shaderRef.current) return;
    shaderRef.current.uniforms.time.value += delta * 0.02;
  });

  return (
    <>
      <ambientLight />
      <mesh ref={ref} {...props} position={[0, 0, 0]}>
        <planeGeometry args={[1.5, 1.5, 100, 100]} />
        <shaderMaterial
          uniforms={uniforms}
          ref={shaderRef}
          vertexShader={Vertex}
          fragmentShader={Fragment}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

function GradientBg() {
  return (
    <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 0.2] }}>
      <Sketch />
    </Canvas>
  );
}

export default GradientBg;
