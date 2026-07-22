import React, { useEffect, useState, useRef } from 'react';
import { playSound } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { ABSURD_QUOTES } from '../data/content';
import { Sparkles, MessageSquareQuote } from 'lucide-react';

interface EasterEggsProps {
  soundEnabled: boolean;
  onShowModalMessage: (title: string, message: string, emoji?: string) => void;
}

export const EasterEggs: React.FC<EasterEggsProps> = ({
  soundEnabled,
  onShowModalMessage,
}) => {
  const [typedBuffer, setTypedBuffer] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasShowedIdleRef = useRef(false);

  // Keyboard Listeners (ESC key & 'TAUFIQ' secret code)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC Key Detector
      if (e.key === 'Escape') {
        playSound('egg', soundEnabled);
        onShowModalMessage(
          'TOMBOL ESC TEKAN! 🏃‍♂️',
          'Kabur dari website tidak akan menyelesaikan masalah.',
          '😅'
        );
      }

      // 'TAUFIQ' Typing Detector
      const key = e.key.toUpperCase();
      if (key.length === 1 && key >= 'A' && key <= 'Z') {
        setTypedBuffer((prev) => {
          const updated = (prev + key).slice(-6);
          if (updated === 'TAUFIQ') {
            playSound('win', soundEnabled);
            triggerConfetti();
            onShowModalMessage(
              'KODE RAHASIA DITEMUKAN! 🎮✨',
              'Kode rahasia ditemukan. Anda resmi menjadi teman digital Taufiqurrohman.',
              '🥳'
            );
            return '';
          }
          return updated;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundEnabled, onShowModalMessage]);

  // Idle Detector (15 seconds idle)
  useEffect(() => {
    const resetIdleTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (!hasShowedIdleRef.current) {
        idleTimerRef.current = setTimeout(() => {
          hasShowedIdleRef.current = true;
          playSound('pop', soundEnabled);
          onShowModalMessage('HALO PAK/BU? 🤔', 'Kamu masih di sana? ... Aku juga.', '👀');
        }, 18000); // 18s idle
      }
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach((evt) => window.addEventListener(evt, resetIdleTimer));
    resetIdleTimer();

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      events.forEach((evt) => window.removeEventListener(evt, resetIdleTimer));
    };
  }, [soundEnabled, onShowModalMessage]);

  const nextQuote = () => {
    playSound('pop', soundEnabled);
    setCurrentQuoteIndex((prev) => (prev + 1) % ABSURD_QUOTES.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 my-10">
      <div className="bg-amber-200 dark:bg-slate-800 border-3 border-slate-900 p-6 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-pink-300 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-slate-900 shrink-0">
            <MessageSquareQuote className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              RANDOM QUOTE ABSURD S.KOM
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-amber-300 italic">
              {ABSURD_QUOTES[currentQuoteIndex]}
            </p>
          </div>
        </div>

        <button
          onClick={nextQuote}
          className="px-4 py-2 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-black text-xs rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] active:translate-y-0.5 transition-all shrink-0 flex items-center space-x-1"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Minta Quote Lain 🎲</span>
        </button>

      </div>
    </div>
  );
};
