import { motion } from 'framer-motion';

export default function AboutSection() {
  const profileItems = [
    { label: '이름', value: '조남영' },
    { label: 'Birth', value: '2000.11.07' },
    { label: '전화번호', value: '010-6661-3293' },
    { label: '이메일', value: 'chony5093@gmail.com', href: 'mailto:chony5093@gmail.com' },
    { label: 'Study', value: '개인공부 링크', href: 'https://friendly-seaplane-a4d.notion.site/Tech-1ae31c6367a38076b55af14913b99826' },
  ];

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
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">문제를 보면 끝까지 푸는 개발자입니다.
사용자에게는 자연스럽고, 팀에는 유지보수 쉬운 시스템을 만드는 데 집중합니다.
빠르게 만들되 구조는 단단하게, 아이디어를 실제로 작동하는 서비스까지 연결합니다.</p>
        <div className="mt-8 space-y-3">
          <h3 className="text-sm uppercase tracking-wider text-slate-600 font-semibold">Focus Areas</h3>
          <div className="flex flex-wrap gap-2">
            {['System Architecture', 'API Development', 'Frontend Framework', 'DevOps', 'AI'].map((skill) => (
              <span key={skill} className="chip-enhanced">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-5 flex">
        <div className="card p-7 border border-slate-200 h-full w-full">
          <h3 className="font-bold text-lg text-slate-900">Profile</h3>
          <div className="mt-5 space-y-4">
            {profileItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-slate-500">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-700 hover:text-slate-900 break-all text-right"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-700 text-right">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
