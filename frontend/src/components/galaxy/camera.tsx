import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(70, 1, 0.01, 10000);

camera.position.z = 2000;

const setCameraAspect = (width: number, height: number): void => {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

export { camera, setCameraAspect };
