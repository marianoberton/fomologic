
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Environment, ContactShadows, Float, Stars, Loader } from '@react-three/drei';
import * as THREE from 'three';

// --- 1. UTILS & CONFIG ---

// Scratch objects to avoid GC during animation frames
const scratchPos = new THREE.Vector3();
const scratchFinalPos = new THREE.Vector3();
const scratchStartQ = new THREE.Quaternion();
const scratchEndQ = new THREE.Quaternion();
const scratchEuler = new THREE.Euler(0, 0, 0);

// Cubic easing for heavy mechanical feel
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// --- 2. SUB-COMPONENT: CUBELET (Individual Piece) ---

interface CubeletProps {
  finalPosition: [number, number, number];
  delay: number;
}

const Cubelet: React.FC<CubeletProps> = ({ finalPosition, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const startData = useMemo(() => {
    // Random position in a large sphere (Debris field)
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 5 + Math.random() * 5; // Reduced radius for contained chaos

    const pos = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );

    // Random initial tumble
    const rot = new THREE.Euler(
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2
    );

    return { pos, rot };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const duration = 4.0; // Slow, heavy assembly time
    
    // Calculate progress (0 to 1)
    let progress = (time - delay) / duration;
    progress = Math.max(0, Math.min(1, progress));
    
    const eased = easeInOutCubic(progress);

    // Interpolate Position (Optimized for GC)
    if (progress >= 1) {
        // FORCE EXACT FINAL STATE
        meshRef.current.position.set(finalPosition[0], finalPosition[1], finalPosition[2]);
        meshRef.current.rotation.set(0, 0, 0);
        return;
    }

    scratchFinalPos.set(finalPosition[0], finalPosition[1], finalPosition[2]);
    scratchPos.lerpVectors(startData.pos, scratchFinalPos, eased);
    meshRef.current.position.copy(scratchPos);

    // Interpolate Rotation
    scratchStartQ.setFromEuler(startData.rot);
    scratchEndQ.setFromEuler(scratchEuler); // 0,0,0
    meshRef.current.quaternion.slerpQuaternions(scratchStartQ, scratchEndQ, eased);
  });

  return (
    <mesh
      ref={meshRef}
      receiveShadow={false}
      castShadow={false}
    >
      <boxGeometry args={[1, 1, 1]} /> 
      <meshStandardMaterial
        color="#272727"       
        roughness={0.4}      
        metalness={0.8}       
      />
    </mesh>
  );
};

// --- 3. SUB-COMPONENT: SCENE CONTENT (Lighting & Groups) ---

const TitaniumScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Interactive rotation (Auto-spin + Mouse Parallax + Repulsion)
  useFrame((state, delta) => {
    if (groupRef.current) {
      // 1. Continuous slow spin on Y
      groupRef.current.rotation.y += delta * 0.05;

      // 2. Mouse Interaction (Parallax Tilt - Subtle)
      const mouseX = state.mouse.x;
      const mouseY = state.mouse.y;

      // Gentle tilt based on mouse position
      const targetX = (Math.PI / 8) + (-mouseY * 0.1); 
      const targetZ = -(mouseX * 0.1);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.1);

      // FIXED POSITION: No repulsion/deformation. The cube is a solid anchor.
      // We only rotate it, we never move it from its perfect spot.
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 3, 0.1);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 1.2, 0.1);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, -1, 0.1);
    }
  });

  // Generate the 27 positions
  const cubeData = useMemo(() => {
    const cubes = [];
    const gap = 0.08; 
    const size = 1;
    const step = size + gap;
    let index = 0;

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const dist = Math.sqrt(x*x + y*y + z*z);
          // Sequence logic
          // DELAY ADJUSTMENT: Reduced to 1.5s (was 2.5s) to ensure visibility is not perceived as broken
          const baseDelay = 1.5; 
          const layerDelay = dist * 0.8; 
          const randomOffset = Math.random() * 1.0;

          cubes.push({
            id: index++,
            pos: [x * step, y * step, z * step] as [number, number, number],
            delay: baseDelay + layerDelay + randomOffset,
          });
        }
      }
    }
    return cubes;
  }, []);

  return (
    <>
      {/* LIGHTING - Simplified for Performance */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
      <Environment preset="city" />

      <Suspense fallback={null}>
        <group ref={groupRef} rotation={[0, -Math.PI / 4, 0]} scale={0.6}>
          {cubeData.map((d) => (
            <Cubelet key={d.id} finalPosition={d.pos} delay={d.delay} />
          ))}
        </group>
      </Suspense>

      {/* Shadow aligned with the cube to prevent clipping */}
      <ContactShadows position={[3, -3, -1]} opacity={0.4} scale={60} blur={3.5} far={20} color="#000000" resolution={256} frames={1} />
      <Stars radius={50} depth={20} count={200} factor={2} saturation={0} fade speed={0.2} />
    </>
  );
};

// --- 4. MAIN EXPORT: FULL CANVAS WRAPPER ---

interface TitaniumCubeProps {
  className?: string;
}

const TitaniumCube: React.FC<TitaniumCubeProps> = ({ className = "w-full h-full" }) => {
  return (
    <div className={className}>
      <Canvas
        shadows={false} // GLOBAL SHADOW DISABLE: Shadows are too expensive for this many moving parts
        dpr={[1, 1]} // FORCE LOW DPR: Retina screens are killing the frame rate
        camera={{ position: [8, 3.5, 6], fov: 35, near: 0.1, far: 100 }}
        gl={{ 
          antialias: false, // DISABLE AA: Post-processing noise hides aliasing anyway
          toneMappingExposure: 1.0, 
          powerPreference: "high-performance",
          depth: true, 
          stencil: false,
          preserveDrawingBuffer: false
        }}
      >
        <Suspense fallback={null}>
          <TitaniumScene />
        </Suspense>
      </Canvas>
      <Loader 
          containerStyles={{ background: 'transparent' }}
          innerStyles={{ background: '#111', width: '200px', height: '2px' }}
          barStyles={{ background: '#005963', height: '2px' }}
          dataStyles={{ fontFamily: 'Inter, sans-serif', color: '#333', fontSize: '10px' }}
      />
    </div>
  );
};

export default TitaniumCube;
