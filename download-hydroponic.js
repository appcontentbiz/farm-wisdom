import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

downloadImage(
  'https://images.unsplash.com/photo-1585444744772-5e9b59680275?w=1200&q=80',
  'hydroponic-farming.jpg'
);
