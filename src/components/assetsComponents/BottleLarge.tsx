import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/bottleLarge.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-3.451, 0, -6.373]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottleLarge_2.geometry}
          material={materials.textile}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottleLarge_3.geometry}
          material={materials.wood}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/bottleLarge.gltf");
