const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    name: {type: String, required: true, max: 200},
    phone: {type: String, required: true, max: 50},
    city: {type: String, required: true, max: 100}
});

module.exports = mongoose.model('Customer', CustomerSchema);
