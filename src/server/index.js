const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(compression());

['js', 'css', 'img'].forEach(dir => {
  app.use(`/${dir}`, express.static(path.join(__dirname, '../..', 'build', dir), {
    index: false,
    //setHeaders: (res) => res.set('Cache-Control', 'public, max-age=31536000')
  }))
});

app.use(express.static(path.join(__dirname, '../..', 'static'), {
  index: false,
  //setHeaders: (res) => res.set('Cache-Control', 'max-age=86400, must-revalidate')
}));

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.get('*', (req, res, next) => {
  res.set({ 'Cache-Control': 'no-cache, no-store, must-revalidate' });

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Linkkit</title>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no">
      <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
      <link rel="stylesheet" href="/css/main.css" />
    </head>
    <body>
      <div id="app"></div>

      <script src="/js/main.js"></script>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log(`listening on port 3000.`);
});
