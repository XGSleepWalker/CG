function addAlienLeg(obj, x, y, z, material) {
	'use strict';
	var geometry = new THREE.CubeGeometry(4, 16, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienBase1(obj, x, y, z, material) {
	'use strict';
	var geometry = new THREE.CubeGeometry(36, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienBase2(obj, x, y, z, material) {
	'use strict';
	var geometry = new THREE.CubeGeometry(8, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienMouth(obj, x, y, z, material) {
	'use strict';
	var geometry = new THREE.CubeGeometry(4, 8, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead1(obj, x, y, z, material) {
	'use strict';
	var geometry = new THREE.CubeGeometry(28, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead2(obj, x, y, z, material) {
	'use strict';
	var geometry = new THREE.CubeGeometry(20, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead3(obj, x, y, z, material) {
	'use strict';
	var geometry = new THREE.CubeGeometry(12, 4, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function createAlien(x, y, z) {
	'use strict';
	alien = new THREE.Object3D();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });

    addAlienLeg(alien, 0, 0, 0, material);
    addAlienLeg(alien, 40, 0, 0, material);
    addAlienBase1(alien, 20, 6, 0, material);
    addAlienMouth(alien, 8, 0, 0, material);
    addAlienBase2(alien, 14, -6, 0, material);
    addAlienMouth(alien, 32, 0, 0, material);
    addAlienBase2(alien, 26, -6, 0, material);
    addAlienBase2(alien, 6, 10, 0, material);
    addAlienBase2(alien, 34, 10, 0, material);
    addAlienHead1(alien, 20, 14, 0, material);
    addAlienHead2(alien, 20, 18, 0, material);
    addAlienHead3(alien, 21, 22, 0, material);
    addAlienHead3(alien, 21, 10, 0, material); 

    scene.add(alien);

    alien.position.x = x;
    alien.position.y = y;
    alien.position.z = z;
}