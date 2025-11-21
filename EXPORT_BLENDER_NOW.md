# Quick Export from Blender - Use Your Orange_problem_latest.blend

## Current Status
- ❌ **No model.gltf/gbl found** - Website is showing demo scene
- ✅ **Your Blender file exists**: `Orange_problem_latest.blend`
- ⚠️ **Need to export** from Blender to GLTF/GLB format

## Quick Export Steps (2 minutes)

### Step 1: Open Blender File
1. Open **Blender**
2. **File** → **Open** → Select `Orange_problem_latest.blend`

### Step 2: Prepare for Export
1. **Select all objects** you want to export:
   - Press **A** (select all) in Object Mode
   - Or manually select specific objects

2. **Check materials** are applied (optional, but recommended)

### Step 3: Export to GLTF/GLB
1. **File** → **Export** → **glTF 2.0 (.glb/.gltf)**
2. **Export Settings:**
   - **Format**: Choose **GLB** (single file, recommended)
   - ✓ **Selected Objects** (if you only want specific objects)
   - ✓ **Include Custom Properties**
   - **Transform**: ✓ **+Y Up**
   - **Geometry**:
     - ✓ **Apply Modifiers**
     - ✓ **UVs**
     - ✓ **Normals**
   - **Materials**:
     - ✓ **Export**
   - **Images**:
     - ✓ **Copy** (copies textures) or ✓ **Embed** (for GLB)
3. **Navigate to**: `C:\Users\ishan\Desktop\belnd\`
4. **File name**: `model.glb` (or `model.gltf`)
5. **Click "Export glTF 2.0"**

### Step 4: Verify
- Check that `model.glb` appears in your `belnd` folder
- File should be there: `C:\Users\ishan\Desktop\belnd\model.glb`

### Step 5: Test
1. Run: `npx serve .`
2. Open: `http://localhost:3000`
3. Your model should now load!

## What Gets Exported

✅ **Geometry** - All meshes and shapes
✅ **Materials** - Colors and textures
✅ **UV Maps** - Texture coordinates
✅ **Textures** - Image files (if using GLTF) or embedded (if using GLB)

## Troubleshooting

### Export button grayed out?
- Make sure you're in **Object Mode** (not Edit Mode)
- Select at least one object

### Model too large/small in Three.js?
- Check Blender units (should be Metric, 1 unit = 1 meter)
- Or adjust camera in `main.js` after export

### Textures missing?
- Use **GLB format** (embeds textures)
- Or ensure texture images are in same folder as GLTF file

### Export takes too long?
- Reduce polygon count if model is very complex
- Or export only selected objects

## After Export

Once you have `model.glb`:
1. ✅ Website will automatically load it
2. ✅ All three view modes will work with your model
3. ✅ You can then bake textures later (see BLENDER_WORKFLOW.md)

## Quick Test Without Baking

You can export and test **right now** without baking:
- Export as GLB
- Place in project folder as `model.glb`
- Website will load it immediately
- You can bake textures later and re-export

---

**Next**: After export, your `Orange_problem_latest.blend` model will be displayed in the Three.js website! 🎉

