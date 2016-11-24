var pointLightsNmr = 6;
var pointLightsPerLine = 3;
var pointLightsLines = 2;
var pointLightsGap = 400;
var shadingState = "phong";
var calcLight = true;


function createDirectionalLight() {
	directionalLight = new THREE.DirectionalLight( 0xffffff, 0 );
	directionalLight.position.set( 0, 0, 900 );
	scene.add( directionalLight );
}

function directionalLightToggle() {
	if (directionalLight.intensity == 1) directionalLight.intensity = 0;
	else if (directionalLight.intensity == 0) directionalLight.intensity = 1;
}

function createPointLight() {
	var i, j;
	var k = pointLightsNmr;
	for(i = 0; i < pointLightsLines; i++) {
		for(j = 0; j < pointLightsPerLine; j++) {
			pointLights[k] = new THREE.PointLight( 0xffffff, 0, 250 );
			pointLights[k].position.set(-400 + (pointLightsGap*j), 300 - (pointLightsGap*i*1.2), 20 );
			scene.add( pointLights[k] );
			//console.log("point light created: " + k);
			k--;
		}
	}
}

function pointLightToggle() {
	var i;
	for(i = 1; i < pointLights.length; i++) {
		//console.log("point light intensity: " + i + pointLights[i].intensity );
		if (pointLights[i].intensity == 6) pointLights[i].intensity = 0.3;
		else if (pointLights[i].intensity == 0.3) pointLights[i].intensity = 6;
	}
}


function calcLightToggle() {
	var i, j;
	if(calcLight){
		for(i = 0; i < enemies.length; i++){
			for(j = 0; j < (enemies[i][0].children).length; j++){
				enemies[i][0].children[j].material = new THREE.MeshBasicMaterial({color:0xff0000});
				if(window.wireframe){
						enemies[i][0].children[j].material.wireframe = true;
					}
				enemies[i][0].children[j].geometry.normalsNeedUpdate = true;
			}
		}
		for(i=0; i<ship.children.length; i++){ 
			ship.children[i].material = new THREE.MeshBasicMaterial({color:0x00ff00});
			if(window.wireframe){
					ship.children[i].material.wireframe = true;
				}
		}
		for (i = 0; i < 4; i++) {
			playFieldBorder.children[i].material = new THREE.MeshBasicMaterial({color:0x096790});
			playFieldBorder.children[i].geometry.normalsNeedUpdate = true;
			if(window.wireframe) playFieldBorder.children[i].material.wireframe = true;
		}
		//var texture = new THREE.TextureLoader().load( "js/background.jpg" );
		//playField.children[0].material = new THREE.MeshBasicMaterial({map : texture});
		//playField.children[0].geometry.normalsNeedUpdate = true;
		calcLight = false;
	}
	else if(calcLight == false){
		if(shadingState == "lambert"){
			for(i = 0; i < enemies.length; i++){
				for(j = 0; j < (enemies[i][0].children).length; j++){
					enemies[i][0].children[j].material = new THREE.MeshLambertMaterial({color:0xff0000});
					if(window.wireframe){
						enemies[i][0].children[j].material.wireframe = true;
					}
					enemies[i][0].children[j].geometry.normalsNeedUpdate = true;
				}
			}
			for(i=0; i<ship.children.length; i++){ 
				ship.children[i].material = new THREE.MeshLambertMaterial({color:0x00ff00});
				if(window.wireframe){
					ship.children[i].material.wireframe = true;
				}
			}
			for (i = 0; i < 4; i++) {
				playFieldBorder.children[i].material = new THREE.MeshLambertMaterial({color:0x096790});
				playFieldBorder.children[i].geometry.normalsNeedUpdate = true;
				if(window.wireframe) playFieldBorder.children[i].material.wireframe = true;
			}
			//playField.children[0].material = new THREE.MeshLambertMaterial({color:0x096790});
			//playField.children[0].geometry.normalsNeedUpdate = true;
		}
		if(shadingState == "phong"){
			for(i = 0; i < enemies.length; i++){
				for(j = 0; j < (enemies[i][0].children).length; j++){
					enemies[i][0].children[j].material = new THREE.MeshPhongMaterial({color:0xff0000});
					if(window.wireframe){
						enemies[i][0].children[j].material.wireframe = true;
					}
					enemies[i][0].children[j].geometry.normalsNeedUpdate = true;
				}
			}
			for(i=0; i<ship.children.length; i++){ 
				ship.children[i].material = new THREE.MeshPhongMaterial({color:0x00ff00});
				if(window.wireframe){
					ship.children[i].material.wireframe = true;
				}
			}
			for (i = 0; i < 4; i++) {
				playFieldBorder.children[i].material = new THREE.MeshPhongMaterial({color:0x096790});
				playFieldBorder.children[i].geometry.normalsNeedUpdate = true;
				if(window.wireframe) playFieldBorder.children[i].material.wireframe = true;
			}
			//playField.children[0].material = new THREE.MeshPhongMaterial({color:0x096790});
			//playField.children[0].geometry.normalsNeedUpdate = true;
		}
		calcLight = true;
	}
}

