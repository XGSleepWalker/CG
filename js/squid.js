function addSquidParts(obj, x,y,z, sizex, sizey, sizez){



	var material = new THREE.MeshPhongMaterial({color: 0xff0000});
	var geometry = new THREE.CubeGeometry(sizex, sizey, sizez);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function createSquid(x, y, z){
	'use strict';
	squid = new THREE.Object3D();
	squid.name = "squid";

	addSquidParts(squid, 0,16,0, 2*squidscale,1*squidscale,5*squidscale); // Head part 1
	addSquidParts(squid, 0,12,0, 4*squidscale,1*squidscale,5*squidscale); // Head part 2
	addSquidParts(squid, 0,8,0, 6*squidscale,1*squidscale,5*squidscale); // Head part 3
	addSquidParts(squid, -12,4,0, 2*squidscale,1*squidscale,5*squidscale); // Eyes, left side
	addSquidParts(squid, 0,4,0, 2.5*squidscale,1*squidscale,5*squidscale); // Eyes, center side
	addSquidParts(squid, 12,4,0, 2*squidscale,1*squidscale,5*squidscale); // Eyes, right side
	addSquidParts(squid, 0,0,0, 8*squidscale,1*squidscale,5*squidscale); // Body base
	addSquidParts(squid, -6,-4,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 1, left side
	addSquidParts(squid, 6,-4,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 1, right side
	addSquidParts(squid, -10,-8,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 2, left side
	addSquidParts(squid, 0,-8,0, 2*squidscale,1*squidscale,5*squidscale); // Legs Layer 2, center side
	addSquidParts(squid, 10,-8,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 2, right side
	addSquidParts(squid, -14,-12,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 3, Left-most side
	addSquidParts(squid, -6,-12,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 3, left-center side
	addSquidParts(squid, 6,-12,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 3, right-center side
	addSquidParts(squid, 14,-12,0, 1*squidscale,1*squidscale,5*squidscale); //  Legs Layer 3, right-most side

	//squid.scale.set(2, 2, 2);
	scene.add(squid);

	squid.position.x = x;
	squid.position.y = y;
	squid.position.z = z;
	var movementx = (Math.floor((Math.random() * 3) + 1)) - 2;
	var movementy = (Math.floor((Math.random() * 3) + 1)) - 2;

	
	while (movementx == 0 && movementy == 0) {
		movementx = (Math.floor((Math.random() * 3) + 1)) - 2;
		movementy = (Math.floor((Math.random() * 3) + 1)) - 2;	
	}

	var results = [squid, movementx, movementy];

	return results;

}


