import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99 },
  { id: 2, name: "Smart Watch", price: 129.99 },
  { id: 3, name: "Coffee Maker", price: 49.99 },
  { id: 4, name: "Backpack", price: 39.99 },
];
function Products() {

  return (
    <div style={{ padding: '40px' }}>
      <h1>Products</h1>
      <div style={{
        display: 'grid',
        gap: '15px',
        marginTop: '20px'
      }}>
        {products.map(product => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{
              display: 'block',
              padding: '15px',
              background: '#161b22',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {product.name} - ${product.price}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Products;