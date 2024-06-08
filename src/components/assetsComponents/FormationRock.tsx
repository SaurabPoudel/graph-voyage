import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/formation_rock.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[5.695, 0, -10.669]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.formation_rock_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.formation_rock_3.geometry}
          material={materials.sand}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/formation_rock.gltf");
