import { Link , useSearchParams} from 'react-router-dom';

const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, category: "electronics" },
  { id: 2, name: "Smart Watch", price: 129.99, category: "electronics" },
  { id: 3, name: "Coffee Maker", price: 49.99, category: "home" },
  { id: 4, name: "Backpack", price: 39.99, category: "fashion" },
];

function Products() {

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const flteredProducts = category === 'all'
    ? products
    : products.filter(p => p.category === category);
  const handleFilter = (newCategory) => {
    setSearchParams({ category: newCategory });
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Products</h1>
      <div style={{
        display: 'flex',
        gap: '10px',
        margin:'20px 0'
      }}>
        <button onClick={ ()=> handleFilter('all')}>All</button>
        <button onClick={ ()=> handleFilter('electronics')}>Electronics</button>
        <button onClick={ ()=> handleFilter('home')}>Home</button>
        <button onClick={ ()=> handleFilter('fashion')}>Fashion</button>

      </div>

      <div style={{
        display: 'grid',
        gap: '15px',
      }}>
        {flteredProducts.map(product => (
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