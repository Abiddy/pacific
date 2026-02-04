"use client";

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, AdaptiveDpr, AdaptiveEvents, Bvh, Preload } from "@react-three/drei";
import { useScroll, useSpring, motion } from "framer-motion";
import * as THREE from "three";

function Model({ scrollProgress, onLoad }: { scrollProgress: any, onLoad?: () => void }) {
  const { scene } = useGLTF("/mercedes.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Trigger onLoad when the component mounts (since useGLTF is preloaded or cached)
  React.useEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  // Deeply optimize the scene geometry and materials
  const optimizedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((node: any) => {
      if (node.isMesh) {
        node.castShadow = false;
        node.receiveShadow = false;
        node.matrixAutoUpdate = false;
        node.updateMatrix();
        
        if (node.material) {
          node.material.precision = "lowp";
          node.material.dithering = false;
          if (node.material.envMapIntensity) node.material.envMapIntensity = 0.5;
          
          // Performance optimization: disable transparency if not needed
          if (node.material.opacity === 1) {
            node.material.transparent = false;
          }
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      const p = scrollProgress.get();
      
      // 1. Facing the front (Y rotation) - Flipped 180 degrees
      modelRef.current.rotation.y = 0;
      
      // 2. Vertical: Perfectly locked
      modelRef.current.position.y = 0;
      
      // 3. Horizontal: Centered
      modelRef.current.position.x = 0;
      
      // 4. Scale: Bumping this up significantly since it's too small
      const fixedScale = 95; 
      modelRef.current.scale.set(fixedScale, fixedScale, fixedScale);
      
      // 5. UPWARD ROTATION (Pitch): 
      // Flipped 180 degrees on the vertical axis (relative to the car)
      const startRotationX = Math.PI + 9.8; 
      const endRotationX = Math.PI + 5;   
      modelRef.current.rotation.x = startRotationX + (p * (endRotationX - startRotationX));
      
      modelRef.current.rotation.z = 0;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={optimizedScene} 
      scale={12} 
      position={[0, 0, 0]} 
    />
  );
}

export function CarModel({ onLoad }: { onLoad?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Balanced spring for smooth rotation and tilt
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 60,
    mass: 0.1,
    restDelta: 0.0001
  });

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full relative pointer-events-none"
      role="img"
      aria-label="3D model of a Mercedes-Benz C-Class being restored"
    >
      <Canvas
        shadows={false}
        camera={{ position: [0, 0, 10], fov: 35, near: 0.1, far: 100 }}
        gl={{ 
          antialias: false, // Performance: Disable antialias for mobile/low-end
          alpha: true, 
          powerPreference: "high-performance",
          precision: "lowp", // Performance: Lower precision
          stencil: false,
          depth: true
        }}
        dpr={[1, 1.5]} // Performance: Cap DPR
      >
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Bvh firstHitOnly>
            <Model scrollProgress={smoothProgress} onLoad={onLoad} />
          </Bvh>
          <Environment preset="city" />
          <Preload all />
        </Suspense>
        
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <pointLight position={[-15, 15, 15]} intensity={3} />
        <spotLight position={[0, 20, 0]} intensity={2} angle={0.5} penumbra={1} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/mercedes.glb");
