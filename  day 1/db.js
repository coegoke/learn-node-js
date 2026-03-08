const sqlite3 = require('sqlite3').verbose();

// Buka koneksi ke database SQLite
// File database akan dinamakan 'database.sqlite' dan disimpan di root folder aplikasi
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Gagal terhubung ke database:', err.message);
    } else {
        console.log('Berhasil terhubung ke database SQLite.');

        // Buat tabel users jika belum ada
        db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user'
    )`, (err) => {
            if (err) {
                console.error('Gagal membuat tabel users:', err.message);
            } else {
                console.log('Tabel users siap digunakan.');
            }
        });

    }
});

module.exports = db;
