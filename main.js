import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

class BakedLightingScene {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.orbitControls = null;
        this.fpsControls = null;
        this.mixer = null;
        this.clock = new THREE.Clock();
        
        // View modes: 'orbit', 'firstPerson', 'thirdPerson'
        this.viewMode = 'orbit';
        this.moveSpeed = 5.0;
        this.rotationSpeed = 0.002;
        
        // Movement state
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.canJump = false;
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        
        // Third person follow target
        this.thirdPersonTarget = new THREE.Vector3(0, 1.6, 0);
        this.thirdPersonDistance = 5;
        this.thirdPersonHeight = 2;
        
        // Model reference (set after loading)
        this.model = null;
        
        this.init();
    }

    init() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1a1a);

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(5, 5, 5);

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        
        // Enable shadows (optional, for non-baked elements)
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const container = document.getElementById('canvas-container');
        container.appendChild(this.renderer.domElement);

        // Add orbit controls (default)
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControls.enableDamping = true;
        this.orbitControls.dampingFactor = 0.05;
        this.orbitControls.minDistance = 2;
        this.orbitControls.maxDistance = 20;
        this.orbitControls.target.set(0, 0, 0);

        // Add FPS controls (for first person view)
        this.fpsControls = new PointerLockControls(this.camera, this.renderer.domElement);
        
        // Setup FPS controls event listeners
        this.setupFPSControls();

        // Setup keyboard controls
        this.setupKeyboardControls();

        // Setup view mode toggle
        this.setupViewModeToggle();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Load the model
        this.loadModel();

        // Start animation loop
        this.animate();
    }

    setupFPSControls() {
        const controls = this.fpsControls;
        
        controls.addEventListener('lock', () => {
            document.getElementById('fps-instructions').style.display = 'none';
        });
        
        controls.addEventListener('unlock', () => {
            document.getElementById('fps-instructions').style.display = 'block';
        });
    }

    setupKeyboardControls() {
        const onKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.moveForward = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    this.moveLeft = true;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    this.moveBackward = true;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.moveRight = true;
                    break;
                case 'Space':
                    if (this.canJump === true) {
                        this.velocity.y += 350;
                    }
                    this.canJump = false;
                    break;
            }
        };

        const onKeyUp = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    this.moveForward = false;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    this.moveLeft = false;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    this.moveBackward = false;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.moveRight = false;
                    break;
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
    }

    setupViewModeToggle() {
        const toggleButton = document.getElementById('view-mode-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                this.switchViewMode();
            });
        }
    }

    switchViewMode() {
        const modes = ['orbit', 'firstPerson', 'thirdPerson'];
        const currentIndex = modes.indexOf(this.viewMode);
        const nextIndex = (currentIndex + 1) % modes.length;
        this.viewMode = modes[nextIndex];
        
        this.updateViewMode();
        this.updateUI();
    }

    updateViewMode() {
        // Disable all controls first
        this.orbitControls.enabled = false;
        this.fpsControls.isLocked = false;
        this.fpsControls.unlock();

        switch (this.viewMode) {
            case 'orbit':
                this.orbitControls.enabled = true;
                this.camera.position.set(5, 5, 5);
                if (this.model) {
                    this.fitCameraToObject(this.model);
                }
                break;
                
            case 'firstPerson':
                this.fpsControls.lock();
                this.camera.position.set(0, 1.6, 0); // Eye height
                this.camera.rotation.set(0, 0, 0);
                break;
                
            case 'thirdPerson':
                this.orbitControls.enabled = true;
                this.orbitControls.target.copy(this.thirdPersonTarget);
                this.updateThirdPersonCamera();
                break;
        }
    }

    updateThirdPersonCamera() {
        const idealOffset = new THREE.Vector3(0, this.thirdPersonHeight, this.thirdPersonDistance);
        idealOffset.applyQuaternion(this.camera.quaternion);
        
        const idealPosition = this.thirdPersonTarget.clone().add(idealOffset);
        this.camera.position.lerp(idealPosition, 0.1);
        this.orbitControls.target.copy(this.thirdPersonTarget);
    }

    updateUI() {
        const toggleButton = document.getElementById('view-mode-toggle');
        const infoText = document.getElementById('view-mode-info');
        const controlsText = document.getElementById('controls-text');
        
        if (toggleButton) {
            const labels = {
                'orbit': 'Orbit View',
                'firstPerson': 'First Person',
                'thirdPerson': 'Third Person'
            };
            toggleButton.textContent = `Switch to ${labels[this.getNextMode()]}`;
        }
        
        if (infoText) {
            const labels = {
                'orbit': 'Orbit View - Drag to rotate, scroll to zoom',
                'firstPerson': 'First Person View - Click to lock mouse, WASD to move',
                'thirdPerson': 'Third Person View - Drag to rotate around character'
            };
            infoText.textContent = labels[this.viewMode];
        }
        
        if (controlsText) {
            const controls = {
                'orbit': 'Left Click + Drag: Rotate | Right Click + Drag: Pan | Scroll: Zoom',
                'firstPerson': 'WASD: Move | Mouse: Look | Space: Jump | Click: Lock Mouse',
                'thirdPerson': 'Left Click + Drag: Rotate | Scroll: Zoom | WASD: Move Target'
            };
            controlsText.textContent = controls[this.viewMode];
        }
    }

    getNextMode() {
        const modes = ['orbit', 'firstPerson', 'thirdPerson'];
        const currentIndex = modes.indexOf(this.viewMode);
        return modes[(currentIndex + 1) % modes.length];
    }

    async loadModel() {
        const loader = new GLTFLoader();
        
        // Try to load model - supports both .glb and .gltf
        const modelPaths = ['./model.glb', './model.gltf'];
        let gltf = null;
        let loadedPath = null;
        
        for (const path of modelPaths) {
            try {
                gltf = await loader.loadAsync(path);
                loadedPath = path;
                console.log(`✅ Model loaded: ${path}`);
                break;
            } catch (err) {
                // Try next format
                continue;
            }
        }
        
        if (gltf) {
            try {
            
            // Process the model for baked lighting
            this.processBakedModel(gltf.scene);
            
            // Add to scene
            this.scene.add(gltf.scene);
            
            // Handle animations if any
            if (gltf.animations && gltf.animations.length) {
                this.mixer = new THREE.AnimationMixer(gltf.scene);
                gltf.animations.forEach((clip) => {
                    this.mixer.clipAction(clip).play();
                });
            }

            // Store model reference
            this.model = gltf.scene;
            
            // Update status message
            const statusMsg = document.getElementById('model-status');
            if (statusMsg) {
                statusMsg.textContent = `✅ Model loaded: ${loadedPath}`;
                statusMsg.style.color = '#4ade80';
            }
            
            // Adjust camera to fit model
            this.fitCameraToObject(gltf.scene);
            
            // Update view mode after model loads
            this.updateViewMode();
            this.updateUI();
            
            this.hideLoading();
            } catch (error) {
                console.error('Error processing model:', error);
                this.createDemoScene();
                this.hideLoading();
            }
        } else {
            // No model file found - show demo scene
            console.warn('⚠️ No model.glb or model.gltf found. Showing demo scene.');
            console.log('📝 To use your Blender model:');
            console.log('   1. Open Orange_problem_latest.blend in Blender');
            console.log('   2. File → Export → glTF 2.0 (.glb)');
            console.log('   3. Save as "model.glb" in this folder');
            console.log('   4. Refresh browser');
            
            // Update status message
            const statusMsg = document.getElementById('model-status');
            if (statusMsg) {
                statusMsg.textContent = '⚠️ Demo scene active - Export Orange_problem_latest.blend as model.glb';
                statusMsg.style.color = '#fbbf24';
            }
            
            this.createDemoScene();
            this.hideLoading();
        }
    }

    processBakedModel(model) {
        // Traverse all meshes and apply baked lighting settings
        model.traverse((child) => {
            if (child.isMesh) {
                // Ensure materials use baked textures
                if (child.material) {
                    // If using MeshStandardMaterial, switch to MeshBasicMaterial for baked lighting
                    // Or keep StandardMaterial but disable lights
                    if (child.material.isMeshStandardMaterial || child.material.isMeshPhysicalMaterial) {
                        // Option 1: Convert to MeshBasicMaterial (recommended for fully baked lighting)
                        const bakedMaterial = new THREE.MeshBasicMaterial();
                        
                        // Copy texture maps
                        if (child.material.map) {
                            bakedMaterial.map = child.material.map;
                            bakedMaterial.map.flipY = false;
                        }
                        if (child.material.emissiveMap) {
                            bakedMaterial.map = child.material.emissiveMap;
                            bakedMaterial.map.flipY = false;
                        }
                        
                        bakedMaterial.color = child.material.color;
                        child.material = bakedMaterial;
                    }
                    
                    // Ensure textures are properly configured
                    if (child.material.map) {
                        child.material.map.colorSpace = THREE.SRGBColorSpace;
                    }
                    
                    // Disable shadows for baked lighting (shadows are in the texture)
                    child.castShadow = false;
                    child.receiveShadow = false;
                }
            }
        });
    }

    createDemoScene() {
        // Create a demo scene with baked lighting example
        // This uses the existing texture files
        
        // Create a plane with the background texture
        const planeGeometry = new THREE.PlaneGeometry(10, 10);
        const textureLoader = new THREE.TextureLoader();
        
        // Try to load existing textures
        textureLoader.load('./donut base.001.png', (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.flipY = false;
            
            const material = new THREE.MeshBasicMaterial({ 
                map: texture,
                side: THREE.DoubleSide
            });
            
            const plane = new THREE.Mesh(planeGeometry, material);
            plane.rotation.x = -Math.PI / 2;
            plane.position.y = -1;
            this.scene.add(plane);
        });

        // Add some basic geometry to demonstrate
        const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
        const boxMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xff6b35,
            map: textureLoader.load('./donut base.001.png', (tex) => {
                tex.colorSpace = THREE.SRGBColorSpace;
            })
        });
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.position.set(0, 1, 0);
        this.scene.add(box);

        // Add ambient light (minimal, since we're using baked lighting)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        this.scene.add(ambientLight);
    }

    fitCameraToObject(object) {
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = this.camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.5; // Add some padding

        this.camera.position.set(center.x, center.y, center.z + cameraZ);
        this.controls.target.copy(center);
        this.controls.update();
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();

        // Update based on view mode
        if (this.viewMode === 'firstPerson' && this.fpsControls.isLocked) {
            this.updateFirstPersonMovement(delta);
        } else if (this.viewMode === 'thirdPerson') {
            this.updateThirdPersonMovement(delta);
            this.updateThirdPersonCamera();
            if (this.orbitControls) {
                this.orbitControls.update();
            }
        } else if (this.viewMode === 'orbit') {
            if (this.orbitControls) {
                this.orbitControls.update();
            }
        }

        // Update animation mixer
        if (this.mixer) {
            this.mixer.update(delta);
        }

        // Render
        this.renderer.render(this.scene, this.camera);
    }

    updateFirstPersonMovement(delta) {
        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;
        this.velocity.y -= 9.8 * 100.0 * delta; // gravity

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize(); // ensures consistent movement in all directions

        if (this.moveForward || this.moveBackward) {
            this.velocity.z -= this.direction.z * 400.0 * delta;
        }
        if (this.moveLeft || this.moveRight) {
            this.velocity.x -= this.direction.x * 400.0 * delta;
        }

        this.fpsControls.moveRight(-this.velocity.x * delta);
        this.fpsControls.moveForward(-this.velocity.z * delta);

        this.camera.position.y += (this.velocity.y * delta); // new position

        if (this.camera.position.y < 1.6) {
            this.velocity.y = 0;
            this.camera.position.y = 1.6;
            this.canJump = true;
        }
    }

    updateThirdPersonMovement(delta) {
        const moveSpeed = this.moveSpeed * delta;
        
        if (this.moveForward) {
            this.thirdPersonTarget.z -= moveSpeed;
        }
        if (this.moveBackward) {
            this.thirdPersonTarget.z += moveSpeed;
        }
        if (this.moveLeft) {
            this.thirdPersonTarget.x -= moveSpeed;
        }
        if (this.moveRight) {
            this.thirdPersonTarget.x += moveSpeed;
        }
        
        // Keep target at ground level
        this.thirdPersonTarget.y = 1.6;
    }
}

// Initialize the scene when the page loads
new BakedLightingScene();

