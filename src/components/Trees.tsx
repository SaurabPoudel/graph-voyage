import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Model as Tree } from "./assetsComponents/PalmShort";

interface TreesProps {
  count?: number;
  spacing?: number;
  speed?: number;
}

const Trees: React.FC<TreesProps> = ({
  count = 10,
  spacing = 10,
  speed = 0.1,
}) => {
  const groupRef = useRef<Group>(null);

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      pos.push([-10, 0, i * spacing]);
      pos.push([10, 0, i * spacing]);
    }
    return pos;
  }, [count, spacing]);

  useFrame(() => {
    if (groupRef.current === null) return;
    groupRef.current.children.forEach((child) => {
      child.position.z -= speed;
      if (child.position.z < -spacing) {
        child.position.z += spacing * count;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, idx) => (
        <Tree key={idx} position={pos} />
      ))}
    </group>
  );
};

export default Trees;
