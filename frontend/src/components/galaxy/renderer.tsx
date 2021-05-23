import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { animation } from "./animation";
import { GALAXY_ID } from "./constants";
import { camera } from "./camera";

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setAnimationLoop(animation);

const controls = new OrbitControls(camera, renderer.domElement);

const setRendererSize = (width: number, height: number): void => {
  renderer.setSize(width, height);
};

const mountRenderer = () => {
  document.getElementById(GALAXY_ID)?.append(renderer.domElement);
};

export { renderer, setRendererSize, mountRenderer, controls };
