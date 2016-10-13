function createCamera() {
      'use strict';  
      //camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
      camera = new THREE.OrthographicCamera(1500 / -2, 1500 / 2, 1000 / 2, 1000 / -2, 1, 1000);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 200;
      //scene.position.y = -50;
      camera.lookAt(scene.position);
      scene.add(camera);
}
