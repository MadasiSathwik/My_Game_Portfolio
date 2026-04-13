import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Background3D from './components/Background3D';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <main className="relative w-full min-h-screen bg-dark-bg text-white selection:bg-neon-purple/30 selection:text-white">
          <CursorGlow />
          <Background3D />
          
          <div className="relative z-10">
            <HeroSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            
            <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-black/50 backdrop-blur-sm">
              <p className="font-mono text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Sathwik Madasi. System Online.
              </p>
            </footer>
          </div>
        </main>
      )}
    </>
  );
}
