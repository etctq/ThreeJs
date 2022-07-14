window.onload = function() {
  let canvas = document.getElementById('canvas')
  let width = window.innerWidth;
  let height = window.innerHeight;

  let ball = {
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    positionX: 0,
    positionY: 0,
    positionZ: 0
  }
  let gui = new dat.GUI();
  gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001)
  gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001)
  gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.001) 
  gui.add(ball, 'positionX').min(-5).max(5).step(0.1)
  gui.add(ball, 'positionY').min(-5).max(5).step(0.1)
  gui.add(ball, 'positionZ').min(-5).max(5).step(0.1)


  let renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setClearColor(0x100000);
  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
  camera.position.set(0, 0, 1000);

  let light = new THREE.AmbientLight(0xffffff);
  scene.add(light)


  let geometry = new THREE.SphereGeometry(300, 12, 12);
  let material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})
  let mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
renderer.setPixelRatio(window.devicePixelRatio = 4)


  function loop() {
    mesh.rotation.x += ball.rotationX
    mesh.rotation.y += ball.rotationY
    mesh.rotation.z += ball.rotationZ
    mesh.position.x += ball.positionX
    mesh.position.y += ball.positionY
    mesh.position.z += ball.positionZ


  renderer.render(scene, camera); 
  requestAnimationFrame(function() {loop();})
}
loop()
}