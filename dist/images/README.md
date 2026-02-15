# Portfolio Images Directory

This directory contains all static images for the portfolio website.

## Directory Structure

```
images/
├── projects/       # Project screenshots and images
├── companies/      # Company logos for experience entries
├── skills/         # Skill icons and technology logos
├── hobbies/        # Hobby-related images
├── movies/         # Favorite movie posters
├── music/          # Favorite music album covers
└── placeholder.svg # Default placeholder image
```

## Usage

Reference images in your portfolio data (`src/data/portfolioData.ts`) using relative paths:

```typescript
{
  id: "project-1",
  title: "My Project",
  image: "/images/projects/my-project.jpg",
  // ... other fields
}
```

## Image Guidelines

### General Recommendations
- **Optimize all images** for web performance (use tools like TinyPNG, ImageOptim)
- **Use appropriate formats**: JPG for photos, PNG for logos/transparency, SVG for icons
- **Maintain consistent aspect ratios** within each category
- **Use descriptive filenames** (e.g., `ecommerce-platform.jpg` not `img1.jpg`)

### Size Recommendations
- **Projects**: 1920x1080 (16:9), < 500KB
- **Companies**: Square or logo dimensions, < 200KB
- **Skills**: Square (300x300), < 100KB
- **Hobbies**: 1920x1080 (16:9), < 500KB
- **Movies**: Portrait (2:3 ratio), < 300KB
- **Music**: Square (600x600), < 300KB

## External URLs

You can also use external image URLs instead of local files:

```typescript
image: "https://example.com/image.jpg"
```

Make sure external URLs are from reliable CDNs or permanent hosting.

## Placeholder Image

The `placeholder.svg` file is used as a fallback when images fail to load or are missing.
