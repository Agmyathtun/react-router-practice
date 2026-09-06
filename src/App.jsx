import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => (
    {
      color: location.pathname === path ? '#58a6ff' : 'white',
      textDecoration: 'none',
      fontSize: '17px',
      fontWeight: location.pathname === path ? '600' : '400',
      paddingBottom: '4px',
      borderBottom: location.pathname === path ? '2px solid #58a6ff' : '2px solid transparent',
    }
  );
  return (
    <nav style={{
      background: '#161b22',
      padding: '16px 40px',
      display: 'flex',
      gap: '36px',
      borderBottom: '1px solid #333',
      alignItems: 'center'
    }}>
      <Link to="/" style={linkStyle('/')}>Home</Link>
      <Link to="/about" style={linkStyle('/about')}>About</Link>
      <Link to="/products" style={linkStyle('/products')}>Products</Link>

    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
    {/* Navigation Bar */ }
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </BrowserRouter>
    
  )
}
export default App;