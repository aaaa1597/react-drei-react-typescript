import React, { Suspense, useRef } from 'react';
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import './App.css';

const Cube = () => {
  const cube = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    cube.current!.rotation.x += 0.01;
    cube.current!.rotation.y += 0.01;
  });

  return (
    <mesh ref={cube}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
      {/* <meshBasicMaterial color={"#992233"}/> */}
      </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <gridHelper />
      <axesHelper />
      <pointLight intensity={1.0} position={[5, 3, 5]} />
      <Cube />
    </>
  );
};

const App = () => {
  return (
    <div style={{ height: "75vh", width: "75vw"}}>
      <Canvas camera={{ near: 0.1, far: 1000, zoom: 1 }} onCreated={({ gl }) => {gl.setClearColor("#227700") }}>
        <Stats />
        <OrbitControls />
        <Suspense fallback={<div>ロード中はこれが表示される</div>}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
