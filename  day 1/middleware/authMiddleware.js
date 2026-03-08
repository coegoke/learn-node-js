const jwt = require('jsonwebtoken');

// Middleware untuk memastikan user sudah login (memiliki token valid)
exports.verifyToken = (req, res, next) => {
    // 1. Ambil header Authorization dari request
    const authHeader = req.headers['authorization'];

    // Format token di header biasanya: "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1];

    // 2. Jika tidak ada token, akses ditolak
    if (!token) {
        return res.status(401).json({ error: 'Akses ditolak. Token tidak ditemukan. Silakan login.' });
    }

    // 3. Verifikasi token
    const jwtSecret = process.env.JWT_SECRET || 'rahasia_super_aman_123';
    jwt.verify(token, jwtSecret, (err, userPayload) => {
        if (err) {
            return res.status(403).json({ error: 'Token tidak valid atau sudah kedaluwarsa.' });
        }

        // 4. Jika token valid, simpan data user di object request (req.user) agar bisa dipakai di route selanjutnya
        req.user = userPayload;

        // Lanjut ke penanganan route berikutnya
        next();
    });
};

// Middleware opsional untuk membatasi akses hanya untuk Admin
exports.verifyAdmin = (req, res, next) => {
    // Panggil setelah verifyToken (jadi req.user pasti ada)
    if (req.user && req.user.role === 'admin') {
        next(); // Lanjut karena dia admin
    } else {
        res.status(403).json({ error: 'Akses ditolak. Membutuhkan hak akses Administrator.' });
    }
};
