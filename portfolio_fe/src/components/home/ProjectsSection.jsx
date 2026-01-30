import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import assetStudioImage from '../../assets/AssetStudio.png';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'AssetStore',
      desc: '설명은 내가 채울게요',
      tag: 'Product',
      color: 'teal',
      image: assetStudioImage,
      stack: ['React', 'Node.js', 'PostgreSQL'],
      highlights: [
        '디자인 에셋 판매/구매 플로우',
        '검색/필터 최적화',
        '결제/정산 자동화',
      ],
    },
    {
      title: 'Project Two',
      desc: '설명은 내가 채울게요',
      tag: 'Backend',
      color: 'blue',
      stack: ['Go', 'Redis', 'gRPC'],
      highlights: ['API 집약', '캐싱 전략', '관측성 개선'],
    },
    {
      title: 'Project Three',
      desc: '설명은 내가 채울게요',
      tag: 'Fullstack',
      color: 'purple',
      stack: ['Next.js', 'D3', 'BigQuery'],
      highlights: ['이거요', '대용량 처리', '권한 관리'],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const listRef = useRef(null);

  useEffect(() => {
    const listEl = listRef.current;
    if (!listEl) return;

    const handleScroll = () => {
      const items = listEl.querySelectorAll('[data-project-index]');
      if (!items.length) return;
      let closestIndex = 0;
      let closestDistance = Infinity;
      const listRect = listEl.getBoundingClientRect();
      const listCenter = listRect.top + listRect.height / 2;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - listCenter);
        const index = Number(item.getAttribute('data-project-index'));
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    listEl.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      listEl.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <motion.section
      id="projects"
      className="space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-end justify-between">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <span className="text-sm text-slate-400">Selected work</span>
      </div>
      <div className="grid md:grid-cols-[140px_1fr_2fr] gap-6">
        <div className="hidden md:flex flex-col gap-4 pt-10">
          {projects.map((_, idx) => (
            <div key={`bookmark-${idx}`} className="flex items-center gap-3">
              <div className="relative h-10 w-8">
                <div
                  className={`absolute inset-0 rounded-l-md ${
                    activeIndex === idx ? 'bg-teal-400' : 'bg-slate-700'
                  }`}
                />
                <div className="absolute right-[-10px] top-0 h-full w-3">
                  <div
                    className={`h-full w-0 border-t-[20px] border-b-[20px] border-l-[10px] ${
                      activeIndex === idx ? 'border-l-teal-400' : 'border-l-slate-700'
                    } border-t-transparent border-b-transparent`}
                  />
                </div>
              </div>
              <span
                className={`text-xs font-semibold tracking-[0.35em] ${
                  activeIndex === idx ? 'text-teal-300' : 'text-slate-500'
                }`}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
        <div
          ref={listRef}
          className="space-y-4 max-h-[520px] overflow-y-auto pr-2 scroll-smooth snap-y snap-mandatory py-10"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((project, idx) => (
            <motion.button
              key={project.title}
              type="button"
              data-project-index={idx}
              onFocus={() => setActiveIndex(idx)}
              className={`w-full text-left project-card card p-5 transition-all duration-300 group snap-center ${
                activeIndex === idx
                  ? 'border border-teal-400/60 bg-teal-500/15 scale-[1.02] shadow-lg shadow-teal-500/20'
                  : 'opacity-70 scale-[0.98] hover:-translate-y-1'
              }`}
              style={{
                transformOrigin: 'center left',
                transform:
                  activeIndex === idx
                    ? 'rotateX(0deg)'
                    : idx < activeIndex
                      ? 'rotateX(-6deg)'
                      : 'rotateX(6deg)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border border-white/10 mb-4 overflow-hidden group-hover:border-white/30 transition-colors">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600">[Screenshot]</div>
                )}
              </div>
              <div className={`badge text-${project.color}-300`}>{project.tag}</div>
              <h3 className="mt-2 text-lg font-semibold group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.desc}</p>
            </motion.button>
          ))}
        </div>

        <div className="card p-8 md:p-10">
          <div className="flex items-center justify-between">
            <div>
              <div className={`badge text-${activeProject.color}-300`}>{activeProject.tag}</div>
              <h3 className="mt-3 text-3xl font-bold">{activeProject.title}</h3>
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Current Project</span>
          </div>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">{activeProject.desc}</p>

          <div className="mt-6">
            <h4 className="text-sm uppercase tracking-wider text-teal-300 font-semibold">Highlights</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              {activeProject.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-teal-400">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-sm uppercase tracking-wider text-amber-300 font-semibold">Stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeProject.stack.map((tech) => (
                <span key={tech} className="chip-enhanced">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="#" className="btn-primary">
              Live Demo →
            </a>
            <a href="#" className="btn-ghost">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
