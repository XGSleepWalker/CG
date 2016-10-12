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
	}
}