# Xcel-LIDAR-Viewer

This repository hosts a CesiumJS application to visualize a LiDAR dataset from a Cesium ion asset, enhanced with interactive styling and developer tools.

👉 **Live demo:** https://allenaidash.github.io/Xcel-LiDAR-Viewer/

## Features

*   **3D Tileset Loading**: Loads a specific point cloud dataset directly from a Cesium ion asset.
*   **Automatic Camera Flight**: On load, the camera automatically flies to a predefined location and altitude for immediate focus on the area of interest.
*   **Interactive Styling Toolbar**: A simple UI in the top-left corner allows you to change the point cloud's appearance on the fly:
    *   **RGB Color**: The default, natural color view from the source data.
    *   **Classification**: Colors points based on their classification code (e.g., ground, vegetation, buildings).
    *   **Intensity**: Applies a color ramp based on the intensity value of the laser return.
*   **Point Inspector Tool**: A developer feature that allows you to click on any point in the scene to print its properties (like `classification`, `intensity`, etc.) to the browser's developer console. This is essential for discovering the correct values to use for custom styling.

## How it Works

The site is a static `index.html` file located in the `/docs` folder of this repository.

*   **GitHub Pages**: The site is served directly from the `/docs` folder on the `main` branch.
*   **CesiumJS CDN**: The CesiumJS library is loaded via a Content Delivery Network (CDN), so no local installation is required.
*   **Cesium ion**: The viewer connects to Cesium ion to load the 3D Tiles dataset using a default access token and asset ID.
*   **Cesium3DTileStyle**: The styling toolbar works by creating and applying `Cesium.Cesium3DTileStyle` objects to the tileset, which uses a JSON-based styling language to define rendering rules.
*   **ScreenSpaceEventHandler**: The Point Inspector tool is implemented using a `ScreenSpaceEventHandler` to capture mouse clicks on the scene.

## Repository Structure

