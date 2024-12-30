import React from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useGLTF } from '@react-three/drei';

const Bird = () => {
    const { scene, animation } = useGLTF(birdScene)
    return (
    <mesh position={[-5, 1.5, 1]} scale={[0.002, 0.002, 0.002]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird