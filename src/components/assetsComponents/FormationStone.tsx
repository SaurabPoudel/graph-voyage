import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/formation_stone.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.formation_stone_1.geometry}
        material={materials.stone}
        position={[4.635, 0, -7.942]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/formation_stone.gltf");
