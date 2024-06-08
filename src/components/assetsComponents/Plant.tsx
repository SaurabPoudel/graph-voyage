import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/plant.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant_1.geometry}
        material={materials.leaves}
        position={[0.637, 0, -6.41]}
        scale={0.69}
      />
    </group>
  );
}

useGLTF.preload("/plant.gltf");
