var aliensLines = 2; //number of lines with aliens
var aliensPerLine = 4; //number of aliens in each line
var squidLines = 2; //number of lines with squids
var squidsPerLine = 4; //number of squids in each line
var aliensGap = 70; //space between each alien
var enemyLines = 4;
var enemiesPerLine = 4;
var contAlien = 8;
var contSquid = 8;

function createAlienSquad(x, y, z) {
	var i, j;
	var ySquid = y - (aliensGap*aliensLines);
	/*for (i = 1; i <= aliensLines; i++) {
		for (j = 1; j <= aliensPerLine; j++) {
			createAlien(x + (aliensGap*j), y + (aliensGap*i), z);
		}
	}

	for (i = 1; i <= squidLines; i++) {
		for (j = 1; j <= squidsPerLine; j++) {
			createSquid(x + (aliensGap*j), ySquid + (aliensGap*i), z);
		}
	}*/
	for (i = 1; i <= enemyLines; i++){
		for(j = 1; j <= enemiesPerLine; j++){
			var random = Math.random() * 100;
			if(random < 50 || contSquid == 0 && contAlien != 0){
				createAlien(x + (aliensGap*j), y + (aliensGap*i), z);
				contAlien--;
			}
			else{
				createSquid(x + (aliensGap*j), y + (aliensGap*i), z);
				contSquid--;
			}
		}
	}
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();
	//scene.add(new THREE.AxisHelper(10000));


	createAlienSquad(-190, 0, 0);
	createShip(0, -400 ,0);
	/*createSquid(-105, -70, 0);
	createSquid(-35, -70, 0);
	createSquid(35, -70, 0);
	createSquid(105, -70, 0);
	createAlien(-105, 0, 0);
	createAlien(-35, 0, 0);
	createAlien(35, 0, 0);
	createAlien(105, 0, 0);*/
	//createPlayField(getSize().innerWidth, getSize().innerHeight, 0);
}