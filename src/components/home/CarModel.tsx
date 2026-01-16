"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, Float } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function Model({ scrollProgress }: { scrollProgress: any }) {
  const { scene } = useGLTF("/3d.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Apply rotation and vertical movement based on scroll progress
  useFrame(() => {
    if (modelRef.current) {
      // Use the raw progress (0 to 1)
      const p = scrollProgress.get();
      
      // 1. Rotation: Start sideways (PI/2) and rotate very slowly
      modelRef.current.rotation.y = Math.PI / 2 + (p * Math.PI * 0.3);
      
      // 2. Vertical Transform: Move down at a moderate pace
      // Start slightly high and move down
      modelRef.current.position.y = 0.2 - (p * 30);
      
      // 3. Subtle tilt for realism
      modelRef.current.rotation.z = p * 0.4;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={250} // Massively bigger
      position={[7,200, 2]} 
    />
  );
}

export function CarModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically relative to the page
  // We want the animation to happen quickly at the start of the scroll
  const { scrollYProgress } = useScroll();

  return (
    <div ref={containerRef} className="w-full h-full relative pointer-events-none">
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <StageWrapper>
            <Model scrollProgress={scrollYProgress} />
          </StageWrapper>
          <Environment preset="city" />
        </Suspense>
        
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.3}
          scale={50}
          blur={3.5}
          far={20}
          resolution={512}
        />
        
        <ambientLight intensity={1.2} />
        <spotLight 
          position={[30, 30, 30]} 
          angle={0.15} 
          penumbra={1} 
          intensity={3} 
          castShadow 
        />
        <pointLight position={[-30, -30, -30]} intensity={1.5} />
      </Canvas>
    </div>
  );
}

function StageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <group>
      <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.1}>
        {children}
      </Float>
    </group>
  );
}

useGLTF.preload("/3d.glb");
