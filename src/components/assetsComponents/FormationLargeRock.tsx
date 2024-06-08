import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/formationLarge_rock.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[4.045, 0, -10.639]} scale={[1, 0.77, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.formationLarge_rock_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.formationLarge_rock_3.geometry}
          material={materials.sand}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/formationLarge_rock.gltf");
