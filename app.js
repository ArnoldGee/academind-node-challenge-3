const path = require('path');

const express = require('express');
const app = express();

const route1 = require('./routes/route1');

app.use(express.static(path.join(__dirname, 'public')));
app.use(route1);

app.use((req, res, next) => {
  res.status(404).send('404 error, page not found');
});

app.listen(3000);
