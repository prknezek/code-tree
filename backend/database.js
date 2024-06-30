const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
});

pool.query(`CREATE DATABASE learnable;`).then((Response) => {
    console.log("Database created successfully");
    console.log(Response);
}).catch((err) => {
    console.log(err);
})

module.exports = pool;