import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';

const ThreeScene = () => {
    const containerRef = useRef();

    useEffect(() => {
        let camera, scene, renderer, plane, planeGeo, count = 0;

        const vertexHeight = 15000;
        const planeDefinition = 100;
        const planeSize = 1245000;
        const totalObjects = 1;
        const background = "#002135";
        const meshColor = "#005e97";

        function init() {
            // Initialize camera
            camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000);
            camera.position.z = 10000;
            camera.position.y = 10000;

            // Initialize scene
            scene = new THREE.Scene();
            scene.fog = new THREE.Fog(background, 1, 300000);

            // Initialize plane
            planeGeo = new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition);
            plane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({
                color: meshColor,
                wireframe: true
            }));
            plane.rotation.x -= Math.PI * .5;
            scene.add(plane);

            // Initialize renderer
            renderer = new THREE.WebGLRenderer({ alpha: false });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(background, 1);
            containerRef.current.appendChild(renderer.domElement);

            updatePlane();
            render();
        }

        function updatePlane() {
            for (let i = 0; i < planeGeo.vertices.length; i++) {
                planeGeo.vertices[i].z += Math.random() * vertexHeight - vertexHeight;
                planeGeo.vertices[i]._myZ = planeGeo.vertices[i].z;
            }
        }

        function render() {
            requestAnimationFrame(render);
            // camera.position.z -= 150;
            let x = camera.position.x;
            let z = camera.position.z;
            camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001) - 10;
            camera.position.z = z * Math.cos(0.001) - x * Math.sin(0.001) - 10;
            camera.lookAt(new THREE.Vector3(0, 8000, 0));

            for (let i = 0; i < planeGeo.vertices.length; i++) {
                let z = +planeGeo.vertices[i].z;
                planeGeo.vertices[i].z = Math.sin((i + count * 0.00002)) * (planeGeo.vertices[i]._myZ - (planeGeo.vertices[i]._myZ * 0.6));
                planeGeo.verticesNeedUpdate = true;

                count += 0.1;
            }

            renderer.render(scene, camera);
        }

        // Event listener for window resize
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize, false);

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', onWindowResize, false);
        };

        init();
    }, []);

    return <div ref={containerRef} />;
};

export default ThreeScene;
