const sharp = require('sharp');

// Rotate - Resize
sharp('./assets/images/node_logo.jpeg')
  .rotate(180)
  .resize(300)
  .toFile('./assets/images/node_logo_resized.jpeg', (err, info) => {
    if(err) throw err;
    console.log(info);
  });

