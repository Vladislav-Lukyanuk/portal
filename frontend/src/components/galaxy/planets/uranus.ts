import * as THREE from "three";
import textureUrl from "./textures/uranus_texture.jpg";

const geometry = new THREE.SphereGeometry(60, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const URANUS_DISTANCE_FROM_SUN = 2300;
const URANUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 735840;
const URANUS_ROTATION_PERIOD_IN_HOURS = 17;

const uranus = new THREE.Mesh(geometry, material);

export {
  uranus,
  URANUS_DISTANCE_FROM_SUN,
  URANUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  URANUS_ROTATION_PERIOD_IN_HOURS,
};
