import { earth } from "./planets/earch";
import { scene } from "./scene";
import { camera } from "./camera";
import { renderer } from "./renderer";

const animation = (time: number): void => {
  earth.rotation.x = time / 2000;
  earth.rotation.y = time / 1000;

  renderer.render(scene, camera);
};

export { animation };
