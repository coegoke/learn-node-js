import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, User, Lock, Mail, Loader2 } from 'lucide-react';
import api from '../api/config';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            await api.post('/users/register', { username, email, password });

            setSuccess('Registrasi berhasil! Mengarahkan ke halaman login...');

            // Tunggu 2 detik kemudian alihkan ke login
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (err) {
            setError(
                err.response?.data?.error ||
                err.response?.data?.errors?.[0]?.msg ||
                'Terjadi kesalahan saat pendaftaran.'
            );
        } finally {
            if (!success) setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box glass-card animate-fade-in">
                <div className="auth-header">
                    <h1>Buat Akun Baru ✨</h1>
                    <p>Daftarkan dirimu untuk mengakses API</p>
                </div>

                {error && <div className="alert alert-error">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Username</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '14px', left: '12px', color: '#94a3b8' }} />
                            <input
                                type="text"
                                className="modern-input"
                                placeholder="fauzan_ai"
                                style={{ width: '100%', paddingLeft: '2.5rem' }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Alamat Email</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', top: '14px', left: '12px', color: '#94a3b8' }} />
                            <input
                                type="email"
                                className="modern-input"
                                placeholder="email@example.com"
                                style={{ width: '100%', paddingLeft: '2.5rem' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Kata Sandi</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', top: '14px', left: '12px', color: '#94a3b8' }} />
                            <input
                                type="password"
                                className="modern-input"
                                placeholder="Minimal 6 karakter"
                                style={{ width: '100%', paddingLeft: '2.5rem' }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <UserPlus size={20} />}
                        {loading ? 'Membuat akun...' : 'Daftar Sekarang'}
                    </button>
                </form>

                <div className="auth-footer">
                    Sudah punya akun? <Link to="/login" className="link">Masuk di sini</Link>
                </div>
            </div>
        </div>
    );
}
