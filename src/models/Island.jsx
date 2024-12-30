import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { events, useFrame, useThree } from '@react-three/fiber';
import islandScene from '../assets/3d/island.glb';
import { a } from '@react-spring/three';


const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();

  const { nodes, materials } = useGLTF(islandScene)

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current

    } else {
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }

    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props}>
      <a.group rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.371}>
        <a.group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <a.group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.foliage_baked_flowers_0.geometry}
              material={materials.baked_flowers}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.foliage_baked_flowers_0_1.geometry}
              material={materials.baked_flowers}
            />
          </a.group>
          <a.group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ropes_baked_rope_0.geometry}
              material={materials.baked_rope}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ropes_baked_rope_0_1.geometry}
              material={materials.baked_rope}
            />
          </a.group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.oreada_baked_oreada_0.geometry}
            material={materials.baked_oreada}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tree_baked_tree_0.geometry}
            material={materials.baked_tree}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rocks_baked_rocks_0.geometry}
            material={materials.baked_rocks}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
        </a.group>
      </a.group>
    </a.group>
  )
}


export default Island;


