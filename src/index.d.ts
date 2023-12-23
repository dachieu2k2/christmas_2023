import { Object3DNode } from "@react-three/fiber";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>;
        }
    }
}