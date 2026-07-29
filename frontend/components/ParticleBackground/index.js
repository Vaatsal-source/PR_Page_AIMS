"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Scene setup ──────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Particle sparks ───────────────────────────────────────────────────────
    const PARTICLE_COUNT = 2200;
    const positions      = new Float32Array(PARTICLE_COUNT * 3);
    const pColors        = new Float32Array(PARTICLE_COUNT * 3);
    const sizes          = new Float32Array(PARTICLE_COUNT);

    const palette = [
      new THREE.Color("#ff2a35"),
      new THREE.Color("#cc1a22"),
      new THREE.Color("#ff6b6b"),
      new THREE.Color("#ff0040"),
      new THREE.Color("#8b0000"),
      new THREE.Color("#ff4d2e"),
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * 24;
      positions[i3 + 1] = (Math.random() - 0.5) * 18;
      positions[i3 + 2] = (Math.random() - 0.5) * 10 - 2;

      const col = palette[Math.floor(Math.random() * palette.length)];
      pColors[i3]     = col.r;
      pColors[i3 + 1] = col.g;
      pColors[i3 + 2] = col.b;

      sizes[i] = Math.random() * 2.2 + 0.4;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("aColor",   new THREE.BufferAttribute(pColors,    3));
    particleGeo.setAttribute("size",     new THREE.BufferAttribute(sizes,      1));

    const particleMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime:       { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: /* glsl */ `
        attribute float size;
        attribute vec3  aColor;
        varying   vec3  vColor;
        uniform   float uTime;
        uniform   float uPixelRatio;

        void main() {
          vColor = aColor;
          vec3 pos = position;
          pos.y += sin(uTime * 0.35 + position.x * 0.6) * 0.14;
          pos.x += cos(uTime * 0.28 + position.z * 0.5) * 0.10;

          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * uPixelRatio * (160.0 / -mvPos.z);
          gl_Position  = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = pow(1.0 - smoothstep(0.0, 0.5, dist), 1.8);
          gl_FragColor = vec4(vColor, alpha * 0.88);
        }
      `,
      transparent:  true,
      depthWrite:   false,
      vertexColors: true,
      blending:     THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Mouse parallax ────────────────────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ────────────────────────────────────────────────────────
    let frameId;
    const startTime = Date.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = (Date.now() - startTime) / 1000;

      particleMat.uniforms.uTime.value = elapsed;

      // Slow rotation + mouse influence
      particles.rotation.y = elapsed * 0.012 + mouseX * 0.04;
      particles.rotation.x = elapsed * 0.007 + mouseY * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
