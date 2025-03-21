
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from 'three';

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Add rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });
  
  // Use a placeholder texture that's guaranteed to exist
  const texture = new THREE.TextureLoader().load(
    "https://assets.vercel.com/image/upload/v1659146042/front/assets/design/grayscale-earth-texture.jpg"
  );
  
  return (
    <mesh ref={meshRef} rotation={[0, 0, 0.1]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        map={texture} 
        metalness={0.4} 
        roughness={0.7} 
        color="#aaaaaa"
      />
    </mesh>
  );
};

// Add fallback component that will show while the Earth is loading
const Fallback = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#333333" wireframe />
    </mesh>
  );
};

const Earth3D: React.FC = () => {
  return (
    <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={<Fallback />}>
          <Earth />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false}
            autoRotate={false} // Disable auto-rotate since we're handling rotation manually
            enablePan={false}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 + 0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Earth3D;
