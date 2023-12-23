import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { GLTFLoader } from "three-stdlib";

type treeType = {
  position: { x: number; z: number };
  rotation: { z: number; y: number };
};

type props = {
  radius: number;
  count: number;
};

const Trees: React.FC<props> = ({ radius, count }) => {
  const model = useLoader(GLTFLoader, "./trees.glb");
  const [trees, setTrees] = useState<treeType[]>([]);
  // const clone = useMemo(() => SkeletonUtils.clone(model.scene), [model.scene]);

  const updatePosition = (treeArray: treeType[], radius: number) => {
    treeArray.forEach((tree) => {
      const angle = Math.random() * Math.PI * 2;
      const radiusN = radius + Math.random() * 3;
      tree.position.x = Math.sin(angle) * radiusN;
      tree.position.z = Math.cos(angle) * radiusN;

      tree.rotation.y = (Math.random() - 0.5) * 0.4;
      tree.rotation.z = (Math.random() - 0.5) * 0.4;
    });
    setTrees(treeArray);
  };
  useEffect(() => {
    const tempTrees: treeType[] = [];
    for (let i = 0; i < count; i++) {
      tempTrees.push({ position: { x: 0, z: 0 }, rotation: { y: 0, z: 0 } });
    }
    updatePosition(tempTrees, radius);
  }, [radius, count]);

  return (
    <group position={[1.5, 0, -1.5]}>
      {trees.map((tree, index) => {
        return (
          <object3D
            key={index}
            position={[tree.position.x, 0, tree.position.z]}
            rotation={[0, tree.rotation.y, tree.rotation.z]}
          >
            <primitive object={model.scene.clone()} />
          </object3D>
        );
      })}
    </group>
  );
};

export default Trees;
