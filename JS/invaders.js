var camera, scene, renderer;

function render() {
      'use strict';
      renderer.render(scene, camera);
}

function createShip(x, y, z) {
      'use strict';
      var ship = new THREE.Object3D();
      material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
      
      
      
      scene.add(table);
      
      table.position.x = x;
      table.position.y = y;
      table.position.z = z;
}

function createCamera() {
      'use strict';  
      camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.x = 50;
      camera.position.y = 50;
      camera.position.z = 50;
      camera.lookAt(scene.position);
}

function createScene() {
      'use strict';
      scene = new THREE.Scene();
      scene.add(new THREE.AxistHelper(10));
}

function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer({ antialias: true });
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild( renderer.domElement );
       
       createScene();
       createCamera();
       render();
}
