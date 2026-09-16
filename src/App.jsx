import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
