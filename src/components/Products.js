import { useState } from 'react';
import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

function Products({allProducts}) {
  const [id, setId] = useState('');
  console.log(id);
  return (
    <>
      <Outlet />
      {allProducts.map((item) => (
        <ProductCard
          key={item.id}
          productId={item.id}
          Title={item.title}
          Price={item.price}
          Img={item.image}
          getId={setId}
        />
      ))}
    </>   
  )
};

export default Products;
