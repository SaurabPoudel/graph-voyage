import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/bottle.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-3.838, 0, -6.409]} scale={0.71}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottle_2.geometry}
          material={materials.leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottle_3.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottle_4.geometry}
          material={materials.textile}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bottle.gltf");
