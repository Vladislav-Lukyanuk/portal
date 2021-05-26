import { Scene } from "three";

import { sun } from "./planets/sun";
import { mercury, MERCURY_DISTANCE_FROM_SUN } from "./planets/mercury";
import { venus, VENUS_DISTANCE_FROM_SUN } from "./planets/venus";
import { earth, EARTH_DISTANCE_FROM_SUN } from "./planets/earch";
import { mars, MARS_DISTANCE_FROM_SUN } from "./planets/mars";
import { jupiter, JUPITER_DISTANCE_FROM_SUN } from "./planets/jupiter";
import { saturn, SATURN_DISTANCE_FROM_SUN } from "./planets/saturn";
import { uranus, URANUS_DISTANCE_FROM_SUN } from "./planets/uranus";
import { neptune, NEPTUNE_DISTANCE_FROM_SUN } from "./planets/neptune";

const scene = new Scene();

sun.position.set(0, 0, 0);
mercury.position.set(MERCURY_DISTANCE_FROM_SUN, 0, 0);
venus.position.set(VENUS_DISTANCE_FROM_SUN, 0, 0);
earth.position.set(EARTH_DISTANCE_FROM_SUN, 0, 0);
mars.position.set(MARS_DISTANCE_FROM_SUN, 0, 0);
jupiter.position.set(JUPITER_DISTANCE_FROM_SUN, 0, 0);
saturn.position.set(SATURN_DISTANCE_FROM_SUN, 0, 0);
uranus.position.set(URANUS_DISTANCE_FROM_SUN, 0, 0);
neptune.position.set(NEPTUNE_DISTANCE_FROM_SUN, 0, 0);

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
