import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition =[0, 5, -43.4];
        let rotation = [0.1, 9.2, 0];
    
        if (window.innerWidth < 768) {
          screenScale = [6.2, 6.2, 6.2];
        } else {
          screenScale = [9, 9, 9];
        }
    
        return [screenScale, screenPosition, rotation];
      };
        const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
       <Canvas className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback = {<Loader />}>
        <directionalLight  position={[1, 1, 1]} intensity={1}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
        <Bird />
        <Sky />
        <Island 
        position = {islandPosition}
        scale = {islandScale}
        rotation = {islandRotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        />
        </Suspense>
       </Canvas>
    </section>
  )
}

export default Home