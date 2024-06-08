import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../types/ModelProps";
import { isMeshType } from "../../utils/isMeshType";

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/pirateKit/Models/glTF/shovel.gltf");

  return (
    <group {...props}>
      <group position={[-5.551, 0, -6.479]}>
        {isMeshType(nodes.shovel_2) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shovel_2.geometry}
            material={materials.wood}
          />
        )}
        {isMeshType(nodes.shovel_3) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.shovel_3.geometry}
            material={materials.stone}
          />
        )}
      </group>
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/shovel.gltf");
