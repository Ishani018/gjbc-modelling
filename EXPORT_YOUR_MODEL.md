# Export Your Orange_problem_latest.blend Model

## Why You See Orange Block
- ❌ Your Blender file (`.blend`) can't be used directly in Three.js
- ✅ You need to export it as `.glb` or `.gltf` format
- 📦 The website is looking for `model.glb` or `model.gltf`

## Step-by-Step Export Instructions

### 1. Open Your Blender File
1. Open **Blender**
2. **File** → **Open**
3. Navigate to: `C:\Users\ishan\Desktop\belnd\`
4. Select: `Orange_problem_latest.blend`
5. Click **Open**

### 2. Select What to Export
- **Option A**: Export everything
  - Press **A** (select all objects)
  
- **Option B**: Export specific objects
  - Click objects you want (hold **Shift** to select multiple)

### 3. Export to GLB Format
1. **File** → **Export** → **glTF 2.0 (.glb/.gltf)**
2. In the export window:
   - **Navigate to**: `C:\Users\ishan\Desktop\belnd\`
   - **File name**: Type `model` (it will add `.glb` automatically)
   - **Format**: Select **glTF Binary (.glb)** from dropdown
   
3. **Export Settings** (left panel):
   - ✓ **Selected Objects** (if you selected specific ones)
   - ✓ **Include Custom Properties**
   - **Transform**: ✓ **+Y Up**
   - **Geometry**:
     - ✓ **Apply Modifiers**
     - ✓ **UVs**
     - ✓ **Normals**
   - **Materials**:
     - ✓ **Export**
   - **Images**:
     - ✓ **Embed** (for GLB - puts textures inside file)

4. Click **"Export glTF 2.0"** button (bottom right)

### 4. Verify Export
- Check that `model.glb` appears in: `C:\Users\ishan\Desktop\belnd\`
- File size should be reasonable (not 0 bytes)

### 5. Test in Browser
1. Refresh your browser (or restart local server)
2. Your model should now appear instead of the orange block!

## Quick Visual Guide

```
Blender → File → Export → glTF 2.0
         ↓
    Navigate to: belnd folder
         ↓
    File name: model
    Format: glTF Binary (.glb)
         ↓
    Click: Export glTF 2.0
         ↓
    Result: model.glb in belnd folder
```

## Troubleshooting

### Can't find Export option?
- Make sure you're using Blender 2.8+ (glTF export is built-in)
- If missing, install "glTF 2.0" addon (should be included by default)

### Export button grayed out?
- Make sure you're in **Object Mode** (not Edit Mode)
- Select at least one object

### Model doesn't appear after export?
- Check browser console (F12) for errors
- Verify file is named exactly `model.glb` (lowercase)
- Make sure it's in the same folder as `index.html`

### Model looks wrong?
- Check scale in Blender (should be reasonable size)
- Verify materials are applied
- Check that objects aren't hidden

## After Export

Once `model.glb` exists:
- ✅ Website will automatically load it
- ✅ Orange block will be replaced with your model
- ✅ All three view modes will work
- ✅ You can then bake textures later

---

**Your model will appear as soon as you export it!** 🎉

