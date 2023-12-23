import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const directionalLightRef = useRef<THREE.HemisphereLight>(null!);

  useHelper(directionalLightRef, THREE.HemisphereLightHelper, 1);

  return (
    <>
      {/* <pointLight
        args={["white"]}
        position={[0, 1, 0]}
        intensity={0.1}
        power={1.5}
      /> */}
      <ambientLight intensity={0.5} />
      {/* <hemisphereLight
        ref={directionalLightRef}
        color-setHSL={[195, 226, 194]}
        groundColor-setHSL={[205, 141, 122]}
        intensity={0.4}
        position={[0, -1, 0]}
      /> */}
      {/* <directionalLight
        args={["lightblue", 1]}
        position={[2, 0.5, 2]}
        ref={directionalLightRef}
      /> */}
      {/* <spotLight args={["white", 1]} position={[1, 1, 1]} /> */}
    </>
  );
};

export default Lights;
