const db = require('mysql');

module.exports = db.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'portfolio',
    port:33060
});
