function addShipPart(obj, x, y, z, sizex, sizey, sizez) {
    'use strict';
    //var geometry = new THREE.CubeGeometry(sizex, sizey, sizez);
    //var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
    //var mesh = new THREE.Mesh(geometry, material);
    //mesh.position.set(x, y, z);
    //obj.add(mesh);

    var triangleGeometry = new THREE.Geometry();

    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, sizey/2, 0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, -sizey/2,0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2,-sizey/2,0.0));
    triangleGeometry.faces.push(new THREE.Face3(0,1,2));

    var triangleMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, side:THREE.DoubleSide});
    var triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
    triangleMesh.position.set(x,y,z);
    obj.add(triangleMesh);

    triangleGeometry = new THREE.Geometry();
    triangleGeometry.vertices.push(new THREE.Vector3(-sizex/2, sizey/2, 0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2, sizey/2,0.0));
    triangleGeometry.vertices.push(new THREE.Vector3(sizex/2, -sizey/2,0.0));
    triangleGeometry.faces.push(new THREE.Face3(0,1,2));

    triangleMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, side:THREE.DoubleSide});
    triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
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