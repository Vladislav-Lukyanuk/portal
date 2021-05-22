import * as THREE from "three";

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

const earth = new THREE.Mesh(geometry, material);

export { earth };
