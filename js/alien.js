function addAlienPart(obj, x,y,z, sizex,sizey,sizez){
	var material = new THREE.MeshBasicMaterial({color:0x00ff00});
	var geometry = new THREE.CubeGeometry(sizex, sizey, sizez);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}
function createAlien(x, y, z) {
	'use strict';
	alien = new THREE.Object3D();

    addAlienPart(alien, -19, -5, 0, 4, 16, 20);
    addAlienPart(alien, 20, -5, 0, 4, 16, 20);
    addAlienPart(alien, 0, 0, 0, 36, 4, 20);
    addAlienPart(alien, -12, -5, 0, 4, 8, 20);
    addAlienPart(alien, -6, -10, 0, 8, 4, 20);
    addAlienPart(alien, 12, -5, 0, 4, 8, 20);
    addAlienPart(alien, 6, -10, 0, 8, 4, 20);
    addAlienPart(alien, -14, 4, 0, 8, 4, 20);
    addAlienPart(alien, 14, 4, 0, 8, 4, 20);
    addAlienPart(alien, 0, 8, 0, 28, 4, 20);
    addAlienPart(alien, 0, 12, 0, 20, 4, 20);
    addAlienPart(alien, 0, 16, 0, 12, 4, 20);
    addAlienPart(alien, 0, 4, 0, 12, 4, 20);

    //alien.scale.set(2, 2, 0);
    scene.add(alien);

    alien.position.x = x;
    alien.position.y = y;
    alien.position.z = z;
    var movementx = (Math.floor((Math.random() * 3) + 1)) - 2;
    var movementy = (Math.floor((Math.random() * 3) + 1)) - 2;

    var results = [alien, movementx, movementy];

    return results;
}