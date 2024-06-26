/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three"; // Import THREE
import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../types/ModelProps";

export function Model(props: ModelProps<THREE.Group>) {
  const { nodes, materials } = useGLTF(
    "/pirateKit/Models/glTF/formationLarge_stone.gltf"
  );

  return (
    <group {...props}>
      {nodes && materials && (
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.formationLarge_stone_1 as THREE.Mesh)?.geometry}
          material={materials.stone}
          position={[2.683, 0, -8.032]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1, 0.77, 1]}
        />
      )}
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/formationLarge_stone.gltf");
