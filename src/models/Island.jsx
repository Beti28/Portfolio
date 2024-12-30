import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import islandScene from '../assets/3d/island.glb'
import { a } from '@react-spring/three'

const Island = (props) => {
    const islandRef = useRef();
    const { nodes, materials } = useGLTF(islandScene)
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


