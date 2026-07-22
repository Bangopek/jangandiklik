import React from 'react';
import { INTERESTS } from '../data/content';
import { playSound } from '../utils/sound';
import { Lightbulb } from 'lucide-react';

interface InterestsSectionProps {
  soundEnabled: boolean;
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({ soundEnabled }) => {
  return (
    <section className="py-16 bg-amber-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            BIDANG MINAT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight">
            HAL-HAL YANG MEMBUAT OTAK SAYA TIDAK DIAM 💡
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Tiga pilar utama yang mendorong eksplorasi dan kreativitas.
          </p>
        </div>

        {/* 3 Interactive Cards / Bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INTERESTS.map((item) => (
            <div
              key={item.title}
              onMouseEnter={() => playSound('pop', soundEnabled)}
              className={`p-6 sm:p-8 rounded-3xl border-3 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 hover:rotate-1 transition-all flex flex-col justify-between ${item.bgColor}`}
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black mb-3">
                  {item.title}
                </h3>

                <p className="text-sm font-bold leading-relaxed opacity-90">
                  "{item.description}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-current/20 flex items-center justify-between text-xs font-black">
                <span>PASSION AREA</span>
                <span>✨ Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
