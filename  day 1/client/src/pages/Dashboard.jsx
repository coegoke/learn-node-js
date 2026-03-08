import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, LogOut, Loader2, ShieldCheck, Mail, Database, User } from 'lucide-react';
import api from '../api/config';

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fungsi untuk mengambil data dari API yang diproteksi
        const fetchDashboardData = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response.data.data);
                setCurrentUser(response.data.currentUser);
            } catch (err) {
                console.error(err);
                setError('Token kedaluwarsa atau tidak valid. Silakan login kembali.');
                // Hapus token yang rusak/expired
                localStorage.removeItem('token');
                setTimeout(() => navigate('/login'), 2000);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <Loader2 className="animate-spin" size={32} color="#3b82f6" />
            </div>
        );
    }

    return (
        <div>
            <nav className="dashboard-nav">
                <div className="dashboard-nav-logo">
                    <ShieldCheck color="#3b82f6" />
                    <span>AdminPanel</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {currentUser && (
                        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                            Halo, <strong style={{ color: 'white' }}>{currentUser.username}</strong>
                        </span>
                    )}
                    <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                        <LogOut size={16} /> Keluar
                    </button>
                </div>
            </nav>

            <main className="dashboard-container">
                {error && <div className="alert alert-error animate-fade-in">{error}</div>}

                {!error && (
                    <div className="animate-fade-in">
                        <div className="dashboard-header">
                            <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Daftar Pengguna Sistem</h1>
                            <p style={{ color: '#94a3b8' }}>Berikut adalah data yang diambil dari API Backend (SQLite).</p>
                        </div>

                        <div className="glass-card data-table-container">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th><div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><User size={14} /> USERNAME</div></th>
                                        <th><div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Mail size={14} /> EMAIL</div></th>
                                        <th><div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Database size={14} /> ROLE</div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>#{user.id}</td>
                                            <td style={{ fontWeight: '500' }}>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <span className={`badge ${user.role === 'admin' ? 'badge-admin' : ''}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {users.length === 0 && (
                                        <tr>
                                            <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                                                Tidak ada data pengguna ditemukan.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
