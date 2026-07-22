import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/content';
import { playSound } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { Gamepad2, Bug, Target, Award, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';

interface MiniGameSectionProps {
  soundEnabled: boolean;
}

export const MiniGameSection: React.FC<MiniGameSectionProps> = ({ soundEnabled }) => {
  const [activeTab, setActiveTab] = useState<'bug' | 'button' | 'quiz'>('bug');

  // Game 1: Catch Bug State
  const [bugScore, setBugScore] = useState(0);
  const [bugHighScore, setBugHighScore] = useState(0);
  const [bugTimeLeft, setBugTimeLeft] = useState(0);
  const [isBugPlaying, setIsBugPlaying] = useState(false);
  const [bugPos, setBugPos] = useState({ top: 40, left: 40 });

  // Game 2: Correct Button State
  const [targetIndex, setTargetIndex] = useState(0);
  const [buttonWinMsg, setButtonWinMsg] = useState('');

  // Game 3: Quiz State
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(null);
  const [quizResultMsg, setQuizResultMsg] = useState('');

  // Bug Game Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBugPlaying && bugTimeLeft > 0) {
      timer = setInterval(() => {
        setBugTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (bugTimeLeft === 0 && isBugPlaying) {
      setIsBugPlaying(false);
      playSound('win', soundEnabled);
      if (bugScore > bugHighScore) {
        setBugHighScore(bugScore);
      }
    }
    return () => clearInterval(timer);
  }, [isBugPlaying, bugTimeLeft, bugScore, bugHighScore, soundEnabled]);

  const startBugGame = () => {
    playSound('pop', soundEnabled);
    setBugScore(0);
    setBugTimeLeft(10);
    setIsBugPlaying(true);
    moveBug();
  };

  const moveBug = () => {
    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;
    setBugPos({ top: randomTop, left: randomLeft });
  };

  const handleCatchBug = () => {
    if (!isBugPlaying) return;
    playSound('bug', soundEnabled);
    setBugScore((prev) => prev + 1);
    moveBug();
  };

  // Game 2 Setup
  const BUTTON_LABELS = ['TOMBOL INI', 'BUKAN YANG INI', 'JANGAN TEKAN', 'SANGAT PENTING', 'MUNGKIN'];

  const handleButtonClick = (index: number) => {
    if (index === targetIndex) {
      playSound('win', soundEnabled);
      triggerConfetti();
      setButtonWinMsg('SELAMAT! Anda berhasil melakukan sesuatu yang bahkan tidak penting. 🎉');
      // Shift target index randomly
      setTargetIndex(Math.floor(Math.random() * BUTTON_LABELS.length));
    } else {
      playSound('dodge', soundEnabled);
      setButtonWinMsg('Salah tombol! Coba cari tombol yang benar lainnya...');
    }
  };

  // Game 3 Setup
  const handleQuizAnswer = (index: number, isCorrect: boolean) => {
    setSelectedQuizIndex(index);
    if (isCorrect) {
      playSound('win', soundEnabled);
      triggerConfetti();
      setQuizResultMsg('JAWABAN BENAR! 🎓 Taufiqurrohman adalah Sarjana Teknik Informatika (S.Kom).');
    } else {
      playSound('dodge', soundEnabled);
      setQuizResultMsg('Ups, kurang tepat! Meskipun jurus menghindari deadline sangat menggoda...');
    }
  };

  return (
    <section id="game" className="py-16 bg-white dark:bg-slate-900 border-t-3 border-b-3 border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-300 text-slate-900 font-black text-xs px-4 py-1.5 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] -rotate-1 mb-3">
            MINI GAME HUB
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-amber-300 tracking-tight">
            ARENA GAME SANTAI 🎮
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">
            Uji refleks, keberuntungan, dan pengetahuanmu tentang Taufiqurrohman!
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => {
              playSound('click', soundEnabled);
              setActiveTab('bug');
            }}
            className={`px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center space-x-2 ${
              activeTab === 'bug'
                ? 'bg-amber-300 dark:bg-amber-400 text-slate-900'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-100'
            }`}
          >
            <Bug className="w-4 h-4" />
            <span>GAME 1: TANGKAP BUG</span>
          </button>

          <button
            onClick={() => {
              playSound('click', soundEnabled);
              setActiveTab('button');
            }}
            className={`px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center space-x-2 ${
              activeTab === 'button'
                ? 'bg-sky-300 text-slate-900'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-sky-100'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>GAME 2: TEKAN TOMBOL</span>
          </button>

          <button
            onClick={() => {
              playSound('click', soundEnabled);
              setActiveTab('quiz');
            }}
            className={`px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] transition-all flex items-center space-x-2 ${
              activeTab === 'quiz'
                ? 'bg-pink-300 text-slate-900'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-pink-100'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>GAME 3: QUIZ TAUFIQ</span>
          </button>
        </div>

        {/* Game Arena Container */}
        <div className="max-w-3xl mx-auto bg-amber-50 dark:bg-slate-950 border-3 border-slate-900 p-6 sm:p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
          
          {/* GAME 1: CATCH BUG */}
          {activeTab === 'bug' && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-amber-300 mb-1">
                  🐛 GAME 1: TANGKAP BUG
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                  “Tangkap semua bug sebelum bug tersebut menangkap kamu.”
                </p>
              </div>

              <div className="flex items-center justify-between bg-white dark:bg-slate-900 border-2 border-slate-900 px-4 py-2 rounded-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] font-mono text-xs sm:text-sm font-bold">
                <span className="text-amber-600 dark:text-amber-400">Skor: {bugScore}</span>
                <span className="text-rose-600 dark:text-rose-400">Waktu: {bugTimeLeft}s</span>
                <span className="text-emerald-600 dark:text-emerald-400">Highscore: {bugHighScore}</span>
              </div>

              {/* Bug Canvas Area */}
              <div className="relative w-full h-64 bg-amber-100/60 dark:bg-slate-900/60 border-2 border-dashed border-slate-900 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                {!isBugPlaying ? (
                  <div className="text-center p-4">
                    <p className="text-sm font-black text-slate-800 dark:text-slate-200 mb-4">
                      {bugTimeLeft === 0 && bugScore > 0
                        ? `GAME OVER! Kamu menangkap ${bugScore} bug!`
                        : 'Klik tombol di bawah untuk mulai 10 detik berburu bug!'}
                    </p>
                    <button
                      onClick={startBugGame}
                      className="px-6 py-3 bg-amber-300 hover:bg-amber-400 text-slate-900 font-black text-xs rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] active:translate-y-0.5 transition-all inline-flex items-center space-x-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>{bugTimeLeft === 0 && bugScore > 0 ? 'Main Lagi 🚀' : 'Mulai Game 🎮'}</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleCatchBug}
                    style={{
                      position: 'absolute',
                      top: `${bugPos.top}%`,
                      left: `${bugPos.left}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="p-3 bg-rose-400 text-3xl rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] animate-bounce transition-all cursor-pointer hover:scale-125"
                  >
                    🐛
                  </button>
                )}
              </div>
            </div>
          )}

          {/* GAME 2: PRESS CORRECT BUTTON */}
          {activeTab === 'button' && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-amber-300 mb-1">
                  🎯 GAME 2: TEKAN TOMBOL YANG BENAR
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                  Satu tombol tersembunyi menyimpan kemenangan. Pilih dengan bijak!
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 py-4">
                {BUTTON_LABELS.map((label, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleButtonClick(idx)}
                    className="px-5 py-3 bg-sky-200 hover:bg-sky-300 text-slate-900 font-black text-xs rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {buttonWinMsg && (
                <div className="p-4 bg-white dark:bg-slate-900 border-2 border-slate-900 rounded-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] font-bold text-sm text-slate-900 dark:text-amber-300 animate-fadeIn">
                  {buttonWinMsg}
                </div>
              )}
            </div>
          )}

          {/* GAME 3: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-amber-300 mb-1">
                  🎓 GAME 3: SEBERAPA TAU KAMU TENTANG TAUFIQ?
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
                  Pertanyaan: "{QUIZ_QUESTIONS.question}"
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                {QUIZ_QUESTIONS.options.map((opt, idx) => {
                  const isSelected = selectedQuizIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(idx, opt.correct)}
                      className={`p-4 rounded-2xl border-2 border-slate-900 font-black text-xs sm:text-sm text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? opt.correct
                            ? 'bg-emerald-300 text-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]'
                            : 'bg-rose-300 text-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]'
                          : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-amber-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]'
                      }`}
                    >
                      <span>{opt.text}</span>
                      {isSelected && (
                        <span>{opt.correct ? <CheckCircle2 className="w-5 h-5 text-slate-900" /> : <XCircle className="w-5 h-5 text-slate-900" />}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {quizResultMsg && (
                <div className="p-4 bg-white dark:bg-slate-900 border-2 border-slate-900 rounded-2xl shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] font-bold text-sm text-slate-900 dark:text-amber-300 animate-fadeIn">
                  {quizResultMsg}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
