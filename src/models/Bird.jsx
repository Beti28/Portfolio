import { useEffect, useRef } from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

//NOT USED YET!!!

const Bird = () => {

    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene)
    const { actions} = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();
    },[])
    
    useFrame(({clock, camera}) => {
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;


      if(birdRef.current.position.x > camera.position.x + 10) {
        birdRef.current.rotation.y = Math.PI;
      }else if(birdRef.current.position.x < camera.position.x - 10) {
        birdRef.current.rotation.y = 0;

      }

      if(birdRef.current.position.y === 0) {
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      }else{
        birdRef.current.position.y -= 0.01;
        birdRef.current.position.x += 0.01;
      }
    })
    
    return (
    <mesh position={[-5, 1.5, 1]} scale={[0.002, 0.002, 0.002]} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird