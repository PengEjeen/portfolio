import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="grid md:grid-cols-12 gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="card md:col-span-7 p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">여기에는 설명을 넣을게요</p>
        <div className="mt-8 space-y-3">
          <h3 className="text-sm uppercase tracking-wider text-slate-600 font-semibold">Focus Areas</h3>
          <div className="flex flex-wrap gap-2">
            {['Backend Architecture', 'Database Design', 'API Development', 'Frontend Framework', 'DevOps', 'Cloud Services'].map((skill) => (
              <span key={skill} className="chip-enhanced">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-5 grid gap-6">
        <div className="card p-7 border-l-4 border-slate-900">
          <div className="flex items-center gap-2">
            <span className="text-2xl">●</span>
            <h3 className="font-bold text-lg text-slate-900">Current Focus</h3>
          </div>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">PMISX 만들어여</p>
        </div>
        <div className="card p-7 border-l-4 border-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-2xl">▸</span>
            <h3 className="font-bold text-lg text-slate-900">Coming Next</h3>
          </div>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Kubernetes 기반 마이크로서비스 아키텍처를 학습하며 클라우드 네이티브 애플리케이션을 준비 중입니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