function shadingChangeToggle(){
	if(calcLight){
		if(shadingState == "lambert"){
			for(i = 0; i < enemies.length; i++){
				for(j = 0; j < (enemies[i][0].children).length; j++){
					enemies[i][0].children[j].material = new THREE.MeshPhongMaterial({color:0xff0000});
					if(window.wireframe){
						enemies[i][0].children[j].material.wireframe = true;
					}
					enemies[i][0].children[j].geometry.normalsNeedUpdate = true;
				}
			}
			for(i=0; i<ship.children.length; i++){ 
				ship.children[i].material = new THREE.MeshPhongMaterial({color:0x00ff00});
				if(window.wireframe){
					ship.children[i].material.wireframe = true;
				}
			}
			for (i = 0; i < 4; i++) {
				playFieldBorder.children[i].material = new THREE.MeshPhongMaterial({color:0x096790});
				playFieldBorder.children[i].geometry.normalsNeedUpdate = true;
				if(window.wireframe) playFieldBorder.children[i].material.wireframe = true;
			}
			//playField.children[0].material = new THREE.MeshPhongMaterial({color:0x096790});
			//playField.children[0].geometry.normalsNeedUpdate = true;
			shadingState = "phong";
		}
		else if(shadingState == "phong"){
			for(i = 0; i < enemies.length; i++){
				for(j = 0; j < (enemies[i][0].children).length; j++){
					enemies[i][0].children[j].material = new THREE.MeshLambertMaterial({color:0xff0000});
					if(window.wireframe){
						enemies[i][0].children[j].material.wireframe = true;
					}
					enemies[i][0].children[j].geometry.normalsNeedUpdate = true;
				}
			}
			for(i=0; i<ship.children.length; i++){ 
				ship.children[i].material = new THREE.MeshLambertMaterial({color:0x00ff00});
				if(window.wireframe){
					ship.children[i].material.wireframe = true;
				}
			}
			for (i = 0; i < 4; i++) {
				playFieldBorder.children[i].material = new THREE.MeshLambertMaterial({color:0x096790});
				playFieldBorder.children[i].geometry.normalsNeedUpdate = true;
				if(window.wireframe) playFieldBorder.children[i].material.wireframe = true;
			}
			//playField.children[0].material = new THREE.MeshLambertMaterial({color:0x096790});
			//playField.children[0].geometry.normalsNeedUpdate = true;
			shadingState = "lambert";
		}
	}
}

function createSpotLight() {
	spotLight = new THREE.SpotLight(0xffffff, 2, 700, 1.7, 1, 1);
	spotLight.position.set(0, -50, 50);
	spotLight.castShadow = true;
	spotLight.target = ship;
	//spotLight.intensity = 0;

	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 500;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;
	
	ship.add(spotLight);
}

function spotLightToggle() {
	if (spotLight.intensity == 0) spotLight.intensity = 2;
	else if (spotLight.intensity == 2) spotLight.intensity = 0;
}
