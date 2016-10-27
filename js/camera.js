function createCamera1() {
      'use strict';  
      viewSize = 1000;
      aspectRatio = window.innerWidth/window.innerHeight;
      //camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
      camera = new THREE.OrthographicCamera( aspectRatio*viewSize/ -2, aspectRatio*viewSize / 2, viewSize / 2, viewSize / -2, 1, 1000);
	  camera1 = true;
	  camera2 = false;
	  camera3 = false;
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 500;
      camera.lookAt(scene.position);
      scene.add(camera);
}



function createCamera2() {
      'use strict';  
      viewSize = 1000;
      aspectRatio = window.innerWidth/window.innerHeight;
	  
	  camera = new THREE.PerspectiveCamera(90, aspectRatio, 0.1, 2000);
	  camera1 = false;
	  camera2 = true;
	  camera3 = false;
      camera.position.x = 0;
      camera.position.y = -525;
      camera.position.z = 450;
      camera.lookAt(scene.position);
      scene.add(camera);
}




function createCamera3() {
      'use strict';  
      viewSize = 1000;
      aspectRatio = window.innerWidth/window.innerHeight;

	  camera = new THREE.PerspectiveCamera(90, aspectRatio, 0.1, 2000);
	  camera1 = false;
	  camera2 = false;
	  camera3 = true;
      ship.add(camera);
	  camera.position.x = 0;
      camera.position.y = -150;
      camera.position.z = 400;
	  camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), 1,57);
}