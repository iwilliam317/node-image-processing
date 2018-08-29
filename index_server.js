const app = require('express')();
const multer = require('multer');

const upload = multer({ dest: './assets/images/' });

app.post('/resize/:height/:width', upload.single('image'), (request, response, next) => {
  console.log(request.file);
  response.send(request.file)
});

app.listen(3000);