function createCamera() {
      'use strict';  
      viewSize = 1000;
      aspectRatio = window.innerWidth/window.innerHeight;
      //camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
      camera = new THREE.OrthographicCamera( aspectRatio*viewSize/ -2, aspectRatio*viewSize / 2, viewSize / 2, viewSize / -2, 1, 1000);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 500;
      //scene.position.y = -50;
      camera.lookAt(scene.position);
      scene.add(camera);
}
