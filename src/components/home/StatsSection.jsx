import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { label: '프로젝트 완료율', value: '100%', desc: '기획부터 배포까지 완료한 프로젝트 기준' },
    { label: '배포 완료', value: '8+', desc: '실측 가능한 성과 달성' },
    { label: '경력', value: '1.11 yrs', desc: '시스템 개발' },
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
          className="card rounded-2xl border border-slate-200 bg-white p-6 md:p-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
        >
          <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500 font-semibold">{stat.label}</div>
          <div className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</div>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}