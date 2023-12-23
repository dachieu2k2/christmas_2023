import { useEffect, useRef } from "react";
import * as THREE from "three";

function InstancedTree() {
  const ref = useRef<THREE.InstancedMesh>(null!);
  useEffect(() => {
    ref.current.setMatrixAt(0, new THREE.Matrix4());
  }, []);
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, 1]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </instancedMesh>
  );
}

export default InstancedTree;
