const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(
    path.join(__dirname, 'json', 'accounts.json'), 'utf8'
);

const accounts = JSON.parse(accountData);

const usersData = fs.readFileSync(
    path.join(__dirname, 'json', 'users.json'), 'utf8'
);

const users = JSON.parse(usersData);


const writeJson = () => {
    const accountsJson = JSON.stringify(accounts, null, 4);
    fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJson, 'utf8');
}

module.exports = {accounts, users, writeJson};