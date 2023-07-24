import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Background = ({ imageUrl }) => {
    const meshRef = useRef();

    // Set up mouse tracking variables
    const mouse = new THREE.Vector2();
    const target = new THREE.Vector2();
    const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouse.x = (event.clientX - windowHalf.x) / windowHalf.x;
            mouse.y = (event.clientY - windowHalf.y) / windowHalf.y;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Update the background's position based on the cursor movement
    useFrame(() => {
        target.x = mouse.x * 0.1;
        target.y = mouse.y * 0.1;
        meshRef.current.position.x += (target.x - meshRef.current.position.x) * 0.05;
        meshRef.current.position.y += (-target.y - meshRef.current.position.y) * 0.05;
        meshRef.current.rotation.x = target.y * 0.2;
        meshRef.current.rotation.y = target.x * 0.2;
    });

    return (
        <mesh ref={meshRef}>
            <planeBufferGeometry args={[window.innerWidth, window.innerHeight]} />
            <meshBasicMaterial>
                <texture
                    url={imageUrl}
                    wrapS={THREE.RepeatWrapping}
                    wrapT={THREE.RepeatWrapping}
                />
            </meshBasicMaterial>
        </mesh>
    );
};

export default Background;
