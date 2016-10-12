function addSquidParts(obj, x,y,z, sizex, sizey, sizez){
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
	var geometry = new THREE.CubeGeometry(sizex, sizey, sizez);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function createSquid(x, y, z){
	'use strict';
	alien = new THREE.Object3D();
	addSquidParts(alien, 14,28,0, 2*alienscale,1*alienscale,0); // Head part 1
	addSquidParts(alien, 14,24,0, 4*alienscale,1*alienscale,0); // Head part 2
	addSquidParts(alien, 14,20,0, 6*alienscale,1*alienscale,0); // Head part 3
	addSquidParts(alien, 2,16,0, 2*alienscale,1*alienscale,0); // Eyes, left side
	addSquidParts(alien, 14,16,0, 3*alienscale,1*alienscale,0); // Eyes, center side
	addSquidParts(alien, 26,16,0, 2*alienscale,1*alienscale,0); // Eyes, right side
	addSquidParts(alien, 14,12,0, 8*alienscale,1*alienscale,0); // Body base
	addSquidParts(alien, 8,8,0, 1*alienscale,1*alienscale,0); //  Legs Layer 1, left side
	addSquidParts(alien, 20,8,0, 1*alienscale,1*alienscale,0); //  Legs Layer 1, right side
	addSquidParts(alien, 4,4,0, 1*alienscale,1*alienscale,0); //  Legs Layer 2, left side
	addSquidParts(alien, 14,4,0, 2*alienscale,1*alienscale,0); // Legs Layer 2, center side
	addSquidParts(alien, 24,4,0, 1*alienscale,1*alienscale,0); //  Legs Layer 2, right side
	addSquidParts(alien, 0,0,0, 1*alienscale,1*alienscale,0); //  Legs Layer 3, Left-most side
	addSquidParts(alien, 8,0,0, 1*alienscale,1*alienscale,0); //  Legs Layer 3, left-center side
	addSquidParts(alien, 20,0,0, 1*alienscale,1*alienscale,0); //  Legs Layer 3, right-center side
	addSquidParts(alien, 28,0,0, 1*alienscale,1*alienscale,0); //  Legs Layer 3, right-most side

	scene.add(alien);
	alien.position.x = x;
	alien.position.y = y;
	alien.position.z = z;
}