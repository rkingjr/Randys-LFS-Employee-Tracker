const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Texas@2021',
        database: 'LFScenterDB'
    },
    console.log('LFScenterDB connection established.')
);

module.exports = db
