import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/pirate_captain.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-2.556, 0, -7.592]}>
        <group position={[-0.168, 0.705, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.armLeft_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.armLeft_2.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.armLeft_3.geometry}
            material={materials.textileRed}
          />
        </group>
        <group position={[0.168, 0.705, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.armRight_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.armRight_2.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.armRight_3.geometry}
            material={materials.textileRed}
          />
        </group>
        <group position={[0, 0.407, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_2.geometry}
            material={materials.textileRed}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_3.geometry}
            material={materials._defaultMat}
          />
        </group>
        <group position={[0, 0.78, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_122_2.geometry}
            material={materials.sand}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_122_3.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_122_1.geometry}
            material={materials.iron}
            position={[0.193, 0.214, -0.254]}
            rotation={[0.066, 0, 0]}
          />
        </group>
        <group position={[-0.155, 0.407, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legLeft_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legLeft_2.geometry}
            material={materials.wood}
          />
        </group>
        <group position={[0.155, 0.407, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legRight_1.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legRight_2.geometry}
            material={materials.textile}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pirate_captain.gltf");