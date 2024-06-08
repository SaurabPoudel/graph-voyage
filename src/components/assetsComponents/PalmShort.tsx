import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/palm_short.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[5.141, 0, -7.168]} scale={0.97}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Group_23.geometry}
          material={materials.wood}
          position={[-0.665, 0, 0.607]}
          scale={[0.79, 0.6, 0.79]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Group_25.geometry}
          material={materials.leaves}
          position={[0, 1.327, 0]}
          scale={0.573}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/palm_short.gltf");
