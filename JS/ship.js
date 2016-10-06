function addShipBase1(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(40, 30, 0);
      var mesh = new THREE.Mesh(geometry, material);
        
        obj.add(mesh);
}

function addShipBase2(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(40, 30, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
        
        obj.add(mesh);
}

function addShipWeaponMount(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(60, 6, 0);
      mesh.position.set(x, y, z);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
        
        obj.add(mesh});


function addShipWeaponSupport(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(20, 20, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
        
        obj.add(mesh);
}

function addShipWeaponEnd(obj, x, y, z, material) {
      'use strict';
      var geometry = new THREE.CubeGeometry(8, 8, 0);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
        
        obj.add(mesh);
}

function createShip(x, y, z) {
      'use strict';     
      ship = new THREE.Object3D();
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
      
      addShipBase1(ship, -20, 0, 0, material);
      addShipBase2(ship, 20, 0, 0, material);
        addShipWeaponMount(ship, 0, 18, 0, material);
        addShipWeaponSupport(ship, 0, 26, 0, material);
        addShipWeaponEnd(ship, 0, 40, 0, material);
      
      scene.add(ship);
      
      ship.position.x = x;
      ship.position.y = y;
      ship.position.z = z;
}