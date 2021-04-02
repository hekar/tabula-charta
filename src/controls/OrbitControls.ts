import {
  EventDispatcher,
  Matrix4,
  MOUSE,
  Quaternion,
  Spherical,
  TOUCH,
  Vector2,
  Vector3,
} from "three";
import { Controls } from "./Controls";

let changeEvent = { type: "change" };
let startEvent = { type: "start" };
let endEvent = { type: "end" };

let STATE = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6,
};

let state = STATE.NONE;

let EPS = 0.000001;

export class OrbitControls extends EventDispatcher implements Controls {
  private screenSpacePanning: boolean;
  private target0: any;
  private position0: any;
  private zoom0: any;
  private target: any;
  autoRotate: boolean;
  enableDamping: any;
  dampingFactor: number;
  minAzimuthAngle: any;
  maxAzimuthAngle: any;
  _domElementKeyEvents: any;
  autoRotateSpeed: number;
  enablePan: boolean;
  enableZoom: boolean;
  keys: any;
  enableRotate: any;
  enabled: boolean;
  mouseButtons: any;
  touches: any;
  rotateSpeed: number;
  panSpeed: number;
  zoomSpeed: number;
  minPolarAngle: number;
  maxPolarAngle: number;
  minDistance: number;
  maxDistance: number;
  minZoom: number;
  maxZoom: number;
  keyPanSpeed: number;
  scale = 1;
  spherical = new Spherical();
  sphericalDelta = new Spherical();
  panOffset = new Vector3();
  zoomChanged = false;
  rotateStart = new Vector2();
  rotateEnd = new Vector2();
  rotateDelta = new Vector2();
  panStart = new Vector2();
  panEnd = new Vector2();
  panDelta = new Vector2();
  dollyStart = new Vector2();
  dollyEnd = new Vector2();
  dollyDelta = new Vector2();

