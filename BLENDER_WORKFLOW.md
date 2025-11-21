# Complete Blender Workflow for University Campus Asset

This is a step-by-step guide specifically for your "Orange Problem" University campus asset project.

## Project Overview
- **Goal**: Model a 3D asset from your University campus
- **Output**: Baked textures with lighting for Three.js
- **Views**: First Person and Third Person visualization

## Phase 1: Modeling Your Campus Asset

### Step 1: Reference Gathering
1. **Take photos** of your campus asset from multiple angles
2. **Note dimensions** if possible (approximate sizes)
3. **Identify materials** (brick, concrete, glass, metal, etc.)

### Step 2: Basic Modeling in Blender

1. **Open Blender** (`Orange_problem_latest.blend`)
2. **Delete default cube** (X → Delete)
3. **Set up your scene:**
   - **Units**: Properties Panel → Scene → Units → Metric
   - **Scale**: Match real-world scale (1 Blender unit = 1 meter)

4. **Start modeling:**
   - Use **Add → Mesh** for basic shapes
   - **Tab** to enter Edit Mode
   - **E** to extrude, **G** to grab/move, **S** to scale
   - **Ctrl+R** to add loop cuts
   - **F** to fill faces

### Step 3: UV Unwrapping (CRITICAL for Baking)

1. **Select your object** → **Tab** (Edit Mode)
2. **Select all** (A)
3. **Mark seams** (important for clean unwrapping):
   - Select edges where you want seams
   - **Ctrl+E** → **Mark Seam**
   - Seams should be on hidden edges (corners, backs)
4. **Unwrap:**
   - **U** → **Unwrap** (or **Smart UV Project** for quick unwrap)
5. **Check UV Editor:**
   - Open **UV Editor** workspace
   - Ensure UVs are:
     - ✓ Not overlapping (except for identical parts)
     - ✓ Efficiently using space
     - ✓ Properly scaled (not too small or large)

## Phase 2: Materials and Textures

### Step 4: Create Materials

1. **Select object** → **Material Properties** (red sphere icon)
2. **Click "New"** to create material
3. **Name it** (e.g., "Brick_Wall", "Concrete_Floor")
4. **Set Base Color:**
   - Use **Base Color** for material color
   - Or add **Image Texture** node if you have photos

### Step 5: Set Up for Baking

For EACH material you want to bake:

1. **Go to Shader Editor** (workspace or **Shift+F3**)
2. **Add Image Texture node:**
   - **Shift+A** → **Texture** → **Image Texture**
   - Click **"New"** in the node
   - Set size: **2048x2048** or **4096x4096**
   - Name it: `Baked_[MaterialName]` (e.g., "Baked_Brick")
3. **Connect to Base Color:**
   - Connect Image Texture **Color** output to Material **Base Color** input
4. **IMPORTANT**: Select the **Image Texture node** (click on it)
   - This tells Blender which image to bake to

## Phase 3: Lighting Setup

### Step 6: Set Up Lighting

1. **Delete default light** (select → X)
2. **Add Sun Light** (for outdoor campus asset):
   - **Add → Light → Sun**
   - Position it high and angled (like real sun)
   - **Properties → Light**:
     - **Strength**: 5-10
     - **Angle**: 0.5-1.0 (for softer shadows)
3. **Add Fill Lights** (optional, for better lighting):
   - **Add → Light → Area Light**
   - Position opposite to sun
   - **Strength**: 1-3
   - **Size**: 5-10 meters

### Step 7: Set Render Engine

1. **Properties Panel** → **Render Properties** (camera icon)
2. **Render Engine**: **Cycles** (best quality for baking)
3. **Device**: **GPU Compute** (if you have good GPU) or **CPU**
4. **Samples**: 128-256 (for baking, higher = better but slower)

## Phase 4: Baking Process

### Step 8: Bake Combined Lighting (Recommended)

**For each object/material:**

1. **Select the object** you want to bake
2. **Go to Shader Editor**
3. **Select the Image Texture node** (the one you created)
4. **Render Properties** → Scroll to **Bake** section
5. **Bake Settings:**
   - **Bake Type**: **Combined** (bakes everything: color + lighting + shadows)
   - ✓ **Selected to Active** (uncheck if baking single object)
   - ✓ **Clear** (clears image before baking)
   - **Margin**: **4 pixels** (prevents edge bleeding)
   - **Samples**: **128** (or higher for quality)
