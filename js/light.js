var pointLightsNmr = 6;
var pointLightsPerLine = 3;
var pointLightsLines = 2;
var pointLightsGap = 400;

function createDirectionalLight() {
	directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
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
			pointLights[k] = new THREE.PointLight( 0xffffff, 400, 250 );
			pointLights[k].position.set(-400 + (pointLightsGap*j), 300 - (pointLightsGap*i*1.2), 20 );
			scene.add( pointLights[k] );
			console.log("point light created: " + k);
			k--;
		}
	}
}