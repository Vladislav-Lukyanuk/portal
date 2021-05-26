import * as THREE from "three";
import textureUrl from "./textures/earth_texture.jpg";

const geometry = new THREE.SphereGeometry(40, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const EARTH_DISTANCE_FROM_SUN = 900;
const EARTH_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 365;
const EARTH_ROTATION_PERIOD_IN_HOURS = 24;

const earth = new THREE.Mesh(geometry, material);

export {
  earth,
  EARTH_DISTANCE_FROM_SUN,
  EARTH_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  EARTH_ROTATION_PERIOD_IN_HOURS,
};
