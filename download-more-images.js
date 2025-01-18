import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'soil-health.jpg',
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80'
  },
  {
    name: 'basic-plant-care.jpg',
    url: 'https://images.unsplash.com/photo-1599076480825-3cd1f0bd9d33?w=1200&q=80'
  },
  {
    name: 'water-management.jpg',
    url: 'https://images.unsplash.com/photo-1463673016692-e4d92074e0e7?w=1200&q=80'
  },
  {
    name: 'season-planning.jpg',
    url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&q=80'
  },
  {
    name: 'crop-rotation.jpg',
    url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&q=80'
  },
  {
    name: 'pest-management.jpg',
    url: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=1200&q=80'
  },
  {
    name: 'irrigation-systems.jpg',
    url: 'https://images.unsplash.com/photo-1562526109-878e3d276ceb?w=1200&q=80'
  },
  {
    name: 'market-planning.jpg',
    url: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80'
  },
  {
    name: 'precision-agriculture.jpg',
    url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&q=80'
  },
  {
    name: 'farm-automation.jpg',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80'
  },
  {
    name: 'data-analytics.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
  },
  {
    name: 'sustainable-practices.jpg',
    url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80'
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
