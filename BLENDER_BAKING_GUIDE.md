# Blender Baking Guide for Three.js

This guide will help you bake textures and lighting from Blender for use in Three.js.

## Prerequisites
- Blender 3.0 or higher
- Your 3D model with materials and lighting set up

## Step 1: Set Up Your Scene

1. **Open your Blender file** (`Orange_problem_latest.blend`)
2. **Ensure your materials are set up** with base colors/textures
3. **Set up your lighting** (sun lights, area lights, etc.)
4. **Position your camera** for the desired view

## Step 2: Prepare Materials for Baking

1. **Select your object(s)** in the scene
2. **Go to Material Properties** (sphere icon in properties panel)
3. **For each material:**
   - Create a new **Image Texture** node
   - Set the image size (2048x2048 or 4096x4096 recommended)
   - Name it descriptively (e.g., "Baked_Diffuse", "Baked_Lighting")
   - Connect it to the **Base Color** input

## Step 3: Unwrap UVs (if needed)

1. **Enter Edit Mode** (Tab)
2. **Select all faces** (A)
3. **Press U** → **Smart UV Project** (or **Unwrap** if you have seams)
4. **Check UV Editor** to ensure UVs are properly laid out

## Step 4: Bake the Lighting

### Option A: Bake Combined (Recommended for Full Baked Lighting)

1. **Select your object** in Object Mode
2. **Go to Render Properties** (camera icon)
3. **Set Render Engine** to **Cycles** (for best quality)
4. **Go to Shader Editor**
5. **Add an Image Texture node** to your material
6. **Create a new image** (2048x2048 or higher)
7. **Select the Image Texture node** (important!)
8. **Go to Render menu** → **Bake**
9. **Set Bake Type** to **Combined**
10. **Check:**
    - ✓ Selected to Active (if baking to a single texture)
    - ✓ Clear Image
    - ✓ Margin: 2-4 pixels
11. **Click Bake**
12. **Save the image** (Image → Save As...)

### Option B: Bake Individual Components

For more control, bake separately:

1. **Diffuse Color:**
   - Bake Type: **Diffuse**
   - Uncheck **Direct** and **Indirect** (or keep them for full lighting)
   
2. **Lighting Only:**
   - Bake Type: **Emission** (if you set up emission)
   - Or use **Combined** with only lighting enabled

3. **Ambient Occlusion:**
   - Bake Type: **Ambient Occlusion**
   - Samples: 128-256

## Step 5: Apply Baked Textures

1. **In Shader Editor**, connect your baked image to **Base Color**
2. **Switch material to Emission Shader** (for fully baked lighting):
   - Add **Emission** node
   - Connect baked texture to **Color**
   - Set **Strength** to 1.0
   - Or use **Shader to RGB** → **ColorRamp** → **Emission**

## Step 6: Export to GLTF/GLB

1. **File** → **Export** → **glTF 2.0 (.glb/.gltf)**
2. **Export Settings:**
   - ✓ Selected Objects (or export all)
   - ✓ Include Custom Properties
   - ✓ Materials: Export
   - ✓ Images: Copy (or Embed)
   - Format: GLB (single file) or GLTF (separate files)
3. **Click Export**

## Step 7: Use in Three.js

1. **Place your exported `.glb` or `.gltf` file** in the project folder
2. **Rename it to `model.gltf` or `model.glb`** (or update the path in `main.js`)
3. **The Three.js code will automatically:**
   - Load the model
   - Convert materials to MeshBasicMaterial (for baked lighting)
   - Display with baked textures

## Tips for Best Results

- **Use Cycles renderer** for baking (better quality than Eevee)
- **High resolution textures** (2048x2048 minimum, 4096x4096 for detailed models)
- **Proper UV unwrapping** is crucial - avoid overlapping UVs
- **Bake margin** prevents texture bleeding (2-4 pixels recommended)
- **Test in Blender** first - render a test frame to verify lighting looks good
- **For complex scenes**, bake each object separately
- **Use Image Texture nodes** in materials before baking

## Troubleshooting

- **Black textures:** Check UV unwrapping and ensure image texture node is selected
- **Bleeding edges:** Increase bake margin
- **Low quality:** Increase texture resolution and bake samples
- **Missing lighting:** Ensure lights are enabled and not set to 0 strength

## Alternative: Using Eevee

If using Eevee:
1. **Render Properties** → **Render Engine: Eevee**
2. **Bake** → **Bake Type: Combined**
3. Similar process, but Cycles generally gives better results

