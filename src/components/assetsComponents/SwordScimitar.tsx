import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../types/ModelProps";
import { isMeshType } from "../../utils/isMeshType";

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/pirateKit/Models/glTF/sword_scimitar.gltf",
  );

  return (
    <group {...props}>
      <group position={[-2.268, 0.1, -8.576]} rotation={[0, -Math.PI / 2, 0]}>
        {isMeshType(nodes.sword_scimitar_2) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sword_scimitar_2.geometry}
            material={materials.stone}
          />
        )}
        {isMeshType(nodes.sword_scimitar_3) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sword_scimitar_3.geometry}
            material={materials.textile}
          />
        )}
        {isMeshType(nodes.sword_scimitar_4) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sword_scimitar_4.geometry}
            material={materials.wood}
          />
        )}
        {isMeshType(nodes.sword_scimitar_5) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sword_scimitar_5.geometry}
            material={materials._defaultMat}
          />
        )}
      </group>
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/sword_scimitar.gltf");
