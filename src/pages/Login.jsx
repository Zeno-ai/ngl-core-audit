import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const adminUser = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPass = import.meta.env.VITE_ADMIN_PASSWORD;

    if (username === adminUser && password === adminPass) {
      sessionStorage.setItem('admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Geçersiz kullanıcı adı veya şifre!');
    }
  };

  return (
    <div className="login-page">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="login-card"
      >
        <div className="login-header">
          <span className="logo">NGL</span>
          <p>Admin Girişi</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="ngl-button login-btn">
            Giriş Yap
          </button>
        </form>
      </motion.div>

      <style>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #000;
        }

        .login-card {
          background: #111;
          width: 100%;
          max-width: 380px;
          padding: 40px 30px;
          border-radius: 40px;
          text-align: center;
          border: 1px solid #222;
        }

        .login-header {
          margin-bottom: 40px;
        }

        .login-header .logo {
          font-weight: 900;
          font-size: 2.5rem;
          font-style: italic;
          color: white;
          display: block;
          margin-bottom: 8px;
        }

        .login-header p {
          color: #666;
          font-weight: 600;
          font-size: 1rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .input-group input {
          width: 100%;
          padding: 18px 24px;
          border-radius: 20px;
          border: 1px solid #222;
          background: #000;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          outline: none;
          transition: border-color 0.2s;
        }

        .input-group input:focus {
          border-color: #ff1f7c;
        }

        .login-error {
          color: #ff4d4d;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .login-btn {
          margin-top: 20px;
          background: var(--ngl-gradient);
          color: white;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
