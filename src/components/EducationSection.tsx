import React, { useState } from 'react';
import { TIMELINE_STEPS } from '../data/content';
import { playSound } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { Award, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';

interface EducationSectionProps {
  soundEnabled: boolean;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ soundEnabled }) => {
  const [activeStep, setActiveStep] = useState<number | null>(6);

  const handleStepClick = (index: number) => {
    playSound('pop', soundEnabled);
    setActiveStep(index);
    if (index === 6) {
      triggerConfetti();
    }
  };

  return (
    <section id="pendidikan" className="py-16 bg-amber-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-sky-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            RIWAYAT PENDIDIKAN
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight">
            PERJALANAN PANJANG MENUJU GELAR S.KOM 🎓
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Sebuah quest panjang di dunia nyata dengan grafik 4K tanpa cheat code.
          </p>
        </div>

        {/* University Main Banner Card */}
        <div className="bg-yellow-100 dark:bg-slate-900 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-400 rounded-2xl border-3 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-3xl sm:text-4xl shrink-0">
              🏫
            </div>
            <div>
              <span className="bg-pink-400 text-slate-900 text-xs font-black px-2.5 py-0.5 rounded-full border border-slate-900">
                S1 TEKNIK INFORMATIKA
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-amber-300 mt-1">
                Universitas Sains Al-Qur'an (UNSIQ)
              </h3>
              <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                Wonosobo, Jawa Tengah, Indonesia • Sarjana Komputer (S.Kom)
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 px-4 py-3 rounded-2xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] text-center shrink-0">
            <span className="text-xs font-black text-slate-500 dark:text-slate-400 block">STATUS KULIAH</span>
            <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-center space-x-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Tuntas & Lulus!</span>
            </span>
          </div>
        </div>

        {/* Interactive Game-style Timeline */}
        <div className="bg-white dark:bg-slate-900 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] mb-12">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-amber-300 mb-6 text-center">
            🎮 SIMULASI ALUR QUEST PERKULIAHAN (KLIK SETIAP STEP)
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.label}
                  onClick={() => handleStepClick(idx)}
                  className={`relative p-3 rounded-2xl border-2 border-slate-900 text-center transition-all ${
                    isActive
                      ? 'bg-amber-300 dark:bg-amber-400 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -translate-y-1'
                      : 'bg-amber-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-amber-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]'
                  }`}
                >
                  <div className="text-2xl mb-1">{step.emoji}</div>
                  <div className="font-black text-xs">{step.label}</div>
                  {idx < TIMELINE_STEPS.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {activeStep !== null && (
            <div className="mt-6 p-4 bg-sky-100 dark:bg-slate-800 border-2 border-slate-900 rounded-2xl text-center shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] animate-fadeIn">
              <span className="text-xs font-black text-sky-700 dark:text-sky-300 uppercase tracking-wider block mb-1">
                DETAIL STEP {activeStep + 1}: {TIMELINE_STEPS[activeStep].label}
              </span>
              <p className="text-sm font-bold text-slate-900 dark:text-amber-300">
                "{TIMELINE_STEPS[activeStep].desc}"
              </p>
            </div>
          )}
        </div>

        {/* Achievement Unlocked Banner */}
        <div className="relative bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300 dark:from-purple-900 dark:via-pink-900 dark:to-amber-900 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 bg-yellow-400 rounded-2xl border-3 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-3xl shrink-0 animate-bounce">
              🏆
            </div>
            <div>
              <div className="inline-block bg-slate-900 text-yellow-300 text-xs font-black px-3 py-1 rounded-lg mb-1">
                ACHIEVEMENT UNLOCKED
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-amber-300">
                LULUS KULIAH & MERAIH GELAR S.KOM
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                "Berhasil melewati berbagai tugas, revisi, deadline, dan pertanyaan: 'Kapan lulus?'"
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSound('win', soundEnabled);
              triggerConfetti();
            }}
            className="px-6 py-3 bg-slate-900 text-yellow-300 hover:bg-slate-800 font-black text-xs sm:text-sm rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] active:translate-y-0.5 transition-all shrink-0 flex items-center space-x-2"
          >
            <Award className="w-4 h-4 text-yellow-300" />
            <span>Rayakan Achievement! 🎉</span>
          </button>

        </div>

      </div>
    </section>
  );
};
