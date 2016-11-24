var camera, scene, renderer;
var scene2, renderer2, container;
var viewSize, aspectRatio;
var camera1, camera2, camera3, camera4;
var ship, squid, alien, bullet;
var pointLights = [];
var squidscale = 4;
var date;
var timeBefore;
var timeNow;
var timeDelta;
var isPaused;
var clock;
var maxBulletsNumber = 10;
var directionalLight;
var playField;
var playFieldBorder;
var spotLight;
var youLose;
var youWin;
var youPaused;
var activeAliens;
var shipLivesCounter;
var shipLives = [];
var momentaneousAcceleration;
var startVelocity;
var maximumVelocity;
var bullets = [];
var enemies = [];
var activeBullets = [];
var contador;


function render() {
	'use strict';
	renderer.render(scene, camera);
	renderer2.render(scene2, camera4);
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
/*
function timeCount() {
	date = new Date();
	timeNow = date.getTime();
	if (!timeBefore) timeBefore = timeNow;
	timeDelta = timeNow - timeBefore;
	contador += timeDelta;
	timeBefore = timeNow;
}
*/

function shipMovement(delta) {
	if (window.isLeftDown || window.isRightDown) {		
		if(window.isLeftDown && window.isRightDown) delta = 0;
		
		if(window.isLeftDown && ship.position.x > -650) {
			ship.position.x -=  500*delta;
			spotLight.target.updateMatrixWorld();
		}
		if(window.isRightDown && ship.position.x < 650) {
			ship.position.x += 500*delta;
			spotLight.target.updateMatrixWorld();
		}
	}
	else if(window.isLeftUp){
		delta = 0;
	}
	else if(window.isRightUp){
		delta = 0;
	}

}

function bulletMovement(delta) {
	for ( var i = 0; i < maxBulletsNumber; i++) {
		
		if (activeBullets[i] == 1) {
			//console.log("bullet position: " + bullets[0].position.y);
			bullets[i].position.y += 300*delta;
			if (bullets[i].position.y >= 477) { 
				scene.remove(bullets[i]);
				activeBullets[i] = 0;
			}
		}
		
	}
	
}


function enemyMovement(delta){
	for ( var i = 0; i < enemies.length; i++){
		enemies[i][0].position.x += 125*delta*enemies[i][1];
		enemies[i][0].position.y += 125*delta*enemies[i][2];
	}
}


function animate() {
	'use strict';
	//timeCount();
	var deltaN = clock.getDelta();
	if (isPaused) deltaN = 0;
	checkCollisionShip_Bullets();
	checkCollisionAliens();
	shipMovement(deltaN);
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

function checkCollisionShip_Bullets(){
	for(i = 0; i < enemies.length; i++){
		if (hasCollision(enemies[i][0],ship,i)){
			enemies[i][0].position.x = 2000;
			scene.remove(enemies[i][0]);
			activeAliens -= 1;
			console.log("removed ship");
			scene2.remove(shipLives[shipLivesCounter-1]);
			shipLivesCounter -= 1;
			if(shipLivesCounter <= 0) {
				// press R to restart
				pause();
				createYouLose();
			}
		}
		for(j = 0; j < bullets.length; j++){
			if(hasCollision(enemies[i][0],bullets[j],i)){
				enemies[i][0].position.x = 2000;
				bullets[j].position.x = -2000;
				activeAliens -= 1;
				scene.remove(enemies[i][0]);
				scene.remove(bullets[j]);
				activeBullets[j] = 0;
				console.log(activeAliens);
				if(activeAliens <= 0) {
					// press R to restart
					pause();
					createYouWin();
				}
			}
		}
	}
}

function pause() {
	isPaused = !isPaused;
	if (isPaused && shipLivesCounter > 0 && activeAliens > 0 ) createYouPaused();
	else if (!isPaused && shipLivesCounter > 0 && activeAliens > 0) scene.remove(youPaused);
}

function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer();
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild(renderer.domElement);
	   container = document.getElementById('lives');
	   renderer2 = new THREE.WebGLRenderer( { alpha: true } );
	   renderer2.setClearColor( 0x000000, 0 );
	   renderer2.setSize( window.innerWidth, window.innerHeight );
	   container.appendChild( renderer2.domElement );
	   variableinit();
       window.addEventListener("resize", onResize, false);
       window.addEventListener("keydown", onKeyDown);
       window.addEventListener("keyup", onKeyUp);
}
function variableinit(){
	activeAliens = 16;
	shipLivesCounter = 4;
	shipLives = [];
	momentaneousAcceleration = 0;
	startVelocity = 1;
	maximumVelocity = 15;
	bullets = [];
	enemies = [];
	activeBullets = [];
	contador = 0;
	isPaused = false;
	createScene();
	createCamera1();
	createDirectionalLight();
	createPointLight();
	clock = new THREE.Clock;

}
