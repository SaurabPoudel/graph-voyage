import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/pirate_crew.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-3.43, 0, -7.592]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.armLeft_1.geometry}
          material={materials.wood}
          position={[-0.168, 0.705, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.armRight_1.geometry}
          material={materials.wood}
          position={[0.168, 0.705, 0]}
        />
        <group position={[0, 0.407, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1_1.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1_2.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1_3.geometry}
            material={materials.sand}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_1_4.geometry}
            material={materials._defaultMat}
          />
        </group>
        <group position={[0, 0.78, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_143_2.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_143_3.geometry}
            material={materials.iron}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_143_1.geometry}
            material={materials.textileRed}
            position={[0.129, 0.194, -0.137]}
            rotation={[0.262, 0, 0]}
            scale={0.93}
          />
        </group>
        <group position={[-0.155, 0.407, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legLeft_1_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legLeft_1_2.geometry}
            material={materials.wood}
          />
        </group>
        <group position={[0.155, 0.407, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legRight_1_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legRight_1_2.geometry}
            material={materials.wood}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pirate_crew.gltf");
