"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

function updateMaterial(material: THREE.Material | THREE.Material[], wireframe: boolean) {
  const apply = (mat: THREE.Material) => {
    if ("wireframe" in mat) {
      mat.wireframe = wireframe;
      if (wireframe && "color" in mat) {
        (mat as THREE.MeshStandardMaterial).color.setHex(0xffffff);
        (mat as THREE.MeshStandardMaterial).emissive?.setHex(0x444444);
        (mat as THREE.MeshStandardMaterial).transparent = false;
        (mat as THREE.MeshStandardMaterial).opacity = 0.8;
      }
    }
  };

  if (Array.isArray(material)) material.forEach(apply);
  else apply(material);
}

function GLBModel({ url, showWireframe = false }: { url: string; showWireframe?: boolean }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Object3D>(null);

  // Clone scene once
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    clonedScene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        updateMaterial(child.material, showWireframe);
      }
    });
  }, [clonedScene, showWireframe]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={clonedScene}
      scale={0.3}
      position={[0, -4.5, 0]}
    />
  );
}

export default function Microscope() {
  return (
    <Canvas
      className="absolute inset-0 w-full h-full"
      camera={{ position: [0, 4, 8], fov: 75 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GLBModel url="/better.glb" showWireframe={false} />
      <OrbitControls enableRotate enableZoom />
    </Canvas>
  );
}
