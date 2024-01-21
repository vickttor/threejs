import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function render3DLoader() {
  const loader = new GLTFLoader();
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 7;

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // AMBIENTE LIGHT
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // DIRECTIONAL LIGHT

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  loader.load("/suzanne.glb", (gltf) => {
    scene.add(gltf.scene);
  });

  function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}
