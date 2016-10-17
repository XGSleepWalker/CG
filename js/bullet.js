function createBullet(x, y, z) {
	'use strict';

	bullet = new THREE.Object3D();
	var material = new THREE.MeshBasicMaterial({ color: 0xff8000});
	var geometry = new THREE.CubeGeometry(1.5, 3, 1);
	var mesh = new THREE.Mesh(geometry, material);
	bullet.add(mesh);
	bullet.scale.set(4, 4, 4);
	scene.add(bullet);

	bullet.position.x = x;
	bullet.position.y = y;
	bullet.position.z = z;
	//scene.remove(bullet);
}