import * as THREE from "three";
import textureUrl from "./textures/saturn_texture.jpg";

const geometry = new THREE.SphereGeometry(160, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const SATURN_DISTANCE_FROM_SUN = 2000;
const SATURN_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 254040;
const SATURN_ROTATION_PERIOD_IN_HOURS = 11;

const saturn = new THREE.Mesh(geometry, material);

export {
  saturn,
  SATURN_DISTANCE_FROM_SUN,
  SATURN_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  SATURN_ROTATION_PERIOD_IN_HOURS,
};
