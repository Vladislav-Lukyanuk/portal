import * as THREE from "three";
import textureUrl from "./textures/saturn_texture.jpg";

const geometry = new THREE.SphereGeometry(160, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const saturn = new THREE.Mesh(geometry, material);

export { saturn };
