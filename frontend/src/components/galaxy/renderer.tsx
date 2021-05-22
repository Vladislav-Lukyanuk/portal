import * as THREE from "three";

import { animation } from "./animation";
import { GALAXY_ID } from "./constants";

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setAnimationLoop(animation);

const setRendererSize = (width: number, height: number): void => {
  renderer.setSize(width, height);
};

const mountRenderer = () => {
  document.getElementById(GALAXY_ID)?.append(renderer.domElement);
};

export { renderer, setRendererSize, mountRenderer };
