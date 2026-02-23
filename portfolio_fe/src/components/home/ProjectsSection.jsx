import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import assetStudioImage from '../../assets/AssetStudio.png';
import snapgoal from '../../assets/snapgoal.png';
import assetStudioVideo from '../../assets/samples_54_to_56.mp4';
import culturebankImage from '../../assets/culturebank.png'
import ashAudio from '../../assets/ash_smple.mp4'
import ashImage from '../../assets/ash.jpg'
import kewChloeImage from '../../assets/kewChloe.webp'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Snapgoal',
      desc: '축구 영상에서 선수 추적 및 하이라이트 영상 추출해주는 사이트',
      tag: 'AI',
      period: { start: '2025.05', end: '2025.08' },
      teamSize: '8명',
      stack: ['Python', 'OpenCV', 'PyTorch', "FastApi"],
      links: {
        url: 'https://www.snapgoal-hq.co.kr/',
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
        poster: ashImage
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
    {
      title: 'Kew Chloe',
      desc: '시스템과 사람 모두에게 작업 할당이 가능한 프로젝트 협업용 툴',
      tag: 'BE',
      period: { start: '2022.08', end: '2023.08' },
      teamSize: '5명',
      stack: ['Pandas', 'apache2', 'GCP', 'FastAPI', "MySQL"],
      links: {
        url: ''
        // github: '#',
        // huggingface: 'https://huggingface.co/NamYeongCho/xtts-v2-ash-ko',
        // linkedin: '#',
      },
      media: {
        type: 'image',
        src: kewChloeImage,
      },
      content: '(주)큐티코리아에서 진행. Flow와 같은 협업툴 형태를 기반으로, 업무가 일정한 순서로 진행된다는 가정 아래 표준 작업 절차(SOP) 템플릿을 도입한 프로젝트 협업 시스템. 사용자가 프로젝트/작업을 생성하면 선택한 SOP 단계에 맞춰 하위 작업이 자동으로 생성되고, 반복적·정형화된 단계는 규칙 기반 자동화로 처리되도록 설계. SOP의 생성·수정·삭제와 작업 할당을 통합 관리하는 분배 서버를 구축해 사람과 시스템 모두에게 작업을 배정할 수 있으며, 각 SOP 단계의 작업은 비동기 방식으로 할당·실행되어 운영 효율과 협업 생산성을 높이는 것을 목표로 함.',
      roles: ['표준작업 절차 기획', '비동기 작업 할당 구조 설계', '자동화 파이프라인 구축', '작업 분배기 제작'],
      troubleshooting: [
        {
          problem: '프로젝트 작업 등록 시 분류 모델 2개를 동시에 사용하는 구조로 인해 프로세스 메모리 사용량이 급증하여 서비스 안정성이 저하됨',
          solution: '주기적 GC처리, exec/fork 기반 프로세스 관리 방식으로 분류기 실행 구조를 개선해 메모리 중복 최소화로 메모리 자원 약 50% 절감',
        },
      ],
    },
    {
      title: 'TravelPlanner',
      desc: '외교부, 축제정보, 나라 문화정보 등 다양한 정보를 받을 수 있는 여행 일정 편집 툴.',
      tag: 'BE',
      period: { start: '2022.08', end: '2023.08' },
      teamSize: '5명',
      stack: ['Pandas', 'apache2', 'GCP', 'FastAPI', "MySQL"],
      links: {
        url: ''
        // github: '#',
        // huggingface: 'https://huggingface.co/NamYeongCho/xtts-v2-ash-ko',
        // linkedin: '#',
      },
      media: {
        type: 'image',
        src: kewChloeImage,
      },
      content: '(주)큐티코리아에서 진행. Flow와 같은 협업툴 형태를 기반으로, 업무가 일정한 순서로 진행된다는 가정 아래 표준 작업 절차(SOP) 템플릿을 도입한 프로젝트 협업 시스템. 사용자가 프로젝트/작업을 생성하면 선택한 SOP 단계에 맞춰 하위 작업이 자동으로 생성되고, 반복적·정형화된 단계는 규칙 기반 자동화로 처리되도록 설계. SOP의 생성·수정·삭제와 작업 할당을 통합 관리하는 분배 서버를 구축해 사람과 시스템 모두에게 작업을 배정할 수 있으며, 각 SOP 단계의 작업은 비동기 방식으로 할당·실행되어 운영 효율과 협업 생산성을 높이는 것을 목표로 함.',
      roles: ['표준작업 절차 기획', '비동기 작업 할당 구조 설계', '자동화 파이프라인 구축', '작업 분배기 제작'],
      troubleshooting: [
        {
          problem: '프로젝트 작업 등록 시 분류 모델 2개를 동시에 사용하는 구조로 인해 프로세스 메모리 사용량이 급증하여 서비스 안정성이 저하됨',
          solution: '주기적 GC처리, exec/fork 기반 프로세스 관리 방식으로 분류기 실행 구조를 개선해 메모리 중복 최소화로 메모리 자원 약 50% 절감',
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
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Projects</h2>
        <span className="text-sm text-slate-500">Selected work</span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr_2fr] gap-6">
        <div className="hidden md:flex flex-col gap-4 pt-6">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-500">Project List</div>
          <div className="relative mt-2 flex flex-col gap-4">
            <div className="absolute left-[18px] top-[-6px] h-[calc(100%+12px)] w-px bg-slate-200" />
          {projects.map((_, idx) => (
            <div key={`bookmark-${idx}`} className="relative flex items-center gap-4">
              <div
                className={`absolute left-[12px] h-2.5 w-2.5 rounded-full border ${
                  activeIndex === idx ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-300'
                }`}
              />
              <div
                className={`relative h-10 w-8 transition-transform duration-400 ${
                  activeIndex === idx ? 'scale-125' : 'scale-95'
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-l-md ${
                    activeIndex === idx ? 'bg-slate-900' : 'bg-slate-300'
                  }`}
                />
                <div className="absolute right-[-10px] top-0 h-full w-3">
                  <div
                    className={`h-full w-0 border-t-[20px] border-b-[20px] border-l-[10px] ${
                      activeIndex === idx ? 'border-l-slate-900' : 'border-l-slate-300'
                    } border-t-transparent border-b-transparent`}
                  />
                </div>
              </div>
              <span
                className={`text-xs font-semibold tracking-[0.35em] ${
                  activeIndex === idx ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
          <div className="flex items-center justify-between px-2 pb-3">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-500">Project Cards</div>
            <div className="text-xs text-slate-400">Scroll</div>
          </div>
          <div
            ref={listRef}
            className="space-y-4 max-h-[520px] overflow-y-auto pr-2 scroll-smooth snap-y snap-mandatory pb-6"
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
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`w-full text-left project-card card p-5 transition-all duration-300 group snap-center ${
                activeIndex === idx
                  ? 'border border-slate-300 bg-white scale-[1.02] shadow-lg shadow-slate-200/70'
                  : 'bg-white/80 border border-slate-200 opacity-85 scale-[0.98] hover:-translate-y-1'
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
              <div className="relative aspect-video rounded-lg bg-white border border-slate-200 mb-4 overflow-hidden group-hover:border-slate-300 transition-colors">
                <div className="absolute left-3 top-3 rounded-full border border-slate-200 bg-white/90 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  {String(idx + 1).padStart(2, '0')}
                </div>
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
                      <div className="w-full h-32 rounded-md overflow-hidden border border-slate-200 bg-slate-50">
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
                  <div className="w-full h-full flex items-center justify-center text-slate-500">[Media]</div>
                )}
              </div>
              <div className="badge text-slate-700">{project.tag}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-slate-900 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{project.desc}</p>
            </motion.button>
          ))}
          </div>
        </div>

        <div className="card p-7 md:p-8 bg-white border border-slate-200 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="badge text-slate-700">{activeProject.tag}</div>
              <h3 className="mt-3 text-3xl font-bold text-slate-900">{activeProject.title}</h3>
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Current Project</div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
              기간: {activeProject.period.start} ~ {activeProject.period.end}
            </span>
            <span className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
              개발인원: {activeProject.teamSize}
            </span>
            <div className="flex items-center gap-2">
              {activeProject.links?.url && (
                <a
                  href={activeProject.links.url}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white hover:border-slate-400 transition-colors"
                  aria-label="Website"
                >
                  <svg className="h-4 w-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 10.5l-3 3m1.5-7.5h6A2.5 2.5 0 0120.5 8.5v6A2.5 2.5 0 0118 17h-6M10.5 13.5h-6A2.5 2.5 0 012 11V5A2.5 2.5 0 014.5 2.5h6"
                    />
                  </svg>
                </a>
              )}
              {activeProject.links?.github && (
                <a
                  href={activeProject.links.github}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white hover:border-slate-400 transition-colors"
                  aria-label="GitHub"
                >
                  <img src="https://github.com/favicon.ico" alt="GitHub" className="h-4 w-4 opacity-90" />
                </a>
              )}
              {activeProject.links?.huggingface && (
                <a
                  href={activeProject.links.huggingface}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white hover:border-slate-400 transition-colors"
                  aria-label="Hugging Face"
                >
                  <img src="https://huggingface.co/favicon.ico" alt="Hugging Face" className="h-4 w-4 opacity-80" />
                </a>
              )}
              {activeProject.links?.linkedin && (
                <a
                  href={activeProject.links.linkedin}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white hover:border-slate-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <img src="https://linkedin.com/favicon.ico" alt="LinkedIn" className="h-4 w-4 opacity-80" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-4 text-slate-700 text-lg leading-relaxed">{activeProject.desc}</p>

          <div className="mt-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-700 font-semibold">Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {activeProject.stack.map((tech) => (
                <span key={tech} className="chip-enhanced">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-xs uppercase tracking-wider text-slate-700 font-semibold">내용</h4>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">{activeProject.content}</p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-700 font-semibold">역할</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                {activeProject.roles.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-slate-900">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-700 font-semibold">트러블 슈팅</h4>
              {troubleshootingItems.length > 0 ? (
                <ul className="mt-2 space-y-3 text-sm text-slate-700">
                  {troubleshootingItems.map((item, index) => (
                    <li
                      key={typeof item === 'string' ? `${item}-${index}` : item.problem}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 p-3"
                    >
                      {typeof item === 'string' ? (
                        <p>
                          <span className="text-slate-900">• </span>
                          {item}
                        </p>
                      ) : (
                        <div className="grid gap-2">
                          <div>
                            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">문제</div>
                            <p className="mt-1 text-slate-800">{item.problem}</p>
                          </div>
                          <div>
                            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">해결</div>
                            <p className="mt-1 text-slate-900">{item.solution}</p>
                          </div>
                        </div>
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
