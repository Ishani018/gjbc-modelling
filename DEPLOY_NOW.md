# Deploy Now - Quick Hosting Guide

Your project is ready to host! Follow these steps to get it online in 2 minutes.

## Option 1: Netlify (EASIEST - 2 minutes) ⭐ RECOMMENDED

### Steps:

1. **Go to Netlify**: https://app.netlify.com/drop
   - No account needed for drag & drop!

2. **Drag your entire project folder** onto the Netlify page
   - Drag the `belnd` folder from your desktop
   - Or select all files and drag them

3. **Wait 30 seconds** - Netlify will deploy automatically

4. **Get your URL** - You'll see something like:
   - `https://amazing-name-12345.netlify.app`

5. **Share the link** - It's live immediately!

### To Customize URL:

1. Click on your site in Netlify dashboard
2. Go to **Site settings** → **Change site name**
3. Choose a name like: `university-campus-3d`
4. New URL: `https://university-campus-3d.netlify.app`

---

## Option 2: GitHub Pages (Free Forever)

### Steps:

1. **Create GitHub Account** (if you don't have one):
   - Go to https://github.com
   - Sign up (free)

2. **Create New Repository**:
   - Click **"New"** (green button)
   - Name: `university-campus-3d`
   - Make it **Public** (required for free hosting)
   - Click **"Create repository"**

3. **Upload Files**:
   - Click **"uploading an existing file"**
   - Drag ALL your project files:
     - `index.html`
     - `main.js`
     - `package.json`
     - All `.md` files
     - (Skip `.blend` file - it's too large)
   - Click **"Commit changes"**

4. **Enable GitHub Pages**:
   - Go to **Settings** (top menu)
   - Scroll to **Pages** (left sidebar)
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select **"main"**
   - **Folder**: Select **"/ (root)"**
   - Click **"Save"**

5. **Wait 2 minutes**, then visit:
   - `https://YOUR_USERNAME.github.io/university-campus-3d/`

---

## Option 3: Vercel (Also Very Easy)

1. Go to https://vercel.com
2. Sign up with GitHub (easiest)
3. Click **"Add New Project"**
4. **Import** your GitHub repository (or drag & drop)
5. Click **"Deploy"**
6. Get URL: `https://your-project.vercel.app`

---

## What Works Right Now

Even without your baked model, the website will:
- ✅ Load and display a demo scene
- ✅ Show all three view modes (Orbit, First Person, Third Person)
- ✅ Work with interactive controls
- ✅ Look professional

When you add your `model.glb` later, just:
1. Upload it to the same folder
2. Push to Git (if using GitHub) or drag to Netlify again
3. It will automatically update!

---

## Quick Test Before Hosting

Want to test locally first?

```bash
# In your project folder
npx serve .
```

Then open: `http://localhost:3000`

---

## Recommended: Netlify Drag & Drop

**Why Netlify?**
- ✅ Fastest (30 seconds)
- ✅ No account needed for first deploy
- ✅ Automatic HTTPS
- ✅ Easy updates (just drag folder again)

**Go now**: https://app.netlify.com/drop

---

## Need Help?

- **Netlify not working?** Try GitHub Pages
- **Files too large?** Skip the `.blend` file (not needed for website)
- **Model not showing?** That's normal - add it after baking!

Your site is ready to go live! 🚀

