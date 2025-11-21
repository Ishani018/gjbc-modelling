# GJBC Corridor Visualization | PES University 🏫

A browser-based 3D visualization of the **Golden Jubilee Block Complex (GJBC) corridor** at **PES University**.

This project is a faithful digital reconstruction of the hallway, built entirely from scratch to capture the specific architecture, lighting, and atmosphere of the campus block.

## 🍊 The Orange Problem
**Objective:** Create a precise 3D model of a specific campus asset and visualize it on the web.
**Scope:** Accurate geometric modeling of the GJBC corridor at PES University, featuring a dual-perspective camera system (FPV & TPV) for interactive exploration.

## 📖 Project Overview & Methodology
This project serves as a digital twin of the GJBC corridor. To ensure maximum authenticity, the development process involved:

1.  **On-Site Reference Gathering:** Extensive photo and video documentation of the actual corridor was collected to capture textures, lighting conditions, and spatial proportions.
2.  **Modeled from Scratch:** No pre-made environment assets were used. The entire geometry—including the pillars, ceiling grids, and the iconic **chess tables**—was modeled manually in Blender based on our custom references.
3.  **Atmospheric Recreation:** Textures and lighting were tuned to match the real-world look and feel of the block.

## ✨ Features
* **Immersive Exploration:**
    * **First-Person View (FPV):** Walk through the corridor as if you were on campus.
    * **Third-Person View (TPV):** View the character and environment from an external angle.
* **High-Fidelity Custom Assets:** Unique 3D models built specifically for this project.
* **Interactive Camera:** Smooth transitions and controls powered by Three.js.

## 🛠️ Tech Stack
* **3D Modeling:** Blender (`.blend` files included)
* **Rendering Engine:** Three.js (WebGL)
* **Language:** JavaScript / HTML5 / CSS3

## 🚀 Getting Started

### Prerequisites
To load the 3D models and textures correctly, you must run this project on a local web server (due to browser CORS policies).

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Ishani018/gjbc-modelling.git](https://github.com/Ishani018/gjbc-modelling.git)
    cd gjbc-modelling
    ```

2.  **Start a local server:**
    * **VS Code:** Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
    * **Python:**
        ```bash
        # Python 3.x
        python -m http.server
        ```
    * **Node.js:**
        ```bash
        npx serve
        ```

3.  **Launch:**
    Open your browser and navigate to the local address (usually `http://localhost:5500` or `http://localhost:8000`).

## 🎮 Controls
| Key / Action | Function |
| :--- | :--- |
| **W / A / S / D** | Move Character |
| **Mouse** | Look Around |
| **V** | Toggle Camera (First/Third Person) |
| **Space** | Jump |

## 📂 Project Structure
```text
gjbc-modelling/
├── assets/             # Custom 3D models (.glb/.gltf) and textures
├── js/                 # Three.js scene logic and controllers
├── index.html          # Main entry point
├── style.css           # UI styling
└── README.md           # Documentation
👥 Contributors
Ishani018

jahnvi1504

Parvparmar

(Reference Collection, 3D Modeling & Development)

PES University – Campus Modelling Project
