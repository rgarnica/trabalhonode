const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://mongo:27017/raphael';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const customer_routes = require('./routes/customer.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', customer_routes);

app.listen(3000, function() {
    console.log('Server running on port 3000');
});