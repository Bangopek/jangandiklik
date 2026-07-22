import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FDE047', '#38BDF8', '#F472B6', '#34D399', '#A855F7']
    });
  } catch (e) {
    console.log('Confetti trigger failed', e);
  }
};

export const triggerMegaConfetti = () => {
  try {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#FDE047', '#F472B6']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#38BDF8', '#34D399']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#A855F7', '#EAB308']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  } catch (e) {
    console.log('Mega confetti failed', e);
  }
};
