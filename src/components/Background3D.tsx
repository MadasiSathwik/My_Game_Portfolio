import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Grid } from '@react-three/drei';
import * as THREE from 'three';

function MovingGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      // Move grid towards the camera to simulate forward movement
      gridRef.current.position.z = (state.clock.elapsedTime * 2) % 10;
    }
  });

  return (
    <group ref={gridRef}>
      <Grid
        position={[0, -5, -20]}
        args={[100, 100]}
        cellSize={1}
        cellThickness={1}
        cellColor="#00f3ff"
        sectionSize={5}
        sectionThickness={1.5}
        sectionColor="#bc13fe"
        fadeDistance={50}
        fadeStrength={1.5}
      />
    </group>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <Stars 
      ref={particlesRef}
      radius={50} 
      depth={50} 
      count={2000} 
      factor={4} 
      saturation={1} 
      fade 
      speed={1} 
    />
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
        <CameraController />
        <fog attach="fog" args={['#050505', 10, 50]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#00f3ff" />
        <directionalLight position={[-10, 10, -5]} intensity={1} color="#bc13fe" />
        
        <MovingGrid />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}

function CameraController() {
  useFrame((state) => {
    // Move camera based on scroll
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    // Smoothly interpolate camera position
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 2 - scrollProgress * 5, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 10 - scrollProgress * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}
