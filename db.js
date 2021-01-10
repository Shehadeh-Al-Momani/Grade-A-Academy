const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// db.connect((err) => {
//   if (err) {
//     console.error("db ERROR: ", err.stack);
//     return;
//   }
//   console.log("db ID: ", db.threadId);
// });

module.exports = db;
