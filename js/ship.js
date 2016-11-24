function addShipPart(obj, x, y, z, sizex, sizey, sizez) {
    'use strict';

    var triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, sizey/2, sizez/2)); //0
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, -sizey/2, sizez/2)); //1
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2,-sizey/2, sizez/2)); //2
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2, sizey/2, sizez/2)); //3
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, sizey/2, -sizez/2)); //4
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, -sizey/2, -sizez/2)); //5
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2,-sizey/2, -sizez/2)); //6
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2, sizey/2, -sizez/2)); //7
	triangleGeometry.vertices.push(new THREE.Vector3(0,0,0)); //8
	
    triangleGeometry.faces.push(new THREE.Face3(0,1,2));
    triangleGeometry.faces.push(new THREE.Face3(0,1,3));
    triangleGeometry.faces.push(new THREE.Face3(4,5,6));
    triangleGeometry.faces.push(new THREE.Face3(4,5,7));
    triangleGeometry.faces.push(new THREE.Face3(1,5,6));
    triangleGeometry.faces.push(new THREE.Face3(1,2,6));
    triangleGeometry.faces.push(new THREE.Face3(0,4,7));
    triangleGeometry.faces.push(new THREE.Face3(0,3,7));
    triangleGeometry.faces.push(new THREE.Face3(1,5,4));
    triangleGeometry.faces.push(new THREE.Face3(1,0,4));
    triangleGeometry.faces.push(new THREE.Face3(2,6,7));
    triangleGeometry.faces.push(new THREE.Face3(2,3,7));
	triangleGeometry.faces.push(new THREE.Face3(8,6,7));
	triangleGeometry.faces.push(new THREE.Face3(8,7,6));
	triangleGeometry.faces.push(new THREE.Face3(8,2,3));
	triangleGeometry.faces.push(new THREE.Face3(8,3,2));
    triangleGeometry.faces.push(new THREE.Face3(0,2,1));
    triangleGeometry.faces.push(new THREE.Face3(0,3,1));
    triangleGeometry.faces.push(new THREE.Face3(4,6,5));
    triangleGeometry.faces.push(new THREE.Face3(4,7,5));
    triangleGeometry.faces.push(new THREE.Face3(1,6,5));
    triangleGeometry.faces.push(new THREE.Face3(1,6,2));
    triangleGeometry.faces.push(new THREE.Face3(0,7,4));
    triangleGeometry.faces.push(new THREE.Face3(0,7,3));
    triangleGeometry.faces.push(new THREE.Face3(1,4,5));
    triangleGeometry.faces.push(new THREE.Face3(1,4,0));
    triangleGeometry.faces.push(new THREE.Face3(2,7,6));
    triangleGeometry.faces.push(new THREE.Face3(2,7,3));
	
	triangleGeometry.computeFaceNormals();
    var triangleMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, side:THREE.DoubleSide});
    var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    triangleMesh.position.set(x,y,z);
    obj.add(triangleMesh);
}

function createShip(x, y, z) {
    'use strict';
    ship = new THREE.Object3D();
    ship.name = "ship";

    addShipPart(ship, 0, 0, 0, 80, 30, 20); //Ship Base
    addShipPart(ship, 0, 18, 0, 60, 6, 20); //Ship Weapon Mount
    addShipPart(ship, 0, 26, 0, 20, 20, 20); //Ship Weapon Support
    addShipPart(ship, 0, 40, 0, 8, 8, 12); //Ship Weapon End

    scene.add(ship);

    ship.position.x = x;
    ship.position.y = y;
    ship.position.z = z;
}

function addShipLivesPart(obj, x,y,z, sizex, sizey, sizez) {
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var geometry = new THREE.CubeGeometry(sizex, sizey, sizez);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x,y,z);
    obj.add(mesh);
}

function createShipLives(x, y, z) {
    'use strict';
    for (var i = 0; i < shipLivesCounter; i++) {
        var shipLive = new THREE.Object3D();
        addShipLivesPart(shipLive, 0, 0, 0, 80, 30, 20);
        addShipLivesPart(shipLive, 0, 18, 0, 60, 6, 20); 
        addShipLivesPart(shipLive, 0, 26, 0, 20, 20, 20); 
        addShipLivesPart(shipLive, 0, 40, 0, 8, 8, 12); 

        shipLive.scale.set(0.7, 0.7, 0.7);
        scene2.add(shipLive);

        shipLive.position.x = x + (60*i);
        shipLive.position.y = y;
        shipLive.position.z = z;
        shipLives[i] = shipLive;
    }
}