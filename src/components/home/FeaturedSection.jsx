import { motion } from 'framer-motion';

export default function FeaturedSection() {
  return (
    <motion.section
      id="featured"
      className="space-y-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Project</h2>
        <span className="badge">2025</span>
      </div>
      <motion.div
        className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
          <div className="space-y-4">
            <span className="badge">HIGHLIGHT</span>
            <h3 className="text-3xl font-bold text-slate-900">Platform Name</h3>
            <p className="text-slate-600 text-lg leading-relaxed">여기에 프로젝트에 대한 설명</p>

            <div className="flex flex-wrap gap-2">
              {['django', 'React.js', 'PostgreSQL', 'Redis', 'Stripe'].map((tech) => (
                <span key={tech} className="chip-enhanced">
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-4 flex gap-3">
              <a href="#" className="btn-primary">
                Live Demo →
              </a>
              <a href="#" className="btn-ghost">
                GitHub
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-slate-100 border border-slate-200 group-hover:scale-105 transition-transform overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500">[Project Screenshot]</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
