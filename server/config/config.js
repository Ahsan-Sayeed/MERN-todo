require('dotenv').config();
const config ={
    port: process.env.port,
    db: process.env.db,
}

module.exports = config;