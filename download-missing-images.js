import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'basic-plant-care.jpg',
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80'
  },
  {
    name: 'fall-farming.jpg',
    url: 'https://images.unsplash.com/photo-1508182314998-3bd49473002f?w=1200&q=80'
  },
  {
    name: 'holistic-farming.jpg',
    url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&q=80'
  },
  {
    name: 'hydroponic-farming.jpg',
    url: 'https://images.unsplash.com/photo-1558908144-77b06f89a72f?w=1200&q=80'
  },
  {
    name: 'water-guide.jpg',
    url: 'https://images.unsplash.com/photo-1468421201266-ec88b2809284?w=1200&q=80'
  },
  {
    name: 'water-management.jpg',
    url: 'https://images.unsplash.com/photo-1468421201266-ec88b2809284?w=1200&q=80'
  },
  {
    name: 'spring-farming.jpg',
    url: 'https://images.unsplash.com/photo-1492496913980-501348b61469?w=1200&q=80'
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
