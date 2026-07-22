import React from 'react';
import { ORGANIZATIONS } from '../data/content';
import { playSound } from '../utils/sound';
import { Users, Info, MessageSquareCode } from 'lucide-react';

interface OrganizationSectionProps {
  soundEnabled: boolean;
  onShowModalMessage: (title: string, message: string, emoji?: string) => void;
}

export const OrganizationSection: React.FC<OrganizationSectionProps> = ({
  soundEnabled,
  onShowModalMessage,
}) => {
  const handleOrgClick = (orgName: string) => {
    playSound('pop', soundEnabled);
    onShowModalMessage(
      `PENGALAMAN DI ${orgName.toUpperCase()}`,
      'Di sini Taufiqurrohman belajar bahwa rapat bisa berlangsung lebih lama daripada film trilogi.',
      '📢'
    );
  };

  return (
    <section id="organisasi" className="py-16 bg-white dark:bg-slate-900 border-t-3 border-b-3 border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            PENGALAMAN ORGANISASI
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight leading-tight max-w-4xl mx-auto">
            PERNAH TERLIBAT DALAM ORGANISASI, TAPI BELUM PERNAH TERLIBAT DALAM KEJAHATAN INTERNASIONAL. 🤝
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Klik setiap kartu organisasi di bawah untuk membaca pelajaran tersembunyi!
          </p>
        </div>

        {/* 4 Interactive Organization Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORGANIZATIONS.map((org) => (
            <div
              key={org.id}
              onClick={() => handleOrgClick(org.name)}
              className={`cursor-pointer rounded-3xl border-3 border-slate-900 p-6 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-2 hover:shadow-[7px_7px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between ${org.lightBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-black px-3 py-1 rounded-full border-2 border-slate-900 bg-white dark:bg-slate-900 ${org.textColor}`}>
                    {org.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-sm shadow-[1px_1px_0px_0px_rgba(15,23,42,1)]">
                    <Users className="w-4 h-4 text-slate-900 dark:text-amber-300" />
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                  {org.name}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-slate-900/20 flex items-center justify-between text-xs font-black text-slate-700 dark:text-slate-300">
                <span className="flex items-center space-x-1">
                  <MessageSquareCode className="w-3.5 h-3.5" />
                  <span>Klik untuk rahasia</span>
                </span>
                <span className="text-base">➡️</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note Card */}
        <div className="mt-10 bg-amber-100 dark:bg-slate-800 border-2 border-slate-900 p-4 rounded-2xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] text-center max-w-xl mx-auto flex items-center justify-center space-x-2">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
            Catatan: Pengalaman organisasi membentuk kemampuan komunikasi, kepemimpinan, dan kesabaran menghadapi konsumsi rapat.
          </p>
        </div>

      </div>
    </section>
  );
};
