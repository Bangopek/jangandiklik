import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { playSound } from '../utils/sound';

interface ModalMessageProps {
  isOpen: boolean;
  title: string;
  message: string;
  emoji?: string;
  soundEnabled: boolean;
  onClose: () => void;
}

export const ModalMessage: React.FC<ModalMessageProps> = ({
  isOpen,
  title,
  message,
  emoji = '✨',
  soundEnabled,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-amber-100 dark:bg-slate-900 border-4 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] text-center animate-popIn">
        
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="absolute top-4 right-4 p-2 bg-pink-300 hover:bg-pink-400 text-slate-900 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Emoji Circle */}
        <div className="w-16 h-16 bg-yellow-300 rounded-2xl border-3 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-3xl mx-auto mb-4">
          {emoji}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-amber-300 mb-3 tracking-tight">
          {title}
        </h3>

        {/* Message */}
        <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 p-4 rounded-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] mb-6">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
            "{message}"
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="w-full py-3 bg-sky-300 hover:bg-sky-400 text-slate-900 font-black text-sm rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-y-0.5 transition-all flex items-center justify-center space-x-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>PAHAM & SAYA SENANG! 👍</span>
        </button>

      </div>
    </div>
  );
};
