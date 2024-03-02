import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the 'path' module

// Define assetUrlOptions
const assetUrlOptions = {
  base: options.devServer.config.base + path.relative(options.root, path.dirname(filename))
};

export default defineConfig({
  base: assetUrlOptions.base, // Set the base option dynamically
  plugins: [react()],
});

