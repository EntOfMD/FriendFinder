const express = require('express');

const morgan = require('morgan'); //logger middleware
const bodyParser = require('body-parser'); //parsing middleware

const app = express();

const PORT = process.env.PORT || 3000;
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`App is online on PORT ${PORT}`);
});
