# Quick Start Guide - University Campus 3D Project

Get your project up and running in 5 minutes!

## 🚀 Quick Setup

### 1. Bake & Export from Blender (5-10 minutes)

1. **Open** `Orange_problem_latest.blend` in Blender
2. **Follow** `BLENDER_WORKFLOW.md` for detailed steps
3. **Quick version:**
   - Set up materials with Image Texture nodes
   - Add lighting (Sun light recommended)
   - Bake: Render → Bake → Combined
   - Export: File → Export → glTF 2.0 → Save as `model.glb`

### 2. Place Model in Project

1. **Copy** your exported `model.glb` file
2. **Paste** it in: `C:\Users\ishan\Desktop\belnd\`
3. **Rename** to `model.glb` (if different name)

### 3. Test Locally

```bash
# Option 1: Using npm
npm run dev

# Option 2: Using npx (no install needed)
npx serve .

# Option 3: Using Python
python -m http.server 8000
```

Then open: `http://localhost:3000` (or port shown)

### 4. Host Online (Choose One)

**Easiest: Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your project folder
3. Done! Get instant URL

**Best for Students: GitHub Pages**
1. Create GitHub repository
2. Upload all files
3. Settings → Pages → Enable
4. Get: `https://yourusername.github.io/repo-name`

See `HOSTING_GUIDE.md` for detailed instructions.

## 🎮 Using the Website

### View Modes

Click the **"Switch View Mode"** button (top right) to cycle:

1. **Orbit View** (default)
   - Drag to rotate, scroll to zoom
   - Best for overview

2. **First Person View**
   - Click to lock mouse
   - WASD to walk around
   - Mouse to look
   - Best for exploration

3. **Third Person View**
   - Drag to rotate camera
   - WASD to move target
   - Best for following a character

## 📁 Project Files

- `index.html` - Main webpage
- `main.js` - Three.js code with view modes
- `model.glb` - Your campus asset (you add this)
- `BLENDER_WORKFLOW.md` - Complete Blender guide
- `HOSTING_GUIDE.md` - Deployment options
- `README.md` - Full documentation

## ✅ Checklist

Before submitting:
- [ ] Model baked with lighting
- [ ] Exported as GLB/GLTF
- [ ] Model loads in browser
- [ ] All three view modes work
- [ ] Hosted online (GitHub Pages/Netlify)
- [ ] Link shared with professor

## 🆘 Need Help?

1. **Blender issues?** → See `BLENDER_WORKFLOW.md`
2. **Hosting issues?** → See `HOSTING_GUIDE.md`
3. **Code issues?** → Check browser console (F12)
4. **Model not loading?** → Check file path and name

## 🎓 For Your Assignment

Your project should demonstrate:
- ✅ Accurate 3D model of campus asset
- ✅ Baked lighting and materials
- ✅ First Person View (walkthrough)
- ✅ Third Person View (overview)
- ✅ Hosted online and accessible

Good luck! 🚀

