import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/content';
import { playSound } from '../utils/sound';
import { Coffee, Cpu, GraduationCap, Wrench, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  soundEnabled: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ soundEnabled }) => {
  const [coffeeCount, setCoffeeCount] = useState(2);
  const [brainStatus, setBrainStatus] = useState('Sedang memproses...');
  const [isProcessing, setIsProcessing] = useState(false);

  const addCoffee = () => {
    playSound('pop', soundEnabled);
    setCoffeeCount((prev) => prev + 1);
  };

  const processBrain = () => {
    playSound('bug', soundEnabled);
    setIsProcessing(true);
    setBrainStatus('Menganalisis file S.Kom...');
    setTimeout(() => {
      setBrainStatus('Menemukan 99 bug & 1 ide gila...');
      playSound('win', soundEnabled);
      setIsProcessing(false);
    }, 1200);
  };

  const getEnergyStatus = () => {
    if (coffeeCount < 2) return 'Akan ketiduran sebentar lagi... 😴';
    if (coffeeCount < 5) return 'Siap koding & memecahkan masalah! ☕⚡';
    if (coffeeCount < 10) return 'Energi over 9000! Bisa bikin OS baru! 🚀';
    return 'Darah telah digantikan murni oleh espresso! ☕🔥';
  };

  return (
    <section id="tentang" className="py-16 bg-white dark:bg-slate-900 border-t-3 border-b-3 border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-300 dark:bg-pink-400 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            IDENTITAS & PROFIL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight">
            SEBENARNYA AKU INI SIAPA? 🧐
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Penjelasan resmi tapi dengan penyampaian yang agak jujur.
          </p>
        </div>

        {/* Bio Card */}
        <div className="bg-sky-100 dark:bg-slate-800 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] mb-10">
          <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
            "{PROFILE_INFO.fullBio}"
          </p>
        </div>

        {/* 4 Interactive Stat Cards requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: STATUS */}
          <div className="bg-yellow-100 dark:bg-slate-800 border-3 border-slate-900 p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 bg-yellow-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                📚 STATUS
              </h3>
              <p className="text-lg font-black text-slate-900 dark:text-amber-300">
                Lulusan Teknik Informatika
              </p>
            </div>
            <span className="mt-4 text-xs font-bold bg-white dark:bg-slate-900 px-3 py-1 rounded-xl border border-slate-900 text-slate-700 dark:text-slate-300">
              Gelar: S.Kom ✨
            </span>
          </div>

          {/* Card 2: OTAK */}
          <div className="bg-pink-100 dark:bg-slate-800 border-3 border-slate-900 p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 bg-pink-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center mb-4">
                <Cpu className={`w-6 h-6 text-slate-900 ${isProcessing ? 'animate-spin' : ''}`} />
              </div>
              <h3 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                🧠 OTAK
              </h3>
              <p className="text-base font-black text-slate-900 dark:text-amber-300 min-h-[3rem]">
                {brainStatus}
              </p>
            </div>
            <button
              onClick={processBrain}
              className="mt-4 w-full py-2 bg-pink-400 hover:bg-pink-500 text-slate-900 font-black text-xs rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] active:translate-y-0.5 transition-all flex items-center justify-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulasi Berpikir 💭</span>
            </button>
          </div>

          {/* Card 3: KEAHLIAN */}
          <div className="bg-emerald-100 dark:bg-slate-800 border-3 border-slate-900 p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 bg-emerald-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                💻 KEAHLIAN
              </h3>
              <p className="text-sm font-bold text-slate-900 dark:text-amber-300 leading-snug">
                Membuat teknologi dan kadang membuat masalah baru untuk diperbaiki
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold bg-white dark:bg-slate-900 px-3 py-1 rounded-xl border border-slate-900 text-emerald-600 dark:text-emerald-400">
              Spesialis Debugging Pagi Hari 🌅
            </span>
          </div>

          {/* Card 4: ENERGI (Coffee Counter) */}
          <div className="bg-purple-100 dark:bg-slate-800 border-3 border-slate-900 p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="w-12 h-12 bg-purple-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                🔋 ENERGI ({coffeeCount} ☕)
              </h3>
              <p className="text-xs font-bold text-slate-900 dark:text-amber-300 min-h-[3rem]">
                {getEnergyStatus()}
              </p>
            </div>
            <button
              onClick={addCoffee}
              className="mt-4 w-full py-2 bg-purple-400 hover:bg-purple-500 text-slate-900 font-black text-xs rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] active:translate-y-0.5 transition-all flex items-center justify-center space-x-1"
            >
              <span>+ 1 Cangkir Kopi ☕</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