  constructor(readonly object: any, private readonly domElement: any) {
    super();
    this.domElement.addEventListener(
      "contextmenu",
      this.onContextMenu.bind(this)
    );
    this.domElement.addEventListener(
      "pointerdown",
      this.onPointerDown.bind(this)
    );
    this.domElement.addEventListener("wheel", this.onMouseWheel.bind(this), {
      passive: false,
    });
    this.domElement.addEventListener(
      "touchstart",
      this.onTouchStart.bind(this)
    );
    this.domElement.addEventListener("touchend", this.onTouchEnd.bind(this));
    this.domElement.addEventListener("touchmove", this.onTouchMove.bind(this), {
      passive: false,
    });

    this.object = object;
    this.domElement = domElement;

    // Set to false to disable this control
    this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    this.target = new Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 0;
    this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
    this.minAzimuthAngle = -Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false;
    this.dampingFactor = 0.05;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    this.enableZoom = true;
    this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    this.enableRotate = true;
    this.rotateSpeed = 1.0;

    // Set to false to disable panning
    this.enablePan = true;
    this.panSpeed = 1.0;
    this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

    // The four arrow keys
    this.keys = {
      LEFT: "ArrowLeft",
      UP: "ArrowUp",
      RIGHT: "ArrowRight",
      BOTTOM: "ArrowDown",
    };

    // Mouse buttons
    this.mouseButtons = {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN,
    };

    // Touch fingers
    this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };

    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
  }

  getPolarAngle() {
    return this.spherical.phi;
  }
  getAzimuthalAngle() {
    return this.spherical.theta;
  }
  saveState() {
    this.target0.copy(this.target0);
    this.position0.copy(this.object.position);
    this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0);
    this.object.position.copy(this.position0);
    this.object.zoom = this.zoom0;

    this.object.updateProjectionMatrix();
    this.dispatchEvent(changeEvent);

    this.update();

    state = STATE.NONE;
  }

  update() {
    let offset = new Vector3();

    // so camera.up is the orbit axis
    let quat = new Quaternion().setFromUnitVectors(
      this.object.up,
      new Vector3(0, 1, 0)
    );
    let quatInverse = quat.clone().invert();

    let lastPosition = new Vector3();
    let lastQuaternion = new Quaternion();

    let twoPI = 2 * Math.PI;

    let position = this.object.position;

    offset.copy(position).sub(this.target);

    // rotate offset to "y-axis-is-up" space
    offset.applyQuaternion(quat);

    // angle from z-axis around y-axis
    this.spherical.setFromVector3(offset);

    if (this.autoRotate && state === STATE.NONE) {
      this.rotateLeft(this.getAutoRotationAngle());
    }

    if (this.enableDamping) {
      this.spherical.theta += this.sphericalDelta.theta * this.dampingFactor;
      this.spherical.phi += this.sphericalDelta.phi * this.dampingFactor;
    } else {
      this.spherical.theta += this.sphericalDelta.theta;
      this.spherical.phi += this.sphericalDelta.phi;
    }

    // restrict theta to be between desired limits

    let min = this.minAzimuthAngle;
    let max = this.maxAzimuthAngle;

    if (isFinite(min) && isFinite(max)) {
      if (min < -Math.PI) min += twoPI;
      else if (min > Math.PI) min -= twoPI;

      if (max < -Math.PI) max += twoPI;
      else if (max > Math.PI) max -= twoPI;

      if (min <= max) {
        this.spherical.theta = Math.max(
          min,
          Math.min(max, this.spherical.theta)
        );
      } else {
        this.spherical.theta =
          this.spherical.theta > (min + max) / 2
            ? Math.max(min, this.spherical.theta)
            : Math.min(max, this.spherical.theta);
      }
    }

    // restrict phi to be between desired limits
    this.spherical.phi = Math.max(
      this.minPolarAngle,
      Math.min(this.maxPolarAngle, this.spherical.phi)
    );

    this.spherical.makeSafe();

    this.spherical.radius *= this.scale;

    // restrict radius to be between desired limits
    this.spherical.radius = Math.max(
      this.minDistance,
      Math.min(this.maxDistance, this.spherical.radius)
    );

    // move target to panned location

    if (this.enableDamping === true) {
      this.target.addScaledVector(this.panOffset, this.dampingFactor);
    } else {
      this.target.add(this.panOffset);
    }

    offset.setFromSpherical(this.spherical);

    // rotate offset back to "camera-up-vector-is-up" space
    offset.applyQuaternion(quatInverse);

    position.copy(this.target).add(offset);

    this.object.lookAt(this.target);

    if (this.enableDamping === true) {
      this.sphericalDelta.theta *= 1 - this.dampingFactor;
      this.sphericalDelta.phi *= 1 - this.dampingFactor;

      this.panOffset.multiplyScalar(1 - this.dampingFactor);
    } else {
      this.sphericalDelta.set(0, 0, 0);

      this.panOffset.set(0, 0, 0);
    }

    this.scale = 1;

    // update condition is:
    // min(camera displacement, camera rotation in radians)^2 > EPS
    // using small-angle approximation cos(x/2) = 1 - x^2 / 8

    if (
      this.zoomChanged ||
      lastPosition.distanceToSquared(this.object.position) > EPS ||
      8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS
    ) {
      this.dispatchEvent(changeEvent);

      lastPosition.copy(this.object.position);
      lastQuaternion.copy(this.object.quaternion);
      this.zoomChanged = false;

      return true;
    }

    return false;
  }
  dispose() {
    this.domElement.removeEventListener("contextmenu", this.onContextMenu);

    this.domElement.removeEventListener("pointerdown", this.onPointerDown);
    this.domElement.removeEventListener("wheel", this.onMouseWheel);

    this.domElement.removeEventListener("touchstart", this.onTouchStart);
    this.domElement.removeEventListener("touchend", this.onTouchEnd);
    this.domElement.removeEventListener("touchmove", this.onTouchMove);

    this.domElement.ownerDocument.removeEventListener(
      "pointermove",
      this.onPointerMove
    );
    this.domElement.ownerDocument.removeEventListener(
      "pointerup",
      this.onPointerUp
    );

    if (this._domElementKeyEvents !== null) {
      this._domElementKeyEvents.removeEventListener("keydown", this.onKeyDown);
    }
  }
  getAutoRotationAngle() {
    return ((2 * Math.PI) / 60 / 60) * this.autoRotateSpeed;
  }
  getZoomScale() {
    return Math.pow(0.95, this.zoomSpeed);
  }
  rotateLeft(angle: number) {
    this.sphericalDelta.theta -= angle;
  }
  rotateUp(angle: number) {
    this.sphericalDelta.phi -= angle;
  }

  panLeft(distance: number, objectMatrix: Matrix4) {
    const v = new Vector3();
    v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
    v.multiplyScalar(-distance);

    this.panOffset.add(v);
  }

  panUp(distance: number, objectMatrix: Matrix4) {
    const v = new Vector3();
    if (this.screenSpacePanning === true) {
      v.setFromMatrixColumn(objectMatrix, 1);
    } else {
      v.setFromMatrixColumn(objectMatrix, 0);
      v.crossVectors(this.object.up, v);
    }

    v.multiplyScalar(distance);

    this.panOffset.add(v);
  }

  pan(deltaX: number, deltaY: number) {
    let element = this.domElement;
    const offset = new Vector2();

    if (this.object.isPerspectiveCamera) {
      // perspective
      let position = this.object.position;
      offset.copy(position).sub(this.target);
      let targetDistance = offset.length();

      // half of the fov is center to top of screen
      targetDistance *= Math.tan(((this.object.fov / 2) * Math.PI) / 180.0);

      // we use only clientHeight here so aspect ratio does not distort speed
      this.panLeft(
        (2 * deltaX * targetDistance) / element.clientHeight,
        this.object.matrix
      );
      this.panUp(
        (2 * deltaY * targetDistance) / element.clientHeight,
        this.object.matrix
      );
    } else if (this.object.isOrthographicCamera) {
      // orthographic
      this.panLeft(
        (deltaX * (this.object.right - this.object.left)) /
          this.object.zoom /
          element.clientWidth,
        this.object.matrix
      );
      this.panUp(
        (deltaY * (this.object.top - this.object.bottom)) /
          this.object.zoom /
          element.clientHeight,
        this.object.matrix
      );
    } else {
      // camera neither orthographic nor perspective
      console.warn(
        "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
      );
      this.enablePan = false;
    }
  }

  dollyOut(dollyScale: number) {
    if (this.object.isPerspectiveCamera) {
      this.scale /= dollyScale;
    } else if (this.object.isOrthographicCamera) {
      this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom * dollyScale)
      );
      this.object.updateProjectionMatrix();
      this.zoomChanged = true;
    } else {
      console.warn(
        "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
      );
      this.enableZoom = false;
    }
  }

  dollyIn(dollyScale: number) {
    if (this.object.isPerspectiveCamera) {
      this.scale *= dollyScale;
    } else if (this.object.isOrthographicCamera) {
      this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / dollyScale)
      );
      this.object.updateProjectionMatrix();
      this.zoomChanged = true;
    } else {
      console.warn(
        "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
      );
      this.enableZoom = false;
    }
  }

  //
  // event callbacks - update the object state
  //
  handleMouseDownRotate(event: { clientX: number; clientY: number }) {
    this.rotateStart.set(event.clientX, event.clientY);
  }
  handleMouseDownDolly(event: { clientX: number; clientY: number }) {
    this.dollyStart.set(event.clientX, event.clientY);
  }
  handleMouseDownPan(event: { clientX: number; clientY: number }) {
    this.panStart.set(event.clientX, event.clientY);
  }
  handleMouseMoveRotate(event: { clientX: number; clientY: number }) {
    this.rotateEnd.set(event.clientX, event.clientY);

    this.rotateDelta
      .subVectors(this.rotateEnd, this.rotateStart)
      .multiplyScalar(this.rotateSpeed);

    let element = this.domElement;

    this.rotateLeft((2 * Math.PI * this.rotateDelta.x) / element.clientHeight); // yes, height

    this.rotateUp((2 * Math.PI * this.rotateDelta.y) / element.clientHeight);

    this.rotateStart.copy(this.rotateEnd);

    this.update();
  }
  handleMouseMoveDolly(event: { clientX: number; clientY: number }) {
    this.dollyEnd.set(event.clientX, event.clientY);

    this.dollyDelta.subVectors(this.dollyEnd, this.dollyStart);

    if (this.dollyDelta.y > 0) {
      this.dollyOut(this.getZoomScale());
    } else if (this.dollyDelta.y < 0) {
      this.dollyIn(this.getZoomScale());
    }

    this.dollyStart.copy(this.dollyEnd);

    this.update();
  }
  handleMouseMovePan(event: { clientX: number; clientY: number }) {
    this.panEnd.set(event.clientX, event.clientY);

    this.panDelta
      .subVectors(this.panEnd, this.panStart)
      .multiplyScalar(this.panSpeed);

    this.pan(this.panDelta.x, this.panDelta.y);

    this.panStart.copy(this.panEnd);

    this.update();
  }
  handleMouseUp(event: any) {
    // no-op
  }
  handleMouseWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.dollyIn(this.getZoomScale());
    } else if (event.deltaY > 0) {
      this.dollyOut(this.getZoomScale());
    }

    this.update();
  }
  handleKeyDown(event: { code: any; preventDefault: () => void }) {
    let needsUpdate = false;

    switch (event.code) {
      case this.keys.UP:
        this.pan(0, this.keyPanSpeed);
        needsUpdate = true;
        break;

      case this.keys.BOTTOM:
        this.pan(0, -this.keyPanSpeed);
        needsUpdate = true;
        break;

      case this.keys.LEFT:
        this.pan(this.keyPanSpeed, 0);
        needsUpdate = true;
        break;

      case this.keys.RIGHT:
        this.pan(-this.keyPanSpeed, 0);
        needsUpdate = true;
        break;
    }

    if (needsUpdate) {
      // prevent the browser from scrolling on cursor keys
      event.preventDefault();

      this.update();
    }
  }
  handleTouchStartRotate(event: { touches: string | any[] }) {
    if (event.touches.length == 1) {
      this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

      this.rotateStart.set(x, y);
    }
  }
  handleTouchStartPan(event: { touches: string | any[] }) {
    if (event.touches.length == 1) {
      this.panStart.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

      this.panStart.set(x, y);
    }
  }
  handleTouchStartDolly(event: {
    touches: { pageX: number; pageY: number }[];
  }) {
    let dx = event.touches[0].pageX - event.touches[1].pageX;
    let dy = event.touches[0].pageY - event.touches[1].pageY;

    let distance = Math.sqrt(dx * dx + dy * dy);

    this.dollyStart.set(0, distance);
  }
  handleTouchStartDollyPan(event: any) {
    if (this.enableZoom) this.handleTouchStartDolly(event);

    if (this.enablePan) this.handleTouchStartPan(event);
  }
  handleTouchStartDollyRotate(event: any) {
    if (this.enableZoom) this.handleTouchStartDolly(event);

    if (this.enableRotate) this.handleTouchStartRotate(event);
  }
  handleTouchMoveRotate(event: TouchEvent) {
    if (event.touches.length == 1) {
      this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

      this.rotateEnd.set(x, y);
    }

    this.rotateDelta
      .subVectors(this.rotateEnd, this.rotateStart)
      .multiplyScalar(this.rotateSpeed);

    let element = this.domElement;

    this.rotateLeft((2 * Math.PI * this.rotateDelta.x) / element.clientHeight); // yes, height

    this.rotateUp((2 * Math.PI * this.rotateDelta.y) / element.clientHeight);

    this.rotateStart.copy(this.rotateEnd);
  }
  handleTouchMovePan(event: TouchEvent) {
    if (event.touches.length == 1) {
      this.panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    } else {
      let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
      let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);

      this.panEnd.set(x, y);
    }

    this.panDelta
      .subVectors(this.panEnd, this.panStart)
      .multiplyScalar(this.panSpeed);

    this.pan(this.panDelta.x, this.panDelta.y);

    this.panStart.copy(this.panEnd);
  }
  handleTouchMoveDolly(event: { touches: { pageX: number; pageY: number }[] }) {
    let dx = event.touches[0].pageX - event.touches[1].pageX;
    let dy = event.touches[0].pageY - event.touches[1].pageY;

    let distance = Math.sqrt(dx * dx + dy * dy);

    this.dollyEnd.set(0, distance);

    this.dollyDelta.set(
      0,
      Math.pow(this.dollyEnd.y / this.dollyStart.y, this.zoomSpeed)
    );

    this.dollyOut(this.dollyDelta.y);

    this.dollyStart.copy(this.dollyEnd);
  }
  handleTouchMoveDollyPan(event: any) {
    if (this.enableZoom) this.handleTouchMoveDolly(event);

    if (this.enablePan) this.handleTouchMovePan(event);
  }
  handleTouchMoveDollyRotate(event: any) {
    if (this.enableZoom) this.handleTouchMoveDolly(event);

    if (this.enableRotate) this.handleTouchMoveRotate(event);
  }
  handleTouchEnd(event: TouchEvent) {
    // no-op
  }

  onPointerDown(event: PointerEvent) {
    if (this.enabled === false) return;

    switch (event.pointerType) {
      case "mouse":
      case "pen":
        this.onMouseDown(event);
        break;

      // TODO touch
    }
  }
  onPointerMove(event: PointerEvent) {
    if (this.enabled === false) return;

    switch (event.pointerType) {
      case "mouse":
      case "pen":
        this.onMouseMove(event);
        break;
    }
  }
  onPointerUp(event: PointerEvent) {
    switch (event.pointerType) {
      case "mouse":
      case "pen":
        this.onMouseUp(event);
        break;
    }
  }
  onMouseDown(event: MouseEvent) {
    // Prevent the browser from scrolling.
    event.preventDefault();

    // Manually set the focus since calling preventDefault above
    // prevents the browser from setting it automatically.

    this.domElement.focus ? this.domElement.focus() : window.focus();

    let mouseAction;

    switch (event.button) {
      case 0:
        mouseAction = this.mouseButtons.LEFT;
        break;

      case 1:
        mouseAction = this.mouseButtons.MIDDLE;
        break;

      case 2:
        mouseAction = this.mouseButtons.RIGHT;
        break;

      default:
        mouseAction = -1;
    }

    switch (mouseAction) {
      case MOUSE.DOLLY:
        if (this.enableZoom === false) return;

        this.handleMouseDownDolly(event);

        state = STATE.DOLLY;

        break;

      case MOUSE.ROTATE:
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          if (this.enablePan === false) return;

          this.handleMouseDownPan(event);

          state = STATE.PAN;
        } else {
          if (this.enableRotate === false) return;

          this.handleMouseDownRotate(event);

          state = STATE.ROTATE;
        }

        break;

      case MOUSE.PAN:
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          if (this.enableRotate === false) return;

          this.handleMouseDownRotate(event);

          state = STATE.ROTATE;
        } else {
          if (this.enablePan === false) return;

          this.handleMouseDownPan(event);

          state = STATE.PAN;
        }

        break;

      default:
        state = STATE.NONE;
    }

    if (state !== STATE.NONE) {
      this.domElement.ownerDocument.addEventListener(
        "pointermove",
        this.onPointerMove.bind(this)
      );
      this.domElement.ownerDocument.addEventListener(
        "pointerup",
        this.onPointerUp.bind(this)
      );

      this.dispatchEvent(startEvent);
    }
  }
  onMouseMove(event: MouseEvent) {
    if (this.enabled === false) return;

    event.preventDefault();

    switch (state) {
      case STATE.ROTATE:
        if (this.enableRotate === false) return;

        this.handleMouseMoveRotate(event);

        break;

      case STATE.DOLLY:
        if (this.enableZoom === false) return;

        this.handleMouseMoveDolly(event);

        break;

      case STATE.PAN:
        if (this.enablePan === false) return;

        this.handleMouseMovePan(event);

        break;
    }
  }
  onMouseUp(event: MouseEvent) {
    this.domElement.ownerDocument.removeEventListener(
      "pointermove",
      this.onPointerMove
    );
    this.domElement.ownerDocument.removeEventListener(
      "pointerup",
      this.onPointerUp
    );

    if (this.enabled === false) return;

    this.handleMouseUp(event);

    this.dispatchEvent(endEvent);

    state = STATE.NONE;
  }
  onMouseWheel(event: WheelEvent) {
    if (
      this.enabled === false ||
      this.enableZoom === false ||
      (state !== STATE.NONE && state !== STATE.ROTATE)
    )
      return;

    event.preventDefault();

    this.dispatchEvent(startEvent);

    this.handleMouseWheel(event);

    this.dispatchEvent(endEvent);
  }
  onKeyDown(event: any) {
    if (this.enabled === false || this.enablePan === false) return;

    this.handleKeyDown(event);
  }
  onTouchStart(event: { preventDefault: () => void; touches: string | any[] }) {
    if (this.enabled === false) return;

    event.preventDefault(); // prevent scrolling

    switch (event.touches.length) {
      case 1:
        switch (this.touches.ONE) {
          case TOUCH.ROTATE:
            if (this.enableRotate === false) return;

            this.handleTouchStartRotate(event);

            state = STATE.TOUCH_ROTATE;

            break;

          case TOUCH.PAN:
            if (this.enablePan === false) return;

            this.handleTouchStartPan(event);

            state = STATE.TOUCH_PAN;

            break;

          default:
            state = STATE.NONE;
        }

        break;

      case 2:
        switch (this.touches.TWO) {
          case TOUCH.DOLLY_PAN:
            if (this.enableZoom === false && this.enablePan === false) return;

            this.handleTouchStartDollyPan(event);

            state = STATE.TOUCH_DOLLY_PAN;

            break;

          case TOUCH.DOLLY_ROTATE:
            if (this.enableZoom === false && this.enableRotate === false)
              return;

            this.handleTouchStartDollyRotate(event);

            state = STATE.TOUCH_DOLLY_ROTATE;

            break;

          default:
            state = STATE.NONE;
        }

        break;

      default:
        state = STATE.NONE;
    }

    if (state !== STATE.NONE) {
      this.dispatchEvent(startEvent);
    }
  }
  onTouchMove(event: TouchEvent) {
    if (this.enabled === false) return;

    event.preventDefault(); // prevent scrolling

    switch (state) {
      case STATE.TOUCH_ROTATE:
        if (this.enableRotate === false) return;

        this.handleTouchMoveRotate(event);

        this.update();

        break;

      case STATE.TOUCH_PAN:
        if (this.enablePan === false) return;

        this.handleTouchMovePan(event);

        this.update();

        break;

      case STATE.TOUCH_DOLLY_PAN:
        if (this.enableZoom === false && this.enablePan === false) return;

        this.handleTouchMoveDollyPan(event);

        this.update();

        break;

      case STATE.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === false && this.enableRotate === false) return;

        this.handleTouchMoveDollyRotate(event);

        this.update();

        break;

      default:
        state = STATE.NONE;
    }
  }
  onTouchEnd(event: TouchEvent) {
    if (this.enabled === false) return;

    this.handleTouchEnd(event);

    this.dispatchEvent(endEvent);

    state = STATE.NONE;
  }
  onContextMenu(event: { preventDefault: () => void }) {
    if (this.enabled === false) return;
    event.preventDefault();
  }
}
