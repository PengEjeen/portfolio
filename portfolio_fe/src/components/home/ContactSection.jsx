import { motion } from 'framer-motion';

export default function ContactSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold">함께 멋진 것을 만들어요</h2>
          <p className="mt-4 text-xl text-slate-300">프리랜스, 풀타임, 협업 모두 환영합니다</p>
          <a className="btn-primary btn-lg mt-8 inline-block" href="mailto:hello@peng-ejeen.dev">
            Say Hello
          </a>
          <div className="mt-10 flex justify-center gap-6">
            <a href="https://github.com/PengEjeen" className="social-link-large" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/pengejeen" className="social-link-large" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:hello@peng-ejeen.dev" className="social-link-large">
              Email
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center text-sm text-slate-500 pt-4">© 2026 Peng Ejeen · Built with React & Tailwind CSS</footer>
    </motion.section>
  );
}
