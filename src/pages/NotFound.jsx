import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "10px",
          color: isDark ? "white" : "black",
        }}
      >
        404{" "}
      </h1>
      <h2 style={{ color: isDark ? "white" : "black" }}>Page Not Found</h2>
      <p style={{ color: isDark ? "#888" : "black", marginTop: "15px" }}>
        The page you are looking for does not exist
      </p>
      <Link
        to="/"
        style={{
          display:'inline-block',
          marginTop: "30px",
          color: "#58a6ff",
          textDecoration: "none",
        }}
      >
        <FaLongArrowAltLeft />
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
