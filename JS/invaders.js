var camera, scene, renderer;

function render() {
      'use strict';
      renderer.render(scene, camera);
}

function addShipBase(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(80, 30, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
	  
	  obj.add(mesh);
}

function addShipWeaponMount(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(60, 6, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
	  
	  obj.add(mesh);
}

function addShipWeaponSupport(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(20, 20, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
	  
	  obj.add(mesh);
}

function addShipWeaponEnd(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(8, 8, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
	  
	  obj.add(mesh);
}

function createShip(x, y, z) {
      'use strict';	
      var ship = new THREE.Object3D();
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      
      addShipBase(ship, 0, 0, 0, material);
	  addShipWeaponMount(ship, 0, 18, 0, material);
	  addShipWeaponSupport(ship, 0, 26, 0, material);
	  addShipWeaponEnd(ship, 0, 40, 0, material);
      
      scene.add(ship);
      
      ship.position.x = x;
      ship.position.y = y;
      ship.position.z = z;
}

function createCamera() {
      'use strict';  
      camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 750;
      camera.lookAt(scene.position);
}

function createScene() {
      'use strict';
      scene = new THREE.Scene();
      //scene.add(new THREE.AxisHelper(10));
      
      createShip(-100, -100 ,0);
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
