import * as THREE from "three";
import textureUrl from "./textures/mars_texture.jpg";

const geometry = new THREE.SphereGeometry(20, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const MARS_DISTANCE_FROM_SUN = 1100;
const MARS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 687;
const MARS_ROTATION_PERIOD_IN_HOURS = 25;

const mars = new THREE.Mesh(geometry, material);

export {
  mars,
  MARS_DISTANCE_FROM_SUN,
  MARS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  MARS_ROTATION_PERIOD_IN_HOURS,
};
