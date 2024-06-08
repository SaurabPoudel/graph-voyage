import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/hole.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-4.775, 0, -6.052]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hole_2.geometry}
          material={materials.sand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hole_3.geometry}
          material={materials.iron}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hole.gltf");
