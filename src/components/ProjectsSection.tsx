import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Code, Layers } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';

const projects = [
  {
    id: 1,
    title: '3D Endless Runner Game',
    category: 'Game Development',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop',
    description: 'Developed a 3D endless runner using Unity. Implemented player movement, obstacle spawning, increasing difficulty. Designed smooth gameplay loop and scoring system.',
    tech: ['Unity', 'C#', '3D Modeling'],
    features: ['Dynamic Obstacle Generation', 'Progressive Difficulty', 'High Score System'],
    color: '#00f3ff'
  },
  {
    id: 2,
    title: '2D Platformer Game',
    category: 'Game Development',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    description: 'Developed physics-based platformer mechanics. Implemented gravity, jumping, enemies, and level progression. Designed interactive and challenging levels.',
    tech: ['Unity', 'C#', '2D Physics'],
    features: ['Custom Physics Controller', 'Enemy AI', 'Level Progression'],
    color: '#bc13fe'
  },
  {
    id: 3,
    title: '3D Maze Explorer Game',
    category: 'Game Development',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1000&auto=format&fit=crop',
    description: 'Built a 3D maze navigation game. Implemented camera movement and environment interaction. Added goal-based gameplay and immersive design.',
    tech: ['Unity', 'C#', 'Level Design'],
    features: ['First-Person Camera', 'Environment Interaction', 'Goal System'],
    color: '#00ff66'
  },
  {
    id: 4,
    title: 'AI + Data Science Systems',
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    description: 'Developed AI/ML systems using Google AI Studio and real-world datasets. Worked on classification, regression, and clustering models. Improved model precision by identifying and fixing data inconsistencies. Designed scalable workflows for data processing and automation.',
    tech: ['Google AI Studio', 'Python', 'Machine Learning'],
    features: ['Classification & Regression', 'Data Processing Workflows', 'Real-time Applications'],
    color: '#ff0055'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { playHover, playClick } = useSoundEffects();

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Mission Logs
            </span>
          </h2>
          <p className="font-mono text-gray-400">Select a mission to view details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={playHover}
              onClick={() => { playClick(); setSelectedProject(project); }}
              className="interactive glass-panel rounded-2xl overflow-hidden cursor-pointer group relative"
            >
              {/* Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${project.color}, transparent 70%)` }}
              />
              
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-colors duration-300" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 relative z-20 border-t border-white/5">
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-sans line-clamp-2 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs font-mono text-gray-500 uppercase">#{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/10 relative flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-neon-purple/50 border border-white/10 hover:border-neon-purple rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="relative h-64 md:h-96 shrink-0 overflow-hidden rounded-t-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent z-10" />
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <button className="interactive w-20 h-20 bg-neon-blue/20 hover:bg-neon-blue/40 border-2 border-neon-blue rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 shadow-[0_0_30px_rgba(0,243,255,0.5)] group">
                    <Play className="w-8 h-8 text-white ml-1 group-hover:text-neon-blue transition-colors" fill="currentColor" />
                  </button>
                </div>
              </div>

              <div className="p-8 md:p-12 relative z-20 -mt-20">
                <div className="inline-block px-4 py-1 mb-4 rounded-full border border-white/20 bg-black/50 backdrop-blur-md">
                  <span className="font-mono text-sm text-gray-300 uppercase tracking-widest" style={{ color: selectedProject.color }}>
                    {selectedProject.category}
                  </span>
                </div>
                
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>
                
                <p className="text-lg text-gray-300 font-sans leading-relaxed mb-10">
                  {selectedProject.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Layers className="w-6 h-6" style={{ color: selectedProject.color }} />
                      <h3 className="font-display text-xl text-white">Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400 font-sans">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: selectedProject.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="w-6 h-6" style={{ color: selectedProject.color }} />
                      <h3 className="font-display text-xl text-white">Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
