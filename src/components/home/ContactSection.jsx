import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [burstKey, setBurstKey] = useState(0);
  const [isEggUnlocked, setIsEggUnlocked] = useState(false);
  const [isBurstActive, setIsBurstActive] = useState(false);
  const [helloMessage, setHelloMessage] = useState('안녕하세요!');
  const clickStateRef = useRef({ count: 0, lastTime: 0 });
  const unlockTimerRef = useRef(null);
  const burstTimerRef = useRef(null);
  const burstParticles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, idx) => {
        const angle = (Math.PI * 2 * idx) / 34;
        const distance = 56 + (idx % 5) * 14;
        const size = 4 + (idx % 3) * 2;
        return {
          id: idx,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          size,
          duration: 0.75 + (idx % 4) * 0.08,
          delay: (idx % 6) * 0.01,
          color: idx % 3 === 0 ? '#0f172a' : idx % 3 === 1 ? '#2563eb' : '#9333ea',
        };
      }),
    []
  );

  const handleHelloClick = () => {
    const now = Date.now();
    const thresholdMs = 900;
    const withinCombo = now - clickStateRef.current.lastTime <= thresholdMs;
    const nextCount = withinCombo ? clickStateRef.current.count + 1 : 1;

    clickStateRef.current = { count: nextCount, lastTime: now };
    setHelloMessage(nextCount >= 3 ? '안녕하세요!!!!!!!!!!!' : '안녕하세요!');
    if (nextCount >= 3) {
      clickStateRef.current = { count: 0, lastTime: 0 };
    }

    setBurstKey((prev) => prev + 1);
    setIsEggUnlocked(true);
    setIsBurstActive(true);

    if (unlockTimerRef.current) {
      clearTimeout(unlockTimerRef.current);
    }
    if (burstTimerRef.current) {
      clearTimeout(burstTimerRef.current);
    }
    burstTimerRef.current = setTimeout(() => {
      setIsBurstActive(false);
    }, 650);
    unlockTimerRef.current = setTimeout(() => {
      setIsEggUnlocked(false);
    }, 1600);
  };

  useEffect(() => {
    return () => {
      if (unlockTimerRef.current) {
        clearTimeout(unlockTimerRef.current);
      }
      if (burstTimerRef.current) {
        clearTimeout(burstTimerRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      id="contact"
      className="space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="card p-10 md:p-12 text-center relative overflow-hidden group">
        <div className="contact-glow absolute -inset-6 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">함께 멋진 것을 만들어요</h2>
          <p className="mt-4 text-xl text-slate-600">풀타임, 협업 모두 환영합니다</p>
          <motion.a
            className="btn-primary btn-lg mt-8 inline-flex relative overflow-visible"
            href="mailto:chony5093@gmail.com"
            onClick={handleHelloClick}
            whileTap={{ scale: 0.96 }}
            animate={
              isBurstActive
                ? { y: [0, -5, 0], boxShadow: ['0 0 0 rgba(15,23,42,0)', '0 0 30px rgba(37,99,235,0.35)', '0 0 0 rgba(15,23,42,0)'] }
                : { y: 0, boxShadow: '0 0 0 rgba(15,23,42,0)' }
            }
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            {burstKey > 0 && (
              <span key={burstKey} className="pointer-events-none absolute inset-0 z-0">
                <motion.span
                  className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900/40"
                  initial={{ scale: 0.2, opacity: 0.95 }}
                  animate={{ scale: [0.6, 3.4], opacity: [0.8, 0] }}
                  transition={{ duration: 0.62, ease: 'easeOut' }}
                />
                {burstParticles.map((particle) => (
                  <motion.span
                    key={`${burstKey}-${particle.id}`}
                    className="absolute left-1/2 top-1/2 rounded-full"
                    style={{ backgroundColor: particle.color, width: particle.size, height: particle.size }}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.45, rotate: 0 }}
                    animate={{ x: particle.x, y: particle.y, opacity: [1, 0], scale: [1.15, 0.1], rotate: [0, 150] }}
                    transition={{ duration: particle.duration, delay: particle.delay, ease: 'easeOut' }}
                  />
                ))}
              </span>
            )}
            Say Hello
          </motion.a>
          {isEggUnlocked && (
            <motion.p
              className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-500"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {helloMessage}
            </motion.p>
          )}
          <div className="mt-10 flex justify-center gap-6">
            <a href="https://github.com/PengEjeen" className="social-link-large" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:chony5093@gmail.com" className="social-link-large">
              Email
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center text-sm text-slate-500 pt-4">© 2026 Peng Ejeen · Built with React & Tailwind CSS</footer>
    </motion.section>
  );
}
