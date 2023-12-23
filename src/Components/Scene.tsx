import { extend } from "@react-three/fiber";
import { Effects, PerspectiveCamera } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import * as THREE from "three";

import { Christmas } from "./Models/Christmas";
import { HeartLight } from "./Models/HeartLight";
import Lights from "./Lights";
import Trees from "./Models/Trees";
import Snow from "./Models/Snow";

extend({ UnrealBloomPass });

const Scene = () => {
  return (
    <>
      {/* <color attach="background" args={[69, 199, 255]} /> */}

      <PerspectiveCamera makeDefault position={[2, 0.7, 1.7]} fov={65} />
      <fog attach="fog" color="cornflowerblue" near={0.001} far={15} />
      <mesh scale={8}>
        <boxGeometry />
        <meshStandardMaterial color={"white"} side={THREE.DoubleSide} />
      </mesh>
      <Christmas />
      <HeartLight />
      <Lights />
      <Trees count={100} radius={1.5} />
      <Snow />
      {/* <SnowParticles position={[0, 1.2, 0]} /> */}

      {/* Effect */}
      <Effects disableGamma>
        <unrealBloomPass threshold={0.9} strength={0.2} radius={0.8} />
      </Effects>
    </>
  );
};

export default Scene;
