function HasCollision(obj1, obj2){

    var box1 = new THREE.Box3().setFromObject(obj1);
    var box2 = new THREE.Box3().setFromObject(obj2);

    var hasCollided = box1.isIntersectionBox(box2);

}
