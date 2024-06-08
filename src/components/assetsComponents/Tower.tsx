import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../types/ModelProps";
import { isMeshType } from "../../utils/isMeshType";

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/pirateKit/Models/glTF/tower.gltf");

  return (
    <group {...props}>
      <group position={[-5.515, 0, -1.627]}>
        {isMeshType(nodes.tower_2) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_2.geometry}
            material={materials.stone}
          />
        )}
        {isMeshType(nodes.tower_3) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_3.geometry}
            material={materials.woodDark}
          />
        )}
        {isMeshType(nodes.tower_4) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_4.geometry}
            material={materials._defaultMat}
          />
        )}
        {isMeshType(nodes.tower_5) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_5.geometry}
            material={materials.iron}
          />
        )}
        {isMeshType(nodes.tower_6) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_6.geometry}
            material={materials.wood}
          />
        )}
        {isMeshType(nodes.tower_7) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_7.geometry}
            material={materials.sand}
          />
        )}
        {isMeshType(nodes.tower_8) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_8.geometry}
            material={materials.textile}
          />
        )}
      </group>
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/tower.gltf");
