const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'company'
})

mysqlConnection.connect(function (err) {
    if(err){
        console.log('Database connection failure', err);
    }
    else{
        console.log('Databse connection succes');
    }
});

module.exports = mysqlConnection;