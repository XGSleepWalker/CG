function addSquidParts(obj, x,y,z, sizex, sizey, sizez){
	var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
	var geometry = new THREE.CubeGeometry(sizex, sizey, sizez);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function createSquid(x, y, z){
	'use strict';
	squid = new THREE.Object3D();

	addSquidParts(squid, 14,28,0, 2*squidscale,1*squidscale,0); // Head part 1
	addSquidParts(squid, 14,24,0, 4*squidscale,1*squidscale,0); // Head part 2
	addSquidParts(squid, 14,20,0, 6*squidscale,1*squidscale,0); // Head part 3
	addSquidParts(squid, 2,16,0, 2*squidscale,1*squidscale,0); // Eyes, left side
	addSquidParts(squid, 14,16,0, 3*squidscale,1*squidscale,0); // Eyes, center side
	addSquidParts(squid, 26,16,0, 2*squidscale,1*squidscale,0); // Eyes, right side
	addSquidParts(squid, 14,12,0, 8*squidscale,1*squidscale,0); // Body base
	addSquidParts(squid, 8,8,0, 1*squidscale,1*squidscale,0); //  Legs Layer 1, left side
	addSquidParts(squid, 20,8,0, 1*squidscale,1*squidscale,0); //  Legs Layer 1, right side
	addSquidParts(squid, 4,4,0, 1*squidscale,1*squidscale,0); //  Legs Layer 2, left side
	addSquidParts(squid, 14,4,0, 2*squidscale,1*squidscale,0); // Legs Layer 2, center side
	addSquidParts(squid, 24,4,0, 1*squidscale,1*squidscale,0); //  Legs Layer 2, right side
	addSquidParts(squid, 0,0,0, 1*squidscale,1*squidscale,0); //  Legs Layer 3, Left-most side
	addSquidParts(squid, 8,0,0, 1*squidscale,1*squidscale,0); //  Legs Layer 3, left-center side
	addSquidParts(squid, 20,0,0, 1*squidscale,1*squidscale,0); //  Legs Layer 3, right-center side
	addSquidParts(squid, 28,0,0, 1*squidscale,1*squidscale,0); //  Legs Layer 3, right-most side

	scene.add(squid);

	squid.position.x = x;
	squid.position.y = y;
	squid.position.z = z;
}