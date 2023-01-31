import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function rectangleTop() {

    const geometry = new THREE.BoxGeometry(10, .2, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const top1 = new THREE.Mesh(geometry, material);

    return top1;
}

function circularTop() {

    const geometry = new THREE.CylinderGeometry(5, 5, .2, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const top2 = new THREE.Mesh(geometry, material);

    return top2;
}

function tableLeg() {

    const geometry = new THREE.BoxGeometry(.4, 3, .4);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const leg = new THREE.Mesh(geometry, material);

    return leg;
}

function createTable() {
    const group = new THREE.Group();

    // rectangular top
    const top1 = rectangleTop();
    group.add(top1);

    //circular top
    const top2 = circularTop();
    group.add(top2);

    top1.visible = false;
    top2.visible = true;

    const leg1 = tableLeg();
    leg1.position.set(2, -1.5, 1.5);
    group.add(leg1);

    const leg2 = tableLeg();
    leg2.position.set(-2, -1.5, 1.5);
    group.add(leg2);

    const leg3 = tableLeg();
    leg3.position.set(2, -1.5, -1.5);
    group.add(leg3);

    const leg4 = tableLeg();
    leg4.position.set(-2, -1.5, -1.5);
    group.add(leg4);

    return group;
}

const table = createTable();
const top1 = table.children[0];
const top2 = table.children[1];
scene.add(table);


const roundBtn = document.getElementById("round-top");
const rectangleBtn = document.getElementById("rectangle-top");

// show round top
roundBtn.addEventListener("click", function () {
    top1.visible = false;
    top2.visible = true;
})

// show rectangle top
rectangleBtn.addEventListener("click", function () {
    top1.visible = true;
    top2.visible = false;
})

camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);

    table.rotation.x += 0.01;
    table.rotation.y += 0.01;
    table.rotation.z += 0.01;

    renderer.render(scene, camera);
};

animate();