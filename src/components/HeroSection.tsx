import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useSoundEffects } from '../hooks/useSoundEffects';

function HologramAvatar() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#00f3ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          transparent
          opacity={0.8}
        />
      </Sphere>
      {/* Inner core */}
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial
          color="#bc13fe"
          emissive="#bc13fe"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroSection() {
  const { playHover, playClick } = useSoundEffects();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <motion.div 
            className="inline-block px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md"
            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 243, 255, 0.8)' }}
            onHoverStart={playHover}
          >
            <span className="font-mono text-sm text-neon-blue uppercase tracking-widest">
              Level 1: Initialization
            </span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-white">Sathwik</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow-blue">
              Madasi
            </span>
          </h1>
          
          <h2 className="font-mono text-xl md:text-2xl text-gray-300">
            Game Developer <span className="text-neon-purple">|</span> 3D Game Designer
          </h2>
          
          <p className="font-sans text-lg text-gray-400 max-w-xl leading-relaxed">
            Designing immersive gameplay systems and interactive worlds. Bridging the gap between imagination and playable reality.
          </p>
          
          <div className="pt-8 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={playHover}
              onClick={playClick}
              className="interactive px-8 py-4 bg-neon-blue/20 border border-neon-blue text-neon-blue font-mono uppercase tracking-wider rounded-none hover:bg-neon-blue hover:text-dark-bg transition-colors duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
            >
              Start Game
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={playHover}
              onClick={playClick}
              className="interactive px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-mono uppercase tracking-wider rounded-none hover:border-neon-purple hover:text-neon-purple transition-colors duration-300"
            >
              Multiplayer
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, type: 'spring' }}
          className="relative h-[500px] w-full flex items-center justify-center"
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-96 h-96 rounded-full border border-neon-blue/20 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[28rem] h-[28rem] rounded-full border border-neon-purple/20"
            />
          </div>
          
          {/* Profile Photo Container */}
          <motion.div 
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-neon-blue to-neon-purple shadow-[0_0_30px_rgba(0,243,255,0.3)]"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-bg bg-dark-bg relative group">
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-50" />
              
              {/* Profile Image - Replace src with your actual photo path */}
              <img 
                src="/profile.jpg" 
                alt="Sathwik Madasi"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                onError={(e) => {
                  // Fallback placeholder if /profile.jpg doesn't exist yet
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent" />
      </motion.div>
    </section>
  );
}
