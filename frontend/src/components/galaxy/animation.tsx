import { mercury } from "./planets/mercury";
import { venus } from "./planets/venus";
import { earth } from "./planets/earch";
import { mars } from "./planets/mars";
import { jupiter } from "./planets/jupiter";
import { saturn } from "./planets/saturn";
import { uranus } from "./planets/uranus";
import { neptune } from "./planets/neptune";

import { scene } from "./scene";
import { camera } from "./camera";
import { controls, renderer } from "./renderer";

const animation = (time: number): void => {
  mercury.rotation.y = -(time / 100 / 139.2);
  venus.rotation.y = -(time / 100 / 278.4);
  earth.rotation.y = -(time / 100 / 2.4);
  mars.rotation.y = -(time / 100 / 2.5);
  jupiter.rotation.y = -(time / 100 / 0.9);
  saturn.rotation.y = -(time / 100 / 1.1);
  uranus.rotation.y = -(time / 100 / 1.7);
  neptune.rotation.y = -(time / 100 / 1.6);

  controls.update();

  renderer.render(scene, camera);
};

export { animation };
