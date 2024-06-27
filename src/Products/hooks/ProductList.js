import  React,{ useState, useEffect } from 'react';
import { GetProduct } from '../utils';
import './index.css'

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        const result = await GetProduct();
        setProducts(result);
        
      } catch (error) {
        setError(`Error: ${error.message}`);
        
      }
    };
    fetchProducts();
  }, []);
  if (error) return <div>Error:{error}</div>
return (

  <div className='product-list'>
    <div >
    <h1 className='h1'>Products</h1>
    <ul>
      {products.map(product => (
        <div key={product.id}>
           <img src={product.image} alt={product.title} style={{width: '200px'}} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}

    </ul>
  </div>

  </div>

    );
};

