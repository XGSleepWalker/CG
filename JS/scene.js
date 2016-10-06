function createScene() {
      'use strict';
      scene = new THREE.Scene();
      //scene.add(new THREE.AxisHelper(10));
      
      createShip(-100, -100 ,0);
      //createSquid(0, 0, 0);
      createAlien(0, 0, 0);
      //createPlayField(getSize().innerWidth, getSize().innerHeight, 0);
}