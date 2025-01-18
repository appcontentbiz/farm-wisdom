import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'plant-care-guide.jpg',
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&q=80'
  },
  {
    name: 'water-guide.jpg',
    url: 'https://images.unsplash.com/photo-1463673016692-e4d92074e0e7?w=1200&q=80'
  },
  {
    name: 'season-guide.jpg',
    url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&q=80'
  },
  {
    name: 'crop-guide.jpg',
    url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&q=80'
  },
  {
    name: 'pest-guide.jpg',
    url: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=1200&q=80'
  },
  {
    name: 'irrigation-guide.jpg',
    url: 'https://images.unsplash.com/photo-1562526109-878e3d276ceb?w=1200&q=80'
  },
  {
    name: 'market-guide.jpg',
    url: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80'
  },
  {
    name: 'precision-guide.jpg',
    url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&q=80'
  },
  {
    name: 'automation-guide.jpg',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80'
  },
  {
    name: 'analytics-guide.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, 'public', 'images', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
    });
  });
};

async function downloadAllImages() {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`Failed to download ${image.name}:`, error);
    }
  }
}

downloadAllImages();
