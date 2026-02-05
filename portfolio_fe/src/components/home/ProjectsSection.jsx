import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import assetStudioImage from '../../assets/AssetStudio.png';
import snapgoal from '../../assets/snapgoal.png';
import assetStudioVideo from '../../assets/samples_54_to_56.mp4';
import culturebankImage from '../../assets/culturebank.png'
import ashAudio from '../../assets/ash_smple.mp4'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Snapgoal',
      desc: '축구 영상에서 선수 추적 및 하이라이트 영상 추출해주는 사이트',
      tag: 'AI',
      color: 'blue',
      period: { start: '2025.05', end: '2025.08' },
      teamSize: '8명',
      stack: ['Python', 'OpenCV', 'PyTorch', "FastApi"],
      links: {
        github: 'https://www.snapgoal-hq.co.kr/',
        huggingface: 'https://huggingface.co/datasets/NamYeongCho/deep_sort_yolov3'
      },
      media: {
        type: 'image',
        src: snapgoal,
      },
      content: '조기축구회에서 경기를 촬영한 뒤 골·선방 같은 하이라이트 장면만 자동으로 추출하고, 그중에서도 내가 나온 구간을 트래킹해 개인별로 소장하고 싶어 하는 수요가 존재. 그러나 수작업으로 장면을 찾고 편집하는 데 시간이 많이 들고 원하는 순간을 놓치기 쉬워, 접근성이 낮다는 문제가 있음. 본 프로젝트는 영상에서 주요 이벤트를 자동 검출·요약하고 개인별 플레이 구간을 추적·분리해 손쉽게 저장·공유할 수 있도록 하여, 조기축구 참여자들의 니즈를 충족하는 것을 목표로 하는 사이트 제작',
      roles: ['선수 트래커 제작', '모델 배포', '영상 편집기 제작'],
      troubleshooting: [
        {
          problem: '객체가 겹치는 일(Occlusion)이 많아 ID가 바뀌는 문제 (ID switching)',
          solution: 'BoT-SORT 기반 추적 알고리즘(https://arxiv.org/pdf/2206.14651)을 채택하여 문제 완화. (BoT-Sot-StrongSort 진행 확정)',
        },
        {
          problem: '객체가 사라졌다 다시 나타날 때 ID 유지 문제',
          solution: 'DeepSORT 등 일반적인 추적기만으로는 한계가 있어, Re-ID(재식별) 기반의 추적 방법 사용'
        }
      ],
      highlights: ['API 집약', '캐싱 전략', '관측성 개선'],
    },    
    {
      title: 'AssetStore',
      desc: '3D 애니메이션 생성 모델의 제작과 배포 ',
      tag: 'AI',
      color: 'teal',
      period: { start: '2025.04', end: '2025.05' },
      teamSize: '4명',
      stack: ['PyTorch', 'transformers', 'FastApi', 'Docker', 'Gradio', 'Redis'],
      links: {
        github: 'https://github.com/google-ml-bc-2nd-2025',
        huggingface: 'https://huggingface.co/NamYeongCho/humanml_mixamo2_trans_enc_512',
        // linkedin: '#',
      },
      media: {
        type: 'video',
        src: assetStudioVideo,
        poster: assetStudioImage,
      },
      content: '기획자 초안(설명·레퍼런스)만으로 게임 에셋 규격에 맞는 소통용 AI 3D 애니메이션 프록시 모델을 빠르게 생성해, 기획자와 디자이너가 같은 화면을 보며 형태·스케일·동작/타이밍을 즉시 확인하고 해석 차이로 인한 반복 수정과 커뮤니케이션 비용을 줄이는 프로젝트',
      roles: ['MDM(Motion Diffusion Model) 모델 논문 리서치', 'MDM 학습방법 정립', 
        'Mixamo 데이터 MDM 학습에 맞게 전처리', '성능지표 FID, rot_mse 선정','모델 서빙'],
      troubleshooting: [
        {
          problem: '데이터 형식의 문제가 있었음. 모든 관절의 위치가 다르고 순서가 다름',
          solution: '데이터를 smpl 본 구조에 맞춤.',
        },
      ],
    },
    {
      title: 'CultureBank',
      desc: '해외여행 시 “손을 들고 주문해도 되나?”, “팁은 얼만큼인가?” 같은 사소한 질문에 대한 LLM',
      tag: 'AI',
      color: 'blue',
      period: { start: '2024.09', end: '2024.10' },
      teamSize: '3명',
      stack: ['Go', 'Redis', 'gRPC'],
      links: {
        github: 'https://github.com/PengEjeen/travelplanner_culturebank/blob/master/app.py',
        huggingface: 'https://huggingface.co/NamYeongCho/gemma2-9b-CultureBank-v1',
        linkedin: 'https://www.linkedin.com/posts/activity-7247792336691175424-Nrb8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFApHpEB5ZL660mff93Xip-QlEHmkoyQA8I',
      },
      media: {
        type: 'image',
        src: culturebankImage,
      },
      content: '해외여행 중 “손을 들고 주문해도 되나?”, “팁은 얼만큼인가?” 같은 사소하지만 중요한 질문에 대한 정보를 상황에 맞게 빠르게 찾기 어려운 어려움이 존재하며, 이를 해결하기 위해 국가/장소/상황별 매너·관습·팁 기준을 즉시 안내하는 챗봇 형태로 개발을 목표로 함.',
      roles: ['논문 리딩을 통해 파인튜닝 방법 정립', '팀원들과 논의하여 학습에 사용할 데이터 선정 및 전처리 방식 정의',
        'gemme2-9b모델 파인튜닝'
      ],
      troubleshooting: [
        {
          problem: '초기 파인튜닝 모델이 단어를 반복하여 말하는 문제가 있었음',
          solution: 'EOS토큰 재설정, temperature나 top-k설정, 프롬프트 개선, 데이터 개선으로 문제 해결',
        },
      ],
    },
    {
      title: 'xtts-v2-ash-ko',
      desc: '리그오브레전드 애쉬 캐릭터 TTS제작',
      tag: 'AI',
      color: 'purple',
      period: { start: '2024.05', end: '2024.06' },
      teamSize: '1명',
      stack: ['TTS', 'transformers'],
      links: {
        // github: '#',
        huggingface: 'https://huggingface.co/NamYeongCho/xtts-v2-ash-ko',
        // linkedin: '#',
      },
      media: {
        type: 'audio',
        src: ashAudio,
        poster: snapgoal
      },
      content: '프로젝트 개요/핵심 기능/성과를 여기에 적어주세요.',
      roles: ['유튜브 데이터 수집', '데이터 전처리', '모델 학습'],
      troubleshooting: [
        {
          problem: '학습 초반 음성 파일들의 단어 반복생성 문제 있었음.',
          solution: '단어 이후 무음구간에 의한 반복생성 있었음. 전처리로 무음 제거 및 음성 생성 사이즈 제한하여 해결',
        },
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const listRef = useRef(null);
  const troubleshootingItems = Array.isArray(activeProject.troubleshooting)
    ? activeProject.troubleshooting
    : [];

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
                {project.media?.type === 'image' && project.media?.src ? (
                  <img
                    src={project.media.src}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                ) : project.media?.type === 'video' && project.media?.src ? (
                  <video
                    src={project.media.src}
                    poster={project.media.poster}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : project.media?.type === 'audio' ? (
                  <div className="h-full w-full flex flex-col items-center justify-center gap-3 text-slate-500 px-4">
                    {project.media.poster ? (
                      <div className="w-full h-32 rounded-md overflow-hidden border border-white/10 bg-slate-900/50">
                        <img
                          src={project.media.poster}
                          alt={`${project.title} audio poster`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="text-xs text-slate-600">[Audio Poster]</div>
                    )}
                    {project.media.src ? (
                      <audio src={project.media.src} controls className="w-full" />
                    ) : (
                      <div className="text-xs text-slate-600">[Audio Placeholder]</div>
                    )}
                  </div>
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600">[Media]</div>
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
              {troubleshootingItems.length > 0 ? (
                <ul className="mt-2 space-y-3 text-sm text-slate-300">
                  {troubleshootingItems.map((item, index) => (
                    <li key={typeof item === 'string' ? `${item}-${index}` : item.problem} className="space-y-1">
                      {typeof item === 'string' ? (
                        <p>
                          <span className="text-teal-300">• </span>
                          {item}
                        </p>
                      ) : (
                        <>
                          <p>
                            <span className="text-slate-400">문제: </span>
                            {item.problem}
                          </p>
                          <p>
                            <span className="text-teal-300">해결: </span>
                            {item.solution}
                          </p>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-slate-500">트러블슈팅 항목을 추가해주세요.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
