import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { playSound } from '../utils/sound';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda', icon: '🏠' },
  { id: 'tentang', label: 'Tentang Saya', icon: '👤' },
  { id: 'pendidikan', label: 'Pendidikan', icon: '🎓' },
  { id: 'organisasi', label: 'Organisasi', icon: '🤝' },
  { id: 'skill', label: 'Skill', icon: '🛠️' },
  { id: 'game', label: 'Game', icon: '🎮' },
  { id: 'visi-misi', label: 'Visi & Misi', icon: '🎯' },
  { id: 'kritik-sosial', label: 'Kritik Sosial', icon: '🏛️' },
  { id: 'kontak', label: 'Kontak', icon: '📩' },
];

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExeHovered, setIsExeHovered] = useState(false);

  const scrollToSection = (id: string) => {
    playSound('click', soundEnabled);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-amber-100/90 dark:bg-slate-900/90 backdrop-blur-md border-b-2 border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Name with hover transformation to Taufiqurrohman.exe */}
          <div
            className="cursor-pointer flex items-center space-x-2 group"
            onClick={() => scrollToSection('beranda')}
            onMouseEnter={() => {
              setIsExeHovered(true);
              playSound('pop', soundEnabled);
            }}
            onMouseLeave={() => setIsExeHovered(false)}
          >
            <div className="w-10 h-10 rounded-xl bg-pink-400 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center font-black text-slate-900 text-lg group-hover:rotate-6 transition-transform">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-black text-slate-900 dark:text-amber-300 text-lg tracking-tight font-mono transition-all">
                {isExeHovered ? (
                  <span className="text-pink-600 dark:text-pink-400 animate-pulse">
                    Taufiqurrohman.exe 👾
                  </span>
                ) : (
                  'Taufiqurrohman'
                )}
              </span>
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 -mt-1">
                S.Kom • Web Builder
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-amber-200 dark:hover:bg-slate-800 hover:text-slate-900 rounded-lg transition-colors flex items-center space-x-1 border border-transparent hover:border-slate-900"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2">
            
            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                const nextState = !soundEnabled;
                setSoundEnabled(nextState);
                if (nextState) playSound('pop', true);
              }}
              title={soundEnabled ? 'Matikan Efek Suara' : 'Aktifkan Efek Suara'}
              className="p-2 rounded-xl bg-sky-200 dark:bg-slate-800 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] transition-all"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-slate-900 dark:text-amber-300" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => {
                playSound('pop', soundEnabled);
                setDarkMode(!darkMode);
              }}
              title={darkMode ? 'Mode Masih Waras (Light)' : 'Mode Serius (Dark)'}
              className="px-3 py-1.5 rounded-xl bg-pink-300 dark:bg-purple-900 text-slate-900 dark:text-amber-300 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] font-bold text-xs flex items-center space-x-1.5 transition-all"
            >
              {darkMode ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden sm:inline">Mode Serius</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Mode Masih Waras</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playSound('click', soundEnabled);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="xl:hidden p-2 rounded-xl bg-amber-300 dark:bg-slate-800 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900 dark:text-amber-300" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900 dark:text-amber-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-amber-100 dark:bg-slate-900 border-t-2 border-slate-900 px-4 pt-3 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-slate-900 dark:text-slate-100 hover:bg-amber-300 dark:hover:bg-slate-800 border-2 border-transparent hover:border-slate-900 flex items-center space-x-2 transition-all"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
