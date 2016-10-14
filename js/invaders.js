var camera, scene, renderer;
var ship, squid, alien;
var squidscale = 4;
var momentaneousAcceleration = 0;
var startVelocity = 1;
var maximumVelocity = 15;
var date;
var timeBefore;
var timeNow;
var timeDelta;
var contador = 0;

function render() {
	'use strict';
	renderer.render(scene, camera);
}

function onResize() {
	'use strict';
	 	renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth/window.innerHeight;
		camera.updateProjectionMatrix();
}

function shipMovement() {
	if (window.isLeftDown || window.isRightDown) {
		date = new Date();
		timeNow = date.getTime();
		timeDelta = (timeNow - timeBefore);
		contador += timeDelta;
		timeBefore = timeNow;
		//console.log("Contador: " + contador);
		if(window.isLeftDown && window.isRightDown) momentaneousAcceleration = 0;
		if (contador > 133) { 
			if(momentaneousAcceleration <= maximumVelocity)
			{
				momentaneousAcceleration = momentaneousAcceleration + 1;
			}
			contador = 0;}
		
		if(window.isLeftDown && ship.position.x > -700) {
			//console.log("ship position x: " + ship.position.x);
			console.log("velocity: "+momentaneousAcceleration);
			ship.position.x -=  momentaneousAcceleration;

		}
		if(window.isRightDown && ship.position.x < 700) {
			//console.log("ship position x: " + ship.position.x);
			console.log("velocity: "+momentaneousAcceleration);	
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

function animate() {
	'use strict';
	shipMovement();

	render();
	requestAnimationFrame(animate);
}

function init() {
       'use strict';
       renderer = new THREE.WebGLRenderer();
       renderer.setSize(window.innerWidth, window.innerHeight);
       document.body.appendChild(renderer.domElement);

       createScene();
	   createCamera();

       window.addEventListener("resize", onResize, false);
       window.addEventListener("keydown", onKeyDown);
       window.addEventListener("keyup", onKeyUp);
}

