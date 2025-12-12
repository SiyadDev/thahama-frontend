/**
 * Image optimization utilities
 * 
 * Provides helper functions for using optimized images (WebP/AVIF)
 * with blur placeholders for better performance.
 */

import imagePlaceholders from './image-placeholders.json';

/**
 * Get the optimized image path (WebP format)
 * Falls back to PNG if WebP is not available
 */
export function getOptimizedImagePath(originalPath: string): string {
  // If already optimized, return as is
  if (originalPath.endsWith('.webp') || originalPath.endsWith('.avif')) {
    return originalPath;
  }
  
  // Replace .png with .webp
  if (originalPath.endsWith('.png')) {
    return originalPath.replace('.png', '.webp');
  }
  
  return originalPath;
}

/**
 * Get blur placeholder for an image
 */
export function getBlurPlaceholder(imageName: string): string | undefined {
  // Remove extension and path to get just the base name
  const baseName = imageName
    .replace(/^.*\//, '') // Remove path
    .replace(/\.(png|webp|avif|jpg|jpeg)$/i, ''); // Remove extension
  
  return (imagePlaceholders as Record<string, string>)[baseName];
}

/**
 * Get responsive image sizes for different breakpoints
 */
export function getImageSizes(breakpoints?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  const {
    mobile = '100vw',
    tablet = '50vw',
    desktop = '33vw'
  } = breakpoints || {};
  
  return `(max-width: 768px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
}

