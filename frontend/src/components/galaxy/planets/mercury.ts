import * as THREE from "three";
import textureUrl from "./textures/mercury_texture.jpg";

const geometry = new THREE.SphereGeometry(20, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const MERCURY_DISTANCE_FROM_SUN = 500;
const MERCURY_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 88;
const MERCURY_ROTATION_PERIOD_IN_HOURS = 1407;

const mercury = new THREE.Mesh(geometry, material);

export {
  mercury,
  MERCURY_DISTANCE_FROM_SUN,
  MERCURY_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  MERCURY_ROTATION_PERIOD_IN_HOURS,
};
