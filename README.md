# GJBC Corridor Visualization | PES University 🏫

A browser-based 3D visualization of the **Golden Jubilee Block Complex (GJBC) corridor** at **PES University**.

This project is a faithful digital reconstruction of the hallway, built entirely from scratch to capture the specific architecture, lighting, and atmosphere of the campus block.

## 🍊 The Orange Problem

**Objective:** Create a precise 3D model of a specific campus asset and visualize it on the web.

**Scope:** Accurate geometric modeling of the GJBC corridor at PES University, featuring a dual-perspective camera system (FPV & TPV) for interactive exploration.

## 📖 Project Overview & Methodology

This project serves as a digital twin of the GJBC corridor. To ensure maximum authenticity, the development process involved:

1. **On-Site Reference Gathering:** Extensive photo and video documentation of the actual corridor was collected to capture textures, lighting conditions, and spatial proportions.
2. **Modeled from Scratch:** No pre-made environment assets were used. The entire geometry—including the pillars, ceiling grids, and the iconic **chess tables**—was modeled manually in Blender based on our custom references.
3. **Atmospheric Recreation:** Textures and lighting were tuned to match the real-world look and feel of the block.
4. **Baked Lighting:** Pre-baked textures and lighting for optimal performance and visual quality in Three.js.

## ✨ Features

* **Immersive Exploration:**  
   * **Orbit View:** Rotate, pan, and zoom around the scene for overview
   * **First-Person View (FPV):** Walk through the corridor as if you were on campus (WASD + mouse)
   * **Third-Person View (TPV):** View the character and environment from an external angle
* **High-Fidelity Custom Assets:** Unique 3D models built specifically for this project
* **Interactive Camera:** Smooth transitions and controls powered by Three.js
* **Baked Lighting:** Pre-baked textures and lighting for realistic shadows and illumination
* **Responsive Design:** Modern UI with loading states and view mode toggles

## 🛠️ Tech Stack

* **3D Modeling:** Blender (`.blend` files included)
* **Rendering Engine:** Three.js (WebGL)
* **Language:** JavaScript / HTML5 / CSS3
* **Export Format:** GLTF/GLB for web compatibility

## 🚀 Getting Started

### Prerequisites

To load the 3D models and textures correctly, you must run this project on a local web server (due to browser CORS policies).

### Installation & Running

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/Ishani018/gjbc-modelling.git
   cd gjbc-modelling
   ```

2. **Start a local server:**  
   * **VS Code:** Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".  
   * **Python:**  
     ```bash
     # Python 3.x
     python -m http.server 8000
     ```
   * **Node.js:**  
     ```bash
     npx serve .
     # Or
     npm run dev
     ```

3. **Launch:** Open your browser and navigate to the local address (usually `http://localhost:5500` or `http://localhost:8000`).

## 🎮 Controls

### Orbit View (Default)
- **Left Click + Drag**: Rotate camera
- **Right Click + Drag**: Pan camera
- **Scroll Wheel**: Zoom in/out

### First Person View (FPV)
- **Click**: Lock mouse pointer
- **W / A / S / D** or **Arrow Keys**: Move forward/backward/left/right
- **Mouse**: Look around
- **Space**: Jump
- **ESC**: Unlock mouse

### Third Person View (TPV)
- **Left Click + Drag**: Rotate camera around target
- **Scroll Wheel**: Zoom in/out
- **W / A / S / D**: Move the follow target

### View Mode Toggle
- Click the **"Switch View Mode"** button (top right) to cycle between views

## 📂 Project Structure

```
gjbc-modelling/
├── index.html                 # Main HTML file
├── main.js                    # Three.js scene with view modes
├── package.json               # Project configuration
├── README.md                  # This file
├── BLENDER_WORKFLOW.md        # Complete Blender workflow guide
├── BLENDER_BAKING_GUIDE.md    # Quick baking reference
├── HOSTING_GUIDE.md          # Deployment instructions
├── DEPLOY_NOW.md             # Quick hosting guide
├── EXPORT_YOUR_MODEL.md      # Model export instructions
├── model.glb                 # Exported 3D model
├── Orange_problem_latest.blend # Source Blender file
└── assets/                    # Custom 3D models (.glb/.gltf) and textures (if separate)
```

## 🎨 Baked Lighting Setup

This project uses **baked lighting** for optimal performance and visual quality:

1. **Bake your textures in Blender** (see `BLENDER_BAKING_GUIDE.md` or `BLENDER_WORKFLOW.md`)
2. **Export your model** as GLTF or GLB format
3. **Place the file** in the project root as `model.glb` or `model.gltf`
4. The website automatically loads and displays it with baked lighting

The Three.js scene automatically:
- Loads your GLTF/GLB model
- Converts materials to `MeshBasicMaterial` (optimal for baked lighting)
- Preserves all texture maps from your baked textures
- Disables real-time lighting (since it's baked in)

## 🌐 Hosting & Deployment

### Quick Deploy Options

1. **Netlify** (Easiest - 2 minutes):
   - Go to https://app.netlify.com/drop
   - Drag & drop your project folder
   - Get instant URL

2. **GitHub Pages** (Free Forever):
   - Push to GitHub
   - Settings → Pages → Enable
   - Get: `https://yourusername.github.io/gjbc-modelling/`

3. **Vercel**:
   - Connect GitHub repo
   - Auto-deploys on push

See `HOSTING_GUIDE.md` or `DEPLOY_NOW.md` for detailed instructions.

## 🔧 Customization

### Change Background Color

Edit `main.js`:
```javascript
this.scene.background = new THREE.Color(0x1a1a1a); // Change color here
```

### Adjust Camera Position

Edit `main.js`:
```javascript
this.camera.position.set(5, 5, 5); // X, Y, Z coordinates
```

## 🌍 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with WebGL 2.0 support

## 🐛 Troubleshooting

### Model not loading?
- Check browser console for errors (F12)
- Ensure model file path is correct (`model.glb` or `model.gltf`)
- Verify GLTF/GLB file is valid
- Make sure you're running on a local server (not file://)

### Textures not showing?
- Check that textures are exported with the model
- Verify texture paths in GLTF file
- Ensure textures are in correct format (PNG, JPG)
- Use GLB format (embeds textures) for easier deployment

### Performance issues?
- Reduce texture resolution
- Simplify geometry in Blender
- Use GLB format instead of GLTF (single file)

## 📚 Documentation

- `BLENDER_WORKFLOW.md` - Complete Blender workflow for modeling and baking
- `BLENDER_BAKING_GUIDE.md` - Quick reference for texture baking
- `HOSTING_GUIDE.md` - Detailed hosting and deployment guide
- `DEPLOY_NOW.md` - Quick deployment instructions
- `EXPORT_YOUR_MODEL.md` - Step-by-step model export guide

## 👥 Contributors

- **Ishani018** - Development & 3D Modeling
- **jahnvi1504** - Reference Collection & 3D Modeling
- **Parvparmar** - Reference Collection & Development

## 📝 Next Steps

1. **Bake your textures in Blender** following `BLENDER_WORKFLOW.md`
2. **Export your model** as GLB/GLTF format
3. **Place it in the project folder** as `model.glb` or `model.gltf`
4. **Test locally** using `npm run dev` or `npx serve .`
5. **Host your project** following `HOSTING_GUIDE.md`
6. **Share your link** with professors and peers!

## 📖 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Blender Documentation](https://docs.blender.org/)
- [GLTF Specification](https://www.khronos.org/gltf/)
- [PES University](https://www.pes.edu/)

---

**PES University – Campus Modelling Project** 🎓
