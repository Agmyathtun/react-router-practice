import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        color: isDark ? "white" : "#333",
      }}
    >
      <h1>Dashboard</h1>
      <p style={{ fontSize: "18px", margin: "20px 0" }}>
        Welcome,
        <strong>{user?.name}</strong>
      </p>
      <p>This page is protected. Only logged-in users can see it</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "#e53e3e",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Logout
      </button>
    </div>
  );
}
export default Dashboard;
