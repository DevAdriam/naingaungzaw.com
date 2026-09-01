"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const NODE_COUNT = 70;
const CONNECT_DIST = 1.8;
const AREA_X = 10;
const AREA_Y = 6;

function Constellation({ color }: { color: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const nodes = useMemo(
    () =>
      Array.from({ length: NODE_COUNT }, () => ({
        x: (Math.random() - 0.5) * AREA_X,
        y: (Math.random() - 0.5) * AREA_Y,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      })),
    []
  );

  const pointPositions = useMemo(
    () => new Float32Array(NODE_COUNT * 3),
    []
  );
  const maxLineVerts = NODE_COUNT * NODE_COUNT;
  const linePositions = useMemo(
    () => new Float32Array(maxLineVerts * 3),
    [maxLineVerts]
  );
  const lineColors = useMemo(
    () => new Float32Array(maxLineVerts * 4),
    [maxLineVerts]
  );

  const threeColor = useMemo(() => new THREE.Color(color), [color]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      mouseRef.current.x = (e.clientX / size.width) * 2 - 1;
      mouseRef.current.y = -(e.clientY / size.height) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [size.width, size.height]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);

    for (let i = 0; i < NODE_COUNT; i++) {
      const n = nodes[i];
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      const halfX = AREA_X / 2;
      const halfY = AREA_Y / 2;
      if (n.x > halfX) n.x = -halfX;
      else if (n.x < -halfX) n.x = halfX;
      if (n.y > halfY) n.y = -halfY;
      else if (n.y < -halfY) n.y = halfY;
      pointPositions[i * 3] = n.x;
      pointPositions[i * 3 + 1] = n.y;
      pointPositions[i * 3 + 2] = 0;
    }

    let vIdx = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = 1 - dist / CONNECT_DIST;
          linePositions[vIdx * 3] = nodes[i].x;
          linePositions[vIdx * 3 + 1] = nodes[i].y;
          linePositions[vIdx * 3 + 2] = 0;
          lineColors[vIdx * 4] = threeColor.r;
          lineColors[vIdx * 4 + 1] = threeColor.g;
          lineColors[vIdx * 4 + 2] = threeColor.b;
          lineColors[vIdx * 4 + 3] = alpha * 0.4;
          vIdx++;
          linePositions[vIdx * 3] = nodes[j].x;
          linePositions[vIdx * 3 + 1] = nodes[j].y;
          linePositions[vIdx * 3 + 2] = 0;
          lineColors[vIdx * 4] = threeColor.r;
          lineColors[vIdx * 4 + 1] = threeColor.g;
          lineColors[vIdx * 4 + 2] = threeColor.b;
          lineColors[vIdx * 4 + 3] = alpha * 0.4;
          vIdx++;
        }
      }
    }

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      attr.needsUpdate = true;
    }
    if (linesRef.current) {
      const posAttr = linesRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      const colAttr = linesRef.current.geometry.attributes
        .color as THREE.BufferAttribute;
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, vIdx);
    }

    if (groupRef.current) {
      const targetX = mouseRef.current.x * 0.35;
      const targetY = mouseRef.current.y * 0.25;
      groupRef.current.position.x +=
        (targetX - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y +=
        (targetY - groupRef.current.position.y) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
            count={NODE_COUNT}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color={color}
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={maxLineVerts}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 4]}
            count={maxLineVerts}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroBackground() {
  const [enabled, setEnabled] = useState(false);
  const [color, setColor] = useState("#0a0a0a");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(!rm.matches);

    const readColor = () => {
      const cs = getComputedStyle(document.documentElement);
      const fg = cs.getPropertyValue("--foreground").trim();
      if (fg) setColor(fg);
    };
    readColor();

    const observer = new MutationObserver(readColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "style"],
    });
    return () => observer.disconnect();
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_75%,transparent)]"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        dpr={[1, 1.75]}
      >
        <Constellation color={color} />
      </Canvas>
    </div>
  );
}
