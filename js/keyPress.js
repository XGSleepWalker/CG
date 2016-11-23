window.canFire = true;
window.NToggle = true;
window.CToggle = true;
window.GToggle = true;
window.LToggle = true;
window.HToggle = true;
window.SToggle = true;
window.wireframe = false;

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
				window.wireframe = !window.wireframe;
			}
			});
			break;
		case 66: //B
			if(window.canFire) {
				loadBullet();
				window.canFire = false;
			}
			break;
		case 71: //G
			if(window.GToggle){
				shadingChangeToggle();
				window.GToggle = false;
			}
			break;
		case 76: //L
			if(window.LToggle){
				calcLightToggle();
				window.LToggle = false;
			}
			break;
		case 78: //N
			if(window.NToggle) {
				directionalLightToggle();
				window.NToggle = false;
			}
			break;
		case 67: //C
			if(window.CToggle) {
				pointLightToggle();
				window.CToggle = false;
			}
			break;
		case 72: //H
			if (window.HToggle) {
				spotLightToggle();
				window.HToggle = false;
			}
			break;
		case 83: //S
			if (window.SToggle) {
				pause();
				window.SToggle = false;
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
			break;
		case 71:
			window.GToggle = true;
			break;
		case 76:
			window.LToggle = true;
			break;
		case 78:
			window.NToggle = true;
			break;
		case 67:
			window.CToggle = true;
			break;
		case 72:
			window.HToggle = true;
			break;
		case 83:
			window.SToggle = true;
			break;
	}
}