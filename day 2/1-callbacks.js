// Day 2: 1. Callbacks (Cara Paling Lama)

// Import modul fs (File System) dari Node.js untuk membaca file
const fs = require('fs');
const path = require('path');

console.log("1. Memulai operasi membaca file...");

// Ciptakan file dummy (pura-puralah file konfigurasi database)
const filePath = path.join(__dirname, 'dummy.txt');
fs.writeFileSync(filePath, 'Ini adalah isi dari file rahasiaku!');

// Fungsi fs.readFile adalah proses asinkron yang membutuhkan waktu.
// Node.js tidak akan "berhenti" di baris ini, melainkan akan lanjut ke baris 18,
// dan akan kembali mengeksekusi fungsi ini HANYA JIKA proses pembacaan file sudah SELESAI.
fs.readFile(filePath, 'utf8', (err, data) => {
    // Fungsi ini adalah fungsi CALLBACK.
    // Ditandai dengan dua parameter (err, data). Standar konvensi di Node.js

    if (err) {
        console.error("☠️  Gagal membaca file!", err.message);
        return; // Hentikan proses jika error
    }

    // Jika berhasil, cetak isinya
    console.log("2. ✅ File berhasil dibaca. Isinya: ", data);

    // Ini adalah awal mula Callback Hell jika kita harus membaca file lain LAGI
    // bergantung dari hasil bacaan file pertama tadi (bersarang).
    // fs.readFile(...) --> fs.readFile(...) --> fs.readFile(...)
});

console.log("3. Menunggu file selesai dibaca. Node.js bisa lanjut mengerjakan hal lain di sini.");

// Perhatikan Outputnya di Terminal!
// Nomor 1, lalu Nomor 3, baru Nomor 2! Inilah bukti bahwa Node.js Asynchronous.
