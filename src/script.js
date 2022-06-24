import './style.css';import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Texture Loader
const textureLoader = new THREE.TextureLoader();

const starTexture = textureLoader.load('/textures/stars.jpeg');
const sunTexture = textureLoader.load('/textures/sun.jpeg');
const mercuryTexture = textureLoader.load('textures/mercury.jpeg');
const venusTexture = textureLoader.load('textures/venus.jpeg');
const earthTexture = textureLoader.load('textures/earth.jpeg');
const moonTexture = textureLoader.load('textures/moon.jpeg');
const marsTexture = textureLoader.load('textures/mars.jpeg');
const jupiterTexture = textureLoader.load('textures/jupiter.jpeg');
const saturnTexture = textureLoader.load('textures/saturn.jpeg');
const saturnRingTexture = textureLoader.load('https://i.postimg.cc/zz7Gr430/saturn-rings-top.png');
const neptuneTexture = textureLoader.load('textures/neptune.jpeg');
const uranusTexture = textureLoader.load('textures/uranus.jpeg');

// Scene
const scene = new THREE.Scene();

// Stars
const skyboxGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
const skyboxMaterial = new THREE.MeshBasicMaterial({
    map: starTexture,
    side: THREE.BackSide
});
const matArray = [skyboxMaterial, skyboxMaterial, skyboxMaterial, skyboxMaterial, skyboxMaterial, skyboxMaterial]
const skyBoxMesh = new THREE.Mesh(skyboxGeometry, matArray);
scene.add(skyBoxMesh);

// Sun
// Objects
const sunGeometry = new THREE.SphereBufferGeometry(2, 64, 64);
// Materials
const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture
});
// Mesh
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);

// Mercury
const mercuryObj = new THREE.Object3D();
const mercuryGeometry = new THREE.SphereBufferGeometry(.38, 64, 64);
const mercuryMaterial = new THREE.MeshStandardMaterial({
    map: mercuryTexture
});
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryMesh.position.x = 5;
mercuryMesh.castShadow = true;
mercuryMesh.receiveShadow = true;
mercuryObj.add(mercuryMesh);
solarSystem .add(mercuryObj);

// Venus
const venusObj = new THREE.Object3D();
const venusGeometry = new THREE.SphereBufferGeometry(.95, 64, 64);
const venusMaterial = new THREE.MeshStandardMaterial({
    map: venusTexture
});
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
venusMesh.position.x = 10;
venusMesh.castShadow = true;
venusMesh.receiveShadow = true;
venusObj.add(venusMesh);
solarSystem.add(venusObj);

// Earth
const earthObj = new THREE.Object3D();
const earthGeometry = new THREE.SphereBufferGeometry(1, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({
    map: earthTexture
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMesh.position.x = 15;
earthMesh.castShadow = true;
earthMesh.receiveShadow = true;
earthObj.add(earthMesh);
solarSystem.add(earthObj);

// Moon
const moonGeometry = new THREE.SphereBufferGeometry(0.27 , 64, 64);
const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture
});
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
moonMesh.position.x = 2;
moonMesh.castShadow = true;
moonMesh.receiveShadow = true;
earthMesh.add(moonMesh);

// Mars
const marsObj = new THREE.Object3D();
const marsGeometry = new THREE.SphereBufferGeometry(0.53, 64, 64);
const marsMaterial = new THREE.MeshStandardMaterial({
    map: marsTexture
});
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsMesh.position.x = 20;
marsMesh.castShadow = true;
marsMesh.receiveShadow = true;
marsObj.add(marsMesh);
solarSystem.add(marsObj);

// Jupiter
const jupiterObj = new THREE.Object3D();
const jupiterGeometry = new THREE.SphereBufferGeometry(11.21, 64, 64);
const jupiterMaterial = new THREE.MeshStandardMaterial({
    map: jupiterTexture
});
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterMesh.position.x = 40;
jupiterMesh.castShadow = true;
jupiterMesh.receiveShadow = true;
jupiterObj.add(jupiterMesh);
solarSystem.add(jupiterObj);

// Saturn
const saturnObj = new THREE.Object3D();
const saturnGeometry = new THREE.SphereBufferGeometry(9.45, 64, 64);
const saturnRingGeometry = new THREE.RingGeometry(10, 15, 64)
const saturnMaterial = new THREE.MeshStandardMaterial({
    map: saturnTexture
});
// const saturnRingMaterial = new THREE.MeshBasicMaterial({
//     map: saturnRingTexture,
//     side: THREE.DoubleSide
// });
const saturnRingMaterial = new THREE.MeshBasicMaterial({
    map: saturnRingTexture,
    side: THREE.DoubleSide,
    color: 0xffffff,
    transparent: true
});
var pos = saturnRingGeometry.attributes.position;
    var v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        saturnRingGeometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
}
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
const saturnRingMesh = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRingMesh.rotation.x = 1.5708;
saturnMesh.add(saturnRingMesh);
saturnMesh.rotation.x = 0.466526509;
saturnMesh.position.x = 80;
saturnMesh.castShadow = true;
saturnMesh.receiveShadow = true;

