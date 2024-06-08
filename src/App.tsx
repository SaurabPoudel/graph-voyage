import { Canvas } from "@react-three/fiber";
import { Model } from "./components/assetsComponents/ShipLight";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
