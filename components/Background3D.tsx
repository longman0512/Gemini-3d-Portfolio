import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarField = () => {
  const ref = useRef<THREE.Points>(null!);
  const lastMouse = useRef({ x: 0, y: 0 });
  const rotationSpeed = useRef(0);
  
  // Create particles
  const [sphere] = useMemo(() => {
    const count = 8000; // Increased count for denser visual
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Random position in a sphere
      const r = 50 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Random cyan/blue/purple colors for neon vibe
      const choice = Math.random();
      if (choice > 0.6) color.set('#06b6d4'); // Cyan
      else if (choice > 0.3) color.set('#3b82f6'); // Blue
      else color.set('#8b5cf6'); // Violet

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [{ positions, colors }];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const { x, y } = state.mouse;
      
      // Calculate mouse displacement (velocity proxy)
      const dx = Math.abs(x - lastMouse.current.x);
      const dy = Math.abs(y - lastMouse.current.y);
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Update last mouse position
      lastMouse.current = { x, y };

      // React to mouse speed:
      // If mouse moves fast, rotation accelerates significantly.
      // We use a high multiplier for the distance to make it sensitive.
      const targetSpeed = distance * 20; 
      
      // Smoothly interpolate current speed to the target speed (inertia effect)
      // If mouse stops, it slowly spins down to base speed
      rotationSpeed.current = THREE.MathUtils.lerp(rotationSpeed.current, targetSpeed, 0.05);

      // Apply rotation
      // 0.05 is the base idle animation speed
      const effectiveSpeed = 0.05 + rotationSpeed.current;
      
      ref.current.rotation.x -= delta * effectiveSpeed * 0.5;
      ref.current.rotation.y -= delta * effectiveSpeed;
      
      // Gentle tilt/parallax based on mouse position
      ref.current.rotation.x += (y * 0.1 - ref.current.rotation.x) * delta;
      ref.current.rotation.y += (x * 0.1 - ref.current.rotation.y) * delta;
    }
  });

  return (
    // @ts-ignore
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere.positions} colors={sphere.colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        {/* @ts-ignore */}
        <fog attach="fog" args={['#020617', 5, 30]} />
        <StarField />
      </Canvas>
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-80 pointer-events-none" />
    </div>
  );
};

export default Background3D;