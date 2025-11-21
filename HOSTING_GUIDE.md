# Hosting Guide - Deploy Your Three.js Campus Visualization

This guide covers multiple hosting options for your University campus 3D visualization project.

## Quick Comparison

| Platform | Free Tier | Ease | Custom Domain | Best For |
|----------|-----------|------|----------------|----------|
| **GitHub Pages** | ✅ Yes | ⭐⭐⭐⭐⭐ | ✅ Yes | Students, portfolios |
| **Netlify** | ✅ Yes | ⭐⭐⭐⭐⭐ | ✅ Yes | Quick deployment |
| **Vercel** | ✅ Yes | ⭐⭐⭐⭐ | ✅ Yes | Modern projects |
| **Glitch** | ✅ Yes | ⭐⭐⭐⭐ | ❌ No | Experimentation |

---

## Option 1: GitHub Pages (Recommended for Students)

### Why GitHub Pages?
- ✅ **Free** forever
- ✅ **Easy** to set up
- ✅ **Custom domain** support
- ✅ **Great for portfolios**
- ✅ **Version control** built-in

### Step-by-Step Setup

#### 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **"New"** (green button) or **"+"** → **"New repository"**
3. **Repository name**: `university-campus-3d` (or your choice)
4. **Description**: "3D visualization of University campus asset"
5. **Visibility**: 
   - **Public** (required for free GitHub Pages)
   - Or **Private** (requires GitHub Pro, but you can use Netlify instead)
6. **DO NOT** initialize with README (we already have files)
7. Click **"Create repository"**

#### 2. Upload Your Files

**Option A: Using GitHub Website (Easiest)**

1. In your new repository, click **"uploading an existing file"**
2. **Drag and drop** all your project files:
   - `index.html`
   - `main.js`
   - `package.json`
   - `README.md`
   - `model.glb` (your exported model)
   - Any texture folders
3. **Commit message**: "Initial commit - University campus 3D visualization"
4. Click **"Commit changes"**

**Option B: Using Git (Recommended for updates)**

```bash
# Navigate to your project folder
cd C:\Users\ishan\Desktop\belnd

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - University campus 3D visualization"

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll to **"Pages"** (left sidebar)
4. **Source**: Select **"Deploy from a branch"**
5. **Branch**: Select **"main"** (or "master")
6. **Folder**: Select **"/ (root)"**
7. Click **"Save"**
8. Wait 1-2 minutes for deployment

#### 4. Access Your Site

- Your site will be at: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- Example: `https://johndoe.github.io/university-campus-3d/`

#### 5. Update Your Site

Every time you push changes:
```bash
git add .
git commit -m "Updated model or fixed bugs"
git push
```
GitHub Pages updates automatically (takes 1-2 minutes).

---

## Option 2: Netlify (Easiest Drag & Drop)

### Why Netlify?
- ✅ **Free** tier
- ✅ **Drag & drop** deployment
- ✅ **Automatic HTTPS**
- ✅ **Custom domain** support
- ✅ **Continuous deployment** from Git

### Step-by-Step Setup

#### 1. Prepare Your Files

Make sure all files are in one folder (they already are).

#### 2. Deploy

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free) or sign in
3. On dashboard, find **"Sites"**
4. **Drag and drop** your entire project folder onto Netlify
5. Wait for deployment (30 seconds)
6. **Done!** You get a URL like: `https://random-name-123.netlify.app`

#### 3. Customize URL

1. Click on your site
2. **Site settings** → **Change site name**
3. Choose a custom name: `university-campus-3d`
4. New URL: `https://university-campus-3d.netlify.app`

#### 4. Connect to Git (Optional, for auto-deploy)

1. **Site settings** → **Build & deploy**
2. **Continuous Deployment** → **Link to Git provider**
3. Connect your GitHub repository
4. Every push = automatic deployment!

---

## Option 3: Vercel

### Why Vercel?
- ✅ **Free** tier
- ✅ **Fast** global CDN
- ✅ **Automatic** deployments
- ✅ **Great** for modern web apps

