Xcel-LIDAR-Viewer
This repository hosts a simple CesiumJS application on GitHub Pages to visualize a LIDAR dataset from a Cesium ion asset.

👉 Live demo: https://allenaidash.github.io/Xcel-LiDAR-Viewer/

How it Works
The site is a static index.html file located in the /docs folder of this repository.

GitHub Pages is configured to serve the site directly from the /docs folder on the main branch.

CesiumJS is loaded via a Content Delivery Network (CDN), meaning no local installation is required.

The viewer connects to Cesium ion to load a specific 3D Tiles dataset using an access token.

Repository Structure
├── docs/
│   ├── index.html
├── .gitignore
├── LICENSE
└── README.md
Getting Started
To run this demo locally or modify it:

Clone the repository:

git clone https://github.com/allenaidash/Xcel-LIDAR-Viewer.git
Open the file: Open the index.html file located in the docs/ folder in a modern web browser.

Note: You will need to replace the Cesium.Ion.defaultAccessToken and the fromIonAssetId with your own details to load a different asset.
