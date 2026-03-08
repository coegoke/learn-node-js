# Day 1: Fullstack Node.js & React Basics

Pada **Day 1**, kita telah mempelajari dan mengimplementasikan dasar-dasar fundamental pengembangan aplikasi fullstack (Backend dan Frontend) menggunakan Node.js (Express) dan React (Vite).

Berikut adalah detail materi dan library apa saja yang dipelajari dan diterapkan di dalam folder ini:

## 🚀 Backend (Node.js & Express.js)

1. **Setup Dasar Express.js (`server.js`)**
   - Menginisialisasi HTTP Web Server dasar menggunakan Express.
   - Setup Environment Variables (`dotenv`) untuk menyimpan variabel sensitif seperti konfigurasi port.

2. **Database Management (SQLite)**
   - Mengintegrasikan relasional database ringan dengan `sqlite3` (`db.js`).
   - Membuat Database Schema untuk entitas tabel `users` (termasuk validasi field unik).

3. **Keamanan Server (Web Security)**
   - **`helmet`**: Middleware keamanan yang menambahkan dan menyesuaikan HTTP header secara otomatis.
   - **`express-rate-limit`**: Membatasi jumlah *request* dari IP tertentu dalam rentang waktu yang ditentukan untuk mencegah serangan spam dan *DDoS* kecil-kecilan.
   - **`cors`** (Cross-Origin Resource Sharing): Mengatur izin agar frontend bisa mengambil *resource* atau memanggil API dari server backend secara aman.

4. **Autentikasi & Otorisasi**
   - Mengenkripsi / me-Hash password pengguna yang mendaftar ke database menggunakan **`bcrypt`**.
   - Membuat sistem sesi otentikasi (Authorization) memakai state-less **JSON Web Tokens (`jsonwebtoken`)**.

5. **Validasi Data (Input)**
   - Menyaring dan memvalidasi payload/body request dari klien menggunakan paket **`express-validator`**.

6. **Struktur Proyek Modular**
   - Mulai membiasakan memisahkan komponen dengan *design pattern*:
     - **`/routes`**: Tempat daftar *endpoints* URL.
     - **`/controllers`**: Fungsi logika bisnis yang dipicu oleh router.
     - **`/middleware`**: Fungsi *intercept* yang memeriksa sesuatu sebelum kontroler dieksekusi (seperti autentikasi JWT token).

---

## 💻 Frontend (React & Vite)

Di dalam folder `/client`:
1. **Inisialisasi Proyek**
   - Membuat scaffolding *React App* yang super cepat menggunakan **Vite**.

2. **Membangun Sistem Routing (SPA)**
   - Perpindahan antar halaman web klien tanpa reload (Single Page Application) menggunakan **`react-router-dom`**.

3. **Komunikasi API**
   - Mengambil, mengirim, dan berinteraksi asinkron terhadap Express API Backend menggunakan klien HTTP **`axios`**.

4. **Penggunaan UI Library**
   - Mempercantik tampilan pengguna (User Interface) dengan memuat ikon-ikon esensial menggunakan **`lucide-react`**.

File ini merupakan pendokumentasian dasar bagi kode-kode yang telah dibuat untuk referensi pembelajaran selanjutnya.
