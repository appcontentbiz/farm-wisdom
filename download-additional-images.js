import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'urban-farming.jpg',
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&q=80'
  },
  {
    name: 'microgreens-farming.jpg',
    url: 'https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?w=1200&q=80'
  },
  {
    name: 'wellness-farming.jpg',
    url: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=1200&q=80'
  },
  {
    name: 'holistic-farming.jpg',
    url: 'https://images.unsplash.com/photo-1595615459014-45a84d2c9d1e?w=1200&q=80'
  },
  {
    name: 'farm-nutrition.jpg',
    url: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&q=80'
  },
  {
    name: 'farm-fitness.jpg',
    url: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=1200&q=80'
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
