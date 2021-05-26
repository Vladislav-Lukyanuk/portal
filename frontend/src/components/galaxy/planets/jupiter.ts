import * as THREE from "three";
import textureUrl from "./textures/jupiter_texture.jpg";

const geometry = new THREE.SphereGeometry(160, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const JUPITER_DISTANCE_FROM_SUN = 1500;
const JUPITER_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 105120;
const JUPITER_ROTATION_PERIOD_IN_HOURS = 9;

const jupiter = new THREE.Mesh(geometry, material);

export {
  jupiter,
  JUPITER_DISTANCE_FROM_SUN,
  JUPITER_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  JUPITER_ROTATION_PERIOD_IN_HOURS,
};
