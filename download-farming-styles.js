import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'traditional.jpg',
    url: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1200&q=80'
  },
  {
    name: 'container.jpg',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80'
  },
  {
    name: 'raised-bed.jpg',
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&q=80'
  },
  {
    name: 'hydroponic.jpg',
    url: 'https://images.unsplash.com/photo-1558908144-77b06f89a72f?w=1200&q=80'
  },
  {
    name: 'vertical.jpg',
    url: 'https://images.unsplash.com/photo-1558583055-d7ac00b1adca?w=1200&q=80'
  },
  {
    name: 'aquaponic.jpg',
    url: 'https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=1200&q=80'
  },
  {
    name: 'greenhouse.jpg',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80'
  },
  {
    name: 'organic.jpg',
    url: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=1200&q=80'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, 'src', 'assets', 'images', 'farming-styles', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(filepath, () => reject(err));
    });
  });
};

const downloadAllImages = async () => {
  try {
    for (const image of images) {
      await downloadImage(image.url, image.name);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages();
