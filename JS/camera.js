function createCamera() {
      'use strict';  
      camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 750;
      camera.lookAt(scene.position);
}
