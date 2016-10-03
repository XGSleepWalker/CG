var camera, scene, renderer;

function render() {
      'use strict';
      renderer.render(scene, camera);
}

function addShip(obj, x, y, z) {
      'use strict';
      var geometry = new THREE.CubeGeometry(60, 2, 20);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
}

function createShip(x, y, z) {
      'use strict';
      var ship = new THREE.Object3D();
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
      var geometry = new THREE.CubeGeometry(60, 2, 20);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 0);
      
      ship.add(mesh);
      
      //addShip(ship, 0, 0, 0);
      
      scene.add(ship);
      
      ship.position.x = x;
      ship.position.y = y;
      ship.position.z = z;
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
      scene.add(new THREE.AxisHelper(10));
      
      createShip(0, 0 ,0);
}

function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer();
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild( renderer.domElement );
       
       createScene();
       createCamera();
       render();
}
