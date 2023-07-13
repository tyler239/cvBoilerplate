const express = require('express');
const app = express();
const mime = require('mime');
const port = 3000;


app.set('view engine', 'pug');
app.set('views', __dirname + '\\views');

// Serve static files from the "public" directory
app.use(express.static('public', {
    setHeaders: function (res, path) {
      if(mime.getType(path) === 'application/javascript') {
        res.setHeader('Content-Type', 'application/javascript; charset=UTF-8')
      }
    }
  }));

app.get('/', (req, res) => {
    res.render('index')
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});