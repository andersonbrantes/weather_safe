const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const dbConfig = { filename: './weathersafe.sqlite', driver: sqlite3.Database };
module.exports = { dbConfig, sqlite };
