export const vertexShader = `
    varying vec2 vUv;
    varying float vZ;
    uniform float uTime;

    void main()
    {


        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        // modelPosition.y += sin(modelPosition.x * 5.0 + uTime * 3.0) * 0.1;
        // modelPosition.y += sin(modelPosition.z * 6.0 + uTime * 2.0) * 0.1;
        
        // vZ = modelPosition.y;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition;
        
        vUv = uv;
    }
`