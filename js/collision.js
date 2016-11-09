var xmin = -700
var xmax = 700
var ymin = -320
var ymax = 450

function hasCollision(obj1, obj2, i){

    var box1 = new THREE.Box3().setFromObject(obj1);
    var box2 = new THREE.Box3().setFromObject(obj2);

    var hasCollided = box1.intersectsBox(box2);

	if (box1.min.x < xmin){
		enemies[i][1] = 1;
	}
	if (box1.max.x > xmax){
		enemies[i][1] = -1;
	}
	if(box1.min.y < ymin){
		enemies[i][2] = 1;
	}
	if(box1.max.y > ymax){
		enemies[i][2] = -1;
	}
	
	if(hasCollided){
		enemies[i][1] = enemies[i][1]*-1;
		enemies[i][2] = enemies[i][2]*-1;
	}
	
	return hasCollided;
	
	
}





