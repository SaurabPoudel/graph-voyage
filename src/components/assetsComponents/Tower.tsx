import { useGLTF } from "@react-three/drei";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/pirateKit/Models/glTF/tower.gltf");
  return (
    <group {...props}>
      <group position={[-5.515, 0, -1.627]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tower_2.geometry}
          material={materials.stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tower_3.geometry}
          material={materials.woodDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tower_4.geometry}
          material={materials._defaultMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tower_5.geometry}
          material={materials.iron}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tower_6.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tower_7.geometry}
          material={materials.sand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tower_8.geometry}
          material={materials.textile}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/pirateKit/Models/glTF/tower.gltf");