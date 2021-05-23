import { earth } from "./planets/earch";
import { scene } from "./scene";
import { camera } from "./camera";
import { controls, renderer } from "./renderer";

const animation = (time: number): void => {
  earth.rotation.y = -(time / 1000);

  controls.update();

  renderer.render(scene, camera);
};

export { animation };
