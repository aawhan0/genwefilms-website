import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function FluidPlane() {
  const materialRef = useRef<any>(null);

  useFrame(({ clock, mouse }) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value = clock.elapsedTime;

    // convert mouse (-1 to 1) → (0 to 1)
    materialRef.current.uniforms.uMouse.value = new THREE.Vector2(
      (mouse.x + 1) / 2,
      (mouse.y + 1) / 2
    );
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;

          float blob(vec2 uv, vec2 pos, float size) {
            float d = distance(uv, pos);
            return smoothstep(size, 0.0, d);
          }

          void main() {
            vec2 uv = vUv;

            float t = uTime * 0.4;

            // 🔥 animated blobs
            float b1 = blob(uv, vec2(0.3 + sin(t)*0.15, 0.5), 0.35);
            float b2 = blob(uv, vec2(0.7 + cos(t)*0.15, 0.4), 0.35);

            // 🔥 cursor interaction (now FULLY WORKING)
            float cursor = blob(uv, uMouse, 0.25);

            float intensity = b1 + b2 + cursor * 1.8;

            vec3 color = vec3(
              0.9 * intensity,
              0.2 * intensity,
              0.5 * intensity
            );

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function FluidBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <FluidPlane />
      </Canvas>
    </div>
  );
}