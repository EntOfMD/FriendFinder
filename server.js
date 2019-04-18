const express = require('express');

const bodyParser = require('body-parser'); //parsing middleware

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (app.get('env') === 'development') {
  const morgan = require('morgan'); //logger middleware
  app.use(morgan('dev'));
}

//IMPORTANT!!! PUT THESE **AFTER** the middlewares, otherwise req.body is empty
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}.`);
});
