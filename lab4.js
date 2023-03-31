const div = document.querySelector('.threejs');
let mesh;

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

    camera.aspect = div.clientWidth / div.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(div.clientWidth, div.clientHeight);

}

const clock = new THREE.Clock();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, div.clientWidth / div.clientHeight, 0.1, 100);
camera.position.set(1, 1 ,1);
cameraTarget = new THREE.Vector3(0, 0.3, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(div.clientWidth, div.clientHeight);

div.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

scene.background = new THREE.Color('blue');
scene.fog = new THREE.Fog('purple', 0, 20);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 200, 0);
//scene.add(hemiLight);

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(4000, 4000),
    new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true })
);
plane.rotation.x = - Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

let vectors1 = [-10, 0, -10, -10, 0, 10, -10, 10, 10, -10, 10, -10];

let index1 = [0, 1, 2, 0, 2 , 3];

let geometry2 = new THREE.BufferGeometry();

geometry2.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(vectors1), 3)
);

geometry2.setIndex(index1);
geometry2.computeVertexNormals();

const plane1 = new THREE.Mesh(
    geometry2,
    new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true })
);
plane1.material.side = THREE.DoubleSide;
plane1.receiveShadow = true;
scene.add(plane1);

camera.position.z = 0;

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    const elapsedTime = clock.getElapsedTime()

    camera.position.x = Math.cos(elapsedTime * 0.5) * 2;
    camera.position.z = Math.sin(elapsedTime * 0.5) * 2;

    camera.lookAt(cameraTarget);

    renderer.render(scene, camera);

}

animate();

let material = new THREE.MeshPhongMaterial({ color: 'grady' });

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 'grady' });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0.8, 0.35, 0);
sphere.castShadow = true;
scene.add(sphere);

document.forms[0].addEventListener('change', (e) => {
    sphere.material.color.set(e.target.value);
})

let vectors = [0, 0, 0, 0, 0, 1, 1, 0, 1, 0.5, 1, 0.5];

let index = [0, 1, 2, 0, 1 , 3, 1, 2, 3, 0,  3, 2];

let geometry = new THREE.BufferGeometry();

geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(vectors), 3)
);

geometry.setIndex(index);
geometry.computeVertexNormals();

mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
mesh.castShadow = true;
mesh.receiveShadow = true;
scene.add(mesh);

document.forms[0].addEventListener('change', (e) => {
    mesh.material.color.set(e.target.value);
})

const SofitLight = new THREE.SpotLight("#ffffff");
SofitLight.position.set(-1, 1, 1);
SofitLight.castShadow = true;
SofitLight.intensity = 1;
SofitLight.shadow.camera.near = 1;
SofitLight.shadow.camera.far = 25;
SofitLight.shadow.mapSize.width = 2048;
SofitLight.shadow.mapSize.height = 2048;
SofitLight.shadow.bias = -0.01;
SofitLight.target.position.set(0, 0, 0);

const SofitLightHelper = new THREE.SpotLightHelper(SofitLight);

scene.add(SofitLight);
scene.add(SofitLight.target);
//scene.add(FillLightHelper);

const FillLight = new THREE.DirectionalLight("#ffffff");
FillLight.position.set(1.5, 1, 0);
FillLight.castShadow = true;
FillLight.intensity = 2;
FillLight.target.position.set(0, 0, 0);
FillLight.shadow.mapSize.width = 2000; // default
FillLight.shadow.mapSize.height = 2000; // default
FillLight.shadow.camera.top = 10;
FillLight.shadow.camera.bottom = - 10;
FillLight.shadow.camera.left = - 10;
FillLight.shadow.camera.right = 10;

const FillLightHelper = new THREE.SpotLightHelper(FillLight);

scene.add(FillLight);
scene.add(FillLight.target);
//scene.add(SofitLightHelper);

const MainLight = new THREE.DirectionalLight(0xffffff);
MainLight.position.set(1.5, 1.5, 1.5);
MainLight.target.position.set(0,0.3,0);
MainLight.castShadow = true;
MainLight.intensity = 2;
MainLight.shadow.mapSize.width = 2000; // default
MainLight.shadow.mapSize.height = 2000; // default
MainLight.shadow.camera.top = 10;
MainLight.shadow.camera.bottom = - 10;
MainLight.shadow.camera.left = - 10;
MainLight.shadow.camera.right = 10;

scene.add(MainLight);
scene.add(MainLight.target);

const form2 = document.getElementById('form2');

form2.addEventListener('change', (e) => {
    if (e.target.value === 'sofit') 
        SofitLight.intensity *= -1;
    if (e.target.value === 'fill') 
        FillLight.intensity *= -1;
    if (e.target.value === 'main') 
        MainLight.intensity *= -1;
})