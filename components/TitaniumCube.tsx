
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Environment, ContactShadows, Float, Stars, Loader } from '@react-three/drei';
import * as THREE from 'three';

// --- 1. UTILS & CONFIG ---

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

    // Interpolate Position
    const currentPos = new THREE.Vector3().lerpVectors(
      startData.pos, 
      new THREE.Vector3(...finalPosition), 
      eased
    );
    meshRef.current.position.copy(currentPos);

    // Interpolate Rotation
    const startQ = new THREE.Quaternion().setFromEuler(startData.rot);
    const endQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0));
    
    if (progress === 0) {
        // Idle drift before assembly starts
        meshRef.current.rotation.x = startData.rot.x + time * 0.05;
        meshRef.current.rotation.y = startData.rot.y + time * 0.02;
    } else {
        meshRef.current.quaternion.slerpQuaternions(startQ, endQ, eased);
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1, 1, 1]} 
      radius={0.03} 
      smoothness={4} 
      receiveShadow
      castShadow
    >
      <meshPhysicalMaterial
        color="#272727"       
        emissive="#000000"
        roughness={0.65}      
        metalness={0.8}       
        clearcoat={0.0}       
        reflectivity={0.3}    
        envMapIntensity={1.5} 
      />
    </RoundedBox>
  );
};

// --- 3. SUB-COMPONENT: SCENE CONTENT (Lighting & Groups) ---

const TitaniumScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Interactive rotation (Auto-spin + Mouse Parallax)
  useFrame((state, delta) => {
    if (groupRef.current) {
      // 1. Continuous slow spin on Y
      groupRef.current.rotation.y += delta * 0.05;

      // 2. Mouse Interaction (Parallax Tilt)
      // Smoothly lerp current X rotation towards target (base angle + mouse offset)
      // state.mouse.y is -1 to 1. Invert for natural feel (mouse up -> look up -> tilt back?)
      // Actually, usually mouse up (positive Y) -> tilt up (negative rotation X) or vice versa.
      const targetX = (Math.PI / 8) + (-state.mouse.y * 0.2); 
      const targetZ = -(state.mouse.x * 0.2);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.1);
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
          const baseDelay = 1.0; 
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
      {/* --- LIGHTING SETUP --- */}
      <spotLight 
        position={[8, 8, 8]} 
        angle={0.25} 
        penumbra={0.2} 
        intensity={300} 
        castShadow 
        shadow-bias={-0.00005}
        shadow-mapSize={[2048, 2048]} 
        color="#ffffff"
      />
      <spotLight position={[-10, 2, -5]} angle={0.5} intensity={100} color="#eef2ff" />
      <pointLight position={[0, -5, 5]} intensity={10} color="#202020" />

      {/* Inner Glow Group */}
      <group>
        <pointLight position={[0, 0, 0]} intensity={15} color="#005963" distance={2.5} decay={2} />
        <pointLight position={[0, 0.5, 0]} intensity={8} color="#004044" distance={3} decay={2} />
        <pointLight position={[0, -0.5, 0]} intensity={8} color="#004044" distance={3} decay={2} />
        <pointLight position={[0.2, 0.2, 0.2]} intensity={5} color="#FCCD12" distance={1.5} decay={4} />
      </group>

      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr" blur={0.6} background={false} />

      {/* --- GEOMETRY --- */}
      {/* 
         Reverted Position: [3, 1.2, -1]
         - X=3: Perfect right alignment within viewport.
         - Y=1.2: Elevated to match text height.
         - Z=-1: Standard depth.
         - Color: #272727 (Maintained)
      */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2} floatingRange={[-0.05, 0.05]}>
        <group 
          ref={groupRef} 
          rotation={[Math.PI / 8, Math.PI / 4, 0]} 
          scale={0.6}
          position={[3, 1.2, -1]} 
        >
          {cubeData.map((d) => (
            <Cubelet key={d.id} finalPosition={d.pos} delay={d.delay} />
          ))}
        </group>
      </Float>

      {/* Shadow aligned with the cube to prevent clipping */}
      <ContactShadows position={[3, -3, -1]} opacity={0.4} scale={60} blur={3.5} far={20} color="#000000" />
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
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [8, 3.5, 6], fov: 35, near: 0.1, far: 100 }}
        gl={{ 
          antialias: true, 
          toneMappingExposure: 1.0, 
          powerPreference: "high-performance" 
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
