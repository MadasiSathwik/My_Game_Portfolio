import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Float, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';
import { useSoundEffects } from '../hooks/useSoundEffects';

const skillsData = [
  { category: 'Game Dev', items: ['Game Mechanics', 'Gameplay Programming', 'Collision Detection', 'Physics Systems', 'Level Design'], color: '#00f3ff' },
  { category: 'Tools', items: ['Unity (C#)', 'Unreal Engine', 'Pygame', 'Blender'], color: '#bc13fe' },
  { category: 'Programming', items: ['C#', 'Python', 'JavaScript'], color: '#ff0055' },
  { category: 'Core', items: ['OOP', 'Data Structures', 'Algorithms', 'Real-Time Systems'], color: '#00ff66' },
];

function SkillNode({ position, category, color, onClick, playHover }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere 
          ref={meshRef} 
          args={[0.8, 32, 32]} 
          onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; playHover(); }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'none'; }}
          onClick={() => onClick(category)}
        >
          <meshStandardMaterial 
            color={color} 
            emissive={color}
            emissiveIntensity={hovered ? 1 : 0.5}
            wireframe={!hovered}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {category}
        </Text>
      </Float>
    </group>
  );
}

function SkillSystem({ onSelectSkill, playHover }: { onSelectSkill: (cat: string) => void, playHover: () => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center Core */}
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} wireframe />
      </Sphere>
      
      {/* Orbiting Nodes */}
      <SkillNode position={[4, 0, 0]} category={skillsData[0].category} color={skillsData[0].color} onClick={onSelectSkill} playHover={playHover} />
      <SkillNode position={[-4, 0, 0]} category={skillsData[1].category} color={skillsData[1].color} onClick={onSelectSkill} playHover={playHover} />
      <SkillNode position={[0, 0, 4]} category={skillsData[2].category} color={skillsData[2].color} onClick={onSelectSkill} playHover={playHover} />
      <SkillNode position={[0, 0, -4]} category={skillsData[3].category} color={skillsData[3].color} onClick={onSelectSkill} playHover={playHover} />
      
      {/* Orbit Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.95, 4.05, 64]} />
        <meshBasicMaterial color="#333333" side={THREE.DoubleSide} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { playHover, playClick } = useSoundEffects();

  const activeData = skillsData.find(s => s.category === activeCategory);

  const handleSelectSkill = (cat: string) => {
    playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="skills" className="py-24 relative z-10 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            Skill Tree
          </span>
        </h2>
        <p className="font-mono text-gray-400">Interact with the nodes to view details</p>
      </div>

      <div className="flex-1 relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* 3D Canvas Area */}
        <div className="w-full lg:w-2/3 h-[500px] lg:h-[600px] relative">
          <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <SkillSystem onSelectSkill={handleSelectSkill} playHover={playHover} />
          </Canvas>
        </div>

        {/* Details Panel */}
        <div className="w-full lg:w-1/3 p-6 h-[400px]">
          <AnimatePresence mode="wait">
            {activeData ? (
              <motion.div
                key={activeData.category}
                initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-2xl p-8 h-full border-l-4"
                style={{ borderLeftColor: activeData.color }}
              >
                <h3 className="font-display text-3xl font-bold mb-6" style={{ color: activeData.color, textShadow: `0 0 10px ${activeData.color}80` }}>
                  {activeData.category}
                </h3>
                <ul className="space-y-4">
                  {activeData.items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 font-mono text-gray-200"
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeData.color, boxShadow: `0 0 5px ${activeData.color}` }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-panel rounded-2xl p-8 h-full flex items-center justify-center text-center border border-gray-800"
              >
                <p className="font-mono text-gray-500 animate-pulse">
                  Awaiting input...<br/>Select a node to scan skills.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
