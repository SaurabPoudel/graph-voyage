import { Canvas } from "@react-three/fiber";
import {
  KeyboardControls,
  KeyboardControlsEntry,
  OrbitControls,
} from "@react-three/drei";
import { Model as Ship } from "./assetsComponents/ShipLight";
import { useRef } from "react";
import { Object3D } from "three";

const Scene = () => {
  // Handle key change events
  const shipRef = useRef<Object3D>();
  const handleKeyChange = (name: string) => {
    // Define the speed at which the ship moves
    const speed = 0.1;

    // Check which key is pressed and update the ship's position accordingly
    switch (name) {
      case "w":
        shipRef.current.position.z -= speed;
        break;
      case "s":
        shipRef.current.position.z += speed;
        break;
      case "a":
        shipRef.current.position.x -= speed;
        break;
      case "d":
        shipRef.current.position.x += speed;
        break;
      // Add more key mappings as needed
      default:
        break;
    }
  };
  const keyMap: KeyboardControlsEntry[] = [
    { name: "w", keys: ["KeyW"] },
    { name: "s", keys: ["KeyS"] },
    { name: "a", keys: ["KeyA"] },
  ];
  return (
    <div className="bg-[#42bcf5] h-screen ">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <KeyboardControls
          map={keyMap}
          children={<Ship ref={shipRef} position={[1, -2, -20]} />}
          onChange={handleKeyChange}
        />

        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        {/* <MapControls /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
