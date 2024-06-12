import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../types/ModelProps";

export function Model(props: ModelProps<THREE.Group>) {
  const { nodes, materials } = useGLTF(
    "/pirateKit/Models/glTF/boat_small.gltf"
  );

  return (
    <group {...props}>
      {nodes && materials && (
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.boat_small_8angles as THREE.Mesh)?.geometry}
          material={materials.wood}
          position={[-0.325, 0, -9.962]}
        />
      )}
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/boat_small.gltf");