saturnObj.add(saturnMesh);
solarSystem.add(saturnObj);

// Uranus
const uranusObj = new THREE.Object3D();
const uranusGeometry = new THREE.SphereBufferGeometry(11.21, 64, 64);
const uranusMaterial = new THREE.MeshStandardMaterial({
    map: uranusTexture
});
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranusMesh.position.x = 120;
uranusMesh.castShadow = true;
uranusMesh.receiveShadow = true;
uranusObj.add(uranusMesh);
solarSystem.add(uranusObj);

// Neptune
const neptuneObj = new THREE.Object3D();
const neptuneGeometry = new THREE.SphereBufferGeometry(11.21, 64, 64);
const neptuneMaterial = new THREE.MeshStandardMaterial({
    map: neptuneTexture
});
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneMesh.position.x = 200;
neptuneMesh.castShadow = true;
neptuneMesh.receiveShadow = true;
neptuneObj.add(neptuneMesh);
solarSystem.add(neptuneObj);



scene.add(solarSystem);

// Lights
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 2, 300, 10);
sunLight.shadow.mapSize.width = 4096
sunLight.shadow.mapSize.height = 4096
sunLight.castShadow = true;
scene.add(sunLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});

const universeScroll = (event) => {
    solarSystem.position.x = 0;
    solarSystem.position.y = 0;
    solarSystem.position.z = 0;
    // mercuryMesh.position.y += event.deltaY* 0.001
    // mercuryMesh.position.z += event.deltaY* 0.001
    console.log(event.deltaY);
    camera.position.z += event.deltaY* 0.01;
}

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth/2;
const windowY = window.innerHeight/2;

const universeMouseMove = (event) => {
    mouseX = (event.clientX - windowX);
    mouseY = (event.clientY - windowY);
}

window.addEventListener('wheel', universeScroll);

window.addEventListener('mousemove', universeMouseMove);

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 200;
scene.add(camera);

// Orbit Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

/**
 * Animate
 */

const tick = () =>
{    
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    // Revolution around sun
    // Considering earth completes one cycle in 60s
    const EARTH_YEAR = 0.1/60;
    sunMesh.rotateY(0.004);
    mercuryObj.rotateY(EARTH_YEAR/(0.241));
    venusObj.rotateY(EARTH_YEAR/(0.615));
    earthObj.rotateY(EARTH_YEAR);
    marsObj.rotateY(EARTH_YEAR/(1.88));
    jupiterObj.rotateY(EARTH_YEAR/(11.9));
    saturnObj.rotateY(EARTH_YEAR/(29.4));
    uranusObj.rotateY(EARTH_YEAR/(83.7));
    neptuneObj.rotateY(EARTH_YEAR/(163.7));

    // Rotate on it's own axis
    const EARTH_DAY = (Math.PI*365)/36000 ;
    mercuryMesh.rotateY(EARTH_DAY/58.6);
    venusMesh.rotateY(EARTH_DAY/224.7);
    earthMesh.rotateY(EARTH_DAY);
    moonMesh.rotateY(EARTH_DAY)
    marsMesh.rotateY(EARTH_DAY/1.03);
    jupiterMesh.rotateY(EARTH_DAY/0.415);
    saturnMesh.rotateY(EARTH_DAY/0.445);
    uranusMesh.rotateY(EARTH_DAY/0.720);
    neptuneMesh.rotateY(EARTH_DAY/0.673);

    solarSystem.rotation.y += 0.5*(targetX - solarSystem.rotation.y)
    solarSystem.rotation.x += 0.05*(targetY - solarSystem.rotation.x)
    solarSystem.rotation.z += 0.05*(targetY - solarSystem.rotation.x)

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();
