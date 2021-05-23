import { Scene } from "three";

import { sun } from "./planets/sun";
import { mercury } from "./planets/mercury";
import { venus } from "./planets/venus";
import { earth } from "./planets/earch";
import { mars } from "./planets/mars";
import { jupiter } from "./planets/jupiter";
import { saturn } from "./planets/saturn";
import { uranus } from "./planets/uranus";
import { neptune } from "./planets/neptune";

const scene = new Scene();

sun.position.set(0, 0, 0);
mercury.position.set(500, 0, 0);
venus.position.set(700, 0, 0);
earth.position.set(900, 0, 0);
mars.position.set(1100, 0, 0);
jupiter.position.set(1500, 0, 0);
saturn.position.set(2000, 0, 0);
uranus.position.set(2300, 0, 0);
neptune.position.set(2500, 0, 0);

scene.add(sun);
scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);
scene.add(jupiter);
scene.add(saturn);
scene.add(uranus);
scene.add(neptune);

export { scene };
