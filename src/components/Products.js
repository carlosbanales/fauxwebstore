import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

function Products({products}) {
  return (
    <>
      <Outlet />
      {products.map((item) => (
        <ProductCard
          key={item.id}
          Item = {item}
          Title={item.title}
          Price={item.price}
          Img={item.image}
        />
      ))}
    </>
  )
};

export default Products;
