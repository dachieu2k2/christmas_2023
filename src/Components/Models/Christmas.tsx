/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Vert002: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube003: THREE.Mesh;
    Circle015: THREE.Mesh;
    Cube022: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cylinder022: THREE.Mesh;
    Cylinder023: THREE.Mesh;
    Cylinder024: THREE.Mesh;
    Cylinder025: THREE.Mesh;
    Cylinder026: THREE.Mesh;
    Cylinder027: THREE.Mesh;
    Sphere031: THREE.Mesh;
    Sphere032: THREE.Mesh;
    Sphere038: THREE.Mesh;
    Sphere039: THREE.Mesh;
    Sphere040: THREE.Mesh;
    Cylinder028: THREE.Mesh;
    Cylinder029: THREE.Mesh;
    Cylinder030: THREE.Mesh;
    Cylinder031: THREE.Mesh;
    Cylinder032: THREE.Mesh;
    Cylinder033: THREE.Mesh;
    Cylinder034: THREE.Mesh;
    Cylinder035: THREE.Mesh;
    Cylinder036: THREE.Mesh;
    Cylinder037: THREE.Mesh;
    Cylinder038: THREE.Mesh;
    Cylinder039: THREE.Mesh;
    Cylinder040: THREE.Mesh;
    Cylinder041: THREE.Mesh;
    Cylinder042: THREE.Mesh;
    Cylinder043: THREE.Mesh;
    Cylinder044: THREE.Mesh;
    Cylinder045: THREE.Mesh;
    Cylinder046: THREE.Mesh;
    Cylinder047: THREE.Mesh;
    Cylinder048: THREE.Mesh;
    Cylinder049: THREE.Mesh;
    Cylinder050: THREE.Mesh;
    Cylinder051: THREE.Mesh;
    Cylinder052: THREE.Mesh;
    Cylinder053: THREE.Mesh;
    Cylinder054: THREE.Mesh;
    Cylinder055: THREE.Mesh;
    Cylinder056: THREE.Mesh;
    Cylinder057: THREE.Mesh;
    Cylinder058: THREE.Mesh;
    Cylinder059: THREE.Mesh;
    Cylinder060: THREE.Mesh;
    Cylinder061: THREE.Mesh;
    Cylinder062: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube025: THREE.Mesh;
    NurbsPath007: THREE.Mesh;
    NurbsPath008: THREE.Mesh;
    NurbsPath009: THREE.Mesh;
    NurbsPath076: THREE.Mesh;
    NurbsPath077: THREE.Mesh;
    NurbsPath078: THREE.Mesh;
    NurbsPath079: THREE.Mesh;
    NurbsPath080: THREE.Mesh;
    Cylinder063: THREE.Mesh;
    Cylinder064: THREE.Mesh;
    Cylinder065: THREE.Mesh;
    Cylinder066: THREE.Mesh;
    NurbsPath081: THREE.Mesh;
    NurbsPath082: THREE.Mesh;
    NurbsPath083: THREE.Mesh;
    NurbsPath084: THREE.Mesh;
    NurbsPath085: THREE.Mesh;
    NurbsPath086: THREE.Mesh;
    NurbsPath087: THREE.Mesh;
    NurbsPath088: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube027: THREE.Mesh;
    Cube028: THREE.Mesh;
    NurbsPath089: THREE.Mesh;
    NurbsPath090: THREE.Mesh;
    NurbsPath091: THREE.Mesh;
    NurbsPath092: THREE.Mesh;
    NurbsPath093: THREE.Mesh;
    NurbsPath094: THREE.Mesh;
    NurbsPath095: THREE.Mesh;
    NurbsPath096: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube031: THREE.Mesh;
    NurbsPath097: THREE.Mesh;
    NurbsPath098: THREE.Mesh;
    NurbsPath099: THREE.Mesh;
    NurbsPath100: THREE.Mesh;
    NurbsPath101: THREE.Mesh;
    NurbsPath102: THREE.Mesh;
    NurbsPath103: THREE.Mesh;
    NurbsPath104: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube034: THREE.Mesh;
    NurbsPath105: THREE.Mesh;
    NurbsPath106: THREE.Mesh;
    NurbsPath107: THREE.Mesh;
    NurbsPath108: THREE.Mesh;
    NurbsPath109: THREE.Mesh;
    NurbsPath110: THREE.Mesh;
    NurbsPath111: THREE.Mesh;
    NurbsPath112: THREE.Mesh;
    Circle016: THREE.Mesh;
    Circle016_1: THREE.Mesh;
    Circle017: THREE.Mesh;
    Circle017_1: THREE.Mesh;
    Roundcube011: THREE.Mesh;
    Roundcube012: THREE.Mesh;
    Roundcube013: THREE.Mesh;
    Roundcube014: THREE.Mesh;
    Roundcube015: THREE.Mesh;
    Roundcube016: THREE.Mesh;
    Roundcube017: THREE.Mesh;
    Roundcube018: THREE.Mesh;
    Roundcube019: THREE.Mesh;
    Roundcube020: THREE.Mesh;
    Roundcube021: THREE.Mesh;
    Vert003: THREE.Mesh;
    Vert004: THREE.Mesh;
    Vert005: THREE.Mesh;
    Vert006: THREE.Mesh;
    Vert007: THREE.Mesh;
    Vert008: THREE.Mesh;
    Vert009: THREE.Mesh;
    Vert010: THREE.Mesh;
    Vert011: THREE.Mesh;
    Text: THREE.Mesh;
    Text001: THREE.Mesh;
  };
  materials: {
    stick: THREE.MeshStandardMaterial;
    red: THREE.MeshStandardMaterial;
    ["ball.003"]: THREE.MeshStandardMaterial;
    white: THREE.MeshStandardMaterial;
    tree: THREE.MeshStandardMaterial;
    ["tree.001"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["red.003"]: THREE.MeshStandardMaterial;
    darkgreen: THREE.MeshStandardMaterial;
    lightblue: THREE.MeshStandardMaterial;
    purple: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
    blue: THREE.MeshStandardMaterial;
    whiteCandy: THREE.MeshStandardMaterial;
    redCandy: THREE.MeshStandardMaterial;
    ["ball.002"]: THREE.MeshStandardMaterial;
    ["ball.01"]: THREE.MeshStandardMaterial;
  };
};

