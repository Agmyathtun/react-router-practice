import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    description: "High quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    description: "Track your fitness and receive notifications.",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 49.99,
    description: "Brew perfect coffee every morning.",
  },
  {
    id: 4,
    name: "Backpack",
    price: 39.99,
    description: "Durable and stylish backpack for daily use.",
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!product) {
    return (
      <div
        style={{
          padding: "40px",
          textalign: "center",
        }}
      >
        <h2 style={{ color: isDark ? "white" : "black" }}>Product not Found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Link
        to="/products"
        style={{
          color: "#58a6ff",
          textDecoration: "none",
        }}
      >
        {" "}
        Back to Products
      </Link>

      <h1 style={{ marginTop: "20px", color: isDark ? "white" : "black" }}>
        {product.name}
      </h1>

      <p style={{ fontSize: "24px", color: "#58a6ff", margin: "10px 0" }}>
        ${product.price}
      </p>

      <p
        style={{
          color: isDark ? "#ccc" : "black",
          lineHeight: "1.6",
        }}
      >
        {product.description}
      </p>
    </div>
  );
}

export default ProductDetail;
