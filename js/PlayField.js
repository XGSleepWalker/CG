function createPlayField() {
	var playField = new THREE.Object3D();
    playField.name = "playField";
	var material = new THREE.MeshPhongMaterial({color:0x096790});
	var geometry = new THREE.CubeGeometry(1400, 1000, 1);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(0,0,-21);
	playField.add(mesh);
	scene.add(playField);
}