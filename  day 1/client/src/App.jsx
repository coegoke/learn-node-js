import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './index.css';

// Komponen PrivateRoute untuk melindungi rute yang butuh login
function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  // Jika tidak ada token (belum login), kembalikan ke /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  // Jika ada token, tampilkan halamannya
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Standar */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rute Terproteksi yang perlu JWT Token */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Tangkap URL ngawur 404 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
