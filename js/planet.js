 window.onload = () => {

   let scene = new THREE.Scene();
   let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
   let renderer = new THREE.WebGLRenderer({antialias: false});
   let ringGeometry = [];
   let circleRad = 1.5;
   let planets = new THREE.Group();
   const windowHalfX = window.innerWidth / 2;
   const windowHalfY = window.innerHeight / 2;
   const sunBase = new THREE.Object3D();
   const mercuryBase = new THREE.Object3D();
   const venusBase = new THREE.Object3D();
   const earthBase = new THREE.Object3D();
   const marsBase = new THREE.Object3D();
   const jupiterBase = new THREE.Object3D();
   const saturnBase = new THREE.Object3D();
   const uranusBase = new THREE.Object3D();
   const neptuneBase = new THREE.Object3D();




   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   
   // geometry & control ring counts
   for (let i = 0; i < 8; i++) {
      ringGeometry[i] = new THREE.CircleGeometry(circleRad, 100);
      // ringGeometry[i].vertices.shift();
      let ring = ringGeometry[i];
      circleRad = circleRad + 1.3;
   };

   // ringGeometry[d].CircleGeometry(8, 100);


   let sunGeometry = new THREE.SphereBufferGeometry(0.8, 25, 25);
   let mercuryGeometry = new THREE.SphereBufferGeometry(0.0152, 10, 10);
   let venusGeometry = new THREE.SphereBufferGeometry(0.038, 10, 10);
   let earthGeometry = new THREE.SphereBufferGeometry(0.06, 20, 20);
   let marsGeometry = new THREE.SphereBufferGeometry(0.0212, 20, 20);
   let jupiterGeometry = new THREE.SphereBufferGeometry(0.448, 20, 20);
   let saturnGeometry = new THREE.SphereBufferGeometry(0.378, 20, 20);
   let uranusGeometry = new THREE.SphereBufferGeometry(0.16, 20, 20);
   let neptuneGeometry = new THREE.SphereBufferGeometry(0.1552, 20, 20);
   
   
   // material
   let sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.015});
   let mercuryMaterial = new THREE.PointsMaterial({color: '#4d1111', size: 0.003});
   let venusMaterial = new THREE.PointsMaterial({color: '#d4b146', size: 0.003});
   let earthMaterial = new THREE.PointsMaterial({color: '#161f9b', size: 0.003});
   let marsMaterial = new THREE.PointsMaterial({color: '#d64713', size: 0.003});
   let jupiterMaterial = new THREE.PointsMaterial({color: '#d3a072', size: 0.003});
   let saturnMaterial = new THREE.PointsMaterial({color: '#a05e23', size: 0.003});
   let uranusMaterial = new THREE.PointsMaterial({color: '#aee9e5', size: 0.003});
   let neptuneMaterial = new THREE.PointsMaterial({color: '#265588', size: 0.003});

   let particleMaterial = new THREE.PointsMaterial({color: '#ffffff',size: 0.01});
   

   // structures -- composed of (geometry, material); 
   let sun = new THREE.Points(sunGeometry, sunMaterial);
   let mercury = new THREE.Points(mercuryGeometry, mercuryMaterial);
   let venus = new THREE.Points(venusGeometry, venusMaterial);
   let earth = new THREE.Points(earthGeometry, earthMaterial);
   let mars = new THREE.Points(marsGeometry, marsMaterial);
   let jupiter = new THREE.Points(jupiterGeometry, jupiterMaterial);
   let saturn = new THREE.Points(saturnGeometry, saturnMaterial);
   let uranus = new THREE.Points(uranusGeometry, uranusMaterial);
   let neptune = new THREE.Points(neptuneGeometry, neptuneMaterial);
   let ringParticle = [];

   for (let i = 0; i < ringGeometry.length; i++) {
      ringParticle[i] = new THREE.Points(ringGeometry[i], particleMaterial);
      ringParticle[i].rotateX(1.9808);
      scene.add(ringParticle[i]);
   }

   sunBase.add(sun);
   sunBase.add(mercuryBase);
   sunBase.add(venusBase);
   sunBase.add(earthBase);
   sunBase.add(marsBase);
   sunBase.add(jupiterBase);
   sunBase.add(saturnBase);
   sunBase.add(uranusBase);
   sunBase.add(neptuneBase);

   mercuryBase.add(mercury);
   venusBase.add(venus);
   earthBase.add(earth);
   marsBase.add(mars);
   jupiterBase.add(jupiter);
   saturnBase.add(saturn);
   uranusBase.add(uranus);
   neptuneBase.add(neptune);


   mercury.position.set(1.5, 0, 0);
   venus.position.set(2.8, 0, 0);
   earth.position.set(4.1, 0, 0);
   mars.position.set(5.4, 0, 0);
   jupiter.position.set(6.7, 0, 0);
   saturn.position.set(8.0, 0, 0);
   uranus.position.set(9.3, 0, 0);
   neptune.position.set(10.6, 0, 0);

   let xAxis = new THREE.Vector3(1, 0, 0).normalize();
   let yAxis = new THREE.Vector3(0, 1, 0).normalize();
   let zAxis = new THREE.Vector3(0, 0, 1).normalize();


   planets.add(sun);
   // planets.add(mercury);
   // planets.add(venus);
   planets.add(earth);
   // planets.add(mars);
   // planets.add(jupiter);
   // planets.add(saturn);
   // planets.add(uranus);
   // planets.add(neptune);
   planets.rotateX(0.41);
   console.table(sunBase);
   
   // sun.rotateX(0.41);
   // earth.rotateX(0.41);

   scene.add(planets);
   // scene.add(sun);
   // scene.add(earth);
   camera.position.z = 6;

   function animate() {

      for (let i = 0; i < ringGeometry.length; i++) {
         ringParticle[i].rotateOnWorldAxis(yAxis, 0.002);
      }

      planets.rotateOnWorldAxis(yAxis, 0.002);
      // planets.rotateOnWorldAxis(yAxis, 0.002);
      mercury.rotateOnAxis(yAxis, 0.04);
      mercury.rotateY(0.)
      venus.rotateOnAxis(yAxis, 0.008);
      earth.rotateOnAxis(yAxis, 0.008);
      mars.rotateOnAxis(yAxis, 0.008);
      jupiter.rotateOnAxis(yAxis, 0.008);
      saturn.rotateOnAxis(yAxis, 0.008);
      neptune.rotateOnAxis(yAxis, 0.008);
      uranus.rotateOnAxis(yAxis, 0.008);
      sunBase.rotation.y = 0.02;
      // planets.rotateOnAxis(yAxis, 0.002);
      // sun.rotateOnAxis(yAxis, 0.008);
      // sun.rotateOnWorldAxis(yAxis, 0.002);
      // earth.rotateOnWorldAxis(yAxis, 0.008);
      // earth.rotateOnWorldAxis(yAxis, 0.002);


      requestAnimationFrame(animate);
      renderer.render(scene, camera);
   };

   animate();

   // window.addEventListener('resize', onWindowResize, false);
   
   function onWindowResize() {

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

   }

 };
 
 