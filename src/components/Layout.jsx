import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  const linkStyle = (path) => ({
    color: location.pathname === path ? '#58a6ff' : 'white',
    textDecoration: 'none',
    fontSize: '17px',
    fontWeight: location.pathname === path ? '600' : '400',
    paddingBottom: '4px',
    borderBottom: location.pathname === path ? '2px solid #58a6ff' : '2px solid transparent',

  })
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>

      <nav style={{
        background: '#161b22',
        padding: '16px 40px',
        display: 'flex',
        gap: '35px',
        borderBottom: '1px solid #333',
        alignItems: 'center'
      }}>
        <Link to="/" style={linkStyle('/')}>
        Home</Link>
        <Link to="/about" style={linkStyle('/about')}>About</Link>
        <Link to="/products" style={linkStyle('/products')}>Products</Link>
      </nav>

      <main style={{flex: '1'}}>
        <Outlet />
      </main>
      
      <footer style={{
        background: '#0d1117',
        padding: '20px 40px',
        textAlign: 'center',
        borderTop: '1px solid #333',
        color: '#888',
        fontSize: '14px'
      }}>
        @2026 My Website. All rights reserved.
      </footer>

    </div>
  )
}
export default Layout;