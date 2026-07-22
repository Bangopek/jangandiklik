import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/content';
import { playSound } from '../utils/sound';
import { triggerMegaConfetti } from '../utils/confetti';
import { Phone, Mail, MapPin, Send, Copy, Check, Sparkles, MessageCircle } from 'lucide-react';

interface FinalExperienceSectionProps {
  soundEnabled: boolean;
  onShowModalMessage: (title: string, message: string, emoji?: string) => void;
}

export const FinalExperienceSection: React.FC<FinalExperienceSectionProps> = ({
  soundEnabled,
  onShowModalMessage,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSendGreeting = () => {
    playSound('win', soundEnabled);
    triggerMegaConfetti();
    onShowModalMessage(
      'SALAM DITERIMA! 👋✨',
      'Salam telah dikirim. Tidak diketahui sampai ke mana. Mungkin ke server. Mungkin ke langit. Yang penting niatnya baik.',
      '🚀'
    );
  };

  const copyEmail = () => {
    playSound('click', soundEnabled);
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const waLink = `https://wa.me/6285712278300?text=Halo%20Taufiqurrohman,%20saya%20sudah%20melihat%20website%20kamu!`;

  return (
    <section id="kontak" className="py-16 bg-gradient-to-b from-amber-100 via-pink-100 to-amber-200 dark:from-slate-900 dark:via-purple-950 dark:to-slate-950 border-t-3 border-slate-900 transition-colors relative overflow-hidden">
      
      {/* Decorative Floating Badges */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">✨</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-bounce delay-300">🎉</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Info Grid */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            HUBUNGI SAYA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight">
            MARI BERSATU DI ALAM DIGITAL 📩
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Terbuka untuk diskusi, kerja sama proyek, konsultasi IT, atau sekadar kopi santai.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Phone / WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click', soundEnabled)}
            className="p-6 bg-white dark:bg-slate-900 border-3 border-slate-900 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center mb-4 text-slate-900 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-slate-400 block mb-1">WHATSAPP / TELEPON</span>
              <p className="text-base font-black text-slate-900 dark:text-amber-300">
                {PROFILE_INFO.phone}
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
              <span>Buka WhatsApp Langsung 📱</span>
              <span>➔</span>
            </span>
          </a>

          {/* Email */}
          <div className="p-6 bg-white dark:bg-slate-900 border-3 border-slate-900 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-sky-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center mb-4 text-slate-900">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-slate-400 block mb-1">EMAIL RESMI</span>
              <p className="text-sm font-black text-slate-900 dark:text-amber-300 break-all">
                {PROFILE_INFO.email}
              </p>
            </div>
            <button
              onClick={copyEmail}
              className="mt-4 py-2 px-3 bg-sky-200 hover:bg-sky-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-bold text-xs rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] active:translate-y-0.5 transition-all flex items-center justify-center space-x-1"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Email Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Email</span>
                </>
              )}
            </button>
          </div>

          {/* Address */}
          <div className="p-6 bg-white dark:bg-slate-900 border-3 border-slate-900 rounded-3xl shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-pink-300 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center mb-4 text-slate-900">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-slate-400 block mb-1">ALAMAT DOMISILI</span>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {PROFILE_INFO.address}
              </p>
            </div>
            <span className="mt-4 text-xs font-bold text-pink-600 dark:text-pink-400">
              Jawa Tengah, Indonesia 🇮🇩
            </span>
          </div>

        </div>

        {/* Final Website Experience Farewell Box */}
        <div className="max-w-3xl mx-auto bg-amber-300 dark:bg-slate-900 border-4 border-slate-900 p-8 sm:p-12 rounded-3xl shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] text-center relative">
          
          <div className="w-16 h-16 bg-white dark:bg-slate-800 border-3 border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center text-3xl mx-auto mb-6">
            🤝
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-amber-300 mb-4">
            Terima kasih telah berkenalan dengan Taufiqurrohman.
          </h3>

          <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-4 leading-relaxed">
            “Jika kamu sampai di bagian ini, berarti kamu berhasil melewati website biodata yang seharusnya biasa saja, tetapi memilih untuk menjadi aneh.”
          </p>

          <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-amber-300 mb-8">
            “Semoga kita bisa berkolaborasi, berdiskusi, berbagi ilmu, atau minimal saling menyapa tanpa awkward.”
          </p>

          {/* Final Action Button: KIRIM SALAM */}
          <button
            onClick={handleSendGreeting}
            className="w-full sm:w-auto px-8 py-4 bg-pink-400 hover:bg-pink-500 text-slate-900 font-black text-base rounded-2xl border-3 border-slate-900 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] active:translate-y-1 transition-all inline-flex items-center justify-center space-x-3"
          >
            <Send className="w-5 h-5 text-slate-900" />
            <span>KIRIM SALAM 👋</span>
          </button>

        </div>

        {/* Footer Tagline */}
        <div className="mt-12 text-center text-xs font-bold text-slate-700 dark:text-slate-400 space-y-1">
          <p>“Mungkin saya bukan orang paling terkenal di internet, tetapi setidaknya website saya punya bug yang berkarakter.”</p>
          <p className="text-[11px] opacity-75">© {new Date().getFullYear()} Taufiqurrohman, S.Kom • Dibuat dengan cinta, keceriaan, dan beberapa cangkir kopi.</p>
        </div>

      </div>
    </section>
  );
};
