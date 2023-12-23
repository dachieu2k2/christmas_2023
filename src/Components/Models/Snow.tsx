import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const particleNum = 5000;
const maxRange = 1000;
const minRange = maxRange / 2;
// const textureSize = 64.0;

const Snow = () => {
  //   const simplex = createNoise2D();
  const snow = useRef<THREE.Points>(null!);

  //   const snowGeometry = new THREE.BufferGeometry();
  //   const snowVertices = [];
  //   for (let i = 0; i < 1000; i++) {
  //     const x = Math.random() * 100 - 50;
  //     const y = Math.random() * 100 - 50;
  //     const z = Math.random() * 100 - 50;
  //     snowVertices.push(x, y, z);
  //   }

  const positions = useMemo(() => {
    const positions = new Float32Array(particleNum * 3);
    for (let i = 0; i < particleNum; i++) {
      const x = Math.floor(Math.random() * maxRange - minRange);
      const y = Math.floor(Math.random() * maxRange - minRange);
      const z = Math.floor(Math.random() * maxRange - minRange);
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, []);

  //   const pointGeometry = new THREE.BufferGeometry();
  //   const snowVertices = [];
  //   for (let i = 0; i < particleNum; i++) {
  //     const x = Math.floor(Math.random() * maxRange - minRange);
  //     const y = Math.floor(Math.random() * maxRange - minRange);
  //     const z = Math.floor(Math.random() * maxRange - minRange);
  //     snowVertices.push(x, y, z);
  //   }

  //   pointGeometry.setAttribute(
  //     "position",
  //     new THREE.Float32BufferAttribute(snowVertices, 3)
  //   );

  const velocities: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < particleNum; i++) {
    const x = Math.floor(Math.random() * 6 - 3) * 0.1;
    const y = Math.floor(Math.random() * 10 + 3) * -0.05;
    const z = Math.floor(Math.random() * 6 - 3) * 0.1;
    velocities.push({ x, y, z });
  }

  useFrame((_state) => {
    // console.log(snow.current?.geometry.attributes.position);
    const positions = snow.current?.geometry.attributes.position.array;

    const timeStamp = _state.clock.elapsedTime;

    for (let i = 0; i < particleNum; i++) {
      const velocity = velocities[i];

      const velX = Math.sin(timeStamp * 0.001 * velocity.x) * 0.1;
      const velZ = Math.cos(timeStamp * 0.0015 * velocity.z) * 0.1;

      positions[i * 3] += velX;
      positions[i * 3 + 1] += velocity.y;
      positions[i * 3 + 2] += velZ;

      if (positions[i * 3 + 1] < -minRange) {
        positions[i * 3 + 1] = minRange;
      }
    }
    (
      snow?.current.geometry.attributes.position as THREE.BufferAttribute
    ).needsUpdate = true;
  });

  return (
    <group scale={0.01}>
      <points ref={snow}>
        <bufferGeometry>
          <bufferAttribute
            key={Math.random()}
            attach={"attributes-position"}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />

          {/* <bufferAttribute
      key={Math.random()}
      attach={"attributes-randoms"}
      count={randoms.length / 3}
      array={randoms}
      itemSize={1}
    /> */}
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color={"0xffffff"}
          vertexColors={false}
          transparent={true}
          // opacity={} 0.8
          fog={true}
          depthWrite={false}
          map={new THREE.TextureLoader().load("./snow.png")}
        />
      </points>
    </group>
  );
};

export default Snow;
