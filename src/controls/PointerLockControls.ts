import { Camera, Euler, EventDispatcher, Object3D, Vector3 } from "three";
import { Controls } from "./Controls";

export class PointerLockControls extends EventDispatcher implements Controls {
  isLocked: boolean;
  minPolarAngle: number;
  maxPolarAngle: number;
  changeEvent: { type: string };
  lockEvent: { type: string };
  unlockEvent: { type: string };
  euler: Euler;
  PI_2: number;
  vec: Vector3;
  object: Object3D;

  constructor(
    private readonly camera: Camera,
    private readonly domElement: any
  ) {
    super();

    if (domElement === undefined) {
      console.warn(
        'THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'
      );
      domElement = document.getElementById("three");
    }

    this.object = camera;

    this.domElement = domElement;
    this.isLocked = false;

    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    this.changeEvent = { type: "change" };
    this.lockEvent = { type: "lock" };
    this.unlockEvent = { type: "unlock" };

    this.euler = new Euler(0, 0, 0, "YXZ");
    this.PI_2 = Math.PI / 2;
    this.vec = new Vector3();

    this.connect();
  }

  onMouseMove(event: any) {
    if (this.isLocked === false) return;

    var movementX =
      event.movementX || event.mozMovementX || event.webkitMovementX || 0;
    var movementY =
      event.movementY || event.mozMovementY || event.webkitMovementY || 0;

    this.euler.setFromQuaternion(this.camera.quaternion);

    this.euler.y -= movementX * 0.002;
    this.euler.x -= movementY * 0.002;

    this.euler.x = Math.max(
      this.PI_2 - this.maxPolarAngle,
      Math.min(this.PI_2 - this.minPolarAngle, this.euler.x)
    );

    this.camera.quaternion.setFromEuler(this.euler);

    this.dispatchEvent(this.changeEvent);
  }

  onPointerlockChange() {
    if (this.domElement.ownerDocument.pointerLockElement === this.domElement) {
      this.dispatchEvent(this.lockEvent);

      this.isLocked = true;
    } else {
      this.dispatchEvent(this.unlockEvent);

      this.isLocked = false;
    }
  }

  onPointerlockError() {
    console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
  }

  connect() {
    this.domElement.ownerDocument.addEventListener(
      "mousemove",
      this.onMouseMove.bind(this)
    );
    this.domElement.ownerDocument.addEventListener(
      "pointerlockchange",
      this.onPointerlockChange.bind(this)
    );
    this.domElement.ownerDocument.addEventListener(
      "pointerlockerror",
      this.onPointerlockError.bind(this)
    );
  }

  disconnect() {
    this.domElement.ownerDocument.removeEventListener(
      "mousemove",
      this.onMouseMove.bind(this)
    );
    this.domElement.ownerDocument.removeEventListener(
      "pointerlockchange",
      this.onPointerlockChange.bind(this)
    );
    this.domElement.ownerDocument.removeEventListener(
      "pointerlockerror",
      this.onPointerlockError.bind(this)
    );
  }

  dispose() {
    this.disconnect();
  }

  getDirection() {
    var direction = new Vector3(0, 0, -1);

    return (v: Vector3) => {
      return v.copy(direction).applyQuaternion(this.camera.quaternion);
    };
  }

  moveForward(distance: number) {
    // move forward parallel to the xz-plane
    // assumes camera.up is y-up
    this.vec.setFromMatrixColumn(this.camera.matrix, 0);

    this.vec.crossVectors(this.camera.up, this.vec);

    this.camera.position.addScaledVector(this.vec, distance);
  }

  moveRight(distance: number) {
    this.vec.setFromMatrixColumn(this.camera.matrix, 0);

    this.camera.position.addScaledVector(this.vec, distance);
  }

  lock() {
    this.domElement.requestPointerLock();
  }

  unlock() {
    this.domElement.ownerDocument.exitPointerLock();
  }
}
