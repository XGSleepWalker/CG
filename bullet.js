function createBullet() {
	'use strict';
	
	var material = new THREE.MeshBasicMaterial({ color: 0xff8000});
	var geometry = new THREE.CubeGeometry(1.5, 3, 1);

	for(var i = 0; i < maxBulletsNumber; i++) {
		var bullet = new THREE.Object3D();
		var mesh = new THREE.Mesh(geometry, material);
		bullet.add(mesh);
		bullet.scale.set(4, 4, 4);
		bullets[i] = bullet;
		activeBullets[i] = 0;
		bullets[i].position.x = 1500;
		bullets[i].position.y = 1500;
		bullets[i].position.z = 1500;
	}
}

function loadBullet() {

	if (window.canFire) {
		var i = 0;
		var j = 0;
		while (j != 1 && i < maxBulletsNumber) {
			if (activeBullets[i] == 0) {
				activeBullets[i] = 1;
				bullets[i].position.x = ship.position.x;
				bullets[i].position.y = ship.position.y + 50;
				bullets[i].position.z = ship.position.z;
				scene.add(bullets[i]);
				console.log("bullet created: " + i + " " + activeBullets[i]);
				j = 1;
			}
			i++;
		}
	}
	
}
