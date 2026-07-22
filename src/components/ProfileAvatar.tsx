import React, { useState } from 'react';
import { playSound } from '../utils/sound';

interface ProfileAvatarProps {
  soundEnabled: boolean;
  onAvatarEasterEgg: () => void;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  soundEnabled,
  onAvatarEasterEgg,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleAvatarClick = () => {
    playSound('pop', soundEnabled);
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 5) {
      setClickCount(0);
      onAvatarEasterEgg();
    }
  };

  return (
    <div className="relative inline-block group cursor-pointer" onClick={handleAvatarClick}>
      
      {/* Background Glow / Shadow Frame */}
      <div className="absolute inset-0 bg-pink-400 rounded-3xl transform rotate-3 border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-transform group-hover:rotate-6"></div>

      {/* Main Picture Frame */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-amber-200 dark:bg-slate-800 rounded-3xl border-4 border-slate-900 overflow-hidden flex flex-col items-center justify-between p-4 -rotate-2 group-hover:rotate-0 transition-all duration-300">
        
        {/* Decorative Top Badges */}
        <div className="w-full flex items-center justify-between z-10">
          <span className="bg-sky-300 text-slate-900 text-xs font-black px-2.5 py-1 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            🎓 S.Kom Verified
          </span>
          <span className="bg-emerald-300 text-slate-900 text-xs font-black px-2.5 py-1 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            🇮🇩 Grabag, MGL
          </span>
        </div>

        {/* Dynamic Stylized Illustration/Avatar representing Taufiqurrohman */}
        <div className="my-auto relative flex items-center justify-center">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-amber-400 via-pink-400 to-sky-400 border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] overflow-hidden transform group-hover:scale-105 transition-transform">
            <span className="text-7xl sm:text-8xl select-none">🏻‍💻</span>
          </div>

          {/* Floating Sticker Badges */}
          <div className="absolute -bottom-2 -right-2 bg-yellow-300 text-slate-900 text-xs font-black px-3 py-1 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] rotate-6 animate-pulse">
            ☕ Kopi Mode
          </div>
          <div className="absolute -top-3 -left-3 bg-purple-300 text-slate-900 text-xs font-black px-2.5 py-1 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] -rotate-12">
            ✨ S.Kom 2026
          </div>
        </div>

        {/* Caption */}
        <div className="w-full bg-white dark:bg-slate-900 border-2 border-slate-900 rounded-xl px-2 py-1 text-center shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] z-10">
          <p className="text-xs font-black text-slate-900 dark:text-amber-300">
            {clickCount > 0 ? `Klik ${clickCount}/5 untuk rahasia! 🔍` : 'Klik fotoku 5x untuk easter egg! 🎁'}
          </p>
        </div>
      </div>

      {/* Floating Emoji Decorative Elements */}
      <div className="absolute -top-6 -right-6 text-3xl animate-bounce">⚡</div>
      <div className="absolute -bottom-4 -left-6 text-3xl animate-bounce delay-150">🚀</div>
    </div>
  );
};
