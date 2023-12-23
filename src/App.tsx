import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import Scene from "./Components/Scene";

function App() {
  const { orbitcontrols, axesHelper } = useControls("mainControls", {
    orbitcontrols: true,
    axesHelper: false,
  });
  return (
    <>
      <Canvas shadows gl={{ antialias: true, alpha: true }}>
        {/* <color attach="background" args={["#f0f0f0"] as any} /> */}
        <Scene />
        {orbitcontrols && (
          <OrbitControls
            maxDistance={4.5}
            minPolarAngle={-Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 6}
            // maxPolarAngle={Math.PI - Math.PI / 6}
            //  autoRotate
          />
        )}
        {axesHelper && <axesHelper />}
      </Canvas>
      <Leva hidden />
      <Loader />
    </>
  );
}

export default App;
