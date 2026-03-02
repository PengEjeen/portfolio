import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null };
    let rafTime = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      constructor(x, y) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.size = Math.random() * 0.9 + 0.8;
        this.phase = Math.random() * Math.PI * 2;
      }

      update(time) {
        const influenceRadius = 220;
        const maxOffset = 14;
        const dx = mouse.x == null ? 0 : mouse.x - this.baseX;
        const dy = mouse.y == null ? 0 : mouse.y - this.baseY;
        const dist = Math.hypot(dx, dy);
        const force = mouse.x == null || dist > influenceRadius ? 0 : (1 - dist / influenceRadius) ** 2;

        const nx = dist > 0 ? dx / dist : 0;
        const ny = dist > 0 ? dy / dist : 0;
        const driftX = Math.sin(time * 0.0012 + this.phase) * 0.9;
        const driftY = Math.cos(time * 0.0011 + this.phase) * 0.9;
        const targetX = this.baseX + nx * maxOffset * force + driftX;
        const targetY = this.baseY + ny * maxOffset * force + driftY;

        this.x += (targetX - this.x) * 0.12;
        this.y += (targetY - this.y) * 0.12;
        this.force = force;
      }

      draw() {
        const baseAlpha = 0.32;
        const accentAlpha = Math.min(this.force * 0.75, 0.6);
        const fill = accentAlpha > 0
          ? `rgba(37, 99, 235, ${baseAlpha + accentAlpha})`
          : `rgba(100, 116, 139, ${baseAlpha})`;

        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const spacing = canvas.width < 768 ? 24 : 28;
      for (let y = spacing * 0.5; y < canvas.height; y += spacing) {
        for (let x = spacing * 0.5; x < canvas.width; x += spacing) {
          particles.push(new Particle(x, y));
        }
      }
    };

    const animate = (time) => {
      rafTime = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse = { x: event.clientX, y: event.clientY };
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      mouse = { x: touch.clientX, y: touch.clientY };
    };

    const clearMouse = () => {
      mouse = { x: null, y: null };
    };

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', clearMouse);
    window.addEventListener('touchend', clearMouse);
    window.addEventListener('resize', handleResize);

    init();
    animationFrameId = requestAnimationFrame((t) => animate(t || rafTime));

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', clearMouse);
      window.removeEventListener('touchend', clearMouse);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;
