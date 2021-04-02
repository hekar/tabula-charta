import {
  BoxGeometry,
  BufferGeometry,
  Camera,
  Color,
  Float32BufferAttribute,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  Renderer,
  Scene,
  Vector3,
} from "three";
import { Controls, OrbitControls } from "../controls";
import { Entity } from "./Entity";

export class EditorPlayer implements Entity {
  camera: Camera;

  renderer: Renderer;
  controls: Controls;
  moveForward: boolean = false;
  moveBackward: boolean = false;
  moveLeft: boolean = false;
  moveRight: boolean = false;
  canJump: boolean = false;
  playerMode: boolean = false;

  velocity: Vector3;
  direction: Vector3;
  vertex: Vector3;
  color: Color;
  raycaster: Raycaster;
  prevTime: any;
  objects: Array<any>;

  constructor(private readonly scene: Scene) {
    this.prevTime = performance.now();
    this.velocity = new Vector3();
    this.direction = new Vector3();
    this.vertex = new Vector3();
    this.color = new Color();
    this.objects = [];
  }

  init() {
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.y = 10;

    this.controls = new OrbitControls(
      this.camera,
      document.getElementById("three")
    );

    this.scene.add(this.controls.object);

    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          this.moveForward = true;
          break;
        case "ArrowLeft":
        case "KeyA":
          this.moveLeft = true;
          break;
        case "ArrowDown":
        case "KeyS":
          this.moveBackward = true;
          break;
        case "ArrowRight":
        case "KeyD":
          this.moveRight = true;
          break;
        case "Space":
          if (this.canJump === true) this.velocity.y += 350;
          this.canJump = false;
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "ArrowUp":
        case "KeyW":
          this.moveForward = false;
          break;
        case "ArrowLeft":
        case "KeyA":
          this.moveLeft = false;
          break;
        case "ArrowDown":
        case "KeyS":
          this.moveBackward = false;
          break;
        case "ArrowRight":
        case "KeyD":
          this.moveRight = false;
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown.bind(this));
    document.addEventListener("keyup", onKeyUp.bind(this));

    this.raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, 10);

    // floor
    let floorGeometry: PlaneGeometry | BufferGeometry = new PlaneGeometry(
      2000,
      2000,
      100,
      100
    );
    floorGeometry.rotateX(-Math.PI / 2);

    // vertex displacement

    let position = floorGeometry.attributes.position;
    for (let i = 0, l = position.count; i < l; i++) {
      this.vertex.fromBufferAttribute(position, i);

      this.vertex.x += Math.random() * 20 - 10;
      this.vertex.y += Math.random() * 2;
      this.vertex.z += Math.random() * 20 - 10;

      position.setXYZ(i, this.vertex.x, this.vertex.y, this.vertex.z);
    }

    floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices

    position = floorGeometry.attributes.position;
    const colorsFloor = [];

    for (let i = 0, l = position.count; i < l; i++) {
      this.color.setHSL(
        Math.random() * 0.3 + 0.5,
        0.75,
        Math.random() * 0.25 + 0.75
      );
      colorsFloor.push(this.color.r, this.color.g, this.color.b);
    }

    floorGeometry.setAttribute(
      "color",
      new Float32BufferAttribute(colorsFloor, 3)
    );

    const floorMaterial = new MeshBasicMaterial({ vertexColors: true });

    const floor = new Mesh(floorGeometry, floorMaterial);
    this.scene.add(floor);

    // objects
    const boxGeometry = new BoxGeometry(20, 20, 20).toNonIndexed();

    position = boxGeometry.attributes.position;
    const colorsBox = [];

    for (let i = 0, l = position.count; i < l; i++) {
      this.color.setHSL(
        Math.random() * 0.3 + 0.5,
        0.75,
        Math.random() * 0.25 + 0.75
      );
      colorsBox.push(this.color.r, this.color.g, this.color.b);
    }

    boxGeometry.setAttribute("color", new Float32BufferAttribute(colorsBox, 3));

    for (let i = 0; i < 500; i++) {
      const boxMaterial = new MeshPhongMaterial({
        specular: 0xffffff,
        flatShading: true,
        vertexColors: true,
      });
      boxMaterial.color.setHSL(
        Math.random() * 0.2 + 0.5,
        0.75,
        Math.random() * 0.25 + 0.75
      );

      const box = new Mesh(boxGeometry, boxMaterial);
      box.position.x = Math.floor(Math.random() * 20 - 10) * 20;
      box.position.y = Math.floor(Math.random() * 20) * 20 + 10;
      box.position.z = Math.floor(Math.random() * 20 - 10) * 20;

      this.scene.add(box);
      this.objects.push(box);
    }
  }

  animate() {
    const time = performance.now();

    this.raycaster.ray.origin.copy(this.controls.object.position);
    this.raycaster.ray.origin.y -= 10;

    const intersections = this.raycaster.intersectObjects(this.objects);

    const onObject = intersections.length > 0;

    const delta = (time - this.prevTime) / 1000;

    this.velocity.x -= this.velocity.x * 10.0 * delta;
    this.velocity.z -= this.velocity.z * 10.0 * delta;

    this.velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

    this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
    this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
    this.direction.normalize(); // this ensures consistent movements in all directions

    if (this.moveForward || this.moveBackward)
      this.velocity.z -= this.direction.z * 400.0 * delta;
    if (this.moveLeft || this.moveRight)
      this.velocity.x -= this.direction.x * 400.0 * delta;

    if (onObject === true) {
      this.velocity.y = Math.max(0, this.velocity.y);
      this.canJump = true;
    }

    if (this.playerMode) {
      // this.controls.moveRight(-this.velocity.x * delta);
      // this.controls.moveForward(-this.velocity.z * delta);
      this.controls.object.position.y += this.velocity.y * delta; // new behavior
      if (this.controls.object.position.y < 10) {
        this.velocity.y = 0;
        this.controls.object.position.y = 10;
        this.canJump = true;
      }
    }

    this.prevTime = time;
  }
}
