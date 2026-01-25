import { useState, useEffect } from 'react';
function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Fullstack Engineer';
  // 타이핑 효과
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
    <div className="space-y-14">
      {/* ENHANCED HERO SECTION */}
      <section className="relative">
        <div className="card p-10 md:p-16 text-center relative overflow-hidden">
          {/* 애니메이션 배경 */}
          <div className="hero-glow absolute -inset-6 opacity-50" />

          <div className="relative z-10">
            {/* Floating Tech Icons */}
            <div className="floating-icons absolute inset-0 pointer-events-none">
              <span className="tech-icon" style={{ top: '20%', left: '15%' }}>React</span>
              <span className="tech-icon" style={{ top: '60%', right: '20%' }}>JS</span>
              <span className="tech-icon" style={{ bottom: '25%', left: '25%' }}>CSS</span>
              <span className="tech-icon" style={{ top: '30%', right: '15%' }}>+</span>
            </div>
            {/* 타이핑 효과 타이틀 */}
            <p className="text-sm uppercase tracking-[0.35em] text-teal-300 font-semibold">
              {typedText}
              <span className="typing-cursor">|</span>
            </p>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              안녕하세요,
              <br />
              <span className="gradient-text">조남영</span>입니다
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              뭐를 넣을까용 헤헤
              <br />
              사용자 경험과 서버 성능 모두를 고려한 통합 개발을 지향합니다.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a className="btn-primary btn-lg" href="#featured">
                프로젝트 보기
              </a>
              <a className="btn-ghost btn-lg" href="#contact">
                연락하기
              </a>
            </div>
            {/* 소셜 링크 */}
            <div className="mt-8 flex justify-center gap-4">
              <a href="https://github.com/PengEjeen" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/pengejeen" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:hello@peng-ejeen.dev" className="social-link">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 📊 ENHANCED STATS CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Lighthouse 평균', value: '98%', icon: '↑', color: 'amber', desc: '모든 프로젝트 성능 점수' },
          { label: '배포 완료', value: '12+', icon: '→', color: 'teal', desc: '실측 가능한 성과 달성' },
          { label: '경력', value: '1y 9m', icon: '★', color: 'purple', desc: '시스템 개발' }
        ].map((stat, idx) => (
          <div key={idx} className="stat-card card p-7 hover:scale-105 transition-transform cursor-pointer group">
            <div className="flex items-start justify-between">
              <div>
                <div className={`text-xs uppercase tracking-[0.2em] text-${stat.color}-300 font-semibold`}>
                  {stat.label}
                </div>
                <div className="mt-4 text-4xl font-bold group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <p className="mt-2 text-slate-400 text-sm">{stat.desc}</p>
              </div>
              <span className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </span>
            </div>
            <div className={`mt-4 h-1 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-300 rounded-full`} />
          </div>
        ))}
      </section>
      {/* ⭐ FEATURED PROJECT */}
      <section id="featured" className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Project</h2>
          <span className="badge">2025</span>
        </div>
        <div className="card overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-10">
            <div className="space-y-4">
              <span className="badge">HIGHLIGHT</span>
              <h3 className="text-3xl font-bold">Platform Name</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                여기에 프로젝트에 대한 설명
              </p>

              <div className="flex flex-wrap gap-2">
                {['django', 'React.js', 'PostgreSQL', 'Redis', 'Stripe'].map((tech) => (
                  <span key={tech} className="chip-enhanced">{tech}</span>
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
              <div className="aspect-video rounded-xl bg-gradient-to-br from-teal-500/20 via-slate-800 to-amber-500/20 border border-white/10 group-hover:scale-105 transition-transform overflow-hidden">
                {/* 프로젝트 스크린샷을 여기에 배치 */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  [Project Screenshot]
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 to-amber-500/30 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>
      {/* 🎨 PROJECTS GRID */}
      <section id="projects" className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <span className="text-sm text-slate-400">Selected work</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Real-time Chat Application',
              desc: 'WebSocket 기반 실시간 메시징, 파일 공유, 알림 시스템',
              tag: 'Backend',
              color: 'blue'
            },
            {
              title: 'API Gateway Service',
              desc: '마이크로서비스 아키텍처를 위한 인증, 캐싱, 로드밸런싱 게이트웨이',
              tag: 'Infrastructure',
              color: 'green'
            },
            {
              title: 'Analytics Dashboard',
              desc: '대용량 데이터 시각화 및 실시간 모니터링 대시보드',
              tag: 'Fullstack',
              color: 'purple'
            }
          ].map((project, idx) => (
            <article
              key={idx}
              className="project-card card p-6 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              {/* 프로젝트 썸네일 */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border border-white/10 mb-4 overflow-hidden group-hover:border-white/30 transition-colors">
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  [Screenshot]
                </div>
              </div>
              <div className={`badge text-${project.color}-300`}>{project.tag}</div>
              <h3 className="mt-3 text-xl font-semibold group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{project.desc}</p>
              <button className="mt-4 text-sm text-amber-300 hover:text-amber-200 flex items-center gap-1 group-hover:gap-2 transition-all">
                Case study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </section>
      {/* 👤 ABOUT SECTION */}
      <section id="about" className="grid md:grid-cols-12 gap-6">
        <div className="card md:col-span-7 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            여기에는 설명을 넣을게요
          </p>
          <div className="mt-8 space-y-3">
            <h3 className="text-sm uppercase tracking-wider text-teal-300 font-semibold">Focus Areas</h3>
            <div className="flex flex-wrap gap-2">
              {['Backend Architecture', 'Database Design', 'API Development', 'Frontend Framework', 'DevOps', 'Cloud Services'].map((skill) => (
                <span key={skill} className="chip-enhanced">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-5 grid gap-6">
          <div className="card p-7 border-l-4 border-teal-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">●</span>
              <h3 className="font-bold text-lg">Current Focus</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              PMISX 만들어여
            </p>
          </div>
          <div className="card p-7 border-l-4 border-amber-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">▸</span>
              <h3 className="font-bold text-lg">Coming Next</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              Kubernetes 기반 마이크로서비스 아키텍처를 학습하며 클라우드 네이티브 애플리케이션을 준비 중입니다.
            </p>
          </div>
        </div>
      </section>
      {/* 📧 CONTACT CTA */}
      <section id="contact" className="space-y-6">
        <div className="card p-10 md:p-12 text-center relative overflow-hidden group">
          <div className="contact-glow absolute -inset-6 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold">
              함께 멋진 것을 만들어요
            </h2>
            <p className="mt-4 text-xl text-slate-300">
              프리랜스, 풀타임, 협업 모두 환영합니다
            </p>
            <a
              className="btn-primary btn-lg mt-8 inline-block"
              href="mailto:hello@peng-ejeen.dev"
            >
              Say Hello
            </a>
            {/* 소셜 링크 */}
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
        <footer className="text-center text-sm text-slate-500 pt-4">
          © 2026 Peng Ejeen · Built with React & Tailwind CSS
        </footer>
      </section>
    </div>
  );
}
export default Home;