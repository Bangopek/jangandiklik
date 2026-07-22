import React, { useEffect, useState } from 'react';
import { playSound } from '../utils/sound';

interface LoadingScreenProps {
  onComplete: () => void;
  soundEnabled: boolean;
}

const STEPS = [
  { progress: 20, text: 'Mencari WiFi gratis...' },
  { progress: 40, text: 'Mengingat password admin...' },
  { progress: 60, text: 'Menemukan ide website absurd...' },
  { progress: 80, text: 'Mengatasi bug berkarakter...' },
  { progress: 100, text: 'Selamat datang di dunia Taufiq! 🎉' },
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, soundEnabled }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < STEPS.length - 1) {
          playSound('pop', soundEnabled);
          return prev + 1;
        } else {
          clearInterval(timer);
          playSound('win', soundEnabled);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400);
          }, 600);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(timer);
  }, [onComplete, soundEnabled]);

  const current = STEPS[stepIndex];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-amber-300 dark:bg-slate-900 transition-opacity duration-500 ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Playful Floating Cards Background */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">⚡</div>
      <div className="absolute bottom-12 right-12 text-4xl animate-bounce delay-300">🎓</div>
      <div className="absolute top-20 right-16 text-3xl animate-pulse">🐛</div>

      <div className="w-full max-w-md px-6 text-center">
        {/* Animated Avatar / Laptop Illustration */}
        <div className="relative mx-auto w-28 h-28 mb-6 flex items-center justify-center bg-white dark:bg-slate-800 rounded-3xl border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] animate-bounce">
          <span className="text-5xl">👨‍💻</span>
          <div className="absolute -top-2 -right-2 bg-pink-400 text-xs font-bold text-slate-900 px-2 py-0.5 rounded-full border-2 border-slate-900">
            S.Kom
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-amber-300 tracking-tight mb-2">
          Sedang memuat kepribadian...
        </h2>

        <p className="text-slate-700 dark:text-slate-300 font-medium text-base mb-6 h-8">
          {current.text}
        </p>

        {/* Custom Progress Bar */}
        <div className="w-full h-6 bg-white dark:bg-slate-800 rounded-full border-3 border-slate-900 p-1 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-sky-400 to-emerald-400 rounded-full transition-all duration-300 ease-out flex items-center justify-end pr-2"
            style={{ width: `${current.progress}%` }}
          >
            <span className="text-[10px] font-black text-slate-900">
              {current.progress}%
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onComplete();
          }}
          className="mt-8 text-xs font-bold text-slate-700 dark:text-slate-300 underline hover:text-slate-900 dark:hover:text-amber-300 transition-colors"
        >
          Lewati Loading ⏩
        </button>
      </div>
    </div>
  );
};
