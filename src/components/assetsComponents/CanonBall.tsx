import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/cannonBall.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cannonBall_1.geometry}
        material={materials.iron}
        position={[-1.509, 0.07, -7.772]}
      />
    </group>
  );
}

useGLTF.preload("/cannonBall.gltf");
