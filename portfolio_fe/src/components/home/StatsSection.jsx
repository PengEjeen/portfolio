import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { label: 'Lighthouse 평균', value: '98%', icon: ' ', desc: '모든 프로젝트 성능 점수' },
    { label: '배포 완료', value: '12+', icon: '', desc: '실측 가능한 성과 달성' },
    { label: '경력', value: '1.9 yrs', icon: '', desc: '시스템 개발' },
  ];

  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          className="stat-card card p-7 hover:scale-105 transition-transform cursor-pointer group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">{stat.label}</div>
              <div className="mt-4 text-4xl font-bold text-slate-900 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <p className="mt-2 text-slate-500 text-sm">{stat.desc}</p>
            </div>
            <span className="text-3xl opacity-40 group-hover:opacity-100 transition-opacity">{stat.icon}</span>
          </div>
          <div className="mt-4 h-1 bg-gradient-to-r from-slate-900 to-slate-400 rounded-full" />
        </motion.div>
      ))}
    </motion.section>
  );
}
