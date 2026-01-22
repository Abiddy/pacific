"use client";

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, AdaptiveDpr, AdaptiveEvents, Bvh, Preload } from "@react-three/drei";
import { useScroll, useSpring, motion } from "framer-motion";
import * as THREE from "three";

function Model({ scrollProgress }: { scrollProgress: any }) {
  const { scene } = useGLTF("/3d.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Deeply optimize the scene geometry and materials
  const optimizedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((node: any) => {
      if (node.isMesh) {
        // Disable everything expensive
        node.castShadow = false;
        node.receiveShadow = false;
        node.matrixAutoUpdate = false; // Static matrices for sub-meshes
        node.updateMatrix();
        
        if (node.material) {
          node.material.precision = "lowp";
          node.material.dithering = false;
          // If it's a standard/physical material, simplify it
          if (node.material.envMapIntensity) node.material.envMapIntensity = 0.5;
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      const p = scrollProgress.get();
      
      // 1. Rotation: Horizontal rotation as we scroll
      modelRef.current.rotation.y = Math.PI / 2 + (p * Math.PI * 0.5);
      
      // 2. Vertical: Perfectly locked (no moving down)
      modelRef.current.position.y = 0;
      
      // 3. Horizontal: Centered
      modelRef.current.position.x = 0;
      
      // 4. Scale: Fixed (no growth)
      const fixedScale = 180;
      modelRef.current.scale.set(fixedScale, fixedScale, fixedScale);
      
      // 5. Tilt: Side-tilt as we scroll down
      modelRef.current.rotation.z = p * 0.25;
      modelRef.current.rotation.x = 0;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={optimizedScene} 
      scale={180} 
      position={[0, 0, 0]} 
    />
  );
}

export function CarModel() {
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
    <motion.div 
      ref={containerRef} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      className="w-full h-full relative pointer-events-none"
    >
      <Canvas
        shadows={false}
        camera={{ position: [0, 0, 15], fov: 35, near: 1, far: 50 }}
        gl={{ 
          antialias: false,
          alpha: true, 
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          precision: "lowp",
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 1]} // Lock to 1x DPR for maximum performance across all devices
      >
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Bvh firstHitOnly>
            <Model scrollProgress={smoothProgress} />
          </Bvh>
          <Environment preset="city" frames={1} />
          <Preload all />
        </Suspense>
        
        <ContactShadows
          position={[0, -2.5, 0]}
          opacity={0.15}
          scale={40} 
          blur={2.5}
          far={10}
          resolution={128}
        />
        
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
      </Canvas>
    </motion.div>
  );
}

useGLTF.preload("/3d.glb");
