var aliensGap = 70; //space between each alien
var enemyLines = 4;
var enemiesPerLine = 4;
var contAlien = 8;
var contSquid = 8;
var k = 0;
function createAlienSquad(x, y, z) {
	var i, j;
	for (i = 1; i <= enemyLines; i++){
		for(j = 1; j <= enemiesPerLine; j++){
			var random = Math.random() * 100;
			if((random < 50 || contSquid == 0) && contAlien != 0){
				enemies[k] = createAlien(x + (aliensGap*j), y + (aliensGap*i), z);
				k++;
				contAlien--;
			}
			else{
				enemies[k] = createSquid(x + (aliensGap*j), y + (aliensGap*i), z);
				k++;
				contSquid--;
			}
		}
	}
	console.log("# of aliens: "+(8-contAlien));
	console.log("# of squids: "+(8-contSquid));
}


function createBackground(){
	background = new THREE.Object3D();
	var texture = new THREE.TextureLoader().load( "js/background.jpg" );
	var material = new THREE.MeshBasicMaterial({ transparent: false, map: texture });
	var geometry1 = new THREE.CubeGeometry(1400, 1, 800, 32, 32);
	var mesh1 = new THREE.Mesh(geometry1, material);
	var geometry2 = new THREE.CubeGeometry(1, 1000, 800, 32, 32);
	var mesh2 = new THREE.Mesh(geometry2, material);
	var mesh3 = new THREE.Mesh(geometry2, material);
	mesh1.position.set(0,600,300);
	mesh2.position.set(-750,0,300);
	mesh3.position.set(750,0,300);
	mesh2.rotateX((90* Math.PI)/180);
	mesh3.rotateX((90* Math.PI)/180);
	background.add(mesh1);
	background.add(mesh2);
	background.add(mesh3);
	scene.add(background);
}

function createYouLose() {
	youLose = new THREE.Object3D();
	var texture = new THREE.TextureLoader().load( "js/You_Lose.png" );
	var material = new THREE.MeshBasicMaterial({ transparent: false, map: texture });
	var geometry = new THREE.CubeGeometry(500, 300, 1);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(0, 0, 30);
	youLose.add(mesh);
	scene.add(youLose);
}

function createYouWin() {
	youWin = new THREE.Object3D();
	var texture = new THREE.TextureLoader().load( "js/You_Win.png" );
	var material = new THREE.MeshBasicMaterial({ transparent: false, map: texture });
	var geometry = new THREE.CubeGeometry(457, 127, 1);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(0, 0, 30);
	youWin.add(mesh);
	scene.add(youWin);
}

function createYouPaused() {
	youPaused = new THREE.Object3D();
	var texture = new THREE.TextureLoader().load( "js/Paused.jpg" );
	var material = new THREE.MeshBasicMaterial({ transparent: true, map: texture });
	var geometry = new THREE.CubeGeometry(500, 100, 1);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(0, 0, 30);
	youPaused.add(mesh);
	scene.add(youPaused);
}

function createLivesSector() {


	scene2 = new THREE.Scene();
	camera4 = camera = new THREE.OrthographicCamera( 200/ -2, 200 / 2, 200 / 2, 200 / -2, 1, 1000);
	camera4.position.x = 0;
	camera4.position.y = 0;
	camera4.position.z = 500;
	scene2.add(camera);
	camera4.position.copy(camera.position);
	camera4.lookAt(scene2.position);
	//scene2.add(new THREE.AxisHelper(100));
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();
	//scene.add(new THREE.AxisHelper(100));
	aliensGap = 70; //space between each alien
	enemyLines = 4;
	enemiesPerLine = 4;
	contAlien = 8;
	contSquid = 8;
	k = 0;

	createAlienSquad(-190, 0, 0);
	createShip(0, -400 ,0);
	createBullet();
	createPlayField();
	createPlayFieldBorders();
	createBackground();
	createSpotLight();
	createLivesSector();
	createShipLives(-60, -50, 0); 
	//createYouLose();
	//createYouWin();
}
