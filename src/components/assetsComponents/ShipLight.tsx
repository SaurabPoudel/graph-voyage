import { useGLTF } from "@react-three/drei";

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF("pirateKit/Models/glTF/ship_light.gltf");
  return (
    <group {...props}>
      <group position={[-0.715, 0, 0.014]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ship_light_8angles_1.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ship_light_8angles_2.geometry}
          material={materials.woodDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ship_light_8angles_3.geometry}
          material={materials.iron}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ship_light_8angles_4.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ship_light_8angles_5.geometry}
          material={materials.textile}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ship_light_8angles_6.geometry}
          material={materials._defaultMat}
        />
        <group position={[0, 1.437, -3.616]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_front_1_2.geometry}
            material={materials.iron}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_front_1_3.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_front_1_1.geometry}
            material={materials.iron}
            position={[0, 0.278, -0.067]}
            rotation={[0.073, 0, 0]}
          />
        </group>
        <group position={[-0.76, 1.277, -1.681]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_left_1_6.geometry}
            material={materials.iron}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_left_1_7.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_left_1_1.geometry}
            material={materials.iron}
            position={[0, 0.444, -0.067]}
            rotation={[0.093, 0, 0]}
          />
          <group position={[-0.217, 0.128, 0.262]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
          <group
            position={[0.217, 0.128, 0.262]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
          <group position={[-0.217, 0.128, -0.197]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
          <group
            position={[0.217, 0.128, -0.197]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
        </group>
        <group position={[0.76, 1.277, -1.681]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_left_1_6.geometry}
            material={materials.iron}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_left_1_7.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cannon_right_1_1.geometry}
            material={materials.iron}
            position={[0, 0.444, -0.067]}
            rotation={[0.093, 0, 0]}
          />
          <group position={[-0.217, 0.128, 0.262]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
          <group
            position={[0.217, 0.128, 0.262]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
          <group position={[-0.217, 0.128, -0.197]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
          <group
            position={[0.217, 0.128, -0.197]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_8.geometry}
              material={materials.iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cannon_left_1_9.geometry}
              material={materials.wood}
            />
          </group>
        </group>
        <group position={[1.354, 3.034, 1.864]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sail_back_1_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sail_back_1_2.geometry}
            material={materials.wood}
          />
        </group>
        <group position={[1.354, 1.604, -3.201]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sail_front_1_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sail_front_1_2.geometry}
            material={materials.wood}
          />
        </group>
        <group position={[1.354, 1.604, -1.546]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sail_middle_1_1.geometry}
            material={materials.textile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sail_middle_1_2.geometry}
            material={materials.wood}
          />
        </group>
        <group position={[0, 2.776, 1.051]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.steering_1_1.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.steering_1_2.geometry}
            material={materials.iron}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("pirateKit/Models/glTF/ship_light.gltf");
