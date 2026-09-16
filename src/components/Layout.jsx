import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const isDark = theme === "dark";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkStyle = (path) => ({
    color: location.pathname === path ? "#58a6ff" : isDark ? "white" : "#333",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: location.pathname === path ? "600" : "400",
    paddingBottom: "4px",
    borderBottom:
      location.pathname === path
        ? "2px solid #58a6ff"
        : "2px solid transparent",
  });
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: isDark ? "#0d1117" : "#f5f5f5",
        color: isDark ? "white" : "#333",
      }}
    >
      <nav
        style={{
          background: isDark ? "#161b22" : "#ffff",
          padding: "16px 40px",
          display: "flex",
          gap: "35px",
          borderBottom: `1px solid ${isDark ? "#333" : "#ddd"}`,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "35px" }}>
          <Link to="/" style={linkStyle("/")}>
            Home
          </Link>
          <Link to="/about" style={linkStyle("/about")}>
            About
          </Link>
          <Link to="/products" style={linkStyle("/products")}>
            Products
          </Link>
          <Link to="/dashboard" style={linkStyle("/dashboard")}>
            Dashboard
          </Link>
        </div>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          {user ? (
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 16px",
                background: "#e53e3e",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              logout({user.name})
            </button>
          ) : (
            <Link to="/login" style={linkStyle("/login")}>
              Login
            </Link>
          )}
        </div>

        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 16px",
            background: isDark ? "#238636" : "#333",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <main style={{ flex: "1" }}>
        <Outlet />
      </main>

      <footer
        style={{
          background: isDark ? "#0d1117" : "#eee",
          padding: "20px 40px",
          textAlign: "center",
          borderTop: `1px solid ${isDark ? "#333" : "#ddd"}`,
          color: isDark ? "#888" : "#666",
          fontSize: "14px",
        }}
      >
        @2026 My Website. All rights reserved.
      </footer>
    </div>
  );
}
export default Layout;
