import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'beginner-farming.jpg',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80'
  },
  {
    name: 'professional-farming.jpg',
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80'
  },
  {
    name: 'traditional-farming.jpg',
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80'
  },
  {
    name: 'organic-farming.jpg',
    url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80'
  },
  {
    name: 'hydroponic-farming.jpg',
    url: 'https://images.unsplash.com/photo-1558914129-24e56f6e4b7d?w=1200&q=80'
  },
  {
    name: 'smart-farming.jpg',
    url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&q=80'
  },
  {
    name: 'spring-farming.jpg',
    url: 'https://images.unsplash.com/photo-1623004803827-3793f5bd9960?w=1200&q=80'
  },
  {
    name: 'summer-farming.jpg',
    url: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?w=1200&q=80'
  },
  {
    name: 'fall-farming.jpg',
    url: 'https://images.unsplash.com/photo-1508748157893-7f0ec0d0a905?w=1200&q=80'
  },
  {
    name: 'winter-farming.jpg',
    url: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1200&q=80'
  },
  {
    name: 'yield-tracking.jpg',
    url: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&q=80'
  },
  {
    name: 'cost-analysis.jpg',
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const publicPath = path.join(__dirname, 'public', 'images', filename);
    const distPath = path.join(__dirname, 'dist', 'images', filename);
    
    const download = (filepath) => {
      const file = fs.createWriteStream(filepath);
      https.get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${filename} to ${filepath}`);
          resolve();
        });
      }).on('error', err => {
        fs.unlink(filepath, () => {
          console.error(`Error downloading ${filename}:`, err.message);
          reject(err);
        });
      });
    };

    // Download to both public and dist folders
    Promise.all([
      download(publicPath),
      download(distPath)
    ]).then(() => resolve());
  });
};

Promise.all(images.map(img => downloadImage(img.url, img.name)))
  .then(() => console.log('All images downloaded successfully'))
  .catch(err => console.error('Error downloading images:', err));
