import { Canvas } from "@react-three/fiber";
import { Model as Ship } from "./components/assetsComponents/ShipLight";
import Trees from "./components/Trees";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useState, useEffect } from "react";

function App() {
  const [xpos, setXpos] = useState(0);
  const main_theme = useMemo(() => {
    const audio = new Audio("/pirateKit/Audio/main-theme.mp3");
    audio.loop = true;

    return audio;
  }, []);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      main_theme.play().catch((error) => {
        console.error("Audio playback error:", error);
      });
    } else {
      main_theme.pause();
    }
  }, [playing, main_theme]);

  const handleButtonClick = () => {
    setPlaying(!playing);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      setXpos(xpos + 1);
    } else if (event.key === "ArrowLeft") {
      setXpos(xpos - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [xpos]);

  return (
    <div className="h-screen bg-black flex justify-center items-center relative">
      <button
        className="absolute top-4 right-4 bg-green-500 py-2 px-3 z-10"
        onClick={handleButtonClick}
      >
        {playing ? "Pause" : "Play"} Sound
      </button>
      <Canvas camera={{ position: [10, 5, 2] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Ship position={[xpos, 0, 0]} />
        <Trees count={20} spacing={10} speed={0.1} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
