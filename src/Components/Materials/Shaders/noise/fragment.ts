import { perlinNoise2D } from "../baseNoise/perlinNoise2D";

export const fragmentShader = `
    ${perlinNoise2D}

    precision mediump float;

    uniform float uTime;

    varying vec2 vUv;
    varying float vZ;

    vec3 colorA = vec3(0.912,0.191,0.652);
    vec3 colorB = vec3(1.000,0.777,0.052);

    void main()
    {
        // vec3 blackColor = vec3(0.0);
        // vec3 whiteColor = vec3(0.0);
        
        // vec3 uvColor = vec3(vUv.x, vUv.y, 1.0);

        // float strength = smoothstep(0.1, 10., sin(cnoise(vUv * 1. + uTime) * 10.0));

        vec3 mixedColor = mix(colorA, colorB, abs(tan(vUv.x + uTime*0.2)));
        // vec3 mixedColor = mix(colorA, colorB, strength);

        gl_FragColor = vec4(mixedColor, 1.0);

        // vec3 color = mix(colorA, colorB, vZ * 2.0 + 0.5); 
        // gl_FragColor = vec4(color, 1.0);
    }

`