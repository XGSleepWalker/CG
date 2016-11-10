function addAlienPart(obj, x,y,z, sizex,sizey,sizez){

    var triangleGeometry = new THREE.Geometry();

    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, sizey/2, 0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, -sizey/2,0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2,-sizey/2,0.0));
    triangleGeometry.faces.push(new THREE.Face3(0,1,2));

    var triangleMaterial = new THREE.MeshPhongMaterial({color: 0xff0000});
    var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    triangleMesh.position.set(x,y,z);
    obj.add(triangleMesh);

    triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, sizey/2, 0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2, sizey/2,0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2, -sizey/2,0.0));
    triangleGeometry.faces.push(new THREE.Face3(0,1,2));

    triangleMaterial = new THREE.MeshPhongMaterial({color: 0xff0000});
    triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    triangleMesh.position.set(x,y,z);
    obj.add(triangleMesh);

    //var material = new THREE.MeshPhongMaterial({color:0xff0000});
	//var geometry = new THREE.CubeGeometry(sizex, sizey, sizez);
	//var mesh = new THREE.Mesh(geometry, material);
	//mesh.position.set(x,y,z);
	//obj.add(mesh);
}
function createAlien(x, y, z) {
	'use strict';
	alien = new THREE.Object3D();
    alien.name = "alien";

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
    
    scene.add(alien);

    alien.position.x = x;
    alien.position.y = y;
    alien.position.z = z;
    var movementx = (Math.floor((Math.random() * 3) + 1)) - 2;
    var movementy = (Math.floor((Math.random() * 3) + 1)) - 2;


    while (movementx == 0 && movementy == 0) {
	   movementx = (Math.floor((Math.random() * 3) + 1)) - 2;
	   movementy = (Math.floor((Math.random() * 3) + 1)) - 2;	
   }

    var results = [alien, movementx, movementy];

    return results;
}
