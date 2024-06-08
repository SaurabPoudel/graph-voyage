import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/boat_large.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.boat_large_8angles.geometry}
        material={materials.wood}
        position={[1.31, 0, -9.962]}
      />
    </group>
  );
}

useGLTF.preload("/boat_large.gltf");
