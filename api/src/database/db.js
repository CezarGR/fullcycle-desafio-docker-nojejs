const env = require("dotenv")
const mysql = require('mysql2/promise');

async function query(string) {
    env.config();

    const connect = await mysql.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    });

    const [rows] = await connect.execute(string);

    connect.end();

    return rows;
}

module.exports = {
    query
}