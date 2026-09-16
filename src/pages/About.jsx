import { useTheme } from "../context/ThemeContext";

function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: isDark ? "white" : "black" }}>About Page</h1>
      <p>This is the about page of our website</p>
    </div>
  );
}
export default About;
