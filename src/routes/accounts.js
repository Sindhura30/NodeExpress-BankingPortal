const express = require('express');

const route = express.Router();

const { accounts } = require('../data');

route.get('/savings', (req, res) => {
    res.render('account', {account:accounts.savings})
});

route.get('/checking', (req, res) => {
    res.render('account', {account:accounts.checking})
});

route.get('/credit', (req, res) => {
    res.render('account', {account:accounts.credit})
});

module.exports = route;