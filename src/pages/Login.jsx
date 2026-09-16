import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function Login() {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return alert('Please enter a username');
    login(username);
    navigate('/dashboard');
  };
  return (
    <div style={{
      padding: '60px 20px',
      textAlign: 'center',
      color: isDark ? 'white' : '#333'
    }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{maxWidth:'300px', margin:'30px auto'}}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: isDark ? '#161b22' : '#fff',
            color: isDark ? 'white' : '#333'
          }}
        />
        <button type="submit"
          style={{
            width: '100%',
            padding: '12px',
            background: '#238636',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize:'16px'
        }}>
          Login
        </button>

      </form>

    </div>
  )
}

export default Login;