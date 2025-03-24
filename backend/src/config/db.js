const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database('./database.sqlite',(err)=>{
    if (err){
        console.log('Database connection error',err)
    }else{
        console.log('Connected to sqlite Database')
        
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              username TEXT UNIQUE,
              password TEXT
            )`, (err) => {
              if (err) console.error('Error creating table:', err);
            });
          });
    }
})

module.exports = db;