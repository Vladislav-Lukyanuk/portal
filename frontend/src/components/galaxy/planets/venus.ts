import * as THREE from "three";
import textureUrl from "./textures/venus_texture.jpg";

const geometry = new THREE.SphereGeometry(40, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const VENUS_DISTANCE_FROM_SUN = 700;
const VENUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 5400;
const VENUS_ROTATION_PERIOD_IN_HOURS = 2784;

const venus = new THREE.Mesh(geometry, material);

export {
  venus,
  VENUS_DISTANCE_FROM_SUN,
  VENUS_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  VENUS_ROTATION_PERIOD_IN_HOURS,
};
