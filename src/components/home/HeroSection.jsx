import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../ParticleBackground';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Fullstack Engineer';
  const emailAddress = 'chony5093@gmail.com';

  const handleEmailClick = (event) => {
    event.preventDefault();
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
    const openedWindow = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');

    if (!openedWindow) {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white p-0">
      <ParticleBackground />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto text-center px-8 md:px-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="floating-icons absolute inset-0 pointer-events-none">
          <motion.span
            className="tech-icon"
            style={{ top: '20%', left: '15%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.2, opacity: 0.6 }}
          >
            FE
          </motion.span>
          <motion.span
            className="tech-icon"
            style={{ top: '60%', right: '20%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.2, opacity: 0.6 }}
          >
            DevOps
          </motion.span>
          <motion.span
            className="tech-icon"
            style={{ bottom: '25%', left: '25%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.2, opacity: 0.6 }}
          >
            BE
          </motion.span>
        </div>

        <motion.p
          className="text-sm uppercase tracking-[0.35em] text-slate-600 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {typedText}
          <span className="typing-cursor">|</span>
        </motion.p>

        <div className="relative h-48 my-8 flex items-center justify-center">
          <motion.h1
            className="text-6xl md:text-8xl font-black text-center text-slate-900"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              mass: 1.2,
              delay: 0.2,
            }}
          >
            조남영
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          문제는 단순하게, 시스템은 견고하게
          <br />
          사용자 경험은 부드럽게, 운영은 안정적으로, 끝까지 책임지는 개발을 지향합니다.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a className="btn-primary btn-lg" href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            프로젝트 보기
          </motion.a>
          <motion.a className="btn-ghost btn-lg" href="#about" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            About Me
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/PengEjeen"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href={`mailto:${emailAddress}`}
            className="social-link"
            onClick={handleEmailClick}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm text-slate-500 uppercase tracking-wider">Scroll Down</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
