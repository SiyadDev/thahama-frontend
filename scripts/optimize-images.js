const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = imagesDir; // Output to same directory

// Image optimization configuration
const formats = [
  { ext: 'webp', options: { quality: 85, effort: 6 } },
  { ext: 'avif', options: { quality: 80, effort: 4 } }
];

// Sizes for responsive images
const sizes = {
  thumbnail: { width: 400, suffix: '_thumb' },
  medium: { width: 800, suffix: '_medium' },
  large: { width: 1920, suffix: '_large' }
};

async function optimizeImage(inputPath, baseName) {
  const results = [];
  
  try {
    const metadata = await sharp(inputPath).metadata();
    const originalSize = fs.statSync(inputPath).size;
    
    console.log(`\nProcessing: ${baseName}`);
    console.log(`  Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    
    // Generate optimized versions for each format
    for (const format of formats) {
      const outputPath = path.join(outputDir, `${baseName}.${format.ext}`);
      
      await sharp(inputPath)
        .resize(metadata.width, metadata.height, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .toFormat(format.ext, format.options)
        .toFile(outputPath);
      
      const optimizedSize = fs.statSync(outputPath).size;
      const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      
      console.log(`  ${format.ext.toUpperCase()}: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB (${reduction}% reduction)`);
      
      results.push({
        format: format.ext,
        path: outputPath,
        size: optimizedSize,
        reduction
      });
      
      // Generate responsive sizes for WebP (most compatible)
      if (format.ext === 'webp') {
        for (const [sizeName, sizeConfig] of Object.entries(sizes)) {
          const responsivePath = path.join(outputDir, `${baseName}${sizeConfig.suffix}.${format.ext}`);
          
          await sharp(inputPath)
            .resize(sizeConfig.width, null, { 
              fit: 'inside',
              withoutEnlargement: true 
            })
            .toFormat(format.ext, format.options)
            .toFile(responsivePath);
          
          const responsiveSize = fs.statSync(responsivePath).size;
          console.log(`    ${sizeName}: ${(responsiveSize / 1024 / 1024).toFixed(2)} MB`);
        }
      }
    }
    
    return results;
  } catch (error) {
    console.error(`Error processing ${baseName}:`, error.message);
    return null;
  }
}

async function generateBlurPlaceholder(inputPath) {
  try {
    const buffer = await sharp(inputPath)
      .resize(10, 10, { fit: 'inside' })
      .webp({ quality: 20 })
      .toBuffer();
    
    return `data:image/webp;base64,${buffer.toString('base64')}`;
  } catch (error) {
    console.error(`Error generating blur placeholder:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  if (!fs.existsSync(imagesDir)) {
    console.error(`Images directory not found: ${imagesDir}`);
    process.exit(1);
  }
  
  const files = fs.readdirSync(imagesDir);
  const pngFiles = files.filter(file => 
    file.toLowerCase().endsWith('.png') && 
    !file.includes('_thumb') && 
    !file.includes('_medium') && 
    !file.includes('_large')
  );
  
  if (pngFiles.length === 0) {
    console.log('No PNG files found to optimize.');
    return;
  }
  
  console.log(`Found ${pngFiles.length} PNG file(s) to optimize.\n`);
  
  const blurPlaceholders = {};
  
  for (const file of pngFiles) {
    const inputPath = path.join(imagesDir, file);
    const baseName = path.basename(file, '.png');
    
    // Optimize image
    await optimizeImage(inputPath, baseName);
    
    // Generate blur placeholder
    const blurDataURL = await generateBlurPlaceholder(inputPath);
    if (blurDataURL) {
      blurPlaceholders[baseName] = blurDataURL;
    }
  }
  
  // Save blur placeholders to a JSON file for easy import
  const placeholdersPath = path.join(__dirname, '../app/lib/image-placeholders.json');
  const libDir = path.dirname(placeholdersPath);
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }
  
  fs.writeFileSync(
    placeholdersPath,
    JSON.stringify(blurPlaceholders, null, 2)
  );
  
  console.log('\n✅ Image optimization complete!');
  console.log(`📝 Blur placeholders saved to: ${placeholdersPath}`);
  console.log('\n💡 Next steps:');
  console.log('   1. Update image imports in components to use .webp or .avif');
  console.log('   2. Import blur placeholders from app/lib/image-placeholders.json');
  console.log('   3. Add blurDataURL prop to Next.js Image components');
}

main().catch(console.error);

