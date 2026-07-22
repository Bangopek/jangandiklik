import React from 'react';
import { playSound } from '../utils/sound';
import { Globe, Award, Sparkles, MessageSquare } from 'lucide-react';

interface LanguagesSectionProps {
  soundEnabled: boolean;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ soundEnabled }) => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-t-3 border-b-3 border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-sky-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            KEMAMPUAN BAHASA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight">
            KARTU KARAKTER BAHASA 🌍
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Tingkat kefasihan komunikasi interpersonal dan internasional.
          </p>
        </div>

        {/* 2 Game Character Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Bahasa Indonesia Card */}
          <div
            onMouseEnter={() => playSound('pop', soundEnabled)}
            className="bg-rose-50 dark:bg-slate-800 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">🇮🇩</span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-amber-300">
                      Bahasa Indonesia
                    </h3>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Bahasa Ibu / Utama
                    </span>
                  </div>
                </div>

                <div className="bg-red-400 text-slate-900 text-xs font-black px-3 py-1.5 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  LEVEL C2 🌟
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 p-4 rounded-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] mb-4">
                <span className="text-xs font-black text-slate-400 block mb-1">
                  STATUS PENGGUNAAN:
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                  “Bisa digunakan untuk berdiskusi, presentasi, rapat, dan menjelaskan sesuatu yang sebenarnya sederhana menjadi panjang.”
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
              <span>Fluency Rate: 100%</span>
              <span className="bg-emerald-300 text-slate-900 px-2 py-0.5 rounded-md border border-slate-900">
                Native Tier
              </span>
            </div>
          </div>

          {/* Bahasa Inggris Card */}
          <div
            onMouseEnter={() => playSound('pop', soundEnabled)}
            className="bg-sky-50 dark:bg-slate-800 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">🇬🇧</span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-amber-300">
                      Bahasa Inggris
                    </h3>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Bahasa Internasional
                    </span>
                  </div>
                </div>

                <div className="bg-sky-400 text-slate-900 text-xs font-black px-3 py-1.5 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  LEVEL A1 🐣
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 p-4 rounded-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] mb-4">
                <span className="text-xs font-black text-slate-400 block mb-1">
                  STATUS PENGGUNAAN:
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                  “Can say hello. Can say thank you. Can panic when someone speaks too fast.”
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
              <span>Panic Level: 85%</span>
              <span className="bg-amber-300 text-slate-900 px-2 py-0.5 rounded-md border border-slate-900">
                In Progress 🚀
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
