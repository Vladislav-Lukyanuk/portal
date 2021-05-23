import * as THREE from "three";
import textureUrl from "./textures/neptune_texture.jpg";

const geometry = new THREE.SphereGeometry(60, 32, 32);
const texture = new THREE.TextureLoader().load(textureUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

const neptune = new THREE.Mesh(geometry, material);

export { neptune };
