import React, { useState } from 'react';
import { SKILLS } from '../data/content';
import { playSound } from '../utils/sound';
import { Sparkles, Trophy } from 'lucide-react';

interface SkillsSectionProps {
  soundEnabled: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ soundEnabled }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skill" className="py-16 bg-amber-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            KETERAMPILAN & SKILL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight">
            APA YANG BISA AKU LAKUKAN? 🛠️
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Tingkat keahlian ditampilkan dalam statistik layaknya game RPG!
          </p>
        </div>

        {/* Skills Container Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-6">
          
          {SKILLS.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => {
                  setHoveredSkill(skill.name);
                  playSound('pop', soundEnabled);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group p-4 bg-amber-50/50 dark:bg-slate-800/50 rounded-2xl border-2 border-slate-900 hover:bg-amber-100/80 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-black text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {isHovered && (
                      <span className="text-[10px] font-black bg-pink-400 text-slate-900 px-2 py-0.5 rounded-full border border-slate-900 animate-bounce">
                        LEVEL UP! ⚡
                      </span>
                    )}
                    <span className="font-mono font-black text-xs sm:text-sm bg-slate-900 text-amber-300 px-2.5 py-1 rounded-xl border border-slate-900">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* RPG Progress Bar */}
                <div className="w-full h-5 bg-slate-200 dark:bg-slate-700 rounded-full border-2 border-slate-900 p-0.5 overflow-hidden shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500 ease-out flex items-center justify-end pr-2`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Disclaimer Banner requested in prompt */}
          <div className="mt-8 bg-yellow-100 dark:bg-slate-800 border-2 border-slate-900 p-4 rounded-2xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] text-center">
            <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-amber-300 flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>
                “Persentase ini tidak dihitung oleh lembaga survei. Ini hasil perasaan dan sedikit keberanian.”
              </span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
