import React, { useState } from 'react';
import { ProfileAvatar } from './ProfileAvatar';
import { PROFILE_INFO, ABSURD_FORTUNES } from '../data/content';
import { playSound } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { Sparkles, HelpCircle, AlertTriangle } from 'lucide-react';

interface HeroSectionProps {
  soundEnabled: boolean;
  onShowModalMessage: (title: string, message: string, emoji?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  soundEnabled,
  onShowModalMessage,
}) => {
  // Dodge button offset
  const [dodgeOffset, setDodgeOffset] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);

  const handleDodgeHover = () => {
    playSound('dodge', soundEnabled);
    setDodgeCount((prev) => prev + 1);
    
    // Calculate random escape position
    const randomX = (Math.random() - 0.5) * 160;
    const randomY = (Math.random() - 0.5) * 100;
    setDodgeOffset({ x: randomX, y: randomY });
  };

  const handleDodgeClick = () => {
    playSound('win', soundEnabled);
    onShowModalMessage(
      'HAHA! Kamu Tetap Memencetnya! 😜',
      'Sudah dibilang JANGAN DIPENCET, tapi rasa penasaranmu menang. Selamat! Kamu resmi manusia normal yang tidak suka dilarang.',
      '🎉'
    );
    // Reset offset
    setDodgeOffset({ x: 0, y: 0 });
  };

  const handleFortuneClick = () => {
    playSound('win', soundEnabled);
    triggerConfetti();
    const randomFortune =
      ABSURD_FORTUNES[Math.floor(Math.random() * ABSURD_FORTUNES.length)];
    onShowModalMessage('RAMALAN NASIB HARI INI 🔮', randomFortune, '🔮');
  };

  const scrollToProfile = () => {
    playSound('click', soundEnabled);
    const element = document.getElementById('tentang');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative pt-8 pb-16 md:py-20 overflow-hidden">
      
      {/* Background Decorative Blobs / Bubbles */}
      <div className="absolute top-10 left-4 w-32 h-32 bg-yellow-300/40 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-4 w-48 h-48 bg-pink-300/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Website Title Card */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-300 dark:bg-yellow-400 text-slate-900 border-3 border-slate-900 px-4 sm:px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-4">
            <span className="text-xs sm:text-sm font-black tracking-wider uppercase flex items-center justify-center space-x-2">
              <span>✨ BIODATA BIASA? TIDAK DI SINI. ✨</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-amber-300 tracking-tight leading-tight">
            KENALAN KARO <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent underline decoration-amber-400 decoration-wavy">
              TAUFIQURROHMAN
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg font-bold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-900 p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
            "{PROFILE_INFO.headline}"
          </p>
        </div>

        {/* Hero Grid: Profile Avatar Left, Intro & Action Buttons Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Avatar Column */}
          <div className="lg:col-span-5 flex justify-center py-4">
            <ProfileAvatar
              soundEnabled={soundEnabled}
              onAvatarEasterEgg={() =>
                onShowModalMessage(
                  'EFEN EASTER EGG! 📸',
                  'Kenapa fotonya diklik terus? Saya juga tidak akan berubah menjadi versi 4K.',
                  '🤖'
                )
              }
            />
          </div>

          {/* Intro Text & Action Buttons Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="bg-amber-100 dark:bg-slate-800 border-3 border-slate-900 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative">
              <div className="absolute -top-3 left-6 bg-pink-400 text-slate-900 font-black text-xs px-3 py-1 rounded-lg border-2 border-slate-900">
                GREETINGS!
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-amber-300 mt-1 mb-3">
                HAI, AKU TAUFIQURROHMAN 👋
              </h2>

              <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                <span className="text-pink-600 dark:text-pink-400 font-extrabold">S.Kom</span>, manusia biasa dengan sedikit kemampuan teknologi dan terlalu banyak ide website.
              </p>

              <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 p-4 rounded-2xl text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                {PROFILE_INFO.bioText}
              </div>
            </div>

            {/* 3 Action Buttons requested */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
              
              {/* 1. KENALAN DULU */}
              <button
                onClick={scrollToProfile}
                className="w-full sm:w-auto px-6 py-3.5 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-black text-sm rounded-2xl border-3 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center justify-center space-x-2"
              >
                <span>🟡</span>
                <span>KENALAN DULU</span>
              </button>

              {/* 2. JANGAN DIPENCET (Fleeing Button) */}
              <div className="relative inline-block w-full sm:w-auto">
                <button
                  onMouseEnter={handleDodgeHover}
                  onClick={handleDodgeClick}
                  style={{
                    transform: `translate(${dodgeOffset.x}px, ${dodgeOffset.y}px)`,
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-sky-300 hover:bg-sky-400 text-slate-900 font-black text-sm rounded-2xl border-3 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all duration-150 flex items-center justify-center space-x-2"
                >
                  <AlertTriangle className="w-4 h-4 text-slate-900" />
                  <span>🔵 JANGAN DIPENCET</span>
                  {dodgeCount > 0 && (
                    <span className="bg-pink-400 text-[10px] px-1.5 py-0.5 rounded-full border border-slate-900">
                      {dodgeCount}x kabur
                    </span>
                  )}
                </button>
              </div>

              {/* 3. TEKAN UNTUK MENGETAHUI NASIBKU */}
              <button
                onClick={handleFortuneClick}
                className="w-full sm:w-auto px-6 py-3.5 bg-purple-400 hover:bg-purple-500 text-slate-900 font-black text-sm rounded-2xl border-3 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-slate-900" />
                <span>🟣 TEKAN UNTUK NASIBKU</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
