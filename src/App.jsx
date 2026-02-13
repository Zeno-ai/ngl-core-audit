import { Routes, Route } from 'react-router-dom';
import Send from './pages/Send';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const isAuth = sessionStorage.getItem('admin_auth') === 'true';
  return isAuth ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Send />} />
      <Route path="/u/:username" element={<Send />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <AuthGuard>
            <Admin />
          </AuthGuard>
        }
      />
    </Routes>
  );
}

export default App;
