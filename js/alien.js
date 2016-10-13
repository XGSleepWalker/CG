function addAlienLeg(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(4, 16, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienBase1(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(36, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienBase2(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(8, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienMouth(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(4, 8, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead1(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(28, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead2(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(20, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead3(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(12, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createAlien(x, y, z) {
	'use strict';
	alien = new THREE.Object3D();

    addAlienLeg(alien, 0, 0, 0);
    addAlienLeg(alien, 39, 0, 0);
    addAlienBase1(alien, 19, 5, 0);
    addAlienMouth(alien, 7, 0, 0);
    addAlienBase2(alien, 13, -5, 0);
    addAlienMouth(alien, 31, 0, 0);
    addAlienBase2(alien, 25, -5, 0);
    addAlienBase2(alien, 5, 9, 0);
    addAlienBase2(alien, 33, 9, 0);
    addAlienHead1(alien, 19, 13, 0);
    addAlienHead2(alien, 19, 17, 0);
    addAlienHead3(alien, 19, 21, 0);
    addAlienHead3(alien, 19, 9, 0); 

    scene.add(alien);

    alien.position.x = x;
    alien.position.y = y;
    alien.position.z = z;
}