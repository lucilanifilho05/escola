const mysql = require("mysql2");
const conection = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"123456",
        database:"escola"
    }
);

module.exports = conection;