import * as THREE from 'three'

function main() {
  const canvas = document.querySelector('#c')
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  let fov = 40
  let aspect = 2  // the canvas default
  let near = 0.1
  let far = 1000
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(0, 0, 200)()
}