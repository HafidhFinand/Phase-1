const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./poll.db');

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS Employees
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          Username VARCHAR(50),
          Password VARCHAR(50),
          Position VARCHAR(50),
          LoginStatus VARCHAR(10))`);

  db.run(`CREATE TABLE IF NOT EXISTS Patients
          (id INTEGER PRIMARY KEY AUTOINCREMENT,
          Name VARCHAR(50),
          Diagnosis VARCHAR(100))`);

});
