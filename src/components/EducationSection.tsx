import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Player Stats
            </span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel glass-panel-hover rounded-2xl p-8 md:p-12 relative overflow-hidden group"
          >
            {/* Background glow effect */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px] group-hover:bg-neon-purple/30 transition-colors duration-500" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-[80px] group-hover:bg-neon-blue/30 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="w-20 h-20 rounded-full border-2 border-neon-blue flex items-center justify-center bg-dark-bg shadow-[0_0_15px_rgba(0,243,255,0.3)] shrink-0">
                <GraduationCap className="w-10 h-10 text-neon-blue" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                    B.Tech in Computer Science
                  </h3>
                  <p className="font-mono text-lg text-neon-purple">SR University, Warangal, Telangana</p>
                </div>
                
                <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-gray-400" />
                    <span className="font-mono text-gray-300">CGPA: <span className="text-white font-bold">8.6/10</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="font-mono text-gray-300">Expected Graduation: <span className="text-white font-bold">2027</span></span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-blue/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-purple/50 rounded-br-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
