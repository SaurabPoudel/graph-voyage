import { useGLTF } from "@react-three/drei";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/sword.gltf");
  return (
    <group {...props}>
      <group position={[-2.663, 0.068, -8.576]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_2.geometry}
          material={materials.textile}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_3.geometry}
          material={materials.stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_4.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_5.geometry}
          material={materials._defaultMat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sword.gltf");