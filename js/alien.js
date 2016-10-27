function addAlienLeg(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(4, 16, 20);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienBase1(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(36, 4, 20);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienBase2(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(8, 4, 20);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienMouth(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(4, 8, 20);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead1(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(28, 4, 20);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead2(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(20, 4, 20);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);

	obj.add(mesh);
}

function addAlienHead3(obj, x, y, z) {
	'use strict';
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
	var geometry = new THREE.CubeGeometry(12, 4, 20);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createAlien(x, y, z) {
	'use strict';
	alien = new THREE.Object3D();

    addAlienLeg(alien, -19, -5, 0);
    addAlienLeg(alien, 20, -5, 0);
    addAlienBase1(alien, 0, 0, 0);
    addAlienMouth(alien, -12, -5, 0);
    addAlienBase2(alien, -6, -10, 0);
    addAlienMouth(alien, 12, -5, 0);
    addAlienBase2(alien, 6, -10, 0);
    addAlienBase2(alien, -14, 4, 0);
    addAlienBase2(alien, 14, 4, 0);
    addAlienHead1(alien, 0, 8, 0);
    addAlienHead2(alien, 0, 12, 0);
    addAlienHead3(alien, 0, 16, 0);
    addAlienHead3(alien, 0, 4, 0); 

    //alien.scale.set(2, 2, 0);
    scene.add(alien);

    alien.position.x = x;
    alien.position.y = y;
    alien.position.z = z;
}