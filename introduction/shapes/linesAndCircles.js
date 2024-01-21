import * as THREE from "three";

export function renderLinesAndCircles() {
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  renderer.setSize(window.innerWidth, window.innerHeight, true);

  document.body.appendChild(renderer.domElement); // Acoplando o <canvas> ao HTML

  camera.position.set(0, 50, 100);
  // A linha de baixo é uma definição do eixo que queremos que a câmera olhe
  camera.lookAt(0, 0, 0);

  // Construindo Linhas
  const material = new THREE.LineBasicMaterial({
    color: 0x0000ff,
  });

  const points = [];

  //   pyramid
  points.push(new THREE.Vector3(-10, 0, 10));
  points.push(new THREE.Vector3(-10, 0, -10));
  points.push(new THREE.Vector3(10, 0, -10));
  points.push(new THREE.Vector3(10, 0, 10));
  points.push(new THREE.Vector3(-10, 0, 10));

  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 10));

  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, -10));

  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(-10, 0, -10));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);

  scene.add(line);

  function animate() {
    requestAnimationFrame(animate);

    line.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}
