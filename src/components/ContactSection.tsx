import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Terminal, Send } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';

export default function ContactSection() {
  const { playHover, playClick } = useSoundEffects();

  return (
    <section id="contact" className="py-24 relative z-10 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Control Panel Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass-panel rounded-3xl p-8 border-t-4 border-t-neon-blue relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Terminal className="w-24 h-24 text-neon-blue" />
              </div>
              
              <h2 className="font-display text-3xl font-bold text-white mb-2">Comm Link</h2>
              <p className="font-mono text-sm text-neon-blue mb-8 uppercase tracking-widest">Status: Online</p>
              
              <p className="text-gray-400 mb-10 font-sans">
                Ready to initiate a new sequence. Open for internships, collaborations, and game development roles.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:madasisathwik2005@gmail.com" className="interactive flex items-center gap-4 group" onMouseEnter={playHover} onClick={playClick}>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-blue/20 group-hover:border-neon-blue transition-all">
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-neon-blue transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 uppercase">Email</p>
                    <p className="text-white font-sans group-hover:text-neon-blue transition-colors">madasisathwik2005@gmail.com</p>
                  </div>
                </a>
                
                <a href="#" className="interactive flex items-center gap-4 group" onMouseEnter={playHover} onClick={playClick}>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-purple/20 group-hover:border-neon-purple transition-all">
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-neon-purple transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 uppercase">GitHub</p>
                    <p className="text-white font-sans group-hover:text-neon-purple transition-colors">github.com/sathwik</p>
                  </div>
                </a>
                
                <a href="#" className="interactive flex items-center gap-4 group" onMouseEnter={playHover} onClick={playClick}>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0077b5]/20 group-hover:border-[#0077b5] transition-all">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0077b5] transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-500 uppercase">LinkedIn</p>
                    <p className="text-white font-sans group-hover:text-[#0077b5] transition-colors">linkedin.com/in/sathwik</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Terminal Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass-panel rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 font-mono text-xs text-gray-500">transmit_message.exe</span>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); playClick(); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-neon-blue uppercase tracking-wider">Player Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-sans focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                      placeholder="Enter name..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-neon-blue uppercase tracking-wider">Return Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-sans focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                      placeholder="Enter email..."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono text-xs text-neon-blue uppercase tracking-wider">Transmission Payload</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-sans focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                    placeholder="Enter message..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={playHover}
                  className="interactive w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-display font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-shadow"
                >
                  <span>Execute Send</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
