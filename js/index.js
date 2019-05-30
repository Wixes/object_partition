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

    var width_1 = 0;
    var width_2 = 0;
    var width_3 = 0;

    var height_1 = 0;
    var height_2 = 0;
    var height_3 = 0;

    var depth_1 = 0;
    var depth_2 = 0;
    var depth_3 = 0;

    var position_1 = new THREE.Vector3();
    var position_2 = new THREE.Vector3();
    var position_3 = new THREE.Vector3();

    // ALGORHITM FOR CREATING 2 CUBES INSTEAD OF 1
    // for 1st cube
    if (allChildren.length == 4 && allChildren[3] instanceof THREE.Mesh) {
        width_1 = allChildren[3].geometry.parameters.width;
        height_1 = allChildren[3].geometry.parameters.height;
        depth_1 = allChildren[3].geometry.parameters.depth;
        position_1.setFromMatrixPosition(allChildren[2].matrixWorld);
        console.log ("width: " + width_1 + ", height: " + height_1 + " and depth: " + depth_1);
        console.log(position_1);

        // CREATE WIDTH, HEIGHT AND DEPTH FOR CUBES
        var rand_divide = Math.floor((Math.random() * 3) + 1);
        if (rand_divide == 1) {
            console.log ("change height");
            // Create parameters for 2nd cube
            width_2 = width_1;
            height_2 = Math.floor((Math.random() * height_1) + 1);
            depth_2 = depth_1;
            
            // Create parameters for 3rd cube
            width_3 = width_2;
            height_3 = height_1 - height_2;
            depth_3 = depth_2;

            // Create position for 2nd cube
            position_2.x = position_1.x;
            position_2.y = position_1.y + (height_1 / 2) - (height_2 / 2);
            position_2.z = position_1.z;

            // Create position for 3rd cube
            position_3.x = position_2.x;
            position_3.y = position_2.y - (height_2 / 2) - (height_3 / 2) - 3;
            position_3.z = position_2.z;

        }
        else if (rand_divide == 2) {
            console.log ("change width");
            // Create parameters for 2nd cube
            width_2 = Math.floor((Math.random() * width_1) + 1);
            height_2 = height_1;
            depth_2 = depth_1

            // Create parameters for 3rd cube
            width_3 = width_1 - width_2;
            height_3 = height_2;
            depth_3 = depth_2;
            
            // Create position for 2nd cube
            position_2.x = position_1.x - (width_1 / 2) + (width_2 / 2);
            position_2.y = position_1.y;
            position_2.z = position_1.z;

            // Create position for 3rd cube
            position_3.x = position_2.x + (width_2 / 2) + (width_3 / 2) + 3;
            position_3.y = position_2.y;
            position_3.z = position_2.z;
        }
        else {
            console.log("change depth");
            // Create parameters for 2nd cube
            width_2 = width_1;
            height_2 = height_1;
            depth_2 = Math.floor((Math.random() * depth_1) + 1);

            // Create parameters for 3rd cube
            width_3 = width_2;
            height_3 = height_2;
            depth_3 = depth_1 - depth_2;

            // Create position for 2nd cube
            position_2.x = position_1.x;
            position_2.y = position_1.y;
            position_2.z = position_1.z - (depth_1 / 2) + (depth_2 / 2);

            // Create position for 3rd cube
            position_3.x = position_2.x;
            position_3.y = position_1.y;
            position_3.z = position_2.z + (depth_2 / 2) + (depth_3 / 2) + 3;

        }

        // DELETE OLD CUBE
        scene.remove(allChildren[3]);

        // CREATE NEW CUBES
        // cube 2
        var cubeGeometry_2 = new THREE.CubeGeometry(width_2, height_2, depth_2);
        var cubeMaterial_2 = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
        var cube_2 = new THREE.Mesh(cubeGeometry_2, cubeMaterial_2);
        console.log(position_2);
        cube_2.position.set(position_2.x, position_2.y, position_2.z);
        scene.add(cube_2);

        // cube 3
        var cubeGeometry_3 = new THREE.CubeGeometry(width_3, height_3, depth_3);
        var cubeMaterial_3 = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
        var cube_3 = new THREE.Mesh(cubeGeometry_3, cubeMaterial_3);
        console.log(position_3);
        cube_3.position.set(position_3.x, position_3.y, position_3.z);
        scene.add(cube_3);

    }
    else {
        alert("Удалите для начала блок!");
    }
    
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
    if (lastObject instanceof THREE.Mesh && allChildren.length > 4) {
        scene.remove(lastObject);
    }
}