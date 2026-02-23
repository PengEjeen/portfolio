import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import * as THREE from 'three';

function Falling3DText({ text }) {
    const textRef = useRef();
    const [velocity, setVelocity] = useState(0);
    const [position, setPosition] = useState(5);
    const [hasLanded, setHasLanded] = useState(false);
    const bounceCountRef = useRef(0);

    useFrame((state, delta) => {
        if (!textRef.current || hasLanded) return;

        // 중력 적용
        const newVelocity = velocity + (-9.8 * delta * 2);
        let newPosition = position + newVelocity * delta;

        // 땅에 닿았을 때
        if (newPosition <= 0) {
            newPosition = 0;
            const newVel = -newVelocity * 0.6; // 반동

            bounceCountRef.current += 1;

            // 반동이 충분히 작아지면 정지
            if (Math.abs(newVel) < 0.5 || bounceCountRef.current > 4) {
                setHasLanded(true);
                setVelocity(0);
                setPosition(0);
                return;
            }

            setVelocity(newVel);
        } else {
            setVelocity(newVelocity);
        }

        setPosition(newPosition);
        textRef.current.position.y = newPosition;
    });

    return (
        <Center>
            <Text
                ref={textRef}
                fontSize={1.5}
                color="#14b8a6"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.05}
                outlineColor="#0d9488"
            >
                {text}
            </Text>
        </Center>
    );
}

function Scene({ name }) {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />

            <Falling3DText text={name} />

            {/* 바닥 */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#0a0f1a" opacity={0.3} transparent />
            </mesh>
        </>
    );
}

export default function Name3D({ name = "조남영" }) {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 2, 8], fov: 50 }}
                style={{ background: 'transparent' }}
            >
                <Scene name={name} />
            </Canvas>
        </div>
    );
}
