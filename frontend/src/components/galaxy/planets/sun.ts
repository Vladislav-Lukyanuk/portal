import * as THREE from "three";
import textureUrl from "./textures/sun_texture.jpg";

const geometry = new THREE.SphereGeometry(300, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const sun = new THREE.Mesh(geometry, material);

export { sun };
