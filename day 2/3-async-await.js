// Day 2: 3. Async / Await (Cara Modern - Standar Industri Saat Ini)

// Anda masih butuh Promise sebagai pondasi
function ambilDataCuacaBerapaLama(kota) {
    return new Promise((resolve, reject) => {
        // Simulasi request dari server cuaca (3 detik)
        setTimeout(() => {
            if (kota.toLowerCase() === "jakarta") {
                resolve({ kota: "Jakarta", suhu: "32°C", cuaca: "Cerah" });
            } else {
                reject(new Error("Maaf, data kota " + kota + " tidak ditemukan di server."));
            }
        }, 3000);
    });
}

// BUKAN LAGI PAKAI .then() dan .catch() PANJANG
// Kita menggunakan katakunci `async` sebelum deklarasi fungsi, 
// dan `await` di depan pemanggilan fungsi yang mereturn Promise.

// Fungsi Utama Asinkron. (Node.js tidak akan memblokir main-thread di luar fungsi ini)
async function tampilkanCuaca() {
    console.log("🌦️ Sedang mengambil data cuaca dari server...");

    // Semua kode berisiko error HUKUMNYA WAJIB DBUNGKUS ke dalam block Try/Catch!
    // Ini adalah pengganti `.catch()` pada Promise.
    try {
        // `await` akan "MEMBEKUKAN" eksekusi BARIS INI SAJA, 
        // hingga Promise dari `ambilDataCuacaBerapaLama` selesai dijalankan.
        // Node.js tetap bisa melakukan hal lain di luar block `async` ini.
        const dataJakarta = await ambilDataCuacaBerapaLama("Jakarta");

        // Kode di bawah ini tidak akan jalan sampai baris `await` di atas selesai.
        // Tepat di sini, ini persis berlaku seperti kode "Sinkron" yang rapi terbaca dari atas ke bawah.
        console.log("☀️ Sukses: Cuaca di", dataJakarta.kota, "adalah", dataJakarta.suhu, "dan", dataJakarta.cuaca);

        console.log("---");
        console.log("Mencoba mengambil kota yang salah...");

        // Memaksa terjadinya error (Ini akan melempar error dan langsung loncat ke blok CATCH)
        const dataBulan = await ambilDataCuacaBerapaLama("Bulan");
        console.log("Baris ini TIDAK akan dieksekusi", dataBulan);

    } catch (error) {
        // Jika Promise di atas di-Reject, atau jika ada lemparan Error sembarang lainnya
        console.error("🌋 Terjadi Error Async/Await:", error.message);
    } finally {
        console.log("✅ Fungsi tampilkanCuaca() selesai tereksekusi sepenuhnya.");
    }
}

// Jalankan fungsinya
tampilkanCuaca();

// Pembuktian Event Loop tidak terblokir
console.log("🚀 Laporan: Saya adalah baris terbawah file. Saya jalan duluan karena fungsi di atas harus menunggu jaringan selama 3 detik!");
