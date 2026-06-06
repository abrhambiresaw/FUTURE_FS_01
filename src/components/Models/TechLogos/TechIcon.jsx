import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three'

function TechIcon({ model }) {
  const gltf = useGLTF(model.modelPath);

  useEffect(() => {
    if(model.name === 'Interactive Developer') {
      gltf.scene.traverse((child) => {
        if(child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({color: 'white'})
        }
      })
    }
  },[gltf, model.name])

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset='sunset' />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon