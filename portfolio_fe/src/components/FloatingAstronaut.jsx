import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingAstronaut() {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    // 기본 부유 애니메이션 시작
    useEffect(() => {
        if (!isHovered) {
            startFloating();
        }
    }, [isHovered]);

    const startFloating = async () => {
        await controls.start({
            x: [0, 50, 0], // 제자리 근처에서만 왔다갔다 (왼쪽 영역 유지)
            y: [0, 50, -30, 20, 0], // 위아래로 둥둥
            rotate: [0, 10, -10, 5, 0],
            transition: {
                x: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                },
                y: {
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                },
                rotate: {
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }
            }
        });
    };

    const handleHover = async () => {
        if (isHovered) return;
        setIsHovered(true);

        // 왼쪽에서 튕겨나가므로 오른쪽으로 날아갈 확률을 높임
        const randomX = Math.random() * 500 + 100; // 100 ~ 600 (오른쪽으로)
        const randomY = Math.random() * 800 - 400;
        const randomRotate = Math.random() * 720 - 360;

        await controls.start({
            x: `+=${randomX}`,
            y: `+=${randomY}`,
            rotate: `+=${randomRotate}`,
            scale: [1, 0.5, 0],
            opacity: [1, 0],
            transition: {
                duration: 0.8,
                ease: "backIn",
            }
        });

        // 원래 궤도로 복귀
        await controls.start({
            opacity: [0, 0.9],
            scale: [0, 1],
            x: 0, // 원래 x 위치로 리셋
            y: 0, // 원래 y 위치로 리셋
            transition: { duration: 1, delay: 1 }
        });

        // 부유 애니메이션 재시작
        startFloating();

        setIsHovered(false);
    };

    return (
        <motion.div
            className="absolute z-[5] cursor-pointer pointer-events-auto"
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={controls}
            onMouseEnter={handleHover}
            style={{
                width: '120px',
                height: '120px',
                top: '25%',   // 상단 위치 약간 조정
                left: '5%',   // 화면 왼쪽에 고정 배치
            }}
        >
            <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_20px_rgba(20,184,166,0.6)]">
                {/* Backpack/Oxygen Tank */}
                <path d="M140 180 C120 180, 100 200, 100 250 V350 C100 380, 120 400, 140 400 H160 V180 H140 Z" fill="#94a3b8" />

                {/* Body */}
                <path d="M180 160 H332 C360 160, 380 180, 380 210 V380 C380 410, 360 430, 332 430 H180 C152 430, 132 410, 132 380 V210 C132 180, 152 160, 180 160 Z" fill="#e2e8f0" />

                {/* Helmet */}
                <circle cx="256" cy="160" r="90" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="8" />

                {/* Visor */}
                <path d="M190 140 C190 100, 220 80, 256 80 C292 80, 322 100, 322 140 C322 180, 292 200, 256 200 C220 200, 190 180, 190 140 Z" fill="#38bdf8" />

                {/* Visor Reflection */}
                <ellipse cx="230" cy="120" rx="15" ry="8" fill="white" fillOpacity="0.4" transform="rotate(-30 230 120)" />

                {/* Arm Left */}
                <path d="M132 220 C100 240, 80 280, 80 300 C80 320, 100 320, 110 310" stroke="#e2e8f0" strokeWidth="30" strokeLinecap="round" />

                {/* Arm Right */}
                <path d="M380 220 C412 240, 432 280, 432 300 C432 320, 412 320, 402 310" stroke="#e2e8f0" strokeWidth="30" strokeLinecap="round" />

                {/* Glove Left */}
                <circle cx="80" cy="300" r="20" fill="#94a3b8" />

                {/* Glove Right */}
                <circle cx="432" cy="300" r="20" fill="#94a3b8" />

                {/* Leg Left */}
                <path d="M190 430 V480 C190 500, 210 500, 220 480 V430" stroke="#e2e8f0" strokeWidth="30" />

                {/* Leg Right */}
                <path d="M322 430 V480 C322 500, 302 500, 292 480 V430" stroke="#e2e8f0" strokeWidth="30" />

                {/* Boots */}
                <path d="M175 480 H235 V500 C235 510, 225 512, 215 512 H195 C185 512, 175 510, 175 500 Z" fill="#94a3b8" />
                <path d="M277 480 H337 V500 C337 510, 327 512, 317 512 H297 C287 512, 277 510, 277 500 Z" fill="#94a3b8" />

                {/* Detail Lines */}
                <rect x="200" y="260" width="112" height="80" rx="10" fill="#cbd5e1" />
                <circle cx="230" cy="300" r="15" fill="#38bdf8" />
                <rect x="260" y="290" width="30" height="5" rx="2" fill="#ef4444" />
                <rect x="260" y="305" width="30" height="5" rx="2" fill="#eab308" />

                {/* Floating Wire/Tether */}
                <path d="M140 300 C100 300, 50 250, 20 200" stroke="#64748b" strokeWidth="4" strokeDasharray="10 5" fill="none" />
            </svg>
        </motion.div>
    );
}
