"use client";

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Preload, Environment } from "@react-three/drei";
import { useScroll, useSpring, motion } from "framer-motion";
import * as THREE from "three";

function Tire({ scrollProgress, side }: { scrollProgress: any, side: "left" | "right" }) {
  const { scene } = useGLTF("/tires.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Deeply clean the scene and ENSURE rubber parts are visible
  const cleanedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((node: any) => {
      if (node.isMesh) {
        const name = node.name.toLowerCase();
        
        // Hide planes/floors but KEEP everything else
        if (name.includes("plane") || name.includes("floor") || name.includes("background") || name.includes("box")) {
          node.visible = false;
        } else {
          node.visible = true; // Force visibility for tire parts
        }

        node.castShadow = false;
        node.receiveShadow = false;
        
        if (node.material) {
          node.material.precision = "lowp";
          // If the rubber part is missing, it might be due to transparency or wrong face culling
          node.material.side = THREE.DoubleSide;
          node.material.transparent = false;
          node.material.opacity = 1;
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      const p = scrollProgress.get();
      // Initial Rotation: Face slightly inwards
      const baseRotationY = side === "left" ? Math.PI / 6 : -Math.PI / 6;
      modelRef.current.rotation.y = baseRotationY;
      
      // ULTRA DRAMATIC TILT: Increased from 0.55 to 0.85
      // This will make the tire tilt forward significantly more as you scroll
      modelRef.current.rotation.x = p * Math.PI * 0.85; 
      
      // Side Tilt
      modelRef.current.rotation.z = side === "left" ? -0.3 : 0.3;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={cleanedScene} 
      scale={1.4} // Increase scale of the tire itself
    />
  );
}

export function TireModel({ side }: { side: "left" | "right" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

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
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full bg-transparent pointer-events-none"
    >
      <Canvas
        shadows={false} // Global shadow kill switch
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Tire scrollProgress={smoothProgress} side={side} />
          <Preload all />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

useGLTF.preload("/tires.glb");
