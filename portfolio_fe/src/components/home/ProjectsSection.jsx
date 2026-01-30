import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import assetStudioImage from '../../assets/AssetStudio.png';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'AssetStore',
      desc: '3D 애니메이션 생성 모델의 제작과 배포 ',
      tag: 'AI',
      color: 'teal',
      image: assetStudioImage,
      period: { start: '2025.04', end: '2025.05' },
      teamSize: '4명',
      stack: ['PyTorch', 'transformers', 'FastApi', 'Docker', 'Gradio', 'Redis'],
      links: {
        github: 'https://github.com/google-ml-bc-2nd-2025',
        // huggingface: '#',
        // linkedin: '#',
      },
      content: '기획자 초안(설명·레퍼런스)만으로 게임 에셋 규격에 맞는 소통용 AI 3D 애니메이션 프록시 모델을 빠르게 생성해, 기획자와 디자이너가 같은 화면을 보며 형태·스케일·동작/타이밍을 즉시 확인하고 해석 차이로 인한 반복 수정과 커뮤니케이션 비용을 줄이는 프로젝트',
      roles: ['MDM(Motion Diffusion Model) 모델 논문 리서치', 'MDM 학습방법 정립', 
        'Mixamo 데이터 MDM 학습에 맞게 전처리', '성능지표 FID, rot_mse 선정','모델 서빙'],
      troubleshooting: [
        {
          problem: '데이터 형식의 문제가 있었음. 모든 관절의 위치가 다르고 순서가 다름',
          solution: '데이터를 smpl이라는 본 구조에 맞춤.',
        },
      ],
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
      period: { start: '2023.10', end: '2024.02' },
      teamSize: '2명',
      stack: ['Go', 'Redis', 'gRPC'],
      links: {
        github: '#',
        huggingface: '#',
        linkedin: '#',
      },
      content: '프로젝트 개요/핵심 기능/성과를 여기에 적어주세요.',
      roles: ['API 설계 및 구현', '캐싱 전략 수립'],
      troubleshooting: [
        {
          problem: '지연 시간 변동',
          solution: '서킷 브레이커와 리트라이 정책 적용',
        },
      ],
      highlights: ['API 집약', '캐싱 전략', '관측성 개선'],
    },
    {
      title: 'Project Three',
      desc: '설명은 내가 채울게요',
      tag: 'Fullstack',
      color: 'purple',
      period: { start: '2024.03', end: '2024.09' },
      teamSize: '4명',
      stack: ['Next.js', 'D3', 'BigQuery'],
      links: {
        github: '#',
        huggingface: '#',
        linkedin: '#',
      },
      content: '프로젝트 개요/핵심 기능/성과를 여기에 적어주세요.',
      roles: ['데이터 시각화 구현', '권한 관리 설계'],
      troubleshooting: [
        {
          problem: '대용량 렌더링 병목',
          solution: '가상화와 레이어 분리로 렌더링 최적화',
        },
      ],
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
            <div key={`bookmark-${idx}`} className="flex items-center gap-4">
              <div
                className={`relative h-10 w-8 transition-transform duration-400 ${
                  activeIndex === idx ? 'scale-125' : 'scale-95'
                }`}
              >
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

        <div className="card p-7 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className={`badge text-${activeProject.color}-300`}>{activeProject.tag}</div>
              <h3 className="mt-3 text-3xl font-bold">{activeProject.title}</h3>
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Current Project</div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-slate-900/50">
              기간: {activeProject.period.start} ~ {activeProject.period.end}
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-slate-900/50">
              개발인원: {activeProject.teamSize}
            </span>
            <div className="flex items-center gap-2">
              {activeProject.links?.github && (
                <a
                  href={activeProject.links.github}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 hover:border-teal-400/60 transition-colors"
                  aria-label="GitHub"
                >
                  <img src="https://github.com/favicon.ico" alt="GitHub" className="h-4 w-4 opacity-90 invert" />
                </a>
              )}
              {activeProject.links?.huggingface && (
                <a
                  href={activeProject.links.huggingface}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 hover:border-teal-400/60 transition-colors"
                  aria-label="Hugging Face"
                >
                  <img src="https://huggingface.co/favicon.ico" alt="Hugging Face" className="h-4 w-4 opacity-80" />
                </a>
              )}
              {activeProject.links?.linkedin && (
                <a
                  href={activeProject.links.linkedin}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 hover:border-teal-400/60 transition-colors"
                  aria-label="LinkedIn"
                >
                  <img src="https://linkedin.com/favicon.ico" alt="LinkedIn" className="h-4 w-4 opacity-80" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-4 text-slate-300 text-lg leading-relaxed">{activeProject.desc}</p>

          <div className="mt-4">
            <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold">Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {activeProject.stack.map((tech) => (
                <span key={tech} className="chip-enhanced">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-xs uppercase tracking-wider text-teal-300 font-semibold">내용</h4>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">{activeProject.content}</p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">역할</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {activeProject.roles.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-300 font-semibold">트러블 슈팅</h4>
              <ul className="mt-2 space-y-3 text-sm text-slate-300">
                {activeProject.troubleshooting.map((item) => (
                  <li key={item.problem} className="space-y-1">
                    <p>
                      <span className="text-slate-400">문제: </span>
                      {item.problem}
                    </p>
                    <p>
                      <span className="text-teal-300">해결: </span>
                      {item.solution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
