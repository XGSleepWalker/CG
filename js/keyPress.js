window.canFire = true;
window.lightToggle = true;
function onKeyDown(event) {
	'use strict';
	switch (event.keyCode) {
		case 37: //Left Arrow
			window.isLeftDown = true;
			window.isLeftUp = false;
			date = new Date();
			timeBefore = date.getTime();
			break;
		case 39: //Right Arrow
			window.isRightDown = true;
			window.isRightUp = false;
			date = new Date();
			timeBefore = date.getTime();
			break;
		case 49: //1
			createCamera1();
			break;
		case 50: //2
			createCamera2();
			break;
		case 51: //3
			createCamera3();
			break;
		case 65: //A
			scene.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				node.material.wireframe = !node.material.wireframe;
				console.log(node.parent);
			}
			});
			break;
		case 66: //B
			if(window.canFire) {
				loadBullet();
				window.canFire = false;
			}
			break;
		case 78: //N
			if(window.lightToggle) {
				directionalLightToggle();
				window.lightToggle = false;
			}
			break;
	}
}

function onKeyUp(event) {
	'use strict';
	switch (event.keyCode) {
		case 37: //Left Arrow
			window.isLeftDown = false;
			window.isLeftUp = true;
			break;
		case 39: //Right Arrow
			window.isRightDown = false;
			window.isRightUp = true;
			break;
		case 66:
			window.canFire = true;
		case 78:
			window.lightToggle = true;
	}
}