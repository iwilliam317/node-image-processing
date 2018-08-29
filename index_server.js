const app = require('express')();
const multer = require('multer');
const sharp = require('sharp');

const upload = multer({ dest: './assets/images/' });

app.post('/resize/:height/:width', upload.single('image'), (request, response, next) => {
  response.set('content-type', 'image/jpg');
  sharp(`./assets/images/${request.file.filename}`)
    .resize(Number(request.params.height), Number(request.params.width))
    .pipe(response)
});

app.listen(3000);