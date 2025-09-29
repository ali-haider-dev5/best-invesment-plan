// components/Jar3D.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, MeshTransmissionMaterial } from "@react-three/drei";

function Jar() {
  const { scene } = useGLTF("/jar/jar.glb"); // GLB with a single glass mesh + label mesh
  // find meshes by name if needed and apply materials:
  return (
    <primitive object={scene} />
  );
}

export default function Jar3D() {
  return (
    <div className="mx-auto h-[520px] w-full max-w-[520px]">
      <Canvas camera={{ position: [0, 0.4, 1.4], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[2, 2, 2]} />
        {/* Glassy look */}
        <group>
          <Jar />
        </group>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
