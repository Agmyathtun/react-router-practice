import { Link, useSearchParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, category: "electronics" },
  { id: 2, name: "Smart Watch", price: 129.99, category: "electronics" },
  { id: 3, name: "Coffee Maker", price: 49.99, category: "home" },
  { id: 4, name: "Backpack", price: 39.99, category: "fashion" },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || 'all';

  const flteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const handleFilter = (newCategory) => {
    setSearchParams({ category: newCategory });
  };

  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: isDark ? "white" : "black" }}>Products</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        {/* <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("electronics")}>Electronics</button>
        <button onClick={() => handleFilter("home")}>Home</button>
        <button onClick={() => handleFilter("fashion")}>Fashion</button> */}
        {["all", "electronics", "home", "fashion"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            style={{
              padding: "8px 16px",
              background:
                category === cat ? "#238636" : isDark ? "#333" : "#ddd",
              color: category === cat ? "white" : isDark ? "white" : "#333",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {flteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{
              display: "block",
              padding: "15px",
              background: isDark ? "#161b22" : "#fff",
              borderRadius: "8px",
              color: isDark ? "white" : "#333",
              textDecoration: "none",
              border: `1px solid ${isDark ? "#333" : "#ddd"}`,
            }}
          >
            {product.name} - ${product.price}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Products;