### Step-by-Step Setup

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (easiest)
3. Click **"Add New Project"**
4. **Import** your GitHub repository
5. **Framework Preset**: "Other" (or leave default)
6. **Root Directory**: `./` (root)
7. Click **"Deploy"**
8. **Done!** URL: `https://your-project.vercel.app`

---

## Option 4: Glitch (For Quick Testing)

### Why Glitch?
- ✅ **Free**
- ✅ **Instant** editing in browser
- ✅ **Great** for experimentation

### Step-by-Step Setup

1. Go to [glitch.com](https://glitch.com)
2. Sign up (free)
3. Click **"New Project"** → **"Import from GitHub"** or **"Hello Webpage"**
4. **Upload files** via drag & drop or file manager
5. Your site: `https://your-project.glitch.me`

---

## Option 5: Local Development Server

For testing before hosting:

### Using Python (Windows)

```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Using Node.js (serve package)

```bash
npx serve .
# Or install globally: npm install -g serve
# Then: serve .
```

### Using VS Code Live Server

1. Install **"Live Server"** extension in VS Code
2. Right-click `index.html`
3. **"Open with Live Server"**

---

## Custom Domain Setup

### For GitHub Pages

1. Buy domain (Namecheap, Google Domains, etc.)
2. In repository **Settings** → **Pages**
3. Add your domain in **"Custom domain"** field
4. Follow DNS setup instructions (add CNAME record)

### For Netlify/Vercel

1. **Site settings** → **Domain management**
2. **Add custom domain**
3. Follow DNS instructions (usually automatic)

---

## File Size Considerations

### Optimize Your Model

Before hosting, optimize your files:

1. **Compress GLB file:**
   - Use [glTF-Pipeline](https://github.com/CesiumGS/gltf-pipeline)
   - Or online tools like [glTF.report](https://gltf.report)

2. **Compress textures:**
   - Use [TinyPNG](https://tinypng.com) for PNGs
   - Or convert to WebP format

3. **Check file sizes:**
   - Keep total under 50MB for free hosting
   - GitHub Pages: 1GB limit (but slow if too large)

### Quick Optimization Commands

```bash
# Install gltf-pipeline (requires Node.js)
npm install -g gltf-pipeline

# Compress your model
gltf-pipeline -i model.glb -o model-compressed.glb -d
```

---

## Troubleshooting

### Problem: Model not loading on hosted site
**Solutions:**
- Check browser console for errors
- Verify file paths are relative (`./model.glb` not `C:/...`)
- Ensure CORS is enabled (should be automatic on these platforms)
- Check file size limits

### Problem: Textures missing
**Solutions:**
- Ensure textures are in the same folder or correct path
- Use GLB format (embeds textures)
- Check texture file names match exactly (case-sensitive)

### Problem: Site shows 404
**Solutions:**
- Ensure `index.html` is in root folder
- Check GitHub Pages source branch is correct
- Wait a few minutes for deployment

### Problem: Slow loading
**Solutions:**
- Compress model and textures
- Use GLB instead of GLTF (single file)
- Enable compression on hosting platform
- Use CDN for Three.js (already using CDN)

---

## Recommended Workflow

1. **Develop locally** using `npx serve .`
2. **Test thoroughly** before deploying
3. **Optimize files** (compress model/textures)
4. **Deploy to GitHub Pages** (free, reliable)
5. **Share your link** with professors/peers
6. **Update as needed** (just push to Git)

---

## Quick Deploy Checklist

Before deploying:
- [ ] All files in project folder
- [ ] `model.glb` or `model.gltf` exists
- [ ] Tested locally (works in browser)
- [ ] File sizes reasonable (<50MB total)
- [ ] No console errors
- [ ] README updated with project info

---

## Example GitHub Repository Structure

```
university-campus-3d/
├── index.html
├── main.js
├── package.json
├── README.md
├── BLENDER_WORKFLOW.md
├── HOSTING_GUIDE.md
├── model.glb          (your exported model)
└── textures/          (if using separate textures)
    ├── texture1.png
    └── texture2.png
```

---

## Need Help?

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs

Good luck with your deployment! 🚀

