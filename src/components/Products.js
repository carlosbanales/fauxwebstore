import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

function Products({products, loading, getId}) {
  return (
    <>
      { loading ? <div>...loading</div> :
      <>
        <Outlet />
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            setId={getId}
            Title={item.title}
            Price={item.price}
            Img={item.image}
          />
        ))}
      </>
      }
    </>
  )
};

export default Products;
