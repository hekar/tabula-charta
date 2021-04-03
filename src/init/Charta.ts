import {
  AxesHelper,
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshBasicMaterial,
  WebGLRenderer,
} from "three";
import { EntityManager } from "../entity/EntityManager";
import { EditorPlayer } from "../entity/Player";
import { lfTestVmf } from "../example/lf_test.vmf";
import { createDefaultScene } from "./DefaultScene";
import { Vmf } from "../vmf/Vmf";

export function startCharta() {
  const vmf = new Vmf();
  vmf.loads(lfTestVmf);

  const scene = createDefaultScene();
  const entityManager = new EntityManager();
  const player = new EditorPlayer(scene);
  player.init();
  entityManager.add(player);
  entityManager.init();

  const { camera } = player;

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight, true);
  document.getElementById("three").appendChild(renderer.domElement);
  window.addEventListener("resize", (event: UIEvent) => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight, true);
  });

  const axis = new AxesHelper(10);
  scene.add(axis);

  const material = new MeshBasicMaterial({
    color: 0xaaaaaa,
    wireframe: true,
  });

  const box = new Mesh(new BoxGeometry(1, 1, 1), material);

  scene.add(box);

  box.position.x = 0.5;
  box.rotation.y = 0.5;

  camera.position.x = 5;
  camera.position.y = 5;
  camera.position.z = 5;

  camera.lookAt(scene.position);

  function animate(): void {
    requestAnimationFrame(animate);

    entityManager.animate();
    render();
  }

  function render(): void {
    const timer = 0.002 * Date.now();
    box.position.y = 0.5 + 0.5 * Math.sin(timer);
    box.rotation.x += 0.1;
    renderer.render(scene, camera);
  }

  animate();
}
