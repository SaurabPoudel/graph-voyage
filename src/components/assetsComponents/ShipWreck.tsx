import { useGLTF } from "@react-three/drei";
import { ModelProps } from "../../types/ModelProps";
import { isMeshType } from "../../utils/isMeshType";
export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/pirateKit/Models/glTF/ship_wreck.gltf",
  );

  return (
    <group {...props} dispose={null}>
      <group position={[9.255, 0, 0.014]}>
        {isMeshType(nodes.ship_wreck_8angles_1) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ship_wreck_8angles_1.geometry}
            material={materials.wood}
          />
        )}
        {isMeshType(nodes.ship_wreck_8angles_2) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ship_wreck_8angles_2.geometry}
            material={materials.iron}
          />
        )}
        {isMeshType(nodes.ship_wreck_8angles_3) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ship_wreck_8angles_3.geometry}
            material={materials.woodDark}
          />
        )}
        {isMeshType(nodes.ship_wreck_8angles_4) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ship_wreck_8angles_4.geometry}
            material={materials.window}
          />
        )}
        {isMeshType(nodes.ship_wreck_8angles_5) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ship_wreck_8angles_5.geometry}
            material={materials.leaves}
          />
        )}
        {isMeshType(nodes.ship_wreck_8angles_6) && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ship_wreck_8angles_6.geometry}
            material={materials._defaultMat}
          />
        )}
      </group>
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/ship_wreck.gltf");
