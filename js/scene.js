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

function createScene() {
	'use strict';
	scene = new THREE.Scene();
	//scene.add(new THREE.AxisHelper(100));


	createAlienSquad(-190, 0, 0);
	createShip(0, -400 ,0);
	createBullet();
	createPlayField();
	createPlayFieldBorders();
}