import { useGLTF } from "@react-three/drei";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/sword_scimitar.gltf");
  return (
    <group {...props}>
      <group position={[-2.268, 0.1, -8.576]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_scimitar_2.geometry}
          material={materials.stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_scimitar_3.geometry}
          material={materials.textile}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_scimitar_4.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sword_scimitar_5.geometry}
          material={materials._defaultMat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sword_scimitar.gltf");
