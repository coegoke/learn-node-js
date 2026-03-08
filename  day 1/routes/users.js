const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken, verifyAdmin } = require('../middleware/authMiddleware');
const db = require('../db');
const { body, validationResult } = require('express-validator');

// Rute Autentikasi dengan Middleware Validasi
router.post('/register',
    [
        body('username').notEmpty().withMessage('Username tidak boleh kosong').trim().escape(),
        body('email').isEmail().withMessage('Format email tidak valid').normalizeEmail(),
        body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter')
    ],
    (req, res, next) => {
        // Mengecek apakah ada error dari express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    authController.register
);

router.post('/login',
    [
        body('email').isEmail().withMessage('Format email tidak valid').normalizeEmail(),
        body('password').notEmpty().withMessage('Password tidak boleh kosong')
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    authController.login
);

// Route GET sederhana untuk melihat semua users (tanpa password)
// Route ini SEKARANG DILINDUNGI oleh verifyToken!
router.get('/', verifyToken, (req, res) => {
    db.all('SELECT id, username, email, role FROM users', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'Berhasil mengambil data pengguna',
            currentUser: req.user,
            data: rows
        });
    });
});

// Route contoh yang HANYA bisa diakses oleh ADMIN
router.delete('/:id', verifyToken, verifyAdmin, (req, res) => {
    const userId = req.params.id;
    db.run('DELETE FROM users WHERE id = ?', [userId], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: `User dengan ID ${userId} berhasil dihapus oleh Admin.` });
    });
});

module.exports = router;
