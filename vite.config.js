import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the 'path' module
import pkg from './package.json';

// Define assetUrlOptions
const assetUrlOptions = {
  base: pkg.homepage, // Set the base option to the homepage specified in package.json
};

export default defineConfig({
  base: assetUrlOptions.base, // Set the base option dynamically
  plugins: [react()],
});
