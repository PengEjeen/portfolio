import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let sparks = [];
        let lastMouse = { x: null, y: null };

        // 캔버스 크기 설정
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // 파티클 클래스
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // 화면 밖으로 나가면 반대편에서 나옴
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;

            }

            draw() {
                ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class Spark {
            constructor(x, y, vx, vy) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.life = 28 + Math.random() * 10;
                this.maxLife = this.life;
                this.size = 6 + Math.random() * 8;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.02;
                this.life -= 1;
            }

            draw() {
                const alpha = Math.max(this.life / this.maxLife, 0);
                ctx.strokeStyle = `rgba(15, 23, 42, ${alpha * 0.35})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.vx * 2, this.y - this.vy * 2);
                ctx.stroke();
            }
        }

        // 파티클 생성
        const init = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        // 파티클 연결선 그리기
        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const opacity = 1 - distance / 120;
                        ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.18})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // 애니메이션
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            sparks = sparks.filter(spark => spark.life > 0);
            sparks.forEach(spark => {
                spark.update();
                spark.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        // 마우스 이벤트
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (lastMouse.x == null || lastMouse.y == null) {
                lastMouse = { x: clientX, y: clientY };
                return;
            }

            const dx = clientX - lastMouse.x;
            const dy = clientY - lastMouse.y;
            const speed = Math.min(Math.hypot(dx, dy), 30);
            const count = Math.max(2, Math.floor(speed / 3));

            for (let i = 0; i < count; i++) {
                const spread = (Math.random() - 0.5) * 4;
                const vx = dx * 0.2 + spread;
                const vy = dy * 0.2 + spread;
                sparks.push(new Spark(clientX, clientY, vx, vy));
            }

            lastMouse = { x: clientX, y: clientY };
        };

        const handleMouseLeave = () => {
            lastMouse = { x: null, y: null };
        };

        // 리사이즈 이벤트
        const handleResize = () => {
            setCanvasSize();
            init();
        };

        // 이벤트 리스너
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);

        init();
        animate();

        // 클린업
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
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
