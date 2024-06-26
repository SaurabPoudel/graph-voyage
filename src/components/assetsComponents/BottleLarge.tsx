/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../types/ModelProps";

export function Model(props: ModelProps<THREE.Group>) {
  const { nodes, materials } = useGLTF(
    "/pirateKit/Models/glTF/bottleLarge.gltf"
  );

  return (
    <group {...props}>
      {nodes && materials && (
        <group position={[-3.451, 0, -6.373]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.bottleLarge_2 as THREE.Mesh)?.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.bottleLarge_3 as THREE.Mesh)?.geometry}
            material={materials.wood}
          />
        </group>
      )}
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/bottleLarge.gltf");
