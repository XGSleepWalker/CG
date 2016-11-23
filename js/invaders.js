var camera, scene, renderer;
var viewSize, aspectRatio;
var ship, squid, alien, bullet;
var squidscale = 4;
var momentaneousAcceleration = 0;
var startVelocity = 1;
var maximumVelocity = 15;
var date;
var timeBefore;
var timeNow;
var timeDelta;
var isPaused;
var contador = 0;
var clock;
var bullets = [];
var enemies = [];
var activeBullets = [];
var maxBulletsNumber = 10;
var camera1, camera2, camera3;
var directionalLight;
var pointLights = [];
var playField;
var playFieldBorder;
var spotLight;
var youLose;
var youWin;

function render() {
	'use strict';
	renderer.render(scene, camera);
}

function onResize() {
	'use strict';
		camera.aspect = window.innerWidth/window.innerHeight;
		aspectRatio = camera.aspect;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		if(camera1){
			createCamera1();
		}
		if(camera2){
			createCamera2();
		}
		if(camera3){
			createCamera3();
		}
}

function timeCount() {
	date = new Date();
	timeNow = date.getTime();
	if (!timeBefore) timeBefore = timeNow;
	timeDelta = timeNow - timeBefore;
	contador += timeDelta;
	timeBefore = timeNow;
}

function shipMovement() {
	if (window.isLeftDown || window.isRightDown) {		
		//console.log("Contador: " + contador);
		timeCount();
		if(window.isLeftDown && window.isRightDown) momentaneousAcceleration = 0;

		if (contador > 66) {
			if(momentaneousAcceleration <= maximumVelocity) {
				//console.log("velocity: "+momentaneousAcceleration);
				momentaneousAcceleration = momentaneousAcceleration + 1;
			}
			contador -= 66;
		}
	
		
		if(window.isLeftDown && ship.position.x > -650) {
			//console.log("ship position x: " + ship.position.x);
			//console.log("velocity: "+momentaneousAcceleration);
			ship.position.x -=  momentaneousAcceleration;
			spotLight.target.updateMatrixWorld();
		}
		if(window.isRightDown && ship.position.x < 650) {
			//console.log("ship position x: " + ship.position.x);
			//console.log("velocity: "+momentaneousAcceleration);	
			ship.position.x += momentaneousAcceleration;
			spotLight.target.updateMatrixWorld();
		}
	}
	
	else if(window.isLeftUp){
		momentaneousAcceleration = 0;
	}
	else if(window.isRightUp){
		momentaneousAcceleration = 0;
	}

}

function bulletMovement(delta) {
	for ( var i = 0; i < maxBulletsNumber; i++) {
		
		if (activeBullets[i] == 1) {
			//console.log("bullet position: " + bullets[0].position.y);
			bullets[i].position.y += 100*delta;
			if (bullets[i].position.y >= 477) { 
				scene.remove(bullets[i]);
				activeBullets[i] = 0;
			}
		}
		
	}
	
}


function enemyMovement(delta){
	for ( var i = 0; i < enemies.length; i++){
		enemies[i][0].position.x += 75*delta*enemies[i][1];
		enemies[i][0].position.y += 75*delta*enemies[i][2];
	}
}


function animate() {
	'use strict';
	//timeCount();
	var deltaN = clock.getDelta();
	if (isPaused)
		deltaN = 0;
	checkCollisionBullets();
	checkCollisionAliens();
	shipMovement();
	enemyMovement(deltaN);
	bulletMovement(deltaN);
	requestAnimationFrame(animate);
	render();
}

function checkCollisionAliens(){
	
	for(i = 0; i < enemies.length; i++){
		for(j = 0; j < enemies.length; j++){
			if(i != j){
				hasCollision(enemies[i][0],enemies[j][0],i);
			}
		}
	}
}

function checkCollisionBullets(){
	for(i = 0; i < enemies.length; i++){
		for(j = 0; j < bullets.length; j++){
			if(hasCollision(enemies[i][0],bullets[j],i)){
				enemies[i][0].position.x = 2000;
				bullets[j].position.x = -2000;
				scene.remove(enemies[i][0]);
				scene.remove(bullets[j]);
				activeBullets[j] = 0;
				scene.remove(enemies[i][0]);
				scene.remove(bullets[j]);

			}
		}
	}
}

function pause(){
	isPaused = !isPaused;
}



function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer();
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild(renderer.domElement);

       createScene();
	   createCamera1();
	   createDirectionalLight();
	   createPointLight();
	   clock = new THREE.Clock;

       window.addEventListener("resize", onResize, false);
       window.addEventListener("keydown", onKeyDown);
       window.addEventListener("keyup", onKeyUp);
}
