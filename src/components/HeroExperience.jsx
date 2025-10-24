import { Canvas } from "@react-three/fiber";
import { Alden } from "./models/Alden";

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

      <group>
        <Alden scale={9} position={[0, -15, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
