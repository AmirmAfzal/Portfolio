"use client";
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";

// Only render on desktop/hover devices, and never when the user prefers
// reduced motion. Excludes touch/coarse pointers so it never appears on
// phones or tablets.
const useEnabled = () =>
  useState(() => {
    if (typeof window === "undefined") return false;
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    return desktop && !reduced && !coarse;
  })[0];

function DistortedBlob({
  position,
  color,
  emissive,
  emissiveIntensity,
  radius,
  opacity,
}: {
  position: [number, number, number];
  color: string;
  emissive: string;
  emissiveIntensity: number;
  radius: number;
  opacity: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.12;
      mesh.current.rotation.x += delta * 0.05;
    }
  });
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[radius, 96, 96]} />
      <MeshDistortMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        roughness={0.2}
        metalness={0.05}
        transparent
        opacity={opacity}
        distort={0.3}
        speed={1.6}
      />
    </mesh>
  );
}

const Hero3D = () => {
  const enabled = useEnabled();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div ref={containerRef} className="absolute inset-0">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          frameloop={inView ? "always" : "never"}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 6, 5]} intensity={0.9} />
          <Suspense fallback={null}>
            <group position={[2.2, -0.15, 0]} rotation={[0.2, 0, -0.1]}>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <DistortedBlob
                  position={[0, 0, 0]}
                  color="#A6E889"
                  emissive="#2f7d55"
                  emissiveIntensity={0.14}
                  radius={1.35}
                  opacity={0.85}
                />
              </Float>
              <Float speed={1} rotationIntensity={0.4} floatIntensity={0.8}>
                <DistortedBlob
                  position={[1, -1.4, -0.5]}
                  color="#8FE9D8"
                  emissive="#24706a"
                  emissiveIntensity={0.1}
                  radius={0.6}
                  opacity={0.7}
                />
              </Float>
            </group>
            <Sparkles
              count={80}
              scale={[5, 3.5, 3]}
              size={1.5}
              speed={0.3}
              color="#C6FCA6"
              opacity={0.35}
            />
          </Suspense>
        </Canvas>
      </div>
      {/* Soft scrim over the text column (right) to keep the headline readable.
          Kept off the portrait so the image stays at full opacity. */}
      <div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{
          background:
            "linear-gradient(to right, rgba(8,27,40,0) 15%, rgba(8,27,40,0.75))",
        }}
      />
    </div>
  );
};

export default Hero3D;
