var scene, camera, renderer, controls;
var ambientLight_1, spotlight_1;

scene = new THREE.Scene();
scene.background = new THREE.Color({color: 0x00ff00});

camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, -5);
camera.lookAt(scene.position);

renderer = new THREE.WebGLRenderer({canvas: artifactCanvas,
                                    alpha: true,
                                    antialias: true});


// CUBE
var cubeGeometry = new THREE.CubeGeometry(3,3,3);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

//LIGHT
spotlight_1 = new THREE.SpotLight(0xffffff);
ambientLight_1 = new THREE.AmbientLight(0x404040);

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
spotlight_1.position.set(-3, 5, -3);
cube.position.set(0, 0, 0);

// ADD OBJECTS
scene.add(spotlight_1);
scene.add(ambientLight_1);
scene.add(cube);

scene.updateMatrixWorld(true);

// TEST
var pos = new THREE.Vector3();
pos.setFromMatrixPosition(cube.matrixWorld);
console.log(pos.x, pos.y, pos.z);

function animate() {

    requestAnimationFrame(animate);

    controls.update();
    //cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);

}
animate();
