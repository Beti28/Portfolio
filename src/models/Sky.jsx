import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating }) => {
   const sky = useGLTF(skyScene);

  return (
  
        <primitive object={sky.scene} />
    
  )
}

export default Sky
