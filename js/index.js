function setCanvasResolution() {
    var canvas_width = document.getElementById("canvas_width").value;
    var canvas_height = document.getElementById("canvas_height").value;

    var canvas = document.getElementById("artifactCanvas");

    canvas.width = canvas_width;
    canvas.height = canvas_height;

    console.log(canvas_width, canvas_height);
}

// GLOBAL VARIABLES
var DistanceBetweenCubes = 3;
var rand_pos = 0;

function addCube() {

    // VARIABLES
    var allChildren = scene.children;
    var allCubes = 0;
    var lastObject = allChildren[allChildren.length - 1];

    // CREATE CUBE
    var cubeSize = Math.ceil((Math.random() * 3));
    var cubeGeometry = new THREE.CubeGeometry(cubeSize, cubeSize, cubeSize);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.name = "cube-" + scene.children.length;

    // TEST
    if (rand_pos % 5 == 0) {
        cube.position.x = lastObject.position.x + 4;
        cube.position.y = lastObject.position.y;
        cube.position.z = lastObject.position.z;
    }

    if (rand_pos % 5 == 1) {
        cube.position.x = lastObject.position.x;
        cube.position.y = lastObject.position.y + 4;
        cube.position.z = lastObject.position.z;
    }

    if (rand_pos % 5 == 2) {
        cube.position.x = lastObject.position.x;
        cube.position.y = lastObject.position.y;
        cube.position.z = lastObject.position.z + 4;
    }
    if (rand_pos % 5 == 3) {
        cube.position.x = lastObject.position.x - 4;
        cube.position.y = lastObject.position.y;
        cube.position.z = lastObject.position.z;
    }

    if (rand_pos % 5 == 4) {
        cube.position.x = lastObject.position.x;
        cube.position.y = lastObject.position.y - 4;
        cube.position.z = lastObject.position.z;
    }

    if (rand_pos % 5 == 5) {
        cube.position.x = lastObject.position.x;
        cube.position.y = lastObject.position.y;
        cube.position.z = lastObject.position.z - 4;
    }

    rand_pos++;

        // NORMAL
        //cube.position.x = lastObject.position.x + 4;
        //cube.position.y = lastObject.position.y;
        //cube.position.z = lastObject.position.z;

    // ADD CUBE
    scene.add(cube);

    // NUMBER OF OBJECTS
    console.log ("all objects: " + allChildren.length);
    for (var i = 0; i < allChildren.length; i++) {
        if (allChildren[i] instanceof THREE.Mesh)
            allCubes += 1;
    }
    console.log("cubes: " + allCubes);
}

function removeCube() {
    var allChildren = scene.children;
    var lastObject = allChildren[allChildren.length-1];
    if (lastObject instanceof THREE.Mesh && allChildren.length > 3) {
        scene.remove(lastObject);
    }
}