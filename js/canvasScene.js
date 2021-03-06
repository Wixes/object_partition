var scene, camera, renderer, controls;
var ambientLight_1, spotlight_1;

scene = new THREE.Scene();
scene.background = new THREE.Color({color: 0x00ff00});

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 60, -10);
camera.lookAt(scene.position);

renderer = new THREE.WebGLRenderer({canvas: artifactCanvas,
                                    alpha: true,
                                    antialias: true});


// CUBE
var cubeGeometry = new THREE.CubeGeometry(50 , 50, 50);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.name = "first_cube";

//LIGHT
spotlight_1 = new THREE.SpotLight(0xffffff);
ambientLight_1 = new THREE.AmbientLight(0x404040);

// AXES
var axesHelper = new THREE.AxesHelper(100);

// CONTROLLER
controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.rotateSpeed = 0.1;
controls.zoomSpeed = 1.0;
controls.panSpeed = 0.8;
controls.enableZoom = true;
controls.enablePan = true;
controls.enableDamping = true;
controls.dampingFactor = 0.2;

// OBJECT POSITIONS
spotlight_1.position.set(-40, 55, -30);
cube.position.set(0, 0, 0);

// ADD OBJECTS
scene.add(spotlight_1);
scene.add(ambientLight_1);
scene.add(axesHelper);
scene.add(cube);

scene.updateMatrixWorld(true);

// CHECK MAIN CUBE POSITION
var pos = new THREE.Vector3();
pos.setFromMatrixPosition(cube.matrixWorld);
console.log(pos.x, pos.y, pos.z);

function animate() {

    requestAnimationFrame(animate);

    controls.update();
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.02;

    renderer.render(scene, camera);

}
animate();
