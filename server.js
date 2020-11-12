const express = require('express');

const app = express();

app.use(express.static('./dist/myappFront'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/myappFront/'}),
);

app.listen(process.env.PORT || 8080);
