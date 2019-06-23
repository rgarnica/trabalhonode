const Customer = require('../models/customer.model');

exports.index = async function (req, res) {
    let customers = await Customer.find();
    res.send(customers);
};

exports.store = function (req, res) {
    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        city: req.body.city
    })

    customer.save((err) => {
        if (err) {
            res.send({data: 'Erro criando o cliente!'});
        } else {
            res.send(customer);
        }
    })
}