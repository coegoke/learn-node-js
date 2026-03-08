# Day 2: Asynchronous JavaScript di Node.js ⚡️

Selamat datang di Day 2! Hari ini kita akan mempelajari salah satu konsep paling penting di Node.js: **Asynchronous Programming** (Pemrograman Asinkron).

Node.js berjalan dalam satu *thread* (Single-threaded). Jika ada tugas berat yang memakan waktu lama (seperti membaca file besar, mengambil data dari database, atau request HTTP ke API eksternal), Node.js tidak boleh "menunggu diam" (blocking), melainkan harus mendelepasikan tugas tersebut ke belakang layar agar bisa melayani *request* lain dari pengguna. Itulah yang disebut dengan **Asinkron**.

Di folder ini, kita akan mempelajari evolusi cara Node.js menangani operasi asinkron:
1. **Callbacks** (Cara lama)
2. **Promises** (Cara menengah)
3. **Async / Await** (Cara Modern - Paling direkomendasikan)

---

## 🚀 Persiapan
1. Buka Terminal/Command Prompt.
2. Masuk ke folder `day 2` dengan menjalankan command: `cd "day 2"`
3. Di dalam folder `day 2`, inisialisasi project Node.js sederhana (opsional, tapi disarankan): 
   ```bash
   npm init -y
   ```

---

## 📖 Materi & Praktik

### 1. Callbacks (`1-callbacks.js`)
Callback adalah fungsi yang dipanggil ketika sebuah fungsi asinkron (atau fungsi yang berjalan lama) selesai bekerja. Sayangnya, callback sering kali menyebabkan **Callback Hell** (kode bertumpuk-tumpuk sehingga sulit dibaca).

Buat file bernama `1-callbacks.js` dan pelajari cara kerjanya.
*(Lihat file `1-callbacks.js` di folder ini)*

Untuk menjalankannya:
```bash
node 1-callbacks.js
```

### 2. Promises (`2-promises.js`)
*Promise* adalah objek JavaScript yang mewakili "janji" bahwa suatu operasi asinkron akan menyajikan suatu nilai suatu saat di masa depan, entah itu sukses (`resolved`) atau gagal (`rejected`). Ini diciptakan untuk menyelesaikan masalah Callback Hell.

Buat file bernama `2-promises.js` dan pelajari alurnya.
*(Lihat file `2-promises.js` di folder ini)*

Untuk menjalankannya:
```bash
node 2-promises.js
```

### 3. Async / Await (`3-async-await.js`) - ⭐ Cara Modern
`async` dan `await` adalah sintaks modern yang dibangun di atas Promises. Ini memungkinkan kita menulis kode asinkron (yang aslinya non-blocking) *terlihat dan terbaca* seperti kode sinkron (blocking). Cara ini adalah **standar industri saat ini**.

Buat file bernama `3-async-await.js`.
*(Lihat file `3-async-await.js` di folder ini)*

Untuk menjalankannya:
```bash
node 3-async-await.js
```

---

## 📝 Kesimpulan
*   Gunakan **selalu** `async`/`await` bila memungkinkan untuk menulis kode yang lebih *clean* terbebas dari jeratan *callback hell*.
*   Di balik layar, Node.js menggunakan **Event Loop** untuk manajemen *asynchronous logic* ini yang memungkinkan arsitektur Node.js bekerja dengan super cepat meski berjalan di satu *thread*.

Jika sudah paham konsep ketiganya, ayo tandai `[x]` untuk **Day 2** di `README.md` utama Anda! 🚀
