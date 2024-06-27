import  React,{ useState, useEffect } from 'react';
import { GetProduct } from '../utils';
import './index.css';
import TopCategories from './TopCategories';

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

  <div >
    {/* <TopCategories/> */}
    <div>
    <h1 className='h1'>Products</h1>
    <ul className='product-list'>
      {products.map(product => (
        
        <div key={product.id}>
          <div className='each-product'>
          <img src={product.image} alt={product.title}  className='products-image' />
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.price}</p>
          </div>
        </div>
      ))}

    </ul>
  </div>

  </div>

    );
};

