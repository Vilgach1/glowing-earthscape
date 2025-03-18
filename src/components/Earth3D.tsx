
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#444444"
        roughness={0.7}
        metalness={0.3}
        wireframe={true}
      />
    </Sphere>
  );
};

const Earth3D: React.FC = () => {
  return (
    <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} />
        <Earth />
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
};

export default Earth3D;
