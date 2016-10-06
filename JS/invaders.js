var camera, scene, renderer;
var ship, alien;

function render() {
      'use strict';
      renderer.render(scene, camera);
}

/*function createPlayField(x, y, z) {
	'use strict';
	var material = new THREE.NoColors();
	var geometry = new THREE.BoxGeometry(x, y, z);
	var playField = new THREE.Mesh(geometry, material);
	
	scene.add(playField);
	playField.position.x = 0;
	playField.position.y = 0;
	playField.position.z = 0;
}*/

function createCamera() {
      'use strict';  
      camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 750;
      camera.lookAt(scene.position);
}

function createScene() {
      'use strict';
      scene = new THREE.Scene();
      //scene.add(new THREE.AxisHelper(10));
      
      createShip(-100, -100 ,0);
      createSquid(0, 0, 0);
      //createPlayField(getSize().innerWidth, getSize().innerHeight, 0);
}

function onResize() {
	'use strict';
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		camera.aspect = renderer.getSize().width / renderer.getSize().height;
		camera.updateProjectionMatrix();
	}

	//render();
}

function onKeyDown(event) {
	'use strict';
	switch (event.keyCode) {
		case 37: //Left Arrow
			window.isLeftDown = true;
			break;
		case 39: //Right Arrow
			window.isRightDown = true;
			break;
		case 65: //A
			scene.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				node.material.wireframe = !node.material.wireframe;
			}
			});
			break;
	}
}

function onKeyUp(event) {
	'use strict';
	switch (event.keyCode) {
		case 37: //Left Arrow
			window.isLeftDown = false;
			break;
		case 39: //Right Arrow
			window.isRightDown = false;
			break;
		case 65: //A
			window.isADown = false;
			break;
	}
}

function animate() {
	'use strict';

	if(window.isLeftDown) {
		ship.position.x -= 5;
	}
	else if(window.isRightDown) {
		ship.position.x += 5;		
	}
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
	   render(); 

       window.addEventListener("resize", onResize);   
       window.addEventListener("keydown", onKeyDown);
       window.addEventListener("keyup", onKeyUp);
}
