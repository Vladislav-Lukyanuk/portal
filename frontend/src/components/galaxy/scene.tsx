import { Scene } from "three";

import { earth } from "./planets/earch";

const scene = new Scene();

earth.position.set(1, 0, 0);

scene.add(earth);

export { scene };
