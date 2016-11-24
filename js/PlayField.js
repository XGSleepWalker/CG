function createPlayField() {
	playField = new THREE.Object3D();
    playField.name = "playField";
	var material = new THREE.MeshPhongMaterial({color:0x096790});
	var geometry = new THREE.CubeGeometry(1400, 1000, 1, 32, 32);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(0,0,-21);
	playField.add(mesh);
	scene.add(playField);
}

function addBorderPart(obj, x,y,z, sizex,sizey,sizez){
	var material = new THREE.MeshPhongMaterial({color:0x096790});
	var geometry = new THREE.CubeGeometry(sizex, sizey, sizez, 16, 16);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x,y,z);
	obj.add(mesh);
}

function createPlayFieldBorders() {
	playFieldBorder = new THREE.Object3D();
	playFieldBorder.name = "playFieldBorder";
	addBorderPart(playFieldBorder, -700, 0, 0, 10, 1000, 100);
	addBorderPart(playFieldBorder, 700, 0, 0, 10, 1000, 100);
	addBorderPart(playFieldBorder, 0, -500, 0, 1400, 10, 100);
	addBorderPart(playFieldBorder, 0, 500, 0, 1400, 10, 100);
	scene.add(playFieldBorder)
}