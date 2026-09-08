import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate('/products');
  };

  return (
    <div style={{
      padding: '40px',
      textAlign:'center'
    }}>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
      <button onClick={goToProducts} style={{
        marginTop: '20px',
        padding: '12px 24px',
        background: '#238636',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize:'16px'
      }}>
        view products
      </button>

    </div>  
  );
}
export default Home;