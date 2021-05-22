import * as THREE from "three";

import { earth } from "./planets/earch";

const scene = new THREE.Scene();

scene.add(earth);

export { scene };
