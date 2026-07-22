import React from 'react';
import { playSound } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { Mail, CheckCircle, ShieldAlert, Heart, Wifi } from 'lucide-react';

interface SocialCritiqueSectionProps {
  soundEnabled: boolean;
  onShowModalMessage: (title: string, message: string, emoji?: string) => void;
}

export const SocialCritiqueSection: React.FC<SocialCritiqueSectionProps> = ({
  soundEnabled,
  onShowModalMessage,
}) => {
  const handleAgree = () => {
    playSound('win', soundEnabled);
    triggerConfetti();
    onShowModalMessage(
      'SUARA RAKYAT TERDENGAR! 📢',
      'Terima kasih. Anda mendapatkan +10 poin kepedulian sosial!',
      '👏'
    );
  };

  const handleOfficial = () => {
    playSound('pop', soundEnabled);
    onShowModalMessage(
      'SALAM HORMAT BAPAK/IBU PEJABAT! 🏛️',
      'Tenang. Ini hanya website. Silakan duduk dan nikmati hidangan teh hangatnya.',
      '☕'
    );
  };

  return (
    <section id="kritik-sosial" className="py-16 bg-amber-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            KRITIK KONSTRUKTIF & ASPIRASI DIGITAL
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight leading-tight max-w-4xl mx-auto">
            SURAT CINTA UNTUK PEMERINTAH, DENGAN SEDIKIT BUFFERING. 💌
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Satire cerdas, santun, dan membangun untuk kemajuan transformasi digital Indonesia.
          </p>
        </div>

        {/* Digital Letter Card */}
        <div className="max-w-4xl mx-auto bg-amber-100/90 dark:bg-slate-900 border-3 border-slate-900 p-6 sm:p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative">
          
          {/* Stamp Graphic */}
          <div className="absolute top-6 right-6 w-16 h-16 sm:w-20 sm:h-20 bg-rose-200 dark:bg-rose-900/60 border-2 border-dashed border-rose-500 rounded-xl flex flex-col items-center justify-center -rotate-6 shadow-sm">
            <Wifi className="w-5 h-5 text-rose-600 animate-pulse" />
            <span className="text-[9px] font-black text-rose-700 dark:text-rose-300 mt-0.5">
              SEMI-BUFFERING
            </span>
          </div>

          <div className="flex items-center space-x-2 mb-6 text-slate-900 dark:text-amber-300">
            <Mail className="w-6 h-6" />
            <span className="font-mono font-black text-sm tracking-wider uppercase">
              RE: REKONSTRUKSI PELAYANAN PUBLIK DIGITAL
            </span>
          </div>

          {/* Letter Body */}
          <div className="space-y-4 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
            <p className="font-bold text-slate-900 dark:text-amber-300">
              Kepada para pengambil kebijakan,
            </p>

            <p>
              Teknologi seharusnya tidak hanya menjadi jargon dalam seminar dan tulisan di spanduk.
            </p>

            <p className="bg-white/80 dark:bg-slate-800/80 p-4 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] font-bold">
              Di era digital, masyarakat membutuhkan akses internet yang merata, pendidikan teknologi yang mudah dipahami, layanan publik yang sederhana, dan kebijakan yang benar-benar terasa sampai ke masyarakat di daerah.
            </p>

            <p>
              Jangan sampai masyarakat sudah menggunakan kecerdasan buatan, tetapi layanan publik masih meminta fotokopi dokumen yang sama sebanyak tujuh rangkap.
            </p>

            <p>
              Jangan sampai kita berbicara tentang transformasi digital, tetapi masyarakat masih kesulitan mendapatkan akses internet yang stabil.
            </p>

            <div className="p-4 bg-pink-100 dark:bg-slate-800 border-2 border-slate-900 rounded-2xl text-pink-900 dark:text-pink-200 font-bold text-center">
              Kritik ini bukan karena membenci pemerintah. <br />
              Kritik ini karena masyarakat ingin negara menjadi lebih baik. ❤️
            </div>

            <p className="font-bold text-slate-900 dark:text-amber-300">
              Teknologi seharusnya memudahkan manusia, bukan membuat manusia membutuhkan tutorial 47 menit untuk mengurus sesuatu yang seharusnya selesai dalam 5 menit.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t-2 border-slate-900/20 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button
              onClick={handleAgree}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-300 hover:bg-emerald-400 text-slate-900 font-black text-xs sm:text-sm rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center justify-center space-x-2"
            >
              <CheckCircle className="w-4 h-4 text-slate-900" />
              <span>🔘 SAYA SETUJU (+10 POIN)</span>
            </button>

            <button
              onClick={handleOfficial}
              className="w-full sm:w-auto px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-black text-xs sm:text-sm rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center justify-center space-x-2"
            >
              <ShieldAlert className="w-4 h-4 text-slate-900" />
              <span>🔘 SAYA PEJABAT</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
