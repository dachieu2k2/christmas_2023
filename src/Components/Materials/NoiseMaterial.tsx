import { vertexShader } from "./Shaders/noise/vertex.ts";
import { fragmentShader } from "./Shaders/noise/fragment.ts";

function NoiseMaterial(props: JSX.IntrinsicElements["shaderMaterial"]) {
  return (
    <shaderMaterial
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      {...props}
    />
  );
}

export default NoiseMaterial;
