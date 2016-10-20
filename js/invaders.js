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
var contador = 0;
var clock;

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
		createCamera();
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
				console.log("velocity: "+momentaneousAcceleration);
				momentaneousAcceleration = momentaneousAcceleration + 1;
			}
			contador -= 66;
		}
	
		
		if(window.isLeftDown && ship.position.x > -700) {
			//console.log("ship position x: " + ship.position.x);
			//console.log("velocity: "+momentaneousAcceleration);
			ship.position.x -=  momentaneousAcceleration;

		}
		if(window.isRightDown && ship.position.x < 700) {
			//console.log("ship position x: " + ship.position.x);
			//console.log("velocity: "+momentaneousAcceleration);	
			ship.position.x += momentaneousAcceleration;
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
	bullet.position.y += 30*delta;
	//con
	if (bullet.position.y >= 0) scene.remove(bullet);
}

function animate() {
	'use strict';
	//timeCount();
	var deltaN = clock.getDelta();
	shipMovement();
	if (bullet) bulletMovement(deltaN);
	requestAnimationFrame(animate);
	render();
}

function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer();
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild(renderer.domElement);

       createScene();
	   createCamera();
	   clock = new THREE.Clock;

       window.addEventListener("resize", onResize, false);
       window.addEventListener("keydown", onKeyDown);
       window.addEventListener("keyup", onKeyUp);
}

