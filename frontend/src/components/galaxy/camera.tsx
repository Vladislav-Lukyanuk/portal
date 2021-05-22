import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(100, 1, 0.01, 100);

camera.position.z = 1;

const setCameraAspect = (width: number, height: number): void => {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

export { camera, setCameraAspect };
