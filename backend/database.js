require('dotenv').config();
const { Pool } = require('pg');

const user = process.env.REACT_APP_DB_USER;
const password = process.env.REACT_APP_DB_PASSWORD;
const host = process.env.REACT_APP_DB_HOST;
const port = process.env.REACT_APP_DB_PORT;

const pool = new Pool({
    user: user,
    password: password,
    host: host,
    port: port,
});

pool.query(`CREATE DATABASE learnable;`).then((Response) => {
    console.log("Database created successfully");
    console.log(Response);
}).catch((err) => {
    console.log(err);
})

module.exports = pool;