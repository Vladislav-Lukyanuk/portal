import * as THREE from "three";
import textureUrl from "./earth_texture.jpg";

const geometry = new THREE.SphereGeometry(0.2, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const earth = new THREE.Mesh(geometry, material);

export { earth };
