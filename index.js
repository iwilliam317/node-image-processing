const sharp = require('sharp');

sharp('./assets/images/node_logo.jpeg')
  .resize(300)
  .toFile('./assets/images/node_logo_resized.jpeg', (err, info) => {
    if(err) throw err;
    console.log(info);
  });