import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/cannonLarge.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.942, 0, -7.47]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cannonLarge_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cannonLarge_3.geometry}
          material={materials.iron}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrel_1.geometry}
          material={materials.iron}
          position={[0, 0.348, -0.067]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cannonLarge.gltf");
