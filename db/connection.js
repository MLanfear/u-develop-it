const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    // Your MySql username,
    user: 'root',
    // Your MySql password
    password: 'Football4200$$',
    database: 'election'
    
});

module.exports = db;