// Import modul yang dibutuhkan
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables dari file .env
dotenv.config();

// Mengaktifkan koneksi database (ini akan memicu db.js berjalan)
require('./db');

// Import modul keamanan dan cors
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

// Inisialisasi aplikasi Express
const app = express();
// Ambil port dari .env, atau gunakan 3000 jika tidak ada
const port = process.env.PORT || 3000;

// Izinkan CORS dari semua domain (untuk development)
app.use(cors());

// 1. Gunakan Helmet untuk mengamankan HTTP Headers
app.use(helmet());

// 2. Setup Rate Limiter untuk mencegah spam/DDoS ringan
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Waktu window: 15 menit
    max: 100, // Batas maksimal 100 request per IP selama 15 menit
    message: 'Terlalu banyak request dari IP ini, silakan coba lagi setelah 15 menit.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Aplikasikan efek Rate Limiter ke semua request routing
app.use(limiter);

// Middleware untuk mem-parsing request body berformat JSON
app.use(express.json());

// Import dan gunakan Routes
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

// Endpoint GET dasar
app.get('/', (req, res) => {
    res.json({ message: 'Selamat datang di API Node.js pertamamu!' });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server sedang berjalan di http://localhost:${port}`);
});
