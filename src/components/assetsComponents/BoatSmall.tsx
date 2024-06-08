import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/boat_small.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.boat_small_8angles.geometry}
        material={materials.wood}
        position={[-0.325, 0, -9.962]}
      />
    </group>
  );
}

useGLTF.preload("/boat_small.gltf");
