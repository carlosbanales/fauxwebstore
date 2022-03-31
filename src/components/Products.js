import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

function Products({products, loading}) {
  return (
      <>
        { loading ? <div>...loading</div> :
        <div className="products_container">
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
        </div>}
      </>
  )
};

export default Products;