6. **Click "Bake"** button
7. **Wait for completion** (progress bar at bottom)
8. **Save the image:**
   - In **Image Editor** or **UV Editor**
   - **Image** → **Save As...**
   - Save as **PNG** (lossless, recommended)
   - Name it clearly: `Baked_[ObjectName].png`

### Step 9: Apply Baked Textures

1. **In Shader Editor**, your baked texture should already be connected
2. **Verify** the Image Texture node shows your baked result
3. **For fully baked lighting**, you can:
   - Keep as is (works fine)
   - Or switch to **Emission Shader**:
     - Add **Emission** node
     - Connect baked texture to **Color**
     - Set **Strength** to 1.0
     - Connect to **Material Output**

## Phase 5: Export for Three.js

### Step 10: Prepare for Export

1. **Select all objects** you want to export (A in Object Mode)
2. **Check materials** are applied correctly
3. **Ensure textures are saved** (not just in Blender)

### Step 11: Export to GLTF/GLB

1. **File** → **Export** → **glTF 2.0 (.glb/.gltf)**
2. **Export Settings:**
   - **Format**: 
     - **GLB** (single file, recommended) - embeds everything
     - **GLTF** (separate files) - if you want separate texture files
   - ✓ **Selected Objects** (if you only want specific objects)
   - ✓ **Include Custom Properties**
   - **Transform**: ✓ +Y Up (standard)
   - **Geometry**:
     - ✓ **Apply Modifiers**
     - ✓ **UVs**
     - ✓ **Normals**
     - ✓ **Vertex Colors** (if you used them)
   - **Materials**:
     - ✓ **Export**
     - **Format**: **Automatic** (or **PNG**)
   - **Images**:
     - ✓ **Copy** (copies textures to export folder)
     - Or ✓ **Embed** (for GLB, embeds in file)
3. **Choose location** (save in your project folder)
4. **Name it**: `model.glb` or `model.gltf`
5. **Click "Export glTF 2.0"**

## Phase 6: Testing in Blender

### Step 12: Verify Before Export

1. **Render a test image** (F12):
   - Check lighting looks good
   - Verify shadows are correct
   - Check material colors/textures
2. **Viewport Shading** → **Material Preview** or **Rendered**:
   - Make sure everything looks correct
3. **Check UVs** one more time:
   - UV Editor → ensure no overlapping issues

## Quick Reference Checklist

Before exporting, verify:
- [ ] All objects have materials
- [ ] All materials have baked textures
- [ ] UVs are properly unwrapped
- [ ] Textures are saved as image files
- [ ] Lighting looks good in render
- [ ] Model is at appropriate scale
- [ ] No overlapping geometry
- [ ] Export settings are correct

## Common Issues & Solutions

### Problem: Black or dark textures
**Solution**: 
- Check UV unwrapping
- Ensure Image Texture node is selected before baking
- Verify lighting is enabled and has strength > 0

### Problem: Texture bleeding at edges
**Solution**: 
- Increase bake margin (4-8 pixels)
- Check for overlapping UVs
- Ensure proper seam placement

### Problem: Low quality textures
**Solution**: 
- Increase texture resolution (4096x4096)
- Increase bake samples (256-512)
- Use Cycles renderer (not Eevee)

### Problem: Model too large/small in Three.js
**Solution**: 
- Check Blender units (should be Metric, 1 unit = 1 meter)
- Scale model in Blender before export
- Or adjust camera in Three.js code

## Tips for University Campus Assets

1. **Modular approach**: Model repeating elements (windows, doors) once, duplicate
2. **LOD (Level of Detail)**: Create simpler versions for distant viewing
3. **Texture atlasing**: Combine multiple materials into one texture sheet
4. **Optimize geometry**: Use reasonable polygon count
5. **Bake ambient occlusion**: Adds depth and realism
6. **Consider scale**: Match real-world dimensions for accurate representation

## Next Steps After Export

1. **Place `model.glb` in your project folder**
2. **Update path in `main.js`** if you used different name
3. **Test in browser** - should load automatically
4. **Switch between view modes** using the toggle button
5. **Host your project** (see HOSTING_GUIDE.md)

Good luck with your University campus asset project! 🎓

