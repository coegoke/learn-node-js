const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Logika untuk Registrasi
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, dan password wajib diisi!' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        db.run(query, [username, email, hashedPassword], function (err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(409).json({ error: 'Username atau email sudah terdaftar.' });
                }
                return res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
            }

            res.status(201).json({
                message: 'Registrasi berhasil!',
                userId: this.lastID
            });
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Logika untuk Login
exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email dan password wajib diisi!' });
    }

    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], async (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Terjadi kesalahan saat mencari pengguna.' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Email atau password salah.' });
        }

        // Bandingkan password plain text yang dikirim dengan password hash di database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Email atau password salah.' });
        }

        // Jika valid, buatkan JWT Token
        const jwtSecret = process.env.JWT_SECRET || 'rahasia_super_aman_123';

        // Payload (isi) dari token
        const tokenPayload = {
            id: user.id,
            username: user.username,
            role: user.role
        };

        // Generate token dengan expiresIn (opsional)
        const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '1h' });

        res.json({
            message: 'Login berhasil!',
            token: token
        });
    });
};