export function Christmas(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/fantasybook.glb") as GLTFResult;

  useEffect(() => {
    materials["ball.003"].toneMapped = false;
    materials["ball.003"].emissive = materials["ball.003"].color;
    materials["ball.003"].emissiveIntensity = 10;
    materials["ball.002"].toneMapped = false;
    materials["ball.002"].emissive = materials["ball.002"].color;
    materials["ball.002"].emissiveIntensity = 10;
    materials["ball.01"].toneMapped = false;
    materials["ball.01"].emissive = materials["ball.01"].color;

    materials["ball.01"].emissiveIntensity = 10;
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        // material={materials.whiteCandy}
        position={[0.262, -0.004, 0.56]}
        scale={0.262}
      >
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.stick}
        position={[0.588, 0.076, 0.001]}
        scale={0.004}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002.geometry}
        material={materials["red.003"]}
        position={[0.591, 0.188, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.white}
        position={[0, 0, 0.009]}
        scale={0.983}
      />
      <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry}>
        <meshStandardMaterial color={"black"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        position={[-0.129, -0.225, 0.663]}
        scale={[3.255, 0.901, 3.349]}
      >
        <meshStandardMaterial color={materials.white.color} roughness={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.white}
        position={[-0.035, -0.01, -0.037]}
        rotation={[0, 0, 0.085]}
        scale={1.088}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials.tree}
        position={[0.239, 0.059, 1.242]}
        rotation={[0.023, 0, 0]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials.tree}
        position={[0.239, 0.126, 1.244]}
        rotation={[0.038, 0.285, 0]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials.tree}
        position={[0.236, 0.209, 1.239]}
        rotation={[-0.039, 0.23, 0]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={materials.tree}
        position={[0.236, 0.265, 1.239]}
        rotation={[0.002, -0.13, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={materials.tree}
        position={[0.241, 0.308, 1.241]}
        rotation={[0.063, 0, 0]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials["tree.001"]}
        position={[0.239, 0.349, 1.241]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027.geometry}
        material={materials["Material.001"]}
        position={[0.239, -0.027, 1.241]}
        scale={[0.058, 0.076, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere031.geometry}
        material={materials.red}
        position={[0.246, 0.245, 1.145]}
        rotation={[0.797, 0.099, -0.047]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere032.geometry}
        material={materials.red}
        position={[0.159, 0.245, 1.188]}
        rotation={[0.319, -0.101, -0.607]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere038.geometry}
        material={materials.red}
        position={[0.193, 0.107, 1.136]}
        rotation={[-0.231, 0.049, -0.414]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere039.geometry}
        material={materials.red}
        position={[0.148, 0.107, 1.173]}
        rotation={[-0.231, 0.049, -0.414]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere040.geometry}
        material={materials.red}
        position={[0.128, 0.107, 1.23]}
        rotation={[-0.231, 0.049, -0.414]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials.tree}
        position={[-0.24, 0.084, 0.734]}
        rotation={[2.58, -1.528, 2.58]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials.tree}
        position={[-0.241, 0.151, 0.733]}
        rotation={[0.147, -1.319, 0.154]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={materials.tree}
        position={[-0.236, 0.234, 0.731]}
        rotation={[-0.197, -1.374, -0.202]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials.tree}
        position={[-0.236, 0.29, 0.731]}
        rotation={[3.127, -1.405, 3.127]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032.geometry}
        material={materials.tree}
        position={[-0.239, 0.333, 0.736]}
        rotation={[2.096, -1.498, 2.097]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033.geometry}
        material={materials["tree.001"]}
        position={[-0.238, 0.374, 0.734]}
        rotation={[Math.PI, -1.534, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034.geometry}
        material={materials["Material.001"]}
        position={[-0.238, -0.002, 0.734]}
        rotation={[Math.PI, -1.534, Math.PI]}
        scale={[0.058, 0.076, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035.geometry}
        material={materials.tree}
        position={[-0.063, 0.084, -0.266]}
        rotation={[2.58, -1.528, 2.58]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder036.geometry}
        material={materials.tree}
        position={[-0.064, 0.151, -0.266]}
        rotation={[0.147, -1.319, 0.154]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder037.geometry}
        material={materials.tree}
        position={[-0.059, 0.234, -0.268]}
        rotation={[-0.197, -1.374, -0.202]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder038.geometry}
        material={materials.tree}
        position={[-0.059, 0.29, -0.268]}
        rotation={[3.127, -1.405, 3.127]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder039.geometry}
        material={materials.tree}
        position={[-0.062, 0.333, -0.264]}
        rotation={[2.096, -1.498, 2.097]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder040.geometry}
        material={materials["tree.001"]}
        position={[-0.061, 0.374, -0.265]}
        rotation={[Math.PI, -1.534, Math.PI]}
        scale={0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder041.geometry}
        material={materials["Material.001"]}
        position={[-0.061, -0.002, -0.266]}
        rotation={[Math.PI, -1.534, Math.PI]}
        scale={[0.058, 0.076, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder042.geometry}
        material={materials.tree}
        position={[-0.27, 0.008, 0.154]}
        rotation={[3.118, -0.135, 3.138]}
        scale={0.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder043.geometry}
        material={materials.tree}
        position={[-0.27, 0.116, 0.152]}
        rotation={[3.102, -0.42, 3.136]}
        scale={0.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder044.geometry}
        material={materials.tree}
        position={[-0.265, 0.25, 0.159]}
        rotation={[-3.101, -0.365, -3.136]}
        scale={0.146}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder045.geometry}
        material={materials.tree}
        position={[-0.265, 0.34, 0.159]}
        rotation={[3.139, -0.005, 3.141]}
        scale={0.129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder046.geometry}
        material={materials.tree}
        position={[-0.273, 0.409, 0.157]}
        rotation={[3.078, -0.135, 3.133]}
        scale={0.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder047.geometry}
        material={materials["tree.001"]}
        position={[-0.27, 0.475, 0.157]}
        rotation={[Math.PI, -0.135, Math.PI]}
        scale={0.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder048.geometry}
        material={materials["Material.001"]}
        position={[-0.269, -0.131, 0.157]}
        rotation={[Math.PI, -0.135, Math.PI]}
        scale={[0.094, 0.122, 0.105]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder049.geometry}
        material={materials.tree}
        position={[-0.613, 0.09, 0.497]}
        rotation={[3.118, -0.135, 3.138]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder050.geometry}
        material={materials.tree}
        position={[-0.613, 0.228, 0.494]}
        rotation={[3.102, -0.42, 3.136]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051.geometry}
        material={materials.tree}
        position={[-0.607, 0.399, 0.503]}
        rotation={[-3.101, -0.365, -3.136]}
        scale={0.186}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder052.geometry}
        material={materials.tree}
        position={[-0.607, 0.513, 0.503]}
        rotation={[3.139, -0.005, 3.141]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder053.geometry}
        material={materials.tree}
        position={[-0.618, 0.602, 0.5]}
        rotation={[3.078, -0.135, 3.133]}
        scale={0.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054.geometry}
        material={materials["tree.001"]}
        position={[-0.614, 0.687, 0.501]}
        rotation={[Math.PI, -0.135, Math.PI]}
        scale={0.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055.geometry}
        material={materials["Material.001"]}
        position={[-0.613, -0.088, 0.501]}
        rotation={[Math.PI, -0.135, Math.PI]}
        scale={[0.119, 0.156, 0.134]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder056.geometry}
        material={materials.tree}
        position={[-0.369, 0.047, 1.094]}
        rotation={[3.118, -0.135, 3.138]}
        scale={0.117}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder057.geometry}
        material={materials.tree}
        position={[-0.37, 0.151, 1.091]}
        rotation={[3.102, -0.42, 3.136]}
        scale={0.117}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder058.geometry}
        material={materials.tree}
        position={[-0.365, 0.28, 1.099]}
        rotation={[-3.101, -0.365, -3.136]}
        scale={0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder059.geometry}
        material={materials.tree}
        position={[-0.365, 0.367, 1.099]}
        rotation={[3.139, -0.005, 3.141]}
        scale={0.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder060.geometry}
        material={materials.tree}
        position={[-0.373, 0.434, 1.096]}
        rotation={[3.078, -0.135, 3.133]}
        scale={0.117}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder061.geometry}
        material={materials["tree.001"]}
        position={[-0.37, 0.497, 1.097]}
        rotation={[Math.PI, -0.135, Math.PI]}
        scale={0.093}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder062.geometry}
        material={materials["Material.001"]}
        position={[-0.369, -0.087, 1.097]}
        rotation={[Math.PI, -0.135, Math.PI]}
        scale={[0.09, 0.117, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials["red.003"]}
        position={[0.445, -0.028, 1.233]}
        scale={0.066}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["red.003"]}
          position={[0, 1.682, 0]}
          scale={1.04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.darkgreen}
          position={[0, 1.028, 0]}
          scale={[1.082, 1.062, 1.082]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath007.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        scale={[0.17, 0.17, 0.951]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath008.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        rotation={[0.201, -Math.PI / 4, 0]}
        scale={[0.233, 0.233, 1.299]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath009.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        rotation={[0.226, -Math.PI / 2, 0]}
        scale={[0.266, 0.266, 1.485]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath076.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        scale={[0.23, 0.23, 1.285]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath077.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        rotation={[-Math.PI, 0, 2.976]}
        scale={[0.311, 0.311, 1.736]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath078.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        rotation={[2.913, Math.PI / 4, -Math.PI]}
        scale={[0.206, 0.206, 1.153]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath079.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        rotation={[0, 1.571, 0]}
        scale={[0.156, 0.156, 0.871]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath080.geometry}
        material={materials.darkgreen}
        position={[0.443, 0.107, 1.146]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.281, 0.281, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder063.geometry}
        material={materials.lightblue}
        position={[0.468, -0.017, -0.215]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={materials.white}
          position={[0, -0.109, 0]}
          scale={1.094}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={materials.lightblue}
          position={[0, 2.686, 0]}
          scale={1.052}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={materials.white}
          position={[0, -0.109, 0]}
          rotation={[0, -1.571, 0]}
          scale={1.094}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath081.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[0, 0, -0.199]}
        scale={[0.173, 0.173, 0.968]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath082.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.119, 0.119, 0.663]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath083.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[0.26, -Math.PI / 2, 0]}
        scale={[0.158, 0.158, 0.882]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath084.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[2.896, -0.754, 2.791]}
        scale={[0.116, 0.116, 0.646]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath085.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.135, 0.135, 0.752]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath086.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[-2.839, 0.737, 2.707]}
        scale={[0.164, 0.164, 0.915]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath087.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[-0.325, 1.571, 0]}
        scale={[0.135, 0.135, 0.752]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath088.geometry}
        material={materials.white}
        position={[0.468, 0.143, -0.214]}
        rotation={[-0.308, Math.PI / 4, 0]}
        scale={[0.135, 0.135, 0.752]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials.purple}
        position={[0.581, -0.027, 1.068]}
        scale={0.043}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials.purple}
          position={[0, 1.682, 0]}
          scale={1.04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.yellow}
          position={[0, 1.028, 0]}
          scale={[1.082, 1.062, 1.082]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath089.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[0, 0, -0.199]}
        scale={[0.171, 0.171, 0.955]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath090.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.117, 0.117, 0.654]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath091.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[0.26, -Math.PI / 2, 0]}
        scale={[0.156, 0.156, 0.87]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath092.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[2.896, -0.754, 2.791]}
        scale={[0.114, 0.114, 0.637]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath093.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.133, 0.133, 0.742]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath094.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[-2.839, 0.737, 2.707]}
        scale={[0.162, 0.162, 0.902]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath095.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[-0.325, 1.571, 0]}
        scale={[0.133, 0.133, 0.742]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath096.geometry}
        material={materials.yellow}
        position={[0.581, 0.061, 1.066]}
        rotation={[-0.308, Math.PI / 4, 0]}
        scale={[0.133, 0.133, 0.742]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials.yellow}
        position={[0.257, -0.059, -0.243]}
        rotation={[0, -0.402, 0]}
        scale={0.087}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials.yellow}
          position={[0, 1.682, 0]}
          scale={1.04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.purple}
          position={[0, 1.028, 0]}
          scale={[1.082, 1.062, 1.082]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath097.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[0, -0.402, 0]}
        scale={[0.224, 0.224, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath098.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[0.374, -1.173, 0.203]}
        scale={[0.305, 0.305, 1.706]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath099.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[-Math.PI, -1.169, 2.916]}
        scale={[0.349, 0.349, 1.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath100.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[Math.PI, -0.383, Math.PI]}
        scale={[0.302, 0.302, 1.688]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath101.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[-Math.PI, 0.402, 2.976]}
        scale={[0.408, 0.408, 2.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath102.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[2.72, 1.169, -2.913]}
        scale={[0.271, 0.271, 1.514]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath103.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[0, 1.169, 0]}
        scale={[0.205, 0.205, 1.144]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath104.geometry}
        material={materials.purple}
        position={[0.299, 0.118, -0.35]}
        rotation={[0, 0.383, 0]}
        scale={[0.369, 0.369, 2.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.blue}
        position={[0.506, -0.029, -0.373]}
        rotation={[0, -0.402, 0]}
        scale={0.056}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.blue}
          position={[0, 1.682, 0]}
          scale={1.04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.yellow}
          position={[0, 1.028, 0]}
          scale={[1.082, 1.062, 1.082]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath105.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[0, -0.402, -0.199]}
        scale={[0.225, 0.225, 1.254]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath106.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[0, -1.187, 0]}
        scale={[0.154, 0.154, 0.858]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath107.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[-Math.PI, -1.169, 2.881]}
        scale={[0.204, 0.204, 1.142]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath108.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[2.951, -0.361, 2.893]}
        scale={[0.15, 0.15, 0.836]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath109.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[-Math.PI, 0.402, -Math.PI]}
        scale={[0.174, 0.174, 0.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath110.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[-2.625, 1.108, 2.443]}
        scale={[0.212, 0.212, 1.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath111.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[0, 1.169, -0.325]}
        scale={[0.174, 0.174, 0.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath112.geometry}
        material={materials.yellow}
        position={[0.506, 0.088, -0.375]}
        rotation={[-0.235, 0.398, -0.129]}
        scale={[0.174, 0.174, 0.974]}
      />
      <group
        position={[0.26, 0.005, 1.205]}
        rotation={[-0.025, 0, -Math.PI]}
        scale={0.067}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle016.geometry}
          material={materials.whiteCandy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle016_1.geometry}
          material={materials.redCandy}
        />
      </group>
      <group
        position={[0.319, 0.202, -0.16]}
        rotation={[0.091, -0.324, -1.291]}
        scale={0.055}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle017.geometry}
          material={materials.whiteCandy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle017_1.geometry}
          material={materials.redCandy}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube011.geometry}
        material={materials["ball.002"]}
        position={[-0.144, 0.112, 1.471]}
        scale={0.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube012.geometry}
        material={materials["ball.01"]}
        position={[0.44, 0.481, 0.049]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube013.geometry}
        material={materials["ball.01"]}
        position={[0.714, 0.449, -0.275]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube014.geometry}
        material={materials["ball.002"]}
        position={[0.248, 0.573, -0.273]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube015.geometry}
        material={materials["ball.01"]}
        position={[-0.014, 0.256, 1.373]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube016.geometry}
        material={materials["ball.003"]}
        position={[-0.22, 0.529, 0.834]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube017.geometry}
        material={materials["ball.003"]}
        position={[0.87, 0.012, 0.673]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube018.geometry}
        material={materials["ball.002"]}
        position={[0.915, 0.122, 0.23]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube019.geometry}
        material={materials["ball.003"]}
        position={[0.181, 0.621, 0.402]}
        scale={0.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube020.geometry}
        material={materials["ball.002"]}
        position={[0.479, 0.335, 1.342]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube021.geometry}
        material={materials["ball.003"]}
        position={[-0.144, 0.32, 0.377]}
        scale={0.041}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={nodes.Vert003.material}
        position={[1.352, 0.541, 1.702]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert004.geometry}
        material={nodes.Vert004.material}
        position={[0.057, 0.562, 1.746]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert005.geometry}
        material={nodes.Vert005.material}
        position={[1.067, 0.562, 0.829]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert006.geometry}
        material={nodes.Vert006.material}
        position={[0.907, 0.562, -0.061]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert007.geometry}
        material={nodes.Vert007.material}
        position={[-0.023, 0.562, 0.032]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert008.geometry}
        material={nodes.Vert008.material}
        position={[-0.289, 0.562, 0.563]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert009.geometry}
        material={nodes.Vert009.material}
        position={[-0.568, 0.562, 0.909]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert010.geometry}
        material={nodes.Vert010.material}
        position={[0.097, 0.448, 1.011]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert011.geometry}
        material={nodes.Vert011.material}
        position={[-0.329, 0.152, 1.494]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.095}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["ball.002"]}
        position={[0.97, -0.021, 0.708]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.166}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["red.003"]}
        position={[1.233, -0.022, 1.038]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.586}
      />
    </group>
  );
}

useGLTF.preload("/fantasybook.glb");
