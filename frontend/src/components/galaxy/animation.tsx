import { Mesh } from "three";

import { sun, SUN_ROTATION_PERIOD_IN_HOURS } from "./planets/sun";
import {
  mercury,
  MERCURY_DISTANCE_FROM_SUN,
  MERCURY_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  MERCURY_ROTATION_PERIOD_IN_HOURS,
} from "./planets/mercury";
import {
  venus,
  VENUS_DISTANCE_FROM_SUN,
  VENUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  VENUS_ROTATION_PERIOD_IN_HOURS,
} from "./planets/venus";
import {
  earth,
  EARTH_DISTANCE_FROM_SUN,
  EARTH_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  EARTH_ROTATION_PERIOD_IN_HOURS,
} from "./planets/earch";
import {
  mars,
  MARS_DISTANCE_FROM_SUN,
  MARS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  MARS_ROTATION_PERIOD_IN_HOURS,
} from "./planets/mars";
import {
  jupiter,
  JUPITER_DISTANCE_FROM_SUN,
  JUPITER_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  JUPITER_ROTATION_PERIOD_IN_HOURS,
} from "./planets/jupiter";
import {
  saturn,
  SATURN_DISTANCE_FROM_SUN,
  SATURN_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  SATURN_ROTATION_PERIOD_IN_HOURS,
} from "./planets/saturn";
import {
  uranus,
  URANUS_DISTANCE_FROM_SUN,
  URANUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  URANUS_ROTATION_PERIOD_IN_HOURS,
} from "./planets/uranus";
import {
  neptune,
  NEPTUNE_DISTANCE_FROM_SUN,
  NEPTUNE_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  NEPTUNE_ROTATION_PERIOD_IN_HOURS,
} from "./planets/neptune";

import { scene } from "./scene";
import { camera } from "./camera";
import { controls, renderer } from "./renderer";

const rotationAroundSun = (
  planet: Mesh,
  time: number,
  period: number,
  rotationRadius: number
) => {
  const deg = -((time / 10 / period) % 360);

  const x = rotationRadius * Math.cos(deg);
  const y = rotationRadius * Math.sin(deg);

  planet.position.set(x, 0, y);
};

const rotation = (planet: Mesh, period: number, time: number) => {
  planet.rotation.y = -(time / 10 / period);
};

const animation = (time: number): void => {
  rotation(sun, SUN_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    mercury,
    time,
    MERCURY_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    MERCURY_DISTANCE_FROM_SUN
  );
  rotation(mercury, MERCURY_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    venus,
    time,
    VENUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    VENUS_DISTANCE_FROM_SUN
  );
  rotation(venus, VENUS_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    earth,
    time,
    EARTH_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    EARTH_DISTANCE_FROM_SUN
  );
  rotation(earth, EARTH_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    mars,
    time,
    MARS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    MARS_DISTANCE_FROM_SUN
  );
  rotation(mars, MARS_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    jupiter,
    time,
    JUPITER_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    JUPITER_DISTANCE_FROM_SUN
  );
  rotation(jupiter, JUPITER_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    saturn,
    time,
    SATURN_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    SATURN_DISTANCE_FROM_SUN
  );
  rotation(saturn, SATURN_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    uranus,
    time,
    URANUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    URANUS_DISTANCE_FROM_SUN
  );
  rotation(uranus, URANUS_ROTATION_PERIOD_IN_HOURS, time);

  rotationAroundSun(
    neptune,
    time,
    NEPTUNE_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
    NEPTUNE_DISTANCE_FROM_SUN
  );
  rotation(neptune, NEPTUNE_ROTATION_PERIOD_IN_HOURS, time);

  controls.update();

  renderer.render(scene, camera);
};

export { animation };
