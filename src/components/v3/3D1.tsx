"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

function GLBModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const solidMeshRef = useRef<any>(null);
  const wireframeMeshRef = useRef<any>(null);

  const solidScene = scene.clone();
  const wireframeScene = scene.clone();

  useEffect(() => {
    if (solidScene) {
      solidScene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat: any) => {
              mat.wireframe = false;
            });
          } else {
            child.material.wireframe = false;
          }
        }
      });
    }

    if (wireframeScene) {
      wireframeScene.traverse((child: any) => {
        if (child.isMesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat: any) => {
              mat.wireframe = true;
              mat.color.setHex(0xffffff);
              mat.emissive.setHex(0x444444);
              mat.transparent = false;
              mat.opacity = 0.8;
            });
          } else {
            child.material.wireframe = true;
            child.material.color.setHex(0xffffff);
            child.material.emissive.setHex(0x444444);
            child.material.transparent = false;
            child.material.opacity = 0.8;
          }
        }
      });
    }
  }, [solidScene, wireframeScene]);

  useFrame(() => {
    if (solidMeshRef.current) {
      solidMeshRef.current.rotation.y += 0.005;
    }
    if (wireframeMeshRef.current) {
      wireframeMeshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <primitive
        ref={solidMeshRef}
        object={solidScene}
        scale={0.3}
        position={[0, -4.5, 0]}
      />
      {/* <primitive
        ref={wireframeMeshRef}
        object={wireframeScene}
        scale={0.3}
        position={[0, -4.5, 0]}
      /> */}
    </>
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
      <GLBModel url="/better.glb" />
      <OrbitControls enableRotate enableZoom />
    </Canvas>
  );
}
