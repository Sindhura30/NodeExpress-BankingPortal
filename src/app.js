const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const accountsRoute = require('./routes/accounts');
const servicesRoute = require('./routes/services');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));

app.use('/account' ,accountsRoute);
app.use('/services', servicesRoute);

const {accounts, users, writeJson} = require('./data');

app.get('/', (req, res) => {
    res.render('index', {title: 'Accounts Summary', accounts})
});


app.get('/profile', (req, res) => {
    res.render('profile' , {user : users[0]})
})

app.listen(3000, () => console.log("Project running on 3000"))