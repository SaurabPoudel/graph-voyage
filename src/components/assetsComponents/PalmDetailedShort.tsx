import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/palm_detailed_short.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[2.706, 0, -7.168]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Group_18.geometry}
          material={materials.wood}
          position={[-0.645, 0, 0.589]}
          scale={[0.766, 0.582, 0.766]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Group_20.geometry}
          material={materials.leaves}
          position={[0, 1.278, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/palm_detailed_short.gltf");
