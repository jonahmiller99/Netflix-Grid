const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database:'netflix',
    host: 'localhost',
    port: '3306'
});

let netdb = {};

netdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM netflix_titles', (err,results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = netdb;