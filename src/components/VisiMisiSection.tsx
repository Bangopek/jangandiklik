import React from 'react';
import { VISI, MISI } from '../data/content';
import { playSound } from '../utils/sound';
import { Target, Rocket, CheckCircle2 } from 'lucide-react';

interface VisiMisiSectionProps {
  soundEnabled: boolean;
}

export const VisiMisiSection: React.FC<VisiMisiSectionProps> = ({ soundEnabled }) => {
  return (
    <section id="visi-misi" className="py-16 bg-white dark:bg-slate-900 border-t-3 border-b-3 border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            ARAH & TUJUAN
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight leading-tight">
            VISI & MISI: KARENA HIDUP TIDAK CUKUP HANYA DENGAN SCROLL MEDIA SOSIAL. 🎯
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Komitmen nyata S.Kom untuk kebermanfaatan masyarakat luas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* VISI Card (Left 5 cols) */}
          <div
            onMouseEnter={() => playSound('pop', soundEnabled)}
            className="lg:col-span-5 bg-gradient-to-br from-yellow-200 via-amber-200 to-pink-200 dark:from-slate-800 dark:to-slate-900 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-2xl">
                🎯
              </div>
              <div>
                <span className="text-xs font-black text-slate-600 dark:text-slate-400 block">PRINSIP UTAMA</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-amber-300">
                  VISI
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed bg-white/80 dark:bg-slate-900/80 p-5 rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              "{VISI}"
            </p>
          </div>

          {/* MISI Card (Right 7 cols) */}
          <div
            onMouseEnter={() => playSound('pop', soundEnabled)}
            className="lg:col-span-7 bg-sky-100 dark:bg-slate-800 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-sky-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-2xl">
                🚀
              </div>
              <div>
                <span className="text-xs font-black text-slate-600 dark:text-slate-400 block">LANGKAH KONKRET</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-amber-300">
                  MISI STRATEGIS
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {MISI.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border-2 border-slate-900 p-4 rounded-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-start space-x-3 hover:translate-x-1 transition-transform"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-300 border border-slate-900 font-black text-xs text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
