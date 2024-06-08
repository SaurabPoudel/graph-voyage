import { useGLTF } from "@react-three/drei";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("/shovel.gltf");
  return (
    <group {...props}>
      <group position={[-5.551, 0, -6.479]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shovel_2.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shovel_3.geometry}
          material={materials.stone}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/shovel.gltf");
