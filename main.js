(async () => {
  try {
    // 1. Your Cesium ion access token.
    // WARNING: In a production environment, it's recommended to use a more secure method
    // for handling tokens than hardcoding them in client-side code.
    // Ensure this token has 'assets:read' scope for terrain and your tileset.
    if (typeof CESIUM_ION_TOKEN === 'undefined' || CESIUM_ION_TOKEN === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzOWZkYjU5OC1iZjkwLTQ2MDItYjY2YS1mN2U5NTI4NzhjZTAiLCJpZCI6MzMzMTI1LCJpYXQiOjE3NTU2NDIxMzl9.v5-dIRkNVV9oNiWl4aJ1iHyQVTiYHSOtK7LqU8KJgE0') {
      throw new Error('Cesium Ion token is not set. Please create a new token and set it in config.js');
    }
    Cesium.Ion.defaultAccessToken = CESIUM_ION_TOKEN;

    // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain()
    });
    console.log("Cesium Viewer initialized successfully.");

    // 2. Load your asset using its unique ID
    const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(3649149);
    viewer.scene.primitives.add(tileset);
    await viewer.zoomTo(tileset);
    console.log("LiDAR tileset loaded and zoomed.");

  } catch (error) {
    console.error(`An error occurred during Cesium initialization or asset loading: ${error}`);
    // Display a user-friendly message on the page
    const cesiumContainer = document.getElementById('cesiumContainer');
    if (cesiumContainer) {
      cesiumContainer.innerHTML = `<div style="padding: 20px; color: white; background-color: #333;"><h1>An error occurred</h1><p>Could not initialize the Cesium viewer. Please check the developer console for details.</p><p>A common cause is an invalid or misconfigured Cesium Ion access token.</p></div>`;
    }
  }
})();