import * as THREE from "three";
import textureUrl from "./textures/neptune_texture.jpg";

const geometry = new THREE.SphereGeometry(60, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const NEPTUNE_DISTANCE_FROM_SUN = 2500;
const NEPTUNE_ROTATION_PERIOD_AROUND_SUN_IN_HOURS = 1445400;
const NEPTUNE_ROTATION_PERIOD_IN_HOURS = 16;

const neptune = new THREE.Mesh(geometry, material);

export {
  neptune,
  NEPTUNE_DISTANCE_FROM_SUN,
  NEPTUNE_ROTATION_PERIOD_AROUND_SUN_IN_HOURS,
  NEPTUNE_ROTATION_PERIOD_IN_HOURS,
};
