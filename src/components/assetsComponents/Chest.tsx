import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/chest.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-2.63, 0, -6.294]} scale={0.64}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chest_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chest_3.geometry}
          material={materials.stone}
        />
        <group position={[0, 0.515, 0.265]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lid_1.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lid_2.geometry}
            material={materials.stone}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chest.gltf");
