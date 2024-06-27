// import { useState,useEffect } from 'react';
// import './index.css';
// import { getProducts } from './hooks/getProducts';

// const ProductList = () => {
//   const {products,error,loading}=getProducts();

//   // useEffect(()=>{
//   //   fetch('https://fakestoreapi.com/products')
//   //   .then(response=>response.json())
//   //   .then(data => setProducts(data));
//   // },[]);

// //   return (
// //     <div className="products">
// //       {loading && <h2>Loading products...</h2>}
// //       {error.length > 0 && <h2>{error}</h2>}
// //       {products.length > 0 ? (
// //         <div className="product-grid">
// //           {products.map((product) => (
// //             <ProductCard
// //               key={product.id}
// //               image={product.image}
// //               title={product.title}
// //               price={product.price}
// //               description={product.description}
// //             />
// //           ))}
// //         </div>
// //       ) : (
// //         !loading && <h2>No products found</h2>
// //       )}
// //     </div>
// //   );
// // };

// // export default Products;

// return (
//     <div className="product-list-container">
//       <h1 className="product-list-title">Products</h1>
//       <div className="product-list">
//         {products.map(product => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <div className="product-info">
//               <h3 className="product-title">{product.title}</h3>
//               <p className="product-description">{product.description}</p>
//               <p className="product-price">Price: ${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default ProductList;