import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'traditional-farming.jpg',
    url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854'
  },
  {
    name: 'container-gardening.jpg',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae'
  },
  {
    name: 'raised-bed-farming.jpg',
    url: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c'
  },
  {
    name: 'hydroponic-farming.jpg',
    url: 'https://images.unsplash.com/photo-1595053826311-8c9ddb56bd84'
  },
  {
    name: 'vertical-farming.jpg',
    url: 'https://images.unsplash.com/photo-1601592935678-5bdd23c9577f'
  },
  {
    name: 'aquaponic-farming.jpg',
    url: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const targetPath = path.join(__dirname, 'public', 'images', 'farming', filename);
    
    https.get(`${url}?auto=format&fit=crop&w=800&q=80`, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(targetPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(targetPath, () => reject(err));
      });
    }).on('error', reject);
  });
};

async function downloadAllImages() {
  try {
    for (const image of images) {
      await downloadImage(image.url, image.name);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages();
