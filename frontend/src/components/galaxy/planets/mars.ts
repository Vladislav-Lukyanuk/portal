import * as THREE from "three";
import textureUrl from "./textures/mars_texture.jpg";

const geometry = new THREE.SphereGeometry(20, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const mars = new THREE.Mesh(geometry, material);

export { mars };
