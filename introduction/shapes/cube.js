import * as THREE from "three";

export function renderCube() {
  // Configurando Cena, Camera e renderizador
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, // Campo de Visão
    window.innerWidth / window.innerHeight, // Melhor opção para não ficar com o vídeo achatado igual filmes antigos em telas widescreen. Quase sempre tu vai querer usar width / height
    0.1, // O quanto perto a camera está do objeto.
    1000 // o quão longe nós permitimos que os objetos vão para continuar aparecendo na camera
  );

  renderer.setSize(
    window.innerWidth,
    window.innerHeight,
    true /* Se habilitado pra false ele renderiza o app com qualidade baixa pra melhorar performance*/
  );

  document.body.appendChild(renderer.domElement); // Acoplando o <canvas> ao HTML

  // Criando Formas

  const geometry = new THREE.BoxGeometry(1, 1, 1);

  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });

  const cube = new THREE.Mesh(geometry, material); // Está aplicando o material ao geometry

  // Adicionando cubo à cena e alterando o background
  scene.add(cube);

  // Posicionaod a camera em relação a cena para nao ficar dentro do cubo que está nos eixos (0,0,0)
  camera.position.z = 3;

  // Criando método de Animate Loop

  function animate() {
    // Faz um laço infinito que atualiza a tela 60 vezes por segundo (60fps)
    // Além de pausar a animação quando o foco não está na página,
    // economizando processamento
    requestAnimationFrame(animate);

    //   cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}
