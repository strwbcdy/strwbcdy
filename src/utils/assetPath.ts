// Helper function to get the correct asset path for GitHub Pages deployment
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine base and path, ensuring no double slashes
  return `${base}${cleanPath}`.replace(/\/\//g, '/');
}
