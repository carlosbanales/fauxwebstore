import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

function Products({allProducts}) {
  console.log(allProducts);
  return (
    <>
      <Outlet />
      {allProducts.map((item) => (
        <ProductCard
          key={item.id}
          Title={item.title}
          Price={item.price}
          Img={item.image}
        />
      ))}
    </>   
  )
};

export default Products;
