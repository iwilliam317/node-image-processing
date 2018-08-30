const app = require('express')();
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');

const upload = multer({ dest: './assets/images/' });

app.post('/resize/:height/:width', upload.single('image'), (request, response, next) => {
  response.set('content-type', 'image/jpg');

  let image = `assets/images/${request.file.filename}_${request.params.height}_${request.params.width}.jpg`;

  fs.stat(image, (error, stat) => {
    if (error) throw error;

    if(stat.isFile()){
      fs.createReadStream(image).pipe(response)
    }
    else{
      sharp(`./assets/images/${request.file.filename}`)
        .resize(Number(request.params.height), Number(request.params.width))
        .toFile(image, error => {
          if (error) throw error;

          fs.createReadStream(image).pipe(response)
        })      
    }
  });


});

app.listen(3000);