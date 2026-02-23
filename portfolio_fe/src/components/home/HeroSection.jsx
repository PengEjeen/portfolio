import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../ParticleBackground';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Fullstack Engineer';

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
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="gradient-wave" />
        <div className="gradient-wave" style={{ animationDelay: '2s' }} />
        <div className="gradient-wave" style={{ animationDelay: '4s' }} />
      </div>

      <ParticleBackground />

      <div className="hero-glow absolute -inset-6 opacity-50 pointer-events-none" />

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
          <motion.span
            className="tech-icon"
            style={{ top: '30%', right: '15%' }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ scale: 1.2, opacity: 0.6 }}
          >
            +
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
          뭐를 넣을까용 헤헤
          <br />
          사용자 경험과 서버 성능 모두를 고려한 통합 개발을 지향합니다.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a className="btn-primary btn-lg" href="#featured" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            프로젝트 보기
          </motion.a>
          <motion.a className="btn-ghost btn-lg" href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            연락하기
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
            href="https://linkedin.com/in/pengejeen"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href="mailto:hello@peng-ejeen.dev"
            className="social-link"
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
        onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
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
