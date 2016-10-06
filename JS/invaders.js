var camera, scene, renderer;
var ship;

function render() {
      'use strict';
      renderer.render(scene, camera);
}

function addShipBase1(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(40, 30, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
	  
	  obj.add(mesh);
}

function addShipBase2(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(40, 30, 0);
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
      ship = new THREE.Object3D();
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
      
      addShipBase1(ship, -20, 0, 0, material);
      addShipBase2(ship, 20, 0, 0, material);
	  addShipWeaponMount(ship, 0, 18, 0, material);
	  addShipWeaponSupport(ship, 0, 26, 0, material);
	  addShipWeaponEnd(ship, 0, 40, 0, material);
      
      scene.add(ship);
      
      ship.position.x = x;
      ship.position.y = y;
      ship.position.z = z;
}
function addSquidHead1(obj, x, y, z, material){
	var geometry = new THREE.CubeGeometry(10,5,0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);

	obj.add(mesh);

}
function addSquidHead2(obj, x, y, z, material){
	var geometry = new THREE.CubeGeometry(20,5,0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function addSquidHead3(obj, x, y, z, material){
	var geometry = new THREE.CubeGeometry(30, 5, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function addSquidEyesLeftSide(obj, x,y,z, material){
	var geometry = new THREE.CubeGeometry(10, 5, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function addSquidEyesCenterSide(obj, x,y,z, material){
	var geometry = new THREE.CubeGeometry(15, 5, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function addSquidEyesRightSide(obj, x,y,z, material){
	var geometry = new THREE.CubeGeometry(10,5,0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function createSquid(x, y, z){
	'use strict';
	var alien = new THREE.Object3D();
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00});


	scene.add(alien);
	alien.position.x = x;
	alien.position.y = y;
	alien.position.z = z;

}
/*function createPlayField(x, y, z) {
	'use strict';
	var material = new THREE.NoColors();
	var geometry = new THREE.BoxGeometry(x, y, z);
	var playField = new THREE.Mesh(geometry, material);
	
	scene.add(playField);
	playField.position.x = 0;
	playField.position.y = 0;
	playField.position.z = 0;
}*/

function createCamera() {
      'use strict';  
      camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 750;
      camera.lookAt(scene.position);
}

function createScene() 	{
      'use strict';
      scene = new THREE.Scene();
      //scene.add(new THREE.AxisHelper(10));
      
      createShip(-100, -100 ,0);
      //createPlayField(getSize().innerWidth, getSize().innerHeight, 0);
}

function onResize() {
	'use strict';
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		camera.aspect = renderer.getSize().width / renderer.getSize().height;
		camera.updateProjectionMatrix();
	}

	//render();
}

function onKeyDown(event) {
	'use strict';
	switch (event.keyCode) {
		case 37: //Left Arrow
			window.isLeftDown = true;
			break;
		case 39: //Right Arrow
			window.isRightDown = true;
			break;
		case 65: //A
			scene.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				node.material.wireframe = !node.material.wireframe;
			}
			});
			break;
	}
}

function onKeyUp(event) {
	'use strict';
	switch (event.keyCode) {
		case 37: //Left Arrow
			window.isLeftDown = false;
			break;
		case 39: //Right Arrow
			window.isRightDown = false;
			break;
		case 65: //A
			window.isADown = false;
			break;
	}
}

function animate() {
	'use strict';

	if(window.isLeftDown) {
		ship.position.x -= 5;
	}
	else if(window.isRightDown) {
		ship.position.x += 5;		
	}
	render();
	requestAnimationFrame(animate);
}

function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer();
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild(renderer.domElement);

       createScene();
	   createCamera();
	   render(); 

       window.addEventListener("resize", onResize);   
       window.addEventListener("keydown", onKeyDown);
       window.addEventListener("keyup", onKeyUp);
}
