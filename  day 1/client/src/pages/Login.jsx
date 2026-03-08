import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, User, Lock, Loader2 } from 'lucide-react';
import api from '../api/config';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await api.post('/users/login', { email, password });

            // Simpan token ke localStorage
            localStorage.setItem('token', response.data.token);

            // Redirect ke dashboard
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || err.response?.data?.errors?.[0]?.msg || 'Terjadi kesalahan saat login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box glass-card animate-fade-in">
                <div className="auth-header">
                    <h1>Selamat Datang Kembali 👋</h1>
                    <p>Login ke akunmu untuk melanjutkan</p>
                </div>

                {error && <div className="alert alert-error">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Alamat Email</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '14px', left: '12px', color: '#94a3b8' }} />
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
                                placeholder="••••••••"
                                style={{ width: '100%', paddingLeft: '2.5rem' }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <LogIn size={20} />}
                        {loading ? 'Memproses...' : 'Masuk Sekarang'}
                    </button>
                </form>

                <div className="auth-footer">
                    Belum punya akun? <Link to="/register" className="link">Daftar di sini</Link>
                </div>
            </div>
        </div>
    );
}
