const express = require('express');

const route = express.Router();

const { accounts, writeJson } = require('../data');

route.get('/transfer', (req, res) => res.render('transfer'));

route.post('/transfer', (req, res) => {
    accounts[req.body.from].balance = accounts[req.body.from].balance - req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance) + parseInt(req.body.amount, 10);

    writeJson();
    res.render('transfer', {message : 'Transfer Completed'});
});

route.get('/payment', (req, res) => {
    res.render('payment', {account: accounts.credit})
});

route.post('/payment', (req, res) => {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount, 10);

    writeJson();
    res.render('payment', {message : 'Payment Completed', account: accounts.credit});
});

module.exports = route;

