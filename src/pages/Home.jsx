import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        color: isDark ? "white" : "#333",
      }}
    >
      <h1 style={{ color: isDark ? "white" : "black" }}>Home Page</h1>
      <p>Welcome to our website!</p>
      <button
        onClick={goToProducts}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#238636",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        view products
      </button>
    </div>
  );
}
export default Home;
