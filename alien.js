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
	alien = new THREE.Object3D();
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00});


	scene.add(alien);
	alien.position.x = x;
	alien.position.y = y;
	alien.position.z = z;

}