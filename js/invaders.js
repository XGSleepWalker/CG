var camera, scene, renderer;
var ship, squid, alien;
var squidscale = 4;
var momentaneousAcceleration = 0;
var maximumVelocity = 15;

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
	if(window.isLeftDown && window.isRightDown) momentaneousAcceleration = 0;
	else if(window.isLeftDown && ship.position.x > -500) {
		console.log("ship position x: " + ship.position.x);
		console.log("velocity: "+momentaneousAcceleration);
		if(momentaneousAcceleration<= maximumVelocity)
		{
			momentaneousAcceleration = momentaneousAcceleration + 1;
		}
		ship.position.x -=  momentaneousAcceleration;

	}
	else if(window.isRightDown && ship.position.x < 500) {
		console.log("ship position x: " + ship.position.x);
		console.log("velocity: "+momentaneousAcceleration);
		if(momentaneousAcceleration <= maximumVelocity)
		{
			momentaneousAcceleration = momentaneousAcceleration + 1;
		}
		ship.position.x += momentaneousAcceleration;
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
	setTimeout(shipMovement(), 133);

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

