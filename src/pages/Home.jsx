import { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturedSection from '../components/home/FeaturedSection';
import ProjectsSection from '../components/home/ProjectsSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-slate-200">
        <div
          className="h-full bg-slate-900"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <HeroSection />

      <div className="bg-white px-4 py-10 sm:px-6 md:py-16 lg:px-10 2xl:px-14">
        <div className="mx-auto w-full max-w-[1500px] space-y-14">
          <StatsSection />
          <FeaturedSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
