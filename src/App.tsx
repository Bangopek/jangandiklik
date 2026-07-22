import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { OrganizationSection } from './components/OrganizationSection';
import { SkillsSection } from './components/SkillsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { InterestsSection } from './components/InterestsSection';
import { VisiMisiSection } from './components/VisiMisiSection';
import { SocialCritiqueSection } from './components/SocialCritiqueSection';
import { MiniGameSection } from './components/MiniGameSection';
import { EasterEggs } from './components/EasterEggs';
import { FinalExperienceSection } from './components/FinalExperienceSection';
import { ModalMessage } from './components/ModalMessage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Modal State
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    emoji?: string;
  }>({
    isOpen: false,
    title: '',
    message: '',
    emoji: '✨',
  });

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowModalMessage = (title: string, message: string, emoji?: string) => {
    setModalConfig({
      isOpen: true,
      title,
      message,
      emoji: emoji || '✨',
    });
  };

  const handleCloseModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-amber-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-amber-300 selection:text-slate-900">
        
        {/* Scroll Progress Bar at very top */}
        <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-pink-400 to-sky-400 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Absurd Loading Screen */}
        {isLoading && (
          <LoadingScreen
            soundEnabled={soundEnabled}
            onComplete={() => setIsLoading(false)}
          />
        )}

        {/* Sticky Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />

        {/* Hero Section */}
        <HeroSection
          soundEnabled={soundEnabled}
          onShowModalMessage={handleShowModalMessage}
        />

        {/* Section Profil */}
        <AboutSection soundEnabled={soundEnabled} />

        {/* Section Pendidikan */}
        <EducationSection soundEnabled={soundEnabled} />

        {/* Section Pengalaman Organisasi */}
        <OrganizationSection
          soundEnabled={soundEnabled}
          onShowModalMessage={handleShowModalMessage}
        />

        {/* Section Keterampilan */}
        <SkillsSection soundEnabled={soundEnabled} />

        {/* Section Bahasa */}
        <LanguagesSection soundEnabled={soundEnabled} />

        {/* Section Minat */}
        <InterestsSection soundEnabled={soundEnabled} />

        {/* Section Visi & Misi */}
        <VisiMisiSection soundEnabled={soundEnabled} />

        {/* Section Kritik Sosial Terhadap Pemerintah */}
        <SocialCritiqueSection
          soundEnabled={soundEnabled}
          onShowModalMessage={handleShowModalMessage}
        />

        {/* Mini Game Hub */}
        <MiniGameSection soundEnabled={soundEnabled} />

        {/* Easter Eggs & Random Quotes Widget */}
        <EasterEggs
          soundEnabled={soundEnabled}
          onShowModalMessage={handleShowModalMessage}
        />

        {/* Final Experience & Contact Section */}
        <FinalExperienceSection
          soundEnabled={soundEnabled}
          onShowModalMessage={handleShowModalMessage}
        />

        {/* Interactive Popup Modal */}
        <ModalMessage
          isOpen={modalConfig.isOpen}
          title={modalConfig.title}
          message={modalConfig.message}
          emoji={modalConfig.emoji}
          soundEnabled={soundEnabled}
          onClose={handleCloseModal}
        />

      </div>
    </div>
  );
}
