// Day 2: 2. Promises (Cara Menengah - Mencegah Callback Hell)

console.log("🌟 Memulai pencarian data...");

// Fungsi yang disimulasikan sebagai "pengambilan data dari database" yang makan waktu 2 detik
function cariDataUserDariDatabase(idUser) {
    // Kembalikan Promise (Janji)
    return new Promise((resolve, reject) => {
        // Simulasi delay asinkron menggunakan setTimeout
        setTimeout(() => {
            if (idUser === 1) {
                // Berhasil: Janji ditepati (Resolved) -> Kirim data
                resolve({ id: 1, nama: "Budi", email: "budi@email.com" });
            } else {
                // Gagal: Janji diingkari (Rejected) -> Kirim error
                reject(new Error("User tidak ditemukan di database kita!"));
            }
        }, 2000); // 2000 ms (2 detik)
    });
}

// CARA MENGGUNAKAN PROMISE (Consumer)
// Gunakan .then() jika dberhasil (resolved) dan .catch() jika gagal (rejected)
cariDataUserDariDatabase(1)
    .then((userData) => {
        console.log("✅ Berhasil mendapatkan data user: ", userData.nama);
        // Kita bisa me-return promise lagi, dan menangkapnya di `.then()` selanjutnya
        // Ini lebih rapi dari pada Callback Hell!
        return `Data Email ${userData.nama} adalah ${userData.email}`;
    })
    .then((pesanEmail) => {
        console.log("📧 Lanjut: ", pesanEmail);
    })
    .catch((error) => {
        // Jika ada ANY rejection dari rantai di atas, ditangkap disini
        console.error("❌ Terjadi Error:", error.message);
    })
    .finally(() => {
        // Akan selalu dijalankan, entah itu sukses ataupun gagal
        console.log("🏁 Operasi Promise Selesai.");
    });

console.log("🔄 Sedang memproses... Tunggu 2 detik...");
