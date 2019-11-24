const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const rotate = require('./src/rotate/rotate.route');
const hotel = require('./src/hotel/hotel.route');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

app.use(bodyParser.json());

app.use(rotate);
app.use(hotel);

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(
    `Server started on Port ${app.get('port')} | Environment : ${app.get('env')}`,
  );
});

module.exports = app;
